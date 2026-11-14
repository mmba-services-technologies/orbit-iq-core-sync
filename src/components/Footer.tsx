import React from 'react';
import { useOrbit } from '../context/OrbitContext';
import { ShieldCheck, Cpu, HardDrive, Wifi, Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  const { isEdgeMode, modoContencaoAtivo } = useOrbit();

  return (
    <footer className="w-full bg-[#060F1E] border-t border-[#1E3A5F] px-4 py-2 font-mono text-[10px] text-[#8892B0] select-none">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Left: Engine Mode (Offline Resilient / Local Edge Sync) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0A192F] border border-[#1E3A5F] text-slate-200">
            <span className={`w-1.5 h-1.5 rounded-full ${
              isEdgeMode ? 'bg-[#38BDF8]' : 'bg-[#10B981]'
            }`}></span>
            <span className="font-bold tracking-wider">
              {isEdgeMode 
                ? 'ENGINE MODE: LOCAL EDGE SYNC ACTIVE (OFFLINE RESILIENT)' 
                : 'ENGINE MODE: DUAL-HYBRID API CONNECTED (PHP/NODE)'}
            </span>
          </div>

          <span className="hidden sm:inline text-[#1E3A5F]">|</span>
          <span className="hidden sm:inline">ZERO-FAILOVER BUS</span>
        </div>

        {/* Center: Aerospace Telemetry Integrity */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-[#38BDF8]" />
            <span>HEURISTIC: SENSORLESS MOTOR ANALYSIS</span>
          </div>
          <div className="flex items-center gap-1">
            <Radio className="w-3 h-3 text-[#10B981]" />
            <span>SYNC FREQUENCY: 100Hz</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#38BDF8]" />
            <span>CIRCADIAN FAIL-SAFE: ACTIVE</span>
          </div>
        </div>

        {/* Right: Hackathon & Project Credentials */}
        <div className="flex items-center gap-2 text-right">
          <span className="text-white font-bold">ORBIT-IQ: CORE SYNC</span>
          <span className="text-[#1E3A5F]">|</span>
          <span>NASA SPACE APPS CHALLENGE</span>
        </div>
      </div>
    </footer>
  );
};
