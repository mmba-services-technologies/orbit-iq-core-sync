import React, { useState } from 'react';
import { useOrbit } from '../context/OrbitContext';
import { Terminal, Download, Filter } from 'lucide-react';

export const SystemConsole: React.FC = () => {
  const { logs } = useOrbit();
  const [filtro, setFiltro] = useState<string>('ALL');

  const logsFiltrados = logs.filter((log) => {
    if (filtro === 'ALL') return true;
    if (filtro === 'CRITICAL') return log.nivel === 'CRITICAL' || log.tipo === 'OVERRIDE_TRIGGER';
    if (filtro === 'KEYSTROKE') return log.tipo === 'KEYSTROKE';
    if (filtro === 'UPLINK') return log.tipo === 'UPLINK_PACKET';
    return true;
  });

  const exportarLogs = () => {
    const jsonStr = JSON.stringify(logs, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orbit-iq-telemetry-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getNivelStyle = (nivel: string) => {
    switch (nivel) {
      case 'CRITICAL':
        return 'text-[#EF4444] font-bold';
      case 'WARN':
        return 'text-[#F59E0B] font-bold';
      case 'SUCCESS':
        return 'text-[#10B981] font-bold';
      default:
        return 'text-[#38BDF8]';
    }
  };

  const getOrigemStyle = (origem: string) => {
    switch (origem) {
      case 'ONBOARD_EDGE':
        return 'text-[#38BDF8] bg-[#0F253E] border border-[#1E3A5F]';
      case 'HOUSTON_GROUND':
        return 'text-[#F59E0B] bg-[#251C30] border border-[#F59E0B]/30';
      case 'SENSORLESS_HYBRID':
        return 'text-[#10B981] bg-[#060F1E] border border-[#10B981]/30';
      default:
        return 'text-slate-300';
    }
  };

  return (
    <div className="w-full bg-[#030712] border border-[#1E3A5F] font-mono select-text">
      {/* Console Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-3.5 py-2 bg-[#0A192F] border-b border-[#1E3A5F] gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#38BDF8]" />
          <span className="font-bold text-white text-xs md:text-sm tracking-wider">
            SYSTEM EVENT STREAM // REAL-TIME CROSS-VALIDATION BUS
          </span>
          <span className="text-xs text-[#8892B0] hidden sm:inline">
            ({logsFiltrados.length} eventos gravados)
          </span>
        </div>

        {/* Filter and Export Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#060F1E] border border-[#1E3A5F] p-0.5">
            <Filter className="w-3.5 h-3.5 text-[#8892B0] ml-1" />
            {['ALL', 'CRITICAL', 'KEYSTROKE', 'UPLINK'].map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-2 py-0.5 text-xs font-bold transition-colors ${
                  filtro === f 
                    ? 'bg-[#0099FF] text-white' 
                    : 'text-[#8892B0] hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={exportarLogs}
            title="Exportar telemetria em formato JSON"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#060F1E] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-[#8892B0] hover:text-white text-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">JSON</span>
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-3 max-h-52 overflow-y-auto space-y-1.5 leading-relaxed scrollbar-thin">
        {logsFiltrados.length === 0 ? (
          <div className="text-[#8892B0] text-xs py-2 text-center">
            Nenhum evento registrado com o filtro selecionado.
          </div>
        ) : (
          logsFiltrados.map((log) => (
            <div key={log.id} className="flex items-start gap-2.5 text-xs hover:bg-[#060F1E]/60 py-1 px-1.5">
              <span className="text-[#8892B0] shrink-0 font-mono text-xs">
                {log.timestamp}
              </span>
              <span className={`text-xs px-1.5 py-0.5 shrink-0 ${getOrigemStyle(log.origem)}`}>
                {log.origem}
              </span>
              <span className={`shrink-0 text-xs ${getNivelStyle(log.nivel)}`}>
                [{log.nivel}]
              </span>
              <div className="text-slate-200">
                <span className="text-white font-medium">{log.mensagem}</span>
                {log.detalhe && (
                  <span className="text-[#8892B0] ml-2 text-xs">
                    -- {log.detalhe}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
