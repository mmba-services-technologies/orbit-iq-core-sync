export type PerfilUsuario = 'crew' | 'medical' | 'capcom';

export type NivelAutoavaliacao = 'OTIMO' | 'NEUTRO' | 'EXAUSTO';

export type StatusOperacional = 
  | 'NOMINAL' 
  | 'FADIGA_MODERADA' 
  | 'RESTRICAO_CRITICA' 
  | 'BLOQUEIO_AUTONOMO';

export type CriticidadeTarefa = 'CRITICA' | 'ALTA' | 'PADRAO' | 'BAIXA';

export type StatusTarefa = 
  | 'PENDENTE' 
  | 'EM_ANDAMENTO' 
  | 'CONCLUIDA' 
  | 'ADIADA_POR_FADIGA';

export interface PontoHistoricoClinico {
  dia: string;
  fadigaReal: number;
  autoAvaliacaoNum: number;
  wpm: number;
  omissao: boolean;
  nota?: string;
}

export interface TelemetriaPressaoArterial {
  sistolica: number;
  diastolica: number;
  pulsoBpm: number;
  status: 'NORMAL' | 'ELEVADA' | 'HIPERTENSAO_CRITICA';
  emMedicao: boolean;
  alertaParadaObrigatoria: boolean;
  timestampUltimaMedicao: string;
}

export interface AnaliseVozIA {
  velocidadeFalaPPM: number; // Palavras por minuto na fala
  tomVozHz: number; // Pitch acústico médio
  jitterAcusticoPercent: number; // Micro-tremores de estresse vocal
  monotoniaScore: number; // Indicador de exaustão neuromotora (0-100)
  sindromeAstronautaRisco: number; // Risco de Síndrome do Astronauta / SAS (0-100%)
  edemaFacialDetectado: boolean; // Deslocamento de fluidos corporais para a cabeça
  diagnosticoClinico: string;
  emChamada: boolean;
  modoCamera: 'SIMULADO' | 'WEBCAM';
}

export interface ZonaCorporalBiometrica {
  id: string;
  nome: string;
  regiao: 'CABECA_VISOR' | 'CORACAO_TORAX' | 'BRACO_ESQUERDO' | 'COLUNA_TRAPEZIO' | 'MAOS_DEDOS' | 'MEMBROS_INFERIORES';
  nivelFadiga: 'NORMAL' | 'ALERTA' | 'CRITICO';
  percentual: number;
  detalheClinico: string;
}

export interface Astronauta {
  id: string;
  nome: string;
  cargo: string;
  indicativo: string;
  indiceFadiga: number; // 0 - 100%
  autoavaliacao: NivelAutoavaliacao;
  wpm: number;
  taxaErro: number; // %
  latenciaTeclaMs: number;
  horasVigilia: number;
  statusOperacional: StatusOperacional;
  tarefaAtiva: string;
  circadianDebtHoras: number;
  historicoDias: PontoHistoricoClinico[];
}

export interface TarefaMissao {
  id: string;
  codigo: string;
  titulo: string;
  modulo: string;
  criticidade: CriticidadeTarefa;
  status: StatusTarefa;
  responsavelId: string;
  responsavelNome: string;
  duracaoEstimadaMin: number;
  timestamp: string;
  adiadaAutomaticamente?: boolean;
  motivoAdiantamento?: string;
}

export interface LogComportamental {
  id: string;
  timestamp: string;
  tipo: 'KEYSTROKE' | 'WPM_SAMPLE' | 'CROSS_VALIDATION' | 'OVERRIDE_TRIGGER' | 'UPLINK_PACKET' | 'MISSION_EVENT';
  nivel: 'INFO' | 'WARN' | 'CRITICAL' | 'SUCCESS';
  origem: 'ONBOARD_EDGE' | 'HOUSTON_GROUND' | 'SENSORLESS_HYBRID';
  mensagem: string;
  detalhe?: string;
}

export interface ProtocoloRecuperacao {
  id: string;
  codigo: string;
  nome: string;
  descricao: string;
  reducaoEspectroAzul: number; // %
  temperaturaLuzK: number;
  periodoDescansoMin: number;
  status: 'STANDBY' | 'TRANSMITINDO' | 'APLICADO_A_BORDO';
  horarioEnvio?: string;
}

export interface TelemetriaFadigaCalculada {
  indiceFinal: number;
  cargaOperacionalScore: number;
  quedaWpmScore: number;
  fatorOmissaoPenalty: number;
  severidade: 'NOMINAL' | 'ATENCAO' | 'CRITICO';
}
