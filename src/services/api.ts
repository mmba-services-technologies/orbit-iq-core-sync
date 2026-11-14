import { TarefaMissao, TelemetriaFadigaCalculada, ProtocoloRecuperacao, Astronauta } from '../types';

export const PHP_API_URL = import.meta.env.VITE_PHP_API_URL || 'http://localhost:8000/api/tarefas.php';
export const NODE_API_URL = import.meta.env.VITE_NODE_API_URL || 'http://localhost:3001/api/analisar-fadiga';

export interface RespostaFadigaApi {
  indiceFinal: number;
  severidade: 'NOMINAL' | 'ATENCAO' | 'CRITICO';
  fatorOmissaoDetectado: boolean;
  scoreCarga: number;
  scoreDigitacao: number;
  recomendacao: string;
}

/**
 * Heurística Local Edge (Sensorless Engine):
 * Utilizada como Fallback de 0ms quando o back-end em Node/PHP não está acessível.
 * Fórmula: (Carga Operacional * 0.5) + (Queda de WPM & Erros * 0.5) + Penalidade de Dissonância Subjetiva.
 */
export function calcularFadigaLocalmente(params: {
  wpmAtual: number;
  taxaErro: number;
  tarefasCriticasPendentes: number;
  autoavaliacao: 'OTIMO' | 'NEUTRO' | 'EXAUSTO';
}): RespostaFadigaApi {
  const { wpmAtual, taxaErro, tarefasCriticasPendentes, autoavaliacao } = params;

  // Linha de base nominal do astronauta: 65 WPM com erro < 2%
  const baselineWpm = 65;
  const deltaWpm = Math.max(0, baselineWpm - wpmAtual);
  const wpmPenalty = Math.min(60, (deltaWpm / baselineWpm) * 55);
  const erroPenalty = Math.min(40, taxaErro * 4);

  // Score de degradação da digitação (0 a 100)
  const scoreDigitacao = Math.min(100, Math.round(wpmPenalty + erroPenalty));

  // Score de carga operacional com base em tarefas críticas pendentes (0 a 100)
  const scoreCarga = Math.min(100, tarefasCriticasPendentes * 28);

  // Componente fundamental: Fórmula exigida pela especificação
  let indiceCalculado = Math.round((scoreCarga * 0.5) + (scoreDigitacao * 0.5));

  // Detecção cirúrgica do "Fator Omissão":
  // Ocorre quando o tripulante se declara "ÓTIMO", porém os biomarcadores digitais comprovam exaustão
  let fatorOmissao = false;
  if (autoavaliacao === 'OTIMO' && (wpmAtual < 35 || taxaErro > 8 || indiceCalculado > 60)) {
    fatorOmissao = true;
    // Adiciona penalidade de risco por mascaramento de fadiga operacional
    indiceCalculado = Math.min(100, indiceCalculado + 18);
  } else if (autoavaliacao === 'EXAUSTO') {
    indiceCalculado = Math.min(100, indiceCalculado + 12);
  }

  let severidade: 'NOMINAL' | 'ATENCAO' | 'CRITICO' = 'NOMINAL';
  let recomendacao = 'Nenhuma restrição circadiana ativa. Estado operacional satisfatório.';

  if (indiceCalculado >= 75) {
    severidade = 'CRITICO';
    recomendacao = 'ALERTA: Bloqueio autônomo de tarefas críticas e atenuação do espectro de iluminação da cabine.';
  } else if (indiceCalculado >= 45) {
    severidade = 'ATENCAO';
    recomendacao = 'ATENÇÃO: Fadiga moderada em desenvolvimento. Sugerido micro-intervalo de recuperação.';
  }

  return {
    indiceFinal: Math.min(100, Math.max(8, indiceCalculado)),
    severidade,
    fatorOmissaoDetectado: fatorOmissao,
    scoreCarga,
    scoreDigitacao,
    recomendacao,
  };
}

/**
 * Cliente de Serviços do Orbit-IQ com Failover Silencioso para Edge Local
 */
export const OrbitApiService = {
  /**
   * Consulta status de tarefas no backend PHP (MySQL) ou retorna fallback local
   */
  async sincronizarTarefas(fallbackTarefas: TarefaMissao[]): Promise<{ tarefas: TarefaMissao[]; isEdge: boolean }> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const response = await fetch(PHP_API_URL, {
        method: 'GET',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP status: ${response.status}`);
      const dados = await response.json();
      return { tarefas: Array.isArray(dados) ? dados : fallbackTarefas, isEdge: false };
    } catch {
      // Fallback gracioso imediato sem interromper a execução do React
      return { tarefas: fallbackTarefas, isEdge: true };
    }
  },

  /**
   * Envia evento para análise comportamental do backend Node.js ou executa cálculo localmente
   */
  async processarAnaliseFadiga(payload: {
    astronautaId: string;
    wpmAtual: number;
    taxaErro: number;
    tarefasCriticasPendentes: number;
    autoavaliacao: 'OTIMO' | 'NEUTRO' | 'EXAUSTO';
  }): Promise<{ analise: RespostaFadigaApi; isEdge: boolean }> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const response = await fetch(NODE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP status: ${response.status}`);
      const resultado = await response.json();
      return { analise: resultado, isEdge: false };
    } catch {
      // Execução Edge offline nativa
      const analiseLocal = calcularFadigaLocalmente({
        wpmAtual: payload.wpmAtual,
        taxaErro: payload.taxaErro,
        tarefasCriticasPendentes: payload.tarefasCriticasPendentes,
        autoavaliacao: payload.autoavaliacao,
      });
      return { analise: analiseLocal, isEdge: true };
    }
  },

  /**
   * Envia protocolo médico de Houston para a espaçonave (simulação de enlace de dados)
   */
  async transmitirProtocoloRecuperacao(protocolo: ProtocoloRecuperacao): Promise<{ sucesso: boolean; timestampAck: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          sucesso: true,
          timestampAck: new Date().toISOString(),
        });
      }, 800);
    });
  }
};
