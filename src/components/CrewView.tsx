import React, { useState, useEffect, useRef } from 'react';
import { useOrbit } from '../context/OrbitContext';
import { NivelAutoavaliacao, TarefaMissao } from '../types';
import { 
  Terminal, 
  AlertOctagon, 
  CheckCircle2, 
  Clock, 
  Activity, 
  Lock, 
  Send, 
  ShieldCheck, 
  Gauge, 
  Eye, 
  Sliders, 
  Zap,
  Info
} from 'lucide-react';

export const CrewView: React.FC = () => {
  const { 
    astronautaAtivo, 
    tarefas, 
    modoContencaoAtivo, 
    registrarDigitacaoTerminal, 
    atualizarAutoavaliacao, 
    completarTarefa,
    adicionarLog 
  } = useOrbit();

  // Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Quick preset astronaut log templates for quick pitch presentation
  const templates = [
    'Verificação dos atuadores do Airlock concluída. Pressão interna estável em 14.7 psi.',
    'Alinhamento estático da antena primária concluído sem divergência nos sensores.',
    'Sentindo cansaço visual acentuado e perda temporária de foco nos comandos manuais.',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (startTime === null && val.length > 0) {
      setStartTime(Date.now());
    }
    setTerminalInput(val);

    const tempoDecorrido = startTime ? Date.now() - startTime : 1000;
    registrarDigitacaoTerminal(val, backspaceCount, tempoDecorrido);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Backspace') {
      setBackspaceCount((prev) => prev + 1);
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submeterRelatorioTerminal();
    }
  };

  const submeterRelatorioTerminal = () => {
    if (!terminalInput.trim()) return;
    adicionarLog(
      'KEYSTROKE',
      'SUCCESS',
      `CDR-1 Relatório de Bordo Registrado: "${terminalInput.slice(0, 60)}${terminalInput.length > 60 ? '...' : ''}"`,
      `Métricas gravadas no Core Sync: ${astronautaAtivo.wpm} WPM | ${astronautaAtivo.taxaErro}% erro.`
    );
    setTerminalInput('');
    setBackspaceCount(0);
    setStartTime(null);
  };

  const aplicarTemplate = (texto: string) => {
    setTerminalInput(texto);
    setBackspaceCount(Math.floor(Math.random() * 4));
    const simulatedDuration = 4500;
    setStartTime(Date.now() - simulatedDuration);
    registrarDigitacaoTerminal(texto, 2, simulatedDuration);
  };

  // Tarefas do astronauta
  const tarefasDoTripulante = tarefas.filter((t) => t.responsavelId === astronautaAtivo.id);

  // Indicador de cor para o Índice de Fadiga
  const getFatigueColor = (score: number) => {
    if (score >= 75) return 'text-[#EF4444] border-[#EF4444] bg-[#EF4444]/15';
    if (score >= 45) return 'text-[#F59E0B] border-[#F59E0B] bg-[#F59E0B]/15';
    return 'text-[#10B981] border-[#10B981] bg-[#10B981]/15';
  };

  const getFatigueProgressColor = (score: number) => {
    if (score >= 75) return 'bg-[#EF4444]';
    if (score >= 45) return 'bg-[#F59E0B]';
    return 'bg-[#0099FF]';
  };

  return (
    <div className="space-y-4">
      {/* Flight Deck Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2.5 text-xs md:text-sm font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#38BDF8] font-bold">OPERATIONAL STATION:</span>
          <span className="text-white">COMMAND FLIGHT DECK (LOCAL EDGE BUS)</span>
          <span className="text-[#8892B0]">|</span>
          <span className="text-[#10B981] font-semibold">LOCAL TELEMETRY LATENCY: 0.00ms</span>
        </div>
        <div className="flex items-center gap-2 text-[#8892B0]">
          <span>PILOT: <strong className="text-white">{astronautaAtivo.nome}</strong> ({astronautaAtivo.indicativo})</span>
          <span>|</span>
          <span>VIGILÂNCIA CONTÍNUA: <strong className="text-white">{astronautaAtivo.horasVigilia}h</strong></span>
        </div>
      </div>

      {/* Top Metrics Row: Cognitive Fatigue Meter & Real-Time Typing Dynamics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Metric 1: Cognitive Fatigue Index (Primary Hero Metric) */}
        <div className={`p-4 border transition-colors ${
          modoContencaoAtivo ? 'bg-[#251C30] border-[#EF4444]' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-1.5">
            <span className="flex items-center gap-1.5 font-bold tracking-wider">
              <Gauge className="w-4 h-4 text-[#38BDF8]" />
              FADIGA COGNITIVA
            </span>
            <span className="text-xs bg-[#060F1E] px-2 py-0.5 border border-[#1E3A5F] font-semibold">
              SENSORLESS
            </span>
          </div>

          <div className="flex items-baseline justify-between my-2">
            <div className="flex items-baseline gap-1.5">
              <span className={`text-4xl font-mono font-bold tracking-tight ${
                astronautaAtivo.indiceFadiga >= 75 ? 'text-[#EF4444]' : 
                astronautaAtivo.indiceFadiga >= 45 ? 'text-[#F59E0B]' : 'text-white'
              }`}>
                {astronautaAtivo.indiceFadiga}%
              </span>
              <span className="text-sm font-mono text-[#8892B0]">/ 100</span>
            </div>
            <span className={`text-xs font-mono px-2.5 py-1 font-bold border ${getFatigueColor(astronautaAtivo.indiceFadiga)}`}>
              {astronautaAtivo.statusOperacional}
            </span>
          </div>

          {/* Precision Meter Bar */}
          <div className="w-full bg-[#060F1E] h-2.5 border border-[#1E3A5F] overflow-hidden my-2.5">
            <div 
              className={`h-full transition-all duration-300 ${getFatigueProgressColor(astronautaAtivo.indiceFadiga)}`}
              style={{ width: `${Math.min(100, Math.max(5, astronautaAtivo.indiceFadiga))}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs font-mono text-[#8892B0]">
            <span>NOMINAL (&lt;45%)</span>
            <span>ALERTA (&gt;75%)</span>
          </div>
        </div>

        {/* Metric 2: Live Typing Telemetry & Keystroke Dynamics */}
        <div className={`p-4 border transition-colors ${
          modoContencaoAtivo ? 'bg-[#251C30] border-[#1E3A5F]' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-2">
            <span className="flex items-center gap-1.5 font-bold tracking-wider">
              <Activity className="w-4 h-4 text-[#38BDF8]" />
              TELEMETRIA MOTORA
            </span>
            <span className="text-xs text-[#10B981] font-mono font-semibold">LIVE FEED</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="bg-[#060F1E] p-2 border border-[#1E3A5F]">
              <div className="text-lg font-bold text-white leading-tight">{astronautaAtivo.wpm}</div>
              <div className="text-xs text-[#8892B0]">WPM ATUAL</div>
            </div>
            <div className="bg-[#060F1E] p-2 border border-[#1E3A5F]">
              <div className={`text-lg font-bold leading-tight ${
                astronautaAtivo.taxaErro > 8 ? 'text-[#EF4444]' : 'text-white'
              }`}>
                {astronautaAtivo.taxaErro}%
              </div>
              <div className="text-xs text-[#8892B0]">TAXA ERRO</div>
            </div>
            <div className="bg-[#060F1E] p-2 border border-[#1E3A5F]">
              <div className="text-lg font-bold text-[#38BDF8] leading-tight">
                {astronautaAtivo.latenciaTeclaMs}ms
              </div>
              <div className="text-xs text-[#8892B0]">LATÊNCIA</div>
            </div>
          </div>

          <div className="mt-2 text-xs font-mono text-[#8892B0] flex items-center justify-between">
            <span>LINHA BASE: 68 WPM</span>
            <span className={astronautaAtivo.wpm < 40 ? 'text-[#EF4444] font-semibold' : 'text-[#10B981] font-semibold'}>
              Δ {astronautaAtivo.wpm - 68} WPM
            </span>
          </div>
        </div>

        {/* Metric 3: Micro-Check-in Subjetivo (30s) */}
        <div className={`p-4 border transition-colors ${
          modoContencaoAtivo ? 'bg-[#251C30] border-[#1E3A5F]' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-2">
            <span className="flex items-center gap-1.5 font-bold tracking-wider">
              <Eye className="w-4 h-4 text-[#38BDF8]" />
              AUTOAVALIAÇÃO SUBJETIVA
            </span>
            <span className="text-xs text-[#F59E0B] font-mono font-semibold">30s PULSE</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {(['OTIMO', 'NEUTRO', 'EXAUSTO'] as NivelAutoavaliacao[]).map((nivel) => {
              const isSelected = astronautaAtivo.autoavaliacao === nivel;
              return (
                <button
                  key={nivel}
                  onClick={() => atualizarAutoavaliacao(nivel)}
                  className={`py-2.5 px-1.5 text-xs font-mono font-bold tracking-wider border transition-all ${
                    isSelected
                      ? nivel === 'OTIMO'
                        ? 'bg-[#10B981]/25 border-[#10B981] text-[#10B981]'
                        : nivel === 'NEUTRO'
                        ? 'bg-[#0099FF]/25 border-[#0099FF] text-[#38BDF8]'
                        : 'bg-[#EF4444]/25 border-[#EF4444] text-[#EF4444]'
                      : 'bg-[#060F1E] border-[#1E3A5F] text-[#8892B0] hover:text-white hover:border-slate-500'
                  }`}
                >
                  {nivel}
                </button>
              );
            })}
          </div>

          {/* Alerta de Auditoria de Omissão */}
          {astronautaAtivo.autoavaliacao === 'OTIMO' && astronautaAtivo.wpm < 35 && (
            <div className="mt-2.5 p-2 bg-[#EF4444]/15 border border-[#EF4444] text-xs font-mono text-[#EF4444] flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 shrink-0" />
              <span>DISSONÂNCIA: Autoavaliação "Ótimo", mas motricidade em colapso.</span>
            </div>
          )}
          {!(astronautaAtivo.autoavaliacao === 'OTIMO' && astronautaAtivo.wpm < 35) && (
            <div className="mt-2.5 text-xs font-mono text-[#8892B0]">
              Status selecionado: <strong className="text-white">{astronautaAtivo.autoavaliacao}</strong>
            </div>
          )}
        </div>

        {/* Metric 4: Cabin Environment & Autonomous Actuators */}
        <div className={`p-4 border transition-colors ${
          modoContencaoAtivo ? 'bg-[#251C30] border-[#F59E0B]' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="flex items-center justify-between text-xs md:text-sm font-mono text-[#8892B0] mb-1.5">
            <span className="flex items-center gap-1.5 font-bold tracking-wider">
              <Sliders className="w-4 h-4 text-[#38BDF8]" />
              ATUADORES DE CABINE
            </span>
            <span className={`text-xs px-1.5 py-0.5 font-mono font-bold ${
              modoContencaoAtivo ? 'bg-[#F59E0B] text-black' : 'bg-[#1E3A5F] text-[#38BDF8]'
            }`}>
              {modoContencaoAtivo ? 'CONTENÇÃO' : 'NOMINAL'}
            </span>
          </div>

          <div className="space-y-2 mt-2 font-mono text-xs md:text-sm">
            <div className="flex justify-between items-center bg-[#060F1E] px-2.5 py-1.5 border border-[#1E3A5F]">
              <span className="text-[#8892B0] text-xs">ESPECTRO LUZ:</span>
              <span className={`font-bold ${modoContencaoAtivo ? 'text-[#F59E0B]' : 'text-white'}`}>
                {modoContencaoAtivo ? '2700K (480nm CUT)' : '6500K (DAYLIGHT)'}
              </span>
            </div>
            <div className="flex justify-between items-center bg-[#060F1E] px-2.5 py-1.5 border border-[#1E3A5F]">
              <span className="text-[#8892B0] text-xs">TRAVA CRÍTICA:</span>
              <span className={`font-bold flex items-center gap-1.5 ${
                modoContencaoAtivo ? 'text-[#EF4444]' : 'text-[#10B981]'
              }`}>
                {modoContencaoAtivo ? (
                  <>
                    <Lock className="w-3.5 h-3.5" /> ATIVA (PROPULSÃO)
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" /> LIBERADA
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Operational Split: Live Interactive Terminal vs Critical Flight Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left (7 cols): Interactive Live Command Terminal */}
        <div className={`lg:col-span-7 p-4 md:p-5 border ${
          modoContencaoAtivo ? 'bg-[#251C30] border-[#F59E0B]/50' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-mono font-bold text-sm md:text-base text-white tracking-wider">
                TERMINAL DE COMANDO & REGISTRO OPERACIONAL
              </span>
            </div>
            <span className="text-xs font-mono text-[#8892B0] hidden sm:inline">
              DIGITE AO VIVO PARA CALCULAR WPM E ERROS
            </span>
          </div>

          {/* Quick presets for presentation */}
          <div className="mb-2.5">
            <div className="text-xs font-mono text-[#8892B0] mb-1.5">
              MODELOS RÁPIDOS DE DEMONSTRAÇÃO (CLIQUE PARA TESTAR):
            </div>
            <div className="flex flex-wrap gap-2">
              {templates.map((tmpl, idx) => (
                <button
                  key={idx}
                  onClick={() => aplicarTemplate(tmpl)}
                  className="text-xs font-mono px-2.5 py-1.5 bg-[#060F1E] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-slate-200 transition-colors text-left truncate max-w-[320px]"
                >
                  &gt; {tmpl}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Input Box */}
          <div className="relative bg-[#030712] border border-[#1E3A5F] p-3.5 font-mono">
            <div className="text-xs md:text-sm text-[#0099FF] mb-1.5 font-bold flex items-center justify-between">
              <span>CDR-1@ORBIT-IQ:~/OPERATIONAL_LOG$</span>
              <span className="text-xs text-[#8892B0]">{terminalInput.length} chars</span>
            </div>
            <textarea
              ref={inputRef}
              rows={4}
              value={terminalInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Digite aqui relatórios operacionais em tempo real (ex: verificação de cabine, checklist, dados de propulsão)... O motor analisa sua cadência de digitação e fadiga motora a cada caractere."
              className="w-full bg-transparent text-white font-mono text-xs md:text-sm focus:outline-none resize-none placeholder:text-slate-600 leading-relaxed"
            />
            <div className="flex items-center justify-between pt-2.5 border-t border-[#1E3A5F]/50 mt-1.5">
              <span className="text-xs text-[#8892B0]">
                Pressione <kbd className="px-1.5 py-0.5 bg-[#0F253E] border border-[#1E3A5F] text-white font-bold">Enter</kbd> para submeter
              </span>
              <button
                onClick={submeterRelatorioTerminal}
                disabled={!terminalInput.trim()}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0099FF] hover:bg-[#0080dd] disabled:opacity-40 disabled:hover:bg-[#0099FF] text-white text-xs md:text-sm font-mono font-bold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>REGISTRAR TELEMETRIA</span>
              </button>
            </div>
          </div>

          <div className="mt-3.5 p-2.5 bg-[#060F1E] border border-[#1E3A5F] flex items-center gap-2 text-xs font-mono text-[#8892B0]">
            <Info className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <span>
              <strong className="text-white">Sensorless Intelligence:</strong> Não requer câmeras ou sensores invasivos. O sistema deduz a sobrecarga cognitiva exclusivamente da cadência de digitação mecânica, desvio padrão entre teclas e volume de tarefas em curso.
            </span>
          </div>
        </div>

        {/* Right (5 cols): Flight Tasks & Autonomous Containment Status */}
        <div className={`lg:col-span-5 p-4 md:p-5 border ${
          modoContencaoAtivo ? 'bg-[#251C30] border-[#F59E0B]/50' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-mono font-bold text-sm md:text-base text-white tracking-wider">
                TAREFAS OPERACIONAIS EM CURSO
              </span>
            </div>
            <span className="text-xs md:text-sm font-mono text-[#38BDF8] font-bold">
              {tarefasDoTripulante.filter((t) => t.status === 'CONCLUIDA').length}/{tarefasDoTripulante.length} OK
            </span>
          </div>

          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
            {tarefasDoTripulante.map((tarefa) => {
              const isAdiada = tarefa.status === 'ADIADA_POR_FADIGA';
              const isConcluida = tarefa.status === 'CONCLUIDA';
              const isCritica = tarefa.criticidade === 'CRITICA';

              return (
                <div
                  key={tarefa.id}
                  className={`p-3 border font-mono transition-all ${
                    isAdiada
                      ? 'bg-[#18121E] border-[#EF4444]'
                      : isConcluida
                      ? 'bg-[#060F1E]/80 border-[#10B981]/30 opacity-70'
                      : 'bg-[#060F1E] border-[#1E3A5F]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-xs px-2 py-0.5 font-bold ${
                          isCritica 
                            ? 'bg-[#EF4444]/20 border border-[#EF4444] text-[#EF4444]' 
                            : 'bg-[#0099FF]/20 border border-[#0099FF] text-[#38BDF8]'
                        }`}>
                          {tarefa.criticidade}
                        </span>
                        <span className="text-xs md:text-sm font-bold text-white">{tarefa.codigo}</span>
                        <span className="text-xs text-[#8892B0]">{tarefa.modulo}</span>
                      </div>
                      <div className="text-xs md:text-sm text-slate-200 font-medium leading-tight mb-1.5">
                        {tarefa.titulo}
                      </div>
                    </div>

                    {!isConcluida && !isAdiada && (
                      <button
                        onClick={() => completarTarefa(tarefa.id)}
                        className="px-2.5 py-1 bg-[#1E3A5F] hover:bg-[#10B981] hover:text-black text-white text-xs font-bold transition-colors shrink-0"
                      >
                        CONCLUIR
                      </button>
                    )}
                    {isConcluida && (
                      <span className="text-xs text-[#10B981] font-bold flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-4 h-4" /> OK
                      </span>
                    )}
                  </div>

                  {/* Alerta de bloqueio autônomo */}
                  {isAdiada && (
                    <div className="mt-2.5 p-2 bg-[#EF4444]/20 border border-[#EF4444] text-xs text-[#EF4444] flex items-start gap-2">
                      <Lock className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <strong>BLOQUEIO AUTÔNOMO PELA NAVE:</strong> {tarefa.motivoAdiantamento}
                      </div>
                    </div>
                  )}

                  <div className="mt-2 flex items-center justify-between text-xs text-[#8892B0]">
                    <span>DURAÇÃO EST.: {tarefa.duracaoEstimadaMin} min</span>
                    <span>JANELA: {tarefa.timestamp}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
