import React from 'react';
import { useOrbit } from '../context/OrbitContext';
import { ShieldCheck, Cpu, Radio, ZoomIn } from 'lucide-react';

export const Footer: React.FC = () => {
  const { isEdgeMode, escalaZoom, setEscalaZoom } = useOrbit();

  return (
    <footer className="w-full bg-[#060F1E] border-t border-[#1E3A5F] px-4 py-2.5 font-mono text-xs text-[#8892B0] select-none">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left: Engine Mode (Offline Resilient / Local Edge Sync) */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-2.5 py-1 bg-[#0A192F] border border-[#1E3A5F] text-slate-200">
            <span className={`w-2 h-2 rounded-full ${
              isEdgeMode ? 'bg-[#38BDF8]' : 'bg-[#10B981]'
            }`}></span>
            <span className="font-bold tracking-wider text-xs">
              {isEdgeMode 
                ? 'ENGINE MODE: LOCAL EDGE SYNC ACTIVE (OFFLINE RESILIENT)' 
                : 'ENGINE MODE: DUAL-HYBRID API CONNECTED (PHP/NODE)'}
            </span>
          </div>

          <span className="hidden sm:inline text-[#1E3A5F]">|</span>
          <span className="hidden sm:inline font-semibold">ZERO-FAILOVER BUS</span>
        </div>

        {/* Center: Aerospace Telemetry Integrity */}
        <div className="hidden lg:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>HEURISTIC: SENSORLESS MOTOR ANALYSIS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#10B981]" />
            <span>SYNC FREQUENCY: 100Hz</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>CIRCADIAN FAIL-SAFE: ACTIVE</span>
          </div>
        </div>

        {/* Right: Zoom Scale & NASA Space Apps Challenge Credential */}
        <div className="flex items-center gap-3 text-right">
          <div className="flex items-center gap-1 text-[#38BDF8]">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>ESCALA: {Math.round(escalaZoom * 100)}%</span>
          </div>
          <span className="text-[#1E3A5F]">|</span>
          <span className="text-white font-bold">ORBIT-IQ: CORE SYNC</span>
          <span className="text-[#1E3A5F]">|</span>
          <span>NASA SPACE APPS CHALLENGE</span>
        </div>
      </div>
    </footer>
  );
};
