import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { 
  PerfilUsuario, 
  Astronauta, 
  TarefaMissao, 
  LogComportamental, 
  ProtocoloRecuperacao,
  NivelAutoavaliacao,
  StatusOperacional
} from '../types';
import { OrbitApiService, calcularFadigaLocalmente } from '../services/api';

interface OrbitContextType {
  perfilAtivo: PerfilUsuario;
  setPerfilAtivo: (perfil: PerfilUsuario) => void;
  astronautas: Astronauta[];
  astronautaAtivo: Astronauta;
  tarefas: TarefaMissao[];
  logs: LogComportamental[];
  protocolos: ProtocoloRecuperacao[];
  isEdgeMode: boolean;
  modoContencaoAtivo: boolean;
  metTempo: string;
  delayHouston: string;
  escalaZoom: number;
  setEscalaZoom: (zoom: number) => void;
  
  // Ações de astronauta e terminal
  registrarDigitacaoTerminal: (texto: string, backspaces: number, tempoDecorridoMs: number) => void;
  atualizarAutoavaliacao: (nivel: NivelAutoavaliacao) => void;
  completarTarefa: (tarefaId: string) => void;
  
  // Ações de Houston / Médica / Capcom
  transmitirProtocolo: (protocoloId: string) => Promise<void>;
  aprovarAjusteTarefa: (tarefaId: string, novaJanela: string) => void;
  reverterAdiantamento: (tarefaId: string) => void;
  
  // Controles de Demonstração
  forcarAnomaliaFadiga: () => void;
  resetarSistema: () => void;
  adicionarLog: (tipo: LogComportamental['tipo'], nivel: LogComportamental['nivel'], mensagem: string, detalhe?: string) => void;
}

const DADOS_INICIAIS_ASTRONAUTAS: Astronauta[] = [
  {
    id: 'ast-01',
    nome: 'Alex Vance',
    cargo: 'Comandante da Missão',
    indicativo: 'CDR-1',
    indiceFadiga: 22,
    autoavaliacao: 'OTIMO',
    wpm: 68,
    taxaErro: 1.4,
    latenciaTeclaMs: 142,
    horasVigilia: 7.5,
    statusOperacional: 'NOMINAL',
    tarefaAtiva: 'TSK-401: Repressurização do Airlock Quest',
    circadianDebtHoras: 1.2,
    historicoDias: [
      { dia: 'SOL 138', fadigaReal: 18, autoAvaliacaoNum: 20, wpm: 72, omissao: false },
      { dia: 'SOL 139', fadigaReal: 24, autoAvaliacaoNum: 25, wpm: 69, omissao: false },
      { dia: 'SOL 140', fadigaReal: 68, autoAvaliacaoNum: 20, wpm: 38, omissao: true, nota: 'Discrepância Crítica: Autoavaliação "Ótimo", mas WPM caiu 45%' },
      { dia: 'SOL 141', fadigaReal: 44, autoAvaliacaoNum: 40, wpm: 58, omissao: false },
      { dia: 'SOL 142 (HOJE)', fadigaReal: 22, autoAvaliacaoNum: 20, wpm: 68, omissao: false },
    ],
  },
  {
    id: 'ast-02',
    nome: 'Dra. Marcus Chen',
    cargo: 'Especialista de Missão / Bio-Pesquisa',
    indicativo: 'MS-1',
    indiceFadiga: 38,
    autoavaliacao: 'NEUTRO',
    wpm: 61,
    taxaErro: 2.1,
    latenciaTeclaMs: 165,
    horasVigilia: 9.0,
    statusOperacional: 'NOMINAL',
    tarefaAtiva: 'TSK-404: Telemetria Banda Ka',
    circadianDebtHoras: 2.8,
    historicoDias: [
      { dia: 'SOL 138', fadigaReal: 30, autoAvaliacaoNum: 30, wpm: 65, omissao: false },
      { dia: 'SOL 139', fadigaReal: 35, autoAvaliacaoNum: 35, wpm: 63, omissao: false },
      { dia: 'SOL 140', fadigaReal: 42, autoAvaliacaoNum: 40, wpm: 59, omissao: false },
      { dia: 'SOL 141', fadigaReal: 52, autoAvaliacaoNum: 30, wpm: 49, omissao: true, nota: 'Fator Omissão: WPM reduzido durante bio-experimento' },
      { dia: 'SOL 142 (HOJE)', fadigaReal: 38, autoAvaliacaoNum: 35, wpm: 61, omissao: false },
    ],
  },
  {
    id: 'ast-03',
    nome: 'Sarah Sato',
    cargo: 'Engenheira de Voo e Propulsão',
    indicativo: 'FE-2',
    indiceFadiga: 49,
    autoavaliacao: 'NEUTRO',
    wpm: 54,
    taxaErro: 3.8,
    latenciaTeclaMs: 198,
    horasVigilia: 11.2,
    statusOperacional: 'FADIGA_MODERADA',
    tarefaAtiva: 'TSK-403: Filtro CO2 Zarya',
    circadianDebtHoras: 4.1,
    historicoDias: [
      { dia: 'SOL 138', fadigaReal: 28, autoAvaliacaoNum: 25, wpm: 67, omissao: false },
      { dia: 'SOL 139', fadigaReal: 45, autoAvaliacaoNum: 30, wpm: 55, omissao: true },
      { dia: 'SOL 140', fadigaReal: 60, autoAvaliacaoNum: 35, wpm: 46, omissao: true },
      { dia: 'SOL 141', fadigaReal: 74, autoAvaliacaoNum: 40, wpm: 34, omissao: true, nota: 'Limiar Crítico Atingido - Bloqueio de RCS automático' },
      { dia: 'SOL 142 (HOJE)', fadigaReal: 49, autoAvaliacaoNum: 45, wpm: 54, omissao: false },
    ],
  },
];

const TAREFAS_INICIAIS: TarefaMissao[] = [
  {
    id: 'tsk-401',
    codigo: 'TSK-401',
    titulo: 'Repressurização e Teste Estático do Airlock Quest (EVA-2)',
    modulo: 'AIRLOCK QUEST // EXTERNAL',
    criticidade: 'CRITICA',
    status: 'EM_ANDAMENTO',
    responsavelId: 'ast-01',
    responsavelNome: 'Alex Vance (CDR)',
    duracaoEstimadaMin: 90,
    timestamp: 'MET 142:07:30',
  },
  {
    id: 'tsk-402',
    codigo: 'TSK-402',
    titulo: 'Válvula de Isolação do Propulsor RCS Bloco Bravo',
    modulo: 'SERVICE PROPULSION // BLK-B',
    criticidade: 'CRITICA',
    status: 'PENDENTE',
    responsavelId: 'ast-01',
    responsavelNome: 'Alex Vance (CDR)',
    duracaoEstimadaMin: 60,
    timestamp: 'MET 142:09:00',
  },
  {
    id: 'tsk-403',
    codigo: 'TSK-403',
    titulo: 'Substituição do Cartucho LiOH Depurador de CO2',
    modulo: 'ECLSS // LIFE SUPPORT',
    criticidade: 'ALTA',
    status: 'EM_ANDAMENTO',
    responsavelId: 'ast-03',
    responsavelNome: 'Sarah Sato (FE-2)',
    duracaoEstimadaMin: 45,
    timestamp: 'MET 142:06:15',
  },
  {
    id: 'tsk-404',
    codigo: 'TSK-404',
    titulo: 'Alinhamento de Ganho da Antena Banda Ka DSN',
    modulo: 'COMM-ARRAY // HIGH-GAIN',
    criticidade: 'PADRAO',
    status: 'PENDENTE',
    responsavelId: 'ast-02',
    responsavelNome: 'Marcus Chen (MS-1)',
    duracaoEstimadaMin: 30,
    timestamp: 'MET 142:10:00',
  },
  {
    id: 'tsk-405',
    codigo: 'TSK-405',
    titulo: 'Inventário e Purga do Tanque de O2 Criogênico 03',
    modulo: 'CRYO-STORAGE // BAY-3',
    criticidade: 'PADRAO',
    status: 'PENDENTE',
    responsavelId: 'ast-02',
    responsavelNome: 'Marcus Chen (MS-1)',
    duracaoEstimadaMin: 40,
    timestamp: 'MET 142:11:30',
  },
];

const PROTOCOLOS_INICIAIS: ProtocoloRecuperacao[] = [
  {
    id: 'prot-01',
    codigo: 'DELTA-CIRC-01',
    nome: 'Protocolo de Atenuação Circadiana Noturna',
    descricao: 'Reduz emissão de luz de 480nm em 85%, transiciona temperatura de cor para 2700K e ativa blackout de notificações operacionais secundárias.',
    reducaoEspectroAzul: 85,
    temperaturaLuzK: 2700,
    periodoDescansoMin: 90,
    status: 'STANDBY',
  },
  {
    id: 'prot-02',
    codigo: 'RAPID-RESET-04',
    nome: 'Power-Nap de Alta Eficiência com Re-ignição Cognitiva',
    descricao: 'Soneca orientada de 26 minutos (padrão NASA Ames Research) seguida por micro-tarefas não críticas com espectro luminoso de ativação a 6500K.',
    reducaoEspectroAzul: 95,
    temperaturaLuzK: 2200,
    periodoDescansoMin: 26,
    status: 'STANDBY',
  },
  {
    id: 'prot-03',
    codigo: 'OMEGA-OVERRIDE-CRIT',
    nome: 'Contenção de Emergência por Sobrecarga de Vigília',
    descricao: 'Bloqueio estrito de válvulas e propulsão manual. Transferência autônoma de autoridade de controle para a Terra / Computador Primário de Voo.',
    reducaoEspectroAzul: 70,
    temperaturaLuzK: 3000,
    periodoDescansoMin: 180,
    status: 'STANDBY',
  },
];

const LOGS_INICIAIS: LogComportamental[] = [
  {
    id: 'log-001',
    timestamp: 'MET 142:08:35.120',
    tipo: 'MISSION_EVENT',
    nivel: 'INFO',
    origem: 'ONBOARD_EDGE',
    mensagem: 'Inicialização nominal do motor ORBIT-IQ Core Sync v1.4.2',
    detalhe: 'Arquitetura híbrida edge/Houston sincronizada.',
  },
  {
    id: 'log-002',
    timestamp: 'MET 142:08:38.450',
    tipo: 'KEYSTROKE',
    nivel: 'SUCCESS',
    origem: 'SENSORLESS_HYBRID',
    mensagem: 'Linha de base de digitação validada para CDR-1: 68 WPM, 1.4% de erro',
    detalhe: 'Latência média de clique: 142ms. Coeficiente de fluência dentro da curva nominal.',
  },
  {
    id: 'log-003',
    timestamp: 'MET 142:08:41.890',
    tipo: 'UPLINK_PACKET',
    nivel: 'INFO',
    origem: 'HOUSTON_GROUND',
    mensagem: 'Pacote de telemetria recebido no Deep Space Network (Goldstone)',
    detalhe: 'Vetor de atraso de propagação orbital calculado em -18m 42s.',
  },
];

const OrbitContext = createContext<OrbitContextType | undefined>(undefined);

export const OrbitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [perfilAtivo, setPerfilAtivo] = useState<PerfilUsuario>('crew');
  const [astronautas, setAstronautas] = useState<Astronauta[]>(DADOS_INICIAIS_ASTRONAUTAS);
  const [tarefas, setTarefas] = useState<TarefaMissao[]>(TAREFAS_INICIAIS);
  const [protocolos, setProtocolos] = useState<ProtocoloRecuperacao[]>(PROTOCOLOS_INICIAIS);
  const [logs, setLogs] = useState<LogComportamental[]>(LOGS_INICIAIS);
  const [isEdgeMode, setIsEdgeMode] = useState<boolean>(true);
  const [modoContencaoAtivo, setModoContencaoAtivo] = useState<boolean>(false);
  const [escalaZoom, setEscalaZoom] = useState<number>(1.25);
  const [metSegundosTotal, setMetSegundosTotal] = useState<number>(142 * 3600 + 8 * 60 + 44);

  // Astronauta ativo é o Comandante CDR-1 por padrão
  const astronautaAtivo = astronautas[0];

  // Relógio MET (Mission Elapsed Time)
  useEffect(() => {
    const timer = setInterval(() => {
      setMetSegundosTotal((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatarMet = (segundos: number) => {
    const d = Math.floor(segundos / 86400);
    const h = Math.floor((segundos % 86400) / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `T+${d.toString().padStart(3, '0')}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const metTempo = formatarMet(metSegundosTotal);
  const delayHouston = '-18m 42s';

  const adicionarLog = useCallback((
    tipo: LogComportamental['tipo'], 
    nivel: LogComportamental['nivel'], 
    mensagem: string, 
    detalhe?: string
  ) => {
    const now = new Date();
    const ts = `MET 142:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;
    const novoLog: LogComportamental = {
      id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: ts,
      tipo,
      nivel,
      origem: tipo === 'UPLINK_PACKET' ? 'HOUSTON_GROUND' : tipo === 'KEYSTROKE' ? 'SENSORLESS_HYBRID' : 'ONBOARD_EDGE',
      mensagem,
      detalhe,
    };
    setLogs((prev) => [novoLog, ...prev.slice(0, 99)]); // mantem os ultimos 100 logs
  }, []);

  // Monitorar se servidores externos estão disponíveis sem travar nada
  useEffect(() => {
    OrbitApiService.sincronizarTarefas(TAREFAS_INICIAIS).then((res) => {
      setIsEdgeMode(res.isEdge);
    });
  }, []);

  // Avaliação contínua da fadiga do astronauta ativo
  const recalcularFadigaAstronauta = useCallback((
    wpm: number, 
    taxaErro: number, 
    autoavaliacao: NivelAutoavaliacao
  ) => {
    const tarefasCriticas = tarefas.filter(
      (t) => t.responsavelId === 'ast-01' && t.criticidade === 'CRITICA' && t.status !== 'CONCLUIDA'
    ).length;

    const analise = calcularFadigaLocalmente({
      wpmAtual: wpm,
      taxaErro,
      tarefasCriticasPendentes: tarefasCriticas,
      autoavaliacao,
    });

    const novoIndice = analise.indiceFinal;
    const isCritico = novoIndice >= 75;

    let novoStatus: StatusOperacional = 'NOMINAL';
    if (isCritico) novoStatus = 'BLOQUEIO_AUTONOMO';
    else if (novoIndice >= 55) novoStatus = 'RESTRICAO_CRITICA';
    else if (novoIndice >= 40) novoStatus = 'FADIGA_MODERADA';

    setAstronautas((prev) =>
      prev.map((a) => {
        if (a.id === 'ast-01') {
          return {
            ...a,
            indiceFadiga: novoIndice,
            wpm,
            taxaErro,
            autoavaliacao,
            statusOperacional: novoStatus,
          };
        }
        return a;
      })
    );

    // Se ultrapassou o limiar crítico, engaja modo de contenção autônomo
    if (isCritico && !modoContencaoAtivo) {
      setModoContencaoAtivo(true);
      adicionarLog(
        'OVERRIDE_TRIGGER',
        'CRITICAL',
        'AUTONOMOUS CIRCADIAN OVERRIDE: Limiar crítico de fadiga violado (>75%)',
        'A nave assumiu a contenção. Tarefas críticas com risco de erro humano adiadas.'
      );

      // Adia tarefas críticas do astronauta
      setTarefas((prevTarefas) =>
        prevTarefas.map((t) => {
          if (t.responsavelId === 'ast-01' && t.criticidade === 'CRITICA' && t.status !== 'CONCLUIDA') {
            return {
              ...t,
              status: 'ADIADA_POR_FADIGA',
              adiadaAutomaticamente: true,
              motivoAdiantamento: 'Sobrecarga cognitiva detectada por análise comportamental (Sensorless Engine).',
            };
          }
          return t;
        })
      );
    } else if (!isCritico && modoContencaoAtivo) {
      // Retorno ao modo nominal
      setModoContencaoAtivo(false);
    }
  }, [tarefas, modoContencaoAtivo, adicionarLog]);

  // Captura de digitação do astronauta no terminal
  const registrarDigitacaoTerminal = useCallback((
    texto: string, 
    backspaces: number, 
    tempoDecorridoMs: number
  ) => {
    if (texto.trim().length === 0) return;

    const palavras = texto.trim().split(/\s+/).length;
    const minutos = Math.max(0.05, tempoDecorridoMs / 60000);
    const wpmCalculado = Math.min(120, Math.round(palavras / minutos));
    const totalCaracteres = texto.length;
    const taxaErroCalculada = totalCaracteres > 0 
      ? Math.min(30, parseFloat(((backspaces / totalCaracteres) * 100).toFixed(1)))
      : 1.0;

    const latenciaAproximada = Math.round(Math.max(110, 60000 / (Math.max(20, wpmCalculado) * 5)));

    setAstronautas((prev) =>
      prev.map((a) => {
        if (a.id === 'ast-01') {
          return {
            ...a,
            wpm: wpmCalculado,
            taxaErro: taxaErroCalculada,
            latenciaTeclaMs: latenciaAproximada,
          };
        }
        return a;
      })
    );

    adicionarLog(
      'KEYSTROKE',
      'INFO',
      `Telemetria de digitação: ${wpmCalculado} WPM | Erros: ${taxaErroCalculada}% | Latência: ${latenciaAproximada}ms`,
      `Amostragem comportamental capturada sem necessidade de wearables ou câmeras intrusivas.`
    );

    recalcularFadigaAstronauta(wpmCalculado, taxaErroCalculada, astronautaAtivo.autoavaliacao);
  }, [astronautaAtivo.autoavaliacao, recalcularFadigaAstronauta, adicionarLog]);

  // Micro-checkin do astronauta
  const atualizarAutoavaliacao = useCallback((nivel: NivelAutoavaliacao) => {
    setAstronautas((prev) =>
      prev.map((a) => (a.id === 'ast-01' ? { ...a, autoavaliacao: nivel } : a))
    );

    adicionarLog(
      'CROSS_VALIDATION',
      'INFO',
      `Micro-check-in subjetivo recebido: [${nivel}]`,
      'Orbit-IQ cruzando percepção subjetiva com biomarcadores de digitação e carga de trabalho.'
    );

    recalcularFadigaAstronauta(astronautaAtivo.wpm, astronautaAtivo.taxaErro, nivel);
  }, [astronautaAtivo.wpm, astronautaAtivo.taxaErro, recalcularFadigaAstronauta, adicionarLog]);

  // Concluir tarefa
  const completarTarefa = useCallback((tarefaId: string) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === tarefaId ? { ...t, status: 'CONCLUIDA' } : t))
    );
    adicionarLog(
      'MISSION_EVENT',
      'SUCCESS',
      `Tarefa ${tarefaId.toUpperCase()} concluída pelo tripulante a bordo`,
      'Carga operacional reajustada no modelo neural preditivo.'
    );
  }, [adicionarLog]);

  // Houston transmite protocolo médico
  const transmitirProtocolo = useCallback(async (protocoloId: string) => {
    const prot = protocolos.find((p) => p.id === protocoloId);
    if (!prot) return;

    setProtocolos((prev) =>
      prev.map((p) => (p.id === protocoloId ? { ...p, status: 'TRANSMITINDO' } : p))
    );

    adicionarLog(
      'UPLINK_PACKET',
      'WARN',
      `Houston Uplink: Transmitindo ${prot.codigo} para o computador de bordo...`,
      `Protocolo médico circadiano de Houston enviado com retardo orbital (-18m 42s).`
    );

    await OrbitApiService.transmitirProtocoloRecuperacao(prot);

    setProtocolos((prev) =>
      prev.map((p) => (p.id === protocoloId ? { ...p, status: 'APLICADO_A_BORDO' } : p))
    );

    adicionarLog(
      'OVERRIDE_TRIGGER',
      'SUCCESS',
      `CONFIRMAÇÃO DE RECEBIMENTO: Protocolo ${prot.codigo} executado na cabine`,
      `Luz reduzida em ${prot.reducaoEspectroAzul}% (${prot.temperaturaLuzK}K). Janela de descanso de ${prot.periodoDescansoMin}m ativada.`
    );
  }, [protocolos, adicionarLog]);

  // Capcom aprova ajuste de tarefa
  const aprovarAjusteTarefa = useCallback((tarefaId: string, novaJanela: string) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === tarefaId ? { ...t, status: 'PENDENTE', timestamp: novaJanela, adiadaAutomaticamente: false } : t))
    );
    adicionarLog(
      'MISSION_EVENT',
      'INFO',
      `CAPCOM / Houston aprovou reagendamento de ${tarefaId.toUpperCase()} para ${novaJanela}`,
      'Cronograma oficial da missão recalculado e sincronizado com o Core Sync.'
    );
  }, [adicionarLog]);

  const reverterAdiantamento = useCallback((tarefaId: string) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === tarefaId ? { ...t, status: 'EM_ANDAMENTO', adiadaAutomaticamente: false } : t))
    );
    adicionarLog(
      'MISSION_EVENT',
      'WARN',
      `Override manual de CAPCOM: Tarefa ${tarefaId.toUpperCase()} restabelecida a bordo`,
      'Atenção: tripulante sob acompanhamento de risco de erro.'
    );
  }, [adicionarLog]);

  // BOTÃO DEMO: FORÇAR ANOMALIA / FADIGA
  const forcarAnomaliaFadiga = useCallback(() => {
    setModoContencaoAtivo(true);

    setAstronautas((prev) =>
      prev.map((a) => {
        if (a.id === 'ast-01') {
          return {
            ...a,
            indiceFadiga: 84,
            wpm: 26,
            taxaErro: 14.8,
            latenciaTeclaMs: 380,
            horasVigilia: 18.5,
            autoavaliacao: 'OTIMO', // Discrepância de Omissão!
            statusOperacional: 'BLOQUEIO_AUTONOMO',
          };
        }
        return a;
      })
    );

    setTarefas((prev) =>
      prev.map((t) => {
        if (t.criticidade === 'CRITICA' && t.responsavelId === 'ast-01') {
          return {
            ...t,
            status: 'ADIADA_POR_FADIGA',
            adiadaAutomaticamente: true,
            motivoAdiantamento: 'Fadiga cognitiva extrema (>84%). Risco de catástrofe operacional em RCS / Airlock.',
          };
        }
        return t;
      })
    );

    adicionarLog(
      'OVERRIDE_TRIGGER',
      'CRITICAL',
      'SIMULAÇÃO ATIVADA: ANOMALIA DE FADIGA CRÍTICA DISPARADA (84%)',
      'WPM caiu para 26 com 14.8% de erro. Tripulante declarou "Ótimo" -> FATOR OMISSÃO CONFIRMADO. Nave assume cabine.'
    );
  }, [adicionarLog]);

  // BOTÃO DEMO: RESETAR SISTEMA
  const resetarSistema = useCallback(() => {
    setModoContencaoAtivo(false);
    setAstronautas(DADOS_INICIAIS_ASTRONAUTAS);
    setTarefas(TAREFAS_INICIAIS);
    setProtocolos(PROTOCOLOS_INICIAIS);

    adicionarLog(
      'MISSION_EVENT',
      'SUCCESS',
      'RESET OPERACIONAL: Telemetria restaurada aos parâmetros nominais',
      'Sistemas de bordo desativaram modo de contenção circadiana. Todas as barreiras nominais ativas.'
    );
  }, [adicionarLog]);

  return (
    <OrbitContext.Provider
      value={{
        perfilAtivo,
        setPerfilAtivo,
        astronautas,
        astronautaAtivo,
        tarefas,
        logs,
        protocolos,
        isEdgeMode,
        modoContencaoAtivo,
        metTempo,
        delayHouston,
        escalaZoom,
        setEscalaZoom,
        registrarDigitacaoTerminal,
        atualizarAutoavaliacao,
        completarTarefa,
        transmitirProtocolo,
        aprovarAjusteTarefa,
        reverterAdiantamento,
        forcarAnomaliaFadiga,
        resetarSistema,
        adicionarLog,
      }}
    >
      {children}
    </OrbitContext.Provider>
  );
};

export const useOrbit = () => {
  const context = useContext(OrbitContext);
  if (!context) throw new Error('useOrbit deve ser utilizado dentro de um OrbitProvider');
  return context;
};
