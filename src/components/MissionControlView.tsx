import React from 'react';
import { useOrbit } from '../context/OrbitContext';
import { 
  Compass, 
  Users, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  ShieldAlert, 
  Layers,
  UserCheck
} from 'lucide-react';

export const MissionControlView: React.FC = () => {
  const { 
    astronautas, 
    tarefas, 
    modoContencaoAtivo, 
    aprovarAjusteTarefa, 
    reverterAdiantamento 
  } = useOrbit();

  const tarefasAdiada = tarefas.filter((t) => t.status === 'ADIADA_POR_FADIGA');

  // Cálculo de Risco Médio da Tripulação
  const mediaFadigaTripulacao = Math.round(
    astronautas.reduce((acc, a) => acc + a.indiceFadiga, 0) / astronautas.length
  );

  return (
    <div className="space-y-4 font-mono">
      {/* CAPCOM / Flight Director Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2.5 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-[#38BDF8] font-bold">COORDENAÇÃO ESTRATÉGICA DE VOO:</span>
          <span className="text-white">NASA MCC-HOUSTON // CAPCOM & FLIGHT DIRECTOR DESK</span>
        </div>
        <div className="flex items-center gap-2 text-[#8892B0]">
          <span>EXPEDIÇÃO: <strong className="text-white">EXP-74 CORE</strong></span>
          <span>|</span>
          <span>JANELA ORBITAL: <strong className="text-[#10B981]">APOLLO/ARTEMIS COMPLIANT</strong></span>
        </div>
      </div>

      {/* Top Strategic Readiness Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>RISCO MÉDIO DA TRIPULAÇÃO</span>
            <Users className="w-4 h-4 text-[#38BDF8]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold ${
              mediaFadigaTripulacao >= 60 ? 'text-[#EF4444]' : mediaFadigaTripulacao >= 40 ? 'text-[#F59E0B]' : 'text-white'
            }`}>
              {mediaFadigaTripulacao}%
            </span>
            <span className="text-xs text-[#8892B0]">ÍNDICE COGNITIVO</span>
          </div>
          <div className="text-xs text-[#8892B0] mt-1.5">
            Status: <span className={modoContencaoAtivo ? 'text-[#EF4444] font-bold' : 'text-[#10B981] font-semibold'}>
              {modoContencaoAtivo ? 'CONTENÇÃO CRÍTICA' : 'NOMINAL SEGURO'}
            </span>
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>TAREFAS ADIADAS PELA IA</span>
            <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div className="text-3xl font-bold text-white">
            {tarefasAdiada.length} EM ESPERA
          </div>
          <div className="text-xs text-[#8892B0] mt-1.5">
            Ações de alto risco bloqueadas
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>DISPONIBILIDADE OPERACIONAL</span>
            <UserCheck className="w-4 h-4 text-[#10B981]" />
          </div>
          <div className="text-3xl font-bold text-[#10B981]">
            {astronautas.filter((a) => a.indiceFadiga < 55).length} / {astronautas.length} TRIPULANTES
          </div>
          <div className="text-xs text-[#8892B0] mt-1.5">
            Aptos para tarefas críticas de propulsão
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>AUTORIDADE DE COMANDO</span>
            <Layers className="w-4 h-4 text-[#38BDF8]" />
          </div>
          <div className="text-3xl font-bold text-white">
            {modoContencaoAtivo ? 'NAVE AUTÔNOMA' : 'CDR-1 PRIMÁRIO'}
          </div>
          <div className="text-xs text-[#8892B0] mt-1.5">
            {modoContencaoAtivo ? 'Fail-Safe Circadiano Ativo' : 'Comandos manuais habilitados'}
          </div>
        </div>
      </div>

      {/* Crew Consolidated Status Grid */}
      <div className="bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5">
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#38BDF8]" />
            <span className="font-bold text-sm md:text-base text-white tracking-wider">
              MATRIZ CONSOLIDADA DE PRONTIDÃO DA TRIPULAÇÃO
            </span>
          </div>
          <span className="text-xs text-[#8892B0]">SISTEMA ORBIT-IQ // SENSORLESS FUSION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {astronautas.map((ast) => {
            const isCritical = ast.indiceFadiga >= 75;
            const isModerate = ast.indiceFadiga >= 45 && !isCritical;

            return (
              <div
                key={ast.id}
                className={`p-3.5 border transition-colors ${
                  isCritical 
                    ? 'bg-[#18121E] border-[#EF4444]' 
                    : isModerate 
                    ? 'bg-[#060F1E] border-[#F59E0B]' 
                    : 'bg-[#060F1E] border-[#1E3A5F]'
                }`}
              >
                <div className="flex items-start justify-between gap-1 mb-2.5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-base">{ast.nome}</span>
                      <span className="text-xs px-1.5 py-0.5 bg-[#1E3A5F] text-[#38BDF8] font-bold">
                        {ast.indicativo}
                      </span>
                    </div>
                    <div className="text-xs text-[#8892B0] mt-0.5">{ast.cargo}</div>
                  </div>

                  <span className={`text-xs px-2.5 py-1 font-bold border ${
                    isCritical 
                      ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' 
                      : isModerate 
                      ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B]' 
                      : 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                  }`}>
                    {ast.statusOperacional}
                  </span>
                </div>

                {/* Fatigue Level Bar */}
                <div className="space-y-1.5 mb-2.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8892B0]">ÍNDICE DE FADIGA:</span>
                    <strong className={isCritical ? 'text-[#EF4444]' : isModerate ? 'text-[#F59E0B]' : 'text-white'}>
                      {ast.indiceFadiga}%
                    </strong>
                  </div>
                  <div className="w-full bg-[#030712] h-2 border border-[#1E3A5F]/50">
                    <div 
                      className={`h-full ${isCritical ? 'bg-[#EF4444]' : isModerate ? 'bg-[#F59E0B]' : 'bg-[#0099FF]'}`}
                      style={{ width: `${Math.min(100, Math.max(5, ast.indiceFadiga))}%` }}
                    ></div>
                  </div>
                </div>

                {/* Subsystem Telemetry */}
                <div className="grid grid-cols-2 gap-1.5 text-xs bg-[#030712] p-2 border border-[#1E3A5F]/50 mb-2.5">
                  <div>
                    <span className="text-[#8892B0]">DIGITAÇÃO:</span>{' '}
                    <strong className="text-white">{ast.wpm} WPM</strong>
                  </div>
                  <div>
                    <span className="text-[#8892B0]">VIGÍLIA:</span>{' '}
                    <strong className="text-white">{ast.horasVigilia}h</strong>
                  </div>
                  <div>
                    <span className="text-[#8892B0]">AUTOAVAL.:</span>{' '}
                    <strong className="text-white">{ast.autoavaliacao}</strong>
                  </div>
                  <div>
                    <span className="text-[#8892B0]">ERROS:</span>{' '}
                    <strong className={ast.taxaErro > 5 ? 'text-[#EF4444]' : 'text-white'}>{ast.taxaErro}%</strong>
                  </div>
                </div>

                <div className="text-xs text-[#8892B0] truncate">
                  TAREFA: <span className="text-slate-200">{ast.tarefaAtiva}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact on Mission Timeline & Autonomous Postponements */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left (7 cols): Global Mission Timeline */}
        <div className="lg:col-span-7 bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-bold text-sm md:text-base text-white tracking-wider">
                CRONOGRAMA DE OPERAÇÕES ORBITAIS (SOL 142)
              </span>
            </div>
            <span className="text-xs text-[#8892B0]">IMPACTO CIRCADIANO</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {tarefas.map((t) => {
              const isAdiada = t.status === 'ADIADA_POR_FADIGA';
              const isConcluida = t.status === 'CONCLUIDA';
              const isEmAndamento = t.status === 'EM_ANDAMENTO';

              return (
                <div
                  key={t.id}
                  className={`p-3 border transition-all ${
                    isAdiada
                      ? 'bg-[#18121E] border-[#EF4444]'
                      : isEmAndamento
                      ? 'bg-[#060F1E] border-[#0099FF]'
                      : 'bg-[#060F1E] border-[#1E3A5F]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 font-bold ${
                        t.criticidade === 'CRITICA' 
                          ? 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]' 
                          : 'bg-[#0099FF]/20 text-[#38BDF8] border border-[#0099FF]'
                      }`}>
                        {t.criticidade}
                      </span>
                      <span className="text-white font-bold text-xs md:text-sm">{t.codigo}</span>
                      <span className="text-[#8892B0] text-xs">{t.modulo}</span>
                    </div>

                    <span className={`text-xs px-2.5 py-0.5 font-bold ${
                      isAdiada
                        ? 'bg-[#EF4444] text-white'
                        : isConcluida
                        ? 'bg-[#10B981]/20 text-[#10B981]'
                        : 'bg-[#0099FF]/20 text-[#38BDF8]'
                    }`}>
                      {t.status.replace(/_/g, ' ')}
                    </span>
                  </div>

                  <div className="text-slate-200 text-xs md:text-sm font-medium mb-1.5">
                    {t.titulo}
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-xs text-[#8892B0]">
                    <span>RESPONSÁVEL: <strong className="text-white">{t.responsavelNome}</strong></span>
                    <span>JANELA ATRIBUÍDA: <strong className="text-white">{t.timestamp}</strong></span>
                  </div>

                  {isAdiada && (
                    <div className="mt-2.5 p-2 bg-[#EF4444]/20 border border-[#EF4444] text-xs text-[#EF4444] flex items-center justify-between">
                      <span><strong>ADIAMENTO AUTÔNOMO:</strong> {t.motivoAdiantamento}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right (5 cols): Capcom Task Rescheduling & Approval Panel */}
        <div className="lg:col-span-5 bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-bold text-sm md:text-base text-white tracking-wider">
                AUDITORIA DE ADIAMENTOS PELA IA
              </span>
            </div>
            <span className="text-xs text-[#F59E0B] font-bold">MCC-H APROVAL</span>
          </div>

          {tarefasAdiada.length === 0 ? (
            <div className="p-8 bg-[#060F1E] border border-[#1E3A5F] text-center text-xs md:text-sm text-[#8892B0]">
              <CheckCircle className="w-7 h-7 text-[#10B981] mx-auto mb-2.5" />
              Nenhuma tarefa adiada por sobrecarga circadiana no momento.
              <div className="text-xs mt-1.5 text-[#8892B0]">
                O cronograma da missão está operando em conformidade nominal.
              </div>
            </div>
          ) : (
            <div className="space-y-3.5">
              {tarefasAdiada.map((t) => (
                <div
                  key={t.id}
                  className="p-3.5 bg-[#18121E] border border-[#EF4444] text-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#EF4444] font-bold">ALERTA DE SEGURANÇA</span>
                    <span className="text-[#8892B0]">{t.codigo}</span>
                  </div>

                  <div className="font-bold text-white text-sm leading-tight">
                    {t.titulo}
                  </div>

                  <div className="text-xs text-[#F59E0B] leading-relaxed">
                    {t.motivoAdiantamento}
                  </div>

                  <div className="pt-2.5 border-t border-[#1E3A5F] flex items-center justify-between gap-2.5">
                    <button
                      onClick={() => aprovarAjusteTarefa(t.id, 'MET 142:14:00 (PÓS-DESCANSO)')}
                      className="px-3 py-2 bg-[#10B981] hover:bg-[#0da070] text-black font-bold text-xs transition-colors flex-1"
                    >
                      APROVAR NOVO HORÁRIO (14:00)
                    </button>

                    <button
                      onClick={() => reverterAdiantamento(t.id)}
                      className="px-3 py-2 bg-[#0F253E] hover:bg-[#1E3A5F] text-slate-200 border border-[#1E3A5F] font-bold text-xs transition-colors"
                      title="Forçar execução imediata por autoridade de Houston"
                    >
                      OVERRIDE MANUAL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 p-2.5 bg-[#060F1E] border border-[#1E3A5F] text-xs text-[#8892B0]">
            <strong className="text-white">Protocolo de Segurança NASA:</strong> A Coordenação de Voo pode ratificar o reagendamento sugerido pelo Orbit-IQ Core Sync ou assumir o risco operacional por meio de Override de CAPCOM com telemetria restrita.
          </div>
        </div>
      </div>
    </div>
  );
};
