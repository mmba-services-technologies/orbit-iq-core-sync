import React from 'react';
import { useOrbit } from '../context/OrbitContext';
import { PerfilUsuario } from '../types';
import { 
  ShieldAlert, 
  RotateCcw, 
  Activity, 
  Radio, 
  Cpu, 
  Clock, 
  User, 
  HeartPulse, 
  Compass, 
  AlertTriangle,
  Zap,
  ZoomIn
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    perfilAtivo, 
    setPerfilAtivo, 
    modoContencaoAtivo, 
    metTempo, 
    forcarAnomaliaFadiga, 
    resetarSistema,
    escalaZoom,
    setEscalaZoom,
    astronautaAtivo 
  } = useOrbit();

  const perfis: { id: PerfilUsuario; label: string; sub: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'crew', label: '1. ASTRONAUTA A BORDO', sub: 'ONBOARD CREW // REAL TIME (0ms)', icon: User },
    { id: 'medical', label: '2. EQUIPA MÉDICA', sub: 'FLIGHT SURGEON // HOUSTON (-18m)', icon: HeartPulse },
    { id: 'capcom', label: '3. COORDENAÇÃO DE MISSÃO', sub: 'CAPCOM // MISSION CONTROL', icon: Compass },
  ];

  return (
    <header className={`w-full border-b transition-colors duration-300 select-none ${
      modoContencaoAtivo 
        ? 'bg-[#18121E] border-[#F59E0B]/40 text-slate-100' 
        : 'bg-[#0A192F] border-[#1E3A5F] text-slate-100'
    }`}>
      {/* Top Banner Alert Bar when Containment Engaged */}
      {modoContencaoAtivo && (
        <div className="w-full bg-[#EF4444]/15 border-b border-[#EF4444]/40 px-4 py-2 flex items-center justify-between text-xs md:text-sm font-mono animate-pulse">
          <div className="flex items-center gap-2 text-[#EF4444]">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span className="font-bold tracking-wider">
              AVIONICS OVERRIDE ACTIVE // CONTENÇÃO CIRCADIANA DE EMERGÊNCIA ENGATADA
            </span>
            <span className="text-slate-300 hidden md:inline">
              | Risco de erro em comandos manuais &gt; 80%. Ações críticas bloqueadas pelo computador de bordo.
            </span>
          </div>
          <div className="text-[#F59E0B] font-bold tracking-wider text-xs md:text-sm">
            CABIN SPECTRAL SHIFT: 2700K (LOW-BLUE)
          </div>
        </div>
      )}

      {/* Main Header Row */}
      <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Branding & Sub-System Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-none border ${
              modoContencaoAtivo 
                ? 'bg-[#251C30] border-[#F59E0B] text-[#F59E0B]' 
                : 'bg-[#0F253E] border-[#0099FF] text-[#0099FF]'
            }`}>
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-widest text-lg text-white font-mono">
                  ORBIT-IQ
                </span>
                <span className="text-xs px-2 py-0.5 bg-[#060F1E] border border-[#1E3A5F] text-[#38BDF8] font-mono tracking-wider font-semibold">
                  CORE SYNC
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#8892B0] font-mono mt-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#10B981]"></span>
                <span className="tracking-wider">SENSORLESS HYBRID ENGINE</span>
                <span className="text-[#1E3A5F]">|</span>
                <span className="text-[#8892B0]">NASA SPACE APPS CHALLENGE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Viewport Switcher (Technical Role Tabs) */}
        <div className="flex items-center bg-[#060F1E] border border-[#1E3A5F] p-1 gap-1">
          <div className="px-2 py-1 text-xs text-[#8892B0] font-mono font-bold tracking-wider hidden xl:block">
            VIEWPORT:
          </div>
          {perfis.map((p) => {
            const Icon = p.icon;
            const isSelected = perfilAtivo === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPerfilAtivo(p.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-mono font-medium transition-all text-left border ${
                  isSelected
                    ? modoContencaoAtivo
                      ? 'bg-[#251C30] border-[#F59E0B] text-white'
                      : 'bg-[#0F253E] border-[#0099FF] text-white'
                    : 'bg-transparent border-transparent text-[#8892B0] hover:text-slate-200 hover:bg-[#0F253E]/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${
                  isSelected 
                    ? modoContencaoAtivo ? 'text-[#F59E0B]' : 'text-[#38BDF8]' 
                    : 'text-[#8892B0]'
                }`} />
                <div className="flex flex-col">
                  <span className="leading-tight font-bold tracking-wide">{p.label}</span>
                  <span className="text-[11px] text-[#8892B0] leading-none hidden lg:block">{p.sub}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Mission Elapsed Time, System Status, Zoom & Demo Controls */}
        <div className="flex items-center gap-2.5">
          {/* Mission Elapsed Time */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#060F1E] border border-[#1E3A5F] font-mono text-xs md:text-sm">
            <Clock className="w-4 h-4 text-[#38BDF8]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#8892B0] leading-none">MISSION TIME</span>
              <span className="font-bold text-white tracking-widest leading-tight">{metTempo}</span>
            </div>
          </div>

          {/* System Status Badge */}
          <div className={`px-3 py-1.5 border font-mono text-xs md:text-sm flex items-center gap-1.5 ${
            modoContencaoAtivo
              ? 'bg-[#251C30] border-[#EF4444] text-[#EF4444]'
              : 'bg-[#0F253E] border-[#10B981]/50 text-[#10B981]'
          }`}>
            <span className={`w-2.5 h-2.5 rounded-none ${
              modoContencaoAtivo ? 'bg-[#EF4444] animate-ping' : 'bg-[#10B981]'
            }`}></span>
            <span className="font-bold tracking-wider">
              {modoContencaoAtivo ? 'SYS_STATUS: INTERVENTION' : 'SYS_STATUS: NOMINAL'}
            </span>
          </div>

          {/* Zoom Controller (125% Default) */}
          <div className="hidden sm:flex items-center bg-[#060F1E] border border-[#1E3A5F] p-0.5 text-xs font-mono">
            <span className="text-[10px] text-[#8892B0] px-1.5 hidden xl:inline">ZOOM:</span>
            {[1.0, 1.25, 1.4].map((z) => (
              <button
                key={z}
                onClick={() => setEscalaZoom(z)}
                title={`Ajustar resolução para ${Math.round(z * 100)}%`}
                className={`px-1.5 py-1 text-xs font-bold transition-colors ${
                  escalaZoom === z
                    ? 'bg-[#0099FF] text-white'
                    : 'text-[#8892B0] hover:text-white'
                }`}
              >
                {Math.round(z * 100)}%
              </button>
            ))}
          </div>

          {/* Demonstration Quick Action Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={forcarAnomaliaFadiga}
              title="Disparar anomalia de fadiga extrema para demonstração aos jurados"
              className="flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-mono font-bold tracking-wide bg-[#251C30] hover:bg-[#352545] border border-[#F59E0B] text-[#F59E0B] transition-colors"
            >
              <Zap className="w-4 h-4 text-[#F59E0B]" />
              <span className="hidden sm:inline">FORÇAR ANOMALIA / FADIGA</span>
              <span className="sm:hidden">SIMULAR FADIGA</span>
            </button>

            <button
              onClick={resetarSistema}
              title="Restaurar parâmetros nominais"
              className="flex items-center gap-1 px-3 py-2 text-xs md:text-sm font-mono font-medium tracking-wide bg-[#0F253E] hover:bg-[#153457] border border-[#1E3A5F] text-[#8892B0] hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden md:inline">RESET</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
