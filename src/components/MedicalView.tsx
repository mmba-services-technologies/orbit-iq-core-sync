import React, { useState } from 'react';
import { useOrbit } from '../context/OrbitContext';
import { AstronautBodyScanner } from './AstronautBodyScanner';
import { TelemedicineVideoFeed } from './TelemedicineVideoFeed';
import { 
  HeartPulse, 
  Radio, 
  AlertTriangle, 
  Send, 
  CheckCircle, 
  Moon, 
  Activity, 
  Clock, 
  TrendingUp, 
  FileText, 
  Zap, 
  Video, 
  Rotate3d,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const MedicalView: React.FC = () => {
  const { 
    astronautaAtivo, 
    protocolos, 
    transmitirProtocolo, 
    delayHouston, 
    modoContencaoAtivo,
    pressaoArterial,
    analiseVozIA 
  } = useOrbit();

  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [transmittingId, setTransmittingId] = useState<string | null>(null);

  // Visibilidade das Seções Clínicas na Dashboard Médica
  const [mostrarScannerMedico, setMostrarScannerMedico] = useState(true);
  const [mostrarTelemedicinaMedica, setMostrarTelemedicinaMedica] = useState(true);

  const historico = astronautaAtivo.historicoDias;

  const handleTransmit = async (id: string) => {
    setTransmittingId(id);
    await transmitirProtocolo(id);
    setTransmittingId(null);
  };

  // SVG Chart Geometry
  const width = 740;
  const height = 240;
  const padding = { top: 25, right: 35, bottom: 40, left: 50 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  const getX = (index: number) => padding.left + (index / (historico.length - 1)) * graphWidth;
  const getY = (val: number) => padding.top + graphHeight - (val / 100) * graphHeight;

  // Real Fatigue points
  const pointsReal = historico.map((h, i) => `${getX(i)},${getY(h.fadigaReal)}`).join(' ');
  // Subjective Self-Report points
  const pointsSubj = historico.map((h, i) => `${getX(i)},${getY(h.autoAvaliacaoNum)}`).join(' ');

  const isHipertenso = pressaoArterial.status === 'HIPERTENSAO_CRITICA';

  return (
    <div className="space-y-5">
      {/* Flight Surgeon Header & Deep-Space Delay Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A5F] pb-2.5 text-xs md:text-sm font-mono">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-[#38BDF8] font-bold">MONITORAMENTO CLÍNICO LONGITUDINAL:</span>
          <span className="text-white">NASA JSC // HOUSTON FLIGHT SURGEON CONSOLE 04</span>
        </div>
        <div className="flex items-center gap-2 bg-[#060F1E] px-3.5 py-1.5 border border-[#F59E0B]">
          <Radio className="w-4 h-4 text-[#F59E0B] animate-pulse" />
          <span className="text-[#8892B0]">TELEMETRY SYNC DELAY:</span>
          <strong className="text-[#F59E0B] tracking-wider text-sm">{delayHouston}</strong>
          <span className="text-xs text-[#8892B0] hidden sm:inline">(RETARDO ORBITAL ESTIMADO)</span>
        </div>
      </div>

      {/* Top Clinical Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 font-mono">
        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>DÉBITO CIRCADIANO ACUMULADO</span>
            <Moon className="w-4 h-4 text-[#38BDF8]" />
          </div>
          <div className="text-3xl font-bold text-white leading-tight">
            +{astronautaAtivo.circadianDebtHoras} horas
          </div>
          <div className="text-xs text-[#8892B0] mt-1.5">
            Status: <span className="text-[#F59E0B] font-semibold">Defasagem REM moderada</span>
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>VULNERABILIDADE A MICRO-SONO</span>
            <Activity className="w-4 h-4 text-[#EF4444]" />
          </div>
          <div className={`text-3xl font-bold leading-tight ${
            astronautaAtivo.indiceFadiga >= 75 ? 'text-[#EF4444]' : 'text-[#F59E0B]'
          }`}>
            {astronautaAtivo.indiceFadiga >= 75 ? 'ELEVADA (78%)' : 'CONTROLADA (24%)'}
          </div>
          <div className="text-xs text-[#8892B0] mt-1.5">
            Latência de reação: <strong className="text-white">{astronautaAtivo.latenciaTeclaMs}ms</strong>
          </div>
        </div>

        <div className={`border p-4 transition-colors ${
          isHipertenso ? 'bg-[#251C30] border-[#EF4444]' : 'bg-[#0F253E] border-[#1E3A5F]'
        }`}>
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>PRESSÃO DO BRAÇO ESQUERDO</span>
            <HeartPulse className={`w-4 h-4 ${isHipertenso ? 'text-[#EF4444]' : 'text-[#F59E0B]'}`} />
          </div>
          <div className={`text-3xl font-bold leading-tight ${isHipertenso ? 'text-[#EF4444] animate-pulse' : 'text-white'}`}>
            {pressaoArterial.sistolica}/{pressaoArterial.diastolica}
          </div>
          <div className="text-xs mt-1.5">
            <span className={isHipertenso ? 'text-[#EF4444] font-bold' : 'text-[#10B981]'}>
              {isHipertenso ? 'HIPERTENSÃO SEVERA' : 'Tensão sob controle'}
            </span>
          </div>
        </div>

        <div className="bg-[#0F253E] border border-[#1E3A5F] p-4">
          <div className="text-xs text-[#8892B0] mb-1.5 flex items-center justify-between font-semibold">
            <span>AUDITORIA "FATOR OMISSÃO"</span>
            <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div className="text-3xl font-bold text-white leading-tight">
            {historico.filter((h) => h.omissao).length} EVENTOS
          </div>
          <div className="text-xs text-[#EF4444] mt-1.5 font-bold">
            {astronautaAtivo.autoavaliacao === 'OTIMO' && astronautaAtivo.wpm < 35 
              ? 'Divergência Crítica Ativa' 
              : 'Último desvio em SOL 140'}
          </div>
        </div>
      </div>

      {/* 🚀 DESTAQUE 1 NA DASHBOARD MÉDICA: SCANNER 3D DO ASTRONAUTA EM FATO ESPACIAL & BRAÇO ESQUERDO */}
      <div className="space-y-2">
        <div className="flex items-center justify-between border-b border-[#1E3A5F] pb-2 font-mono text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Rotate3d className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white font-bold tracking-wider">
              INSPEÇÃO BIOMECÂNICA 3D // FATO ESPACIAL & MANGUITO BRAQUIAL
            </span>
            <span className="text-xs text-[#8892B0] hidden md:inline">
              (Avaliação de zonas corporais em rotação contínua de 360°)
            </span>
          </div>
          <button
            onClick={() => setMostrarScannerMedico(!mostrarScannerMedico)}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#060F1E] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs font-bold"
          >
            {mostrarScannerMedico ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{mostrarScannerMedico ? 'RECOLHER SCANNER' : 'EXPANDIR SCANNER 3D'}</span>
          </button>
        </div>

        {mostrarScannerMedico && <AstronautBodyScanner />}
      </div>

      {/* 🚀 DESTAQUE 2 NA DASHBOARD MÉDICA: CÂMARA DE TELECONSULTA HOUSTON & IA DE VOZ */}
      <div className="space-y-2">
        <div className="flex items-center justify-between border-b border-[#1E3A5F] pb-2 font-mono text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-white font-bold tracking-wider">
              TELECONSULTA CLÍNICA HOUSTON ⟷ NAVE // ANÁLISE DE VOZ & SÍNDROME DO ASTRONAUTA
            </span>
            {analiseVozIA.emChamada && (
              <span className="text-xs px-2 py-0.5 bg-[#EF4444] text-white font-bold animate-pulse">
                CANAL ABERTO
              </span>
            )}
          </div>
          <button
            onClick={() => setMostrarTelemedicinaMedica(!mostrarTelemedicinaMedica)}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#060F1E] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs font-bold"
          >
            {mostrarTelemedicinaMedica ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{mostrarTelemedicinaMedica ? 'RECOLHER TELEMEDICINA' : 'EXPANDIR CÂMARA'}</span>
          </button>
        </div>

        {mostrarTelemedicinaMedica && <TelemedicineVideoFeed />}
      </div>

      {/* Seção Longitudinal: Gráfico Vetorial Comparativo & Inconsistências de Houston */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left (7 cols): High-Precision SVG Telemetry Chart */}
        <div className="lg:col-span-7 bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#1E3A5F] font-mono">
            <div>
              <div className="font-bold text-sm md:text-base text-white tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
                FADIGA REAL (SENSORLESS) VS. AUTOAVALIAÇÃO SUBJETIVA
              </div>
              <div className="text-xs text-[#8892B0]">
                Evolução longitudinal de {astronautaAtivo.nome} ({astronautaAtivo.indicativo})
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-1.5 bg-[#EF4444]"></span>
                <span className="text-white">Fadiga Real</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-1.5 bg-[#0099FF] stroke-dashed"></span>
                <span className="text-white">Autoavaliação</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-1 bg-[#F59E0B] border-t border-dashed border-[#F59E0B]"></span>
                <span className="text-[#F59E0B]">Limiar Crítico (75%)</span>
              </div>
            </div>
          </div>

          {/* SVG Telemetry Visualization */}
          <div className="w-full overflow-x-auto bg-[#060F1E] border border-[#1E3A5F] p-3">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[290px] font-mono text-xs">
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
                      x={padding.left - 8}
                      y={y + 4}
                      textAnchor="end"
                      fill={val === 75 ? '#F59E0B' : '#8892B0'}
                      fontSize="11"
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
                strokeWidth="2.5"
                strokeDasharray="5 3"
                points={pointsSubj}
              />

              {/* Real fatigue line (Red / Solid) */}
              <polyline
                fill="none"
                stroke="#EF4444"
                strokeWidth="3"
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
                          strokeWidth="2.5"
                        />
                        <rect
                          x={cx - 24}
                          y={Math.min(cyReal, cySubj) - 18}
                          width="48"
                          height="16"
                          fill="#F59E0B"
                          rx="2"
                        />
                        <text
                          x={cx}
                          y={Math.min(cyReal, cySubj) - 6}
                          textAnchor="middle"
                          fill="#000000"
                          fontWeight="bold"
                          fontSize="10"
                        >
                          OMISSÃO
                        </text>
                      </g>
                    )}

                    {/* Real Point */}
                    <circle
                      cx={cx}
                      cy={cyReal}
                      r={isSelected ? 6 : 4.5}
                      fill="#EF4444"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />

                    {/* Subj Point */}
                    <circle
                      cx={cx}
                      cy={cySubj}
                      r={isSelected ? 5 : 4}
                      fill="#0099FF"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />

                    {/* X Axis Label */}
                    <text
                      x={cx}
                      y={height - padding.bottom + 20}
                      textAnchor="middle"
                      fill={isSelected ? '#38BDF8' : '#8892B0'}
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontSize="11"
                    >
                      {h.dia}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-3.5 p-3 bg-[#060F1E] border border-[#1E3A5F] text-xs font-mono text-[#8892B0]">
            <strong className="text-white">Interpretação Clínica:</strong> O "Fator Omissão" ocorre sistematicamente em astronautas experientes que tendem a subestimar ou esconder o cansaço para evitar cancelamento de caminhadas espaciais (EVA). O algoritmo do Orbit-IQ detecta a disparidade instantaneamente pela degradação neuromotora de digitação.
          </div>
        </div>

        {/* Right (5 cols): Inconsistency History & Asynchronous Recovery Protocols */}
        <div className="lg:col-span-5 space-y-4">
          {/* Section: Inconsistency Audit Log */}
          <div className="bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5 font-mono">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#F59E0B]" />
                <span className="font-bold text-sm md:text-base text-white tracking-wider">
                  AUDITORIA DE INCONSISTÊNCIAS
                </span>
              </div>
              <span className="text-xs text-[#F59E0B] font-bold">
                FATOR OMISSÃO
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-[#060F1E] border border-[#F59E0B]/50">
                <div className="flex justify-between items-center text-xs text-[#8892B0] mb-1.5">
                  <span className="text-[#F59E0B] font-bold">SOL 140 // DETECÇÃO CRÍTICA</span>
                  <span>MET 140:14:22</span>
                </div>
                <div className="text-white font-medium mb-1 text-sm">
                  Tripulante reportou "ÓTIMO" (20% subjetivo).
                </div>
                <div className="text-[#EF4444] text-xs leading-relaxed">
                  Biomarcadores mecânicos revelaram 68% de fadiga: queda de 45% em WPM e 8.2% de erros mecânicos.
                </div>
              </div>

              {modoContencaoAtivo && (
                <div className="p-3 bg-[#251C30] border border-[#EF4444] animate-pulse">
                  <div className="flex justify-between items-center text-xs text-[#EF4444] mb-1.5">
                    <span className="font-bold">SOL 142 (AO VIVO) // ALERTA EM TEMPO REAL</span>
                    <span>MET 142:08:44</span>
                  </div>
                  <div className="text-white font-medium mb-1 text-sm">
                    Fadiga em 84% com cadência reduzida para 26 WPM.
                  </div>
                  <div className="text-[#F59E0B] text-xs leading-relaxed">
                    Nave engajou proteção autônoma. Recomendado envio imediato do protocolo circadiano.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section: Houston Asynchronous Recovery Protocols */}
          <div className="bg-[#0F253E] border border-[#1E3A5F] p-4 md:p-5 font-mono">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#1E3A5F]">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-bold text-sm md:text-base text-white tracking-wider">
                  PROTOCOLOS DE RECUPERAÇÃO DE HOUSTON
                </span>
              </div>
              <span className="text-xs text-[#10B981] font-semibold">UPLINK ASYNC</span>
            </div>

            <div className="space-y-3">
              {protocolos.map((prot) => {
                const isTransmitting = transmittingId === prot.id;
                const isAplicado = prot.status === 'APLICADO_A_BORDO';

                return (
                  <div
                    key={prot.id}
                    className="p-3 bg-[#060F1E] border border-[#1E3A5F] text-xs font-mono"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#38BDF8] font-bold text-xs">{prot.codigo}</span>
                          <span className="text-xs px-1.5 py-0.5 bg-[#1E3A5F] text-white">
                            {prot.periodoDescansoMin}m repouso
                          </span>
                        </div>
                        <div className="font-bold text-white text-xs md:text-sm mt-1">{prot.nome}</div>
                      </div>

                      <button
                        onClick={() => handleTransmit(prot.id)}
                        disabled={isTransmitting || isAplicado}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border transition-all shrink-0 ${
                          isAplicado
                            ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                            : isTransmitting
                            ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B] animate-pulse'
                            : 'bg-[#0099FF] hover:bg-[#0080dd] text-white border-[#0099FF]'
                        }`}
                      >
                        {isAplicado ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5" /> APLICADO
                          </>
                        ) : isTransmitting ? (
                          <>
                            <Radio className="w-3.5 h-3.5 animate-spin" /> ENVIANDO...
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" /> TRANSMITIR
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-[#8892B0] leading-relaxed mb-2">
                      {prot.descricao}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#8892B0] border-t border-[#1E3A5F]/50 pt-1.5">
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
