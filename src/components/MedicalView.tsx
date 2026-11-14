import React, { useState } from 'react';
import { useOrbit } from '../context/OrbitContext';
import { 
  HeartPulse, 
  Radio, 
  AlertTriangle, 
  Send, 
  CheckCircle, 
  Moon, 
  Activity, 
  Clock, 
  ShieldAlert, 
  TrendingUp, 
  FileText,
  Zap
} from 'lucide-react';

export const MedicalView: React.FC = () => {
  const { 
    astronautaAtivo, 
    protocolos, 
    transmitirProtocolo, 
    delayHouston, 
    modoContencaoAtivo 
  } = useOrbit();

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [transmittingId, setTransmittingId] = useState<string | null>(null);

  const historico = astronautaAtivo.historicoDias;

  const handleTransmit = async (id: string) => {
    setTransmittingId(id);
    await transmitirProtocolo(id);
    setTransmittingId(null);
  };

  // SVG Chart Geometry
  const width = 680;
  const height = 220;
  const padding = { top: 20, right: 30, bottom: 35, left: 45 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  const getX = (index: number) => padding.left + (index / (historico.length - 1)) * graphWidth;
  const getY = (val: number) => padding.top + graphHeight - (val / 100) * graphHeight;

  // Real Fatigue points
  const pointsReal = historico.map((h, i) => `${getX(i)},${getY(h.fadigaReal)}`).join(' ');
  // Subjective Self-Report points
  const pointsSubj = historico.map((h, i) => `${getX(i)},${getY(h.autoAvaliacaoNum)}`).join(' ');

  return (
    <div className="space-y-4">
      {/* Flight Surgeon Header & Deep-Space Delay Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-[#38BDF8] font-bold">MONITORAMENTO CLÍNICO LONGITUDINAL:</span>
          <span className="text-white">NASA JSC // HOUSTON FLIGHT SURGEON CONSOLE 04</span>
        </div>
        <div className="flex items-center gap-2 bg-[#060F1E] px-3 py-1 border border-[#F59E0B]">
          <Radio className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
          <span className="text-[#8892B0]">TELEMETRY SYNC DELAY:</span>
          <strong className="text-[#F59E0B] tracking-wider">{delayHouston}</strong>
          <span className="text-[10px] text-[#8892B0] hidden sm:inline">(RETARDO ORBITAL ESTIMADO)</span>
        </div>
      </div>

      {/* Top Clinical Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono">
        <div className="bg-[#0F253E] border border-[#1E3A5F] p-3">
          <div className="text-[10px] text-[#8892B0] mb-1 flex items-center justify-between">
            <span>DÉBITO CIRCADIANO ACUMULADO</span>
            <Moon className="w-3.5 h-3.5 text-[#38BDF8]" />
          </div>
          <div className="text-2xl font-bold text-white leading-tight">
            +{astronautaAtivo.circadianDebtHoras} horas
          </div>
          <div className="text-[10px] text-[#8892B0] mt-1">
            Status: <span className="text-[#F59E0B]">Defasagem REM moderada</span>
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-3">
          <div className="text-[10px] text-[#8892B0] mb-1 flex items-center justify-between">
            <span>VULNERABILIDADE A MICRO-SONO</span>
            <Activity className="w-3.5 h-3.5 text-[#EF4444]" />
          </div>
          <div className={`text-2xl font-bold leading-tight ${
            astronautaAtivo.indiceFadiga >= 75 ? 'text-[#EF4444]' : 'text-[#F59E0B]'
          }`}>
            {astronautaAtivo.indiceFadiga >= 75 ? 'ELEVADA (78%)' : 'CONTROLADA (24%)'}
          </div>
          <div className="text-[10px] text-[#8892B0] mt-1">
            Latência de reação: {astronautaAtivo.latenciaTeclaMs}ms
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-3">
          <div className="text-[10px] text-[#8892B0] mb-1 flex items-center justify-between">
            <span>AUDITORIA "FATOR OMISSÃO"</span>
            <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
          </div>
          <div className="text-2xl font-bold text-white leading-tight">
            {historico.filter((h) => h.omissao).length} EVENTOS
          </div>
          <div className="text-[10px] text-[#EF4444] mt-1 font-semibold">
            {astronautaAtivo.autoavaliacao === 'OTIMO' && astronautaAtivo.wpm < 35 
              ? 'Divergência Crítica Ativa' 
              : 'Último desvio em SOL 140'}
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-3">
          <div className="text-[10px] text-[#8892B0] mb-1 flex items-center justify-between">
            <span>MODO DE TRANSMISSÃO MÉDICA</span>
            <Radio className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-2xl font-bold text-[#10B981] leading-tight">
            UPLINK DSN
          </div>
          <div className="text-[10px] text-[#8892B0] mt-1">
            Rede: Deep Space Goldstone
          </div>
        </div>
      </div>

      {/* Main Split: Longitudinal Comparative Chart vs Clinical Inconsistency Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left (7 cols): High-Precision SVG Telemetry Chart */}
        <div className="lg:col-span-7 bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b border-[#1E3A5F] font-mono">
            <div>
              <div className="font-bold text-sm text-white tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
                FADIGA REAL (SENSORLESS) VS. AUTOAVALIAÇÃO SUBJETIVA
              </div>
              <div className="text-[10px] text-[#8892B0]">
                Evolução longitudinal de {astronautaAtivo.nome} ({astronautaAtivo.indicativo})
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-[#EF4444]"></span>
                <span className="text-white">Fadiga Real</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-[#0099FF] stroke-dashed"></span>
                <span className="text-white">Autoavaliação</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-[#F59E0B] border-t border-dashed border-[#F59E0B]"></span>
                <span className="text-[#F59E0B]">Limiar Crítico (75%)</span>
              </div>
            </div>
          </div>

          {/* SVG Telemetry Visualization */}
          <div className="w-full overflow-x-auto bg-[#060F1E] border border-[#1E3A5F] p-2">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[260px] font-mono text-[9px]">
              {/* Horizontal grid lines */}
              {[0, 25, 50, 75, 100].map((val) => {
                const y = getY(val);
                return (
                  <g key={val}>
                    <line
                      x1={padding.left}
                      y1={y}
                      x2={width - padding.right}
                      y2={y}
                      stroke="#1E3A5F"
                      strokeWidth={val === 75 ? 1.5 : 1}
                      strokeDasharray={val === 75 ? '4 3' : '2 2'}
                      strokeOpacity={val === 75 ? 0.9 : 0.4}
                    />
                    <text
                      x={padding.left - 6}
                      y={y + 3}
                      textAnchor="end"
                      fill={val === 75 ? '#F59E0B' : '#8892B0'}
                      fontSize="9"
                    >
                      {val}%
                    </text>
                  </g>
                );
              })}

              {/* Critical Zone Highlight */}
              <rect
                x={padding.left}
                y={getY(100)}
                width={graphWidth}
                height={getY(75) - getY(100)}
                fill="#EF4444"
                fillOpacity="0.08"
              />

              {/* Longitudinal Lines */}
              {/* Subjective line (Cyan / Dotted) */}
              <polyline
                fill="none"
                stroke="#0099FF"
                strokeWidth="2"
                strokeDasharray="4 2"
                points={pointsSubj}
              />

              {/* Real fatigue line (Red / Solid) */}
              <polyline
                fill="none"
                stroke="#EF4444"
                strokeWidth="2.5"
                points={pointsReal}
              />

              {/* Data points & Discrepancy Markers */}
              {historico.map((h, i) => {
                const cx = getX(i);
                const cyReal = getY(h.fadigaReal);
                const cySubj = getY(h.autoAvaliacaoNum);
                const isSelected = selectedPoint === i;

                return (
                  <g key={i} className="cursor-pointer" onClick={() => setSelectedPoint(i)}>
                    {/* Vertical guideline */}
                    <line
                      x1={cx}
                      y1={padding.top}
                      x2={cx}
                      y2={height - padding.bottom}
                      stroke="#1E3A5F"
                      strokeWidth="1"
                      strokeDasharray="1 3"
                    />

                    {/* Discrepancy bracket if omission occurred */}
                    {h.omissao && (
                      <g>
                        <line
                          x1={cx}
                          y1={cyReal}
                          x2={cx}
                          y2={cySubj}
                          stroke="#F59E0B"
                          strokeWidth="2"
                        />
                        <rect
                          x={cx - 18}
                          y={Math.min(cyReal, cySubj) - 16}
                          width="36"
                          height="14"
                          fill="#F59E0B"
                          rx="1"
                        />
                        <text
                          x={cx}
                          y={Math.min(cyReal, cySubj) - 6}
                          textAnchor="middle"
                          fill="#000000"
                          fontWeight="bold"
                          fontSize="8"
                        >
                          OMISSÃO
                        </text>
                      </g>
                    )}

                    {/* Real Point */}
                    <circle
                      cx={cx}
                      cy={cyReal}
                      r={isSelected ? 5 : 3.5}
                      fill="#EF4444"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />

                    {/* Subj Point */}
                    <circle
                      cx={cx}
                      cy={cySubj}
                      r={isSelected ? 4 : 3}
                      fill="#0099FF"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />

                    {/* X Axis Label */}
                    <text
                      x={cx}
                      y={height - padding.bottom + 16}
                      textAnchor="middle"
                      fill={isSelected ? '#38BDF8' : '#8892B0'}
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontSize="9"
                    >
                      {h.dia}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3 p-2 bg-[#060F1E] border border-[#1E3A5F] text-[10px] font-mono text-[#8892B0]">
            <strong className="text-white">Interpretação Clínica:</strong> O "Fator Omissão" ocorre sistematicamente em astronautas experientes que tendem a subestimar ou esconder o cansaço para evitar cancelamento de caminhadas espaciais (EVA). O algoritmo do Orbit-IQ detecta a disparidade instantaneamente pela degradação neuromotora de digitação.
          </div>
        </div>

        {/* Right (5 cols): Inconsistency History & Asynchronous Recovery Protocols */}
        <div className="lg:col-span-5 space-y-4">
          {/* Section: Inconsistency Audit Log */}
          <div className="bg-[#0F253E] border border-[#1E3A5F] p-4 font-mono">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#1E3A5F]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#F59E0B]" />
                <span className="font-bold text-sm text-white tracking-wider">
                  AUDITORIA DE INCONSISTÊNCIAS
                </span>
              </div>
              <span className="text-[10px] text-[#F59E0B] font-bold">
                FATOR OMISSÃO
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 bg-[#060F1E] border border-[#F59E0B]/50">
                <div className="flex justify-between items-center text-[10px] text-[#8892B0] mb-1">
                  <span className="text-[#F59E0B] font-bold">SOL 140 // DETECÇÃO CRÍTICA</span>
                  <span>MET 140:14:22</span>
                </div>
                <div className="text-white font-medium mb-1">
                  Tripulante reportou "ÓTIMO" (20% subjetivo).
                </div>
                <div className="text-[#EF4444] text-[11px] leading-tight">
                  Biomarcadores mecânicos revelaram 68% de fadiga: queda de 45% em WPM e 8.2% de erros mecânicos.
                </div>
              </div>

              {modoContencaoAtivo && (
                <div className="p-2 bg-[#251C30] border border-[#EF4444] animate-pulse">
                  <div className="flex justify-between items-center text-[10px] text-[#EF4444] mb-1">
                    <span className="font-bold">SOL 142 (AO VIVO) // ALERTA EM TEMPO REAL</span>
                    <span>MET 142:08:44</span>
                  </div>
                  <div className="text-white font-medium mb-1">
                    Fadiga em 84% com cadência reduzida para 26 WPM.
                  </div>
                  <div className="text-[#F59E0B] text-[11px] leading-tight">
                    Nave engajou proteção autônoma. Recomendado envio imediato do protocolo circadiano.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section: Houston Asynchronous Recovery Protocols */}
          <div className="bg-[#0F253E] border border-[#1E3A5F] p-4 font-mono">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#1E3A5F]">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-bold text-sm text-white tracking-wider">
                  PROTOCOLOS DE RECUPERAÇÃO DE HOUSTON
                </span>
              </div>
              <span className="text-[10px] text-[#10B981]">UPLINK ASYNC</span>
            </div>

            <div className="space-y-2.5">
              {protocolos.map((prot) => {
                const isTransmitting = transmittingId === prot.id;
                const isAplicado = prot.status === 'APLICADO_A_BORDO';

                return (
                  <div
                    key={prot.id}
                    className="p-2.5 bg-[#060F1E] border border-[#1E3A5F] text-xs font-mono"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#38BDF8] font-bold">{prot.codigo}</span>
                          <span className="text-[10px] px-1 bg-[#1E3A5F] text-white">
                            {prot.periodoDescansoMin}m repouso
                          </span>
                        </div>
                        <div className="font-bold text-white text-xs mt-0.5">{prot.nome}</div>
                      </div>

                      <button
                        onClick={() => handleTransmit(prot.id)}
                        disabled={isTransmitting || isAplicado}
                        className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold border transition-all shrink-0 ${
                          isAplicado
                            ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                            : isTransmitting
                            ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B] animate-pulse'
                            : 'bg-[#0099FF] hover:bg-[#0080dd] text-white border-[#0099FF]'
                        }`}
                      >
                        {isAplicado ? (
                          <>
                            <CheckCircle className="w-3 h-3" /> APLICADO
                          </>
                        ) : isTransmitting ? (
                          <>
                            <Radio className="w-3 h-3 animate-spin" /> ENVIANDO...
                          </>
                        ) : (
                          <>
                            <Send className="w-3 h-3" /> TRANSMITIR
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#8892B0] leading-tight mb-1.5">
                      {prot.descricao}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-[#8892B0] border-t border-[#1E3A5F]/50 pt-1">
                      <span>CORTE AZUL: -{prot.reducaoEspectroAzul}%</span>
                      <span>TEMP: {prot.temperaturaLuzK}K</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
