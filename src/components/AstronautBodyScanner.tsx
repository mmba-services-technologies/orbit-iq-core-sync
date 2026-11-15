import React, { useState, useEffect } from 'react';
import { useOrbit } from '../context/OrbitContext';
import { ZonaCorporalBiometrica } from '../types';
import { HoloAstronaut3D } from './HoloAstronaut3D';
import { 
  ShieldAlert, 
  Activity, 
  Rotate3d, 
  Play, 
  Pause, 
  AlertTriangle, 
  Heart, 
  Gauge, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Maximize2
} from 'lucide-react';

export const AstronautBodyScanner: React.FC = () => {
  const { 
    astronautaAtivo, 
    pressaoArterial, 
    aferirPressaoArterial, 
    zonasCorporais, 
    modoContencaoAtivo 
  } = useOrbit();

  const [rotacaoAtiva, setRotacaoAtiva] = useState(true);
  const [anguloRotacao, setAnguloRotacao] = useState(0);
  const [zonaSelecionada, setZonaSelecionada] = useState<ZonaCorporalBiometrica | null>(null);
  const [modoVisualizacao, setModoVisualizacao] = useState<'HOLOGRAFICO' | 'RAIO_X'>('HOLOGRAFICO');

  // Rotação orbital contínua suave em 360 graus
  useEffect(() => {
    if (!rotacaoAtiva) return;
    const interval = setInterval(() => {
      setAnguloRotacao((prev) => (prev + 0.6) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [rotacaoAtiva]);

  // Zona ativa padrão: Braço Esquerdo (Manguito de Pressão)
  useEffect(() => {
    if (!zonaSelecionada && zonasCorporais.length > 0) {
      setZonaSelecionada(zonasCorporais[2]);
    }
  }, [zonasCorporais, zonaSelecionada]);

  const getColorClass = (nivel: 'NORMAL' | 'ALERTA' | 'CRITICO') => {
    if (nivel === 'CRITICO') return {
      fill: '#EF4444',
      stroke: '#EF4444',
      bg: 'bg-[#EF4444]/20',
      text: 'text-[#EF4444]',
      border: 'border-[#EF4444]',
      badge: 'bg-[#EF4444] text-white',
      glow: 'shadow-[0_0_15px_rgba(239,68,68,0.8)]',
    };
    if (nivel === 'ALERTA') return {
      fill: '#F59E0B',
      stroke: '#F59E0B',
      bg: 'bg-[#F59E0B]/20',
      text: 'text-[#F59E0B]',
      border: 'border-[#F59E0B]',
      badge: 'bg-[#F59E0B] text-black',
      glow: 'shadow-[0_0_15px_rgba(245,158,11,0.8)]',
    };
    return {
      fill: '#10B981',
      stroke: '#10B981',
      bg: 'bg-[#10B981]/20',
      text: 'text-[#10B981]',
      border: 'border-[#10B981]',
      badge: 'bg-[#10B981] text-black',
      glow: 'shadow-[0_0_15px_rgba(16,185,129,0.8)]',
    };
  };

  const isHipertenso = pressaoArterial.status === 'HIPERTENSAO_CRITICA';

  return (
    <div className={`p-4 md:p-5 border transition-colors ${
      modoContencaoAtivo || isHipertenso ? 'bg-[#251C30] border-[#EF4444]' : 'bg-[#0F253E] border-[#1E3A5F]'
    }`}>
      {/* Alerta Crítico de Hipertensão no Braço Esquerdo */}
      {isHipertenso && (
        <div className="mb-4 p-3.5 bg-[#EF4444]/25 border-2 border-[#EF4444] text-white text-xs md:text-sm font-mono flex items-center justify-between gap-3 animate-pulse">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#EF4444] shrink-0" />
            <div>
              <strong className="tracking-wider text-[#EF4444] text-sm md:text-base">
                ALERTA MÉDICO DE HIPERTENSÃO SEVERA NO BRAÇO ESQUERDO ({pressaoArterial.sistolica}/{pressaoArterial.diastolica} mmHg)
              </strong>
              <div className="text-slate-200 text-xs mt-0.5">
                PARADA OPERACIONAL IMEDIATA EXIGIDA. Sobrecarga cardiovascular aguda detectada no traje espacial.
              </div>
            </div>
          </div>
          <span className="px-3.5 py-1.5 bg-[#EF4444] text-black font-bold text-xs uppercase tracking-wider shrink-0">
            PARADA OBRIGATÓRIA
          </span>
        </div>
      )}

      {/* Header do Scanner 3D */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-[#1E3A5F] gap-2 font-mono">
        <div className="flex items-center gap-2.5">
          <Activity className="w-5 h-5 text-[#38BDF8]" />
          <div>
            <span className="font-bold text-sm md:text-base text-white tracking-wider">
              HOLOGRAMA BIOMÉDICO 3D // CORPO HUMANO ANATÔMICO EM ROTAÇÃO 360°
            </span>
            <div className="text-xs text-[#8892B0]">
              Mapeamento anatômico de fadiga em tempo real de {astronautaAtivo.nome} ({astronautaAtivo.indicativo})
            </div>
          </div>
        </div>

        {/* Controles de Rotação 360° e Modo de Visão */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#060F1E] border border-[#1E3A5F] p-0.5 text-xs">
            <button
              onClick={() => setModoVisualizacao('HOLOGRAFICO')}
              className={`px-2.5 py-1 font-bold transition-colors ${
                modoVisualizacao === 'HOLOGRAFICO' ? 'bg-[#0099FF] text-white' : 'text-[#8892B0]'
              }`}
            >
              HOLOGRÁFICO
            </button>
            <button
              onClick={() => setModoVisualizacao('RAIO_X')}
              className={`px-2.5 py-1 font-bold transition-colors ${
                modoVisualizacao === 'RAIO_X' ? 'bg-[#0099FF] text-white' : 'text-[#8892B0]'
              }`}
            >
              RAIO-X
            </button>
          </div>

          <div className="flex items-center gap-2 bg-[#060F1E] border border-[#1E3A5F] p-1 text-xs">
            <Rotate3d className="w-4 h-4 text-[#38BDF8] ml-1.5" />
            <span className="text-slate-300 font-bold px-1">{Math.round(anguloRotacao)}°</span>
            <button
              onClick={() => setRotacaoAtiva(!rotacaoAtiva)}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold transition-colors ${
                rotacaoAtiva 
                  ? 'bg-[#0099FF] text-white' 
                  : 'bg-[#1E3A5F] text-[#8892B0] hover:text-white'
              }`}
            >
              {rotacaoAtiva ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{rotacaoAtiva ? 'PAUSAR' : 'GIRAR 360°'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Holograma 3D do Boneco Astronauta com Levitação vs Diagnóstico */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Lado Esquerdo (6 cols): O Boneco 3D do Astronauta em Traje Espacial com Rotação Real */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center bg-[#030712] border border-[#1E3A5F] p-4 min-h-[480px] overflow-hidden">
          {/* Grid Orbital e Efeito Volumétrico de Fundo */}
          <div className="absolute inset-0 bg-grid-aerospace opacity-25 pointer-events-none"></div>

          {/* Anéis de Escaneamento Holográfico Tridimensional */}
          <div className="absolute w-80 h-80 border border-[#0099FF]/25 rounded-full pointer-events-none animate-spin" style={{ animationDuration: '45s' }}></div>
          <div className="absolute w-96 h-96 border border-[#38BDF8]/15 rounded-full pointer-events-none"></div>

          {/* Badge de Ângulo e Iluminação Volumétrica */}
          <div className="absolute top-3 left-3 bg-[#0F253E]/90 backdrop-blur border border-[#1E3A5F] px-2.5 py-1 text-xs font-mono text-[#8892B0] z-20">
            MOTOR: <strong className="text-white">3D ANATOMICAL HOLOGRAM // LEVITAÇÃO MICROGRAVITACIONAL</strong>
          </div>

          <div className="absolute top-3 right-3 bg-[#0F253E]/90 backdrop-blur border border-[#1E3A5F] px-2.5 py-1 text-xs font-mono z-20 flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${
              astronautaAtivo.indiceFadiga >= 75 ? 'bg-[#EF4444] animate-ping' : 
              astronautaAtivo.indiceFadiga >= 45 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'
            }`}></span>
            <span className="text-white font-bold">FADIGA: {astronautaAtivo.indiceFadiga}%</span>
          </div>

          {/* Componente 3D Real do Astronauta em Rotação com Levitação Microgravitacional */}
          <div className="relative w-full flex items-center justify-center select-none py-1">
            <HoloAstronaut3D
              rotacaoAngulo={anguloRotacao}
              onRotacaoChange={setAnguloRotacao}
              fadigaScore={astronautaAtivo.indiceFadiga}
              pressaoArterial={pressaoArterial}
              zonasCorporais={zonasCorporais}
              zonaSelecionadaId={zonaSelecionada?.id || null}
              onSelecionarZona={setZonaSelecionada}
              modoRaioX={modoVisualizacao === 'RAIO_X'}
            />
          </div>

          {/* Instrução Interativa de Rotação */}
          <div className="text-[11px] font-mono text-[#8892B0] mt-1 flex items-center gap-1.5 z-20">
            <Rotate3d className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Arraste com o mouse para girar 360° em qualquer direção | Clique nos nós para selecionar</span>
          </div>

          {/* Legenda de Cores Oficiais */}
          <div className="flex items-center gap-4 mt-2 bg-[#0F253E] border border-[#1E3A5F] px-3.5 py-1.5 text-xs font-mono z-20">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#10B981]"></span>
              <span className="text-white">Verde: Nominal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]"></span>
              <span className="text-[#F59E0B]">Amarelo: Alerta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]"></span>
              <span className="text-[#EF4444] font-bold">Vermelho: Parar Urgente!</span>
            </div>
          </div>
        </div>

        {/* Lado Direito (6 cols): Módulo do Braço Esquerdo (Tensão Arterial) & Diagnóstico das Zonas */}
        <div className="lg:col-span-6 space-y-4 font-mono">
          {/* Card em Destaque: Medidor de Tensão do Braço Esquerdo */}
          <div className={`p-4 border transition-all ${
            isHipertenso 
              ? 'bg-[#18121E] border-2 border-[#EF4444]' 
              : 'bg-[#060F1E] border border-[#1E3A5F]'
          }`}>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1E3A5F]">
              <div className="flex items-center gap-2">
                <Gauge className={`w-5 h-5 ${isHipertenso ? 'text-[#EF4444]' : 'text-[#38BDF8]'}`} />
                <span className="font-bold text-sm md:text-base text-white tracking-wider">
                  MANGUITO DO BRAÇO ESQUERDO // PRESSÃO ARTERIAL
                </span>
              </div>
              <span className={`text-xs px-2.5 py-0.5 font-bold ${
                isHipertenso ? 'bg-[#EF4444] text-white' : 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]'
              }`}>
                {pressaoArterial.status.replace(/_/g, ' ')}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 my-3 text-center">
              <div className="bg-[#0F253E] p-2.5 border border-[#1E3A5F]">
                <div className="text-xs text-[#8892B0] mb-0.5">SISTÓLICA</div>
                <div className={`text-3xl font-bold ${isHipertenso ? 'text-[#EF4444]' : 'text-white'}`}>
                  {pressaoArterial.sistolica}
                </div>
                <div className="text-[10px] text-[#8892B0]">mmHg</div>
              </div>

              <div className="bg-[#0F253E] p-2.5 border border-[#1E3A5F]">
                <div className="text-xs text-[#8892B0] mb-0.5">DIASTÓLICA</div>
                <div className={`text-3xl font-bold ${isHipertenso ? 'text-[#EF4444]' : 'text-white'}`}>
                  {pressaoArterial.diastolica}
                </div>
                <div className="text-[10px] text-[#8892B0]">mmHg</div>
              </div>

              <div className="bg-[#0F253E] p-2.5 border border-[#1E3A5F]">
                <div className="text-xs text-[#8892B0] mb-0.5">PULSO</div>
                <div className="text-3xl font-bold text-[#38BDF8]">
                  {pressaoArterial.pulsoBpm}
                </div>
                <div className="text-[10px] text-[#8892B0]">BPM</div>
              </div>
            </div>

            {/* Ação de Insuflação do Manguito */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#1E3A5F]/60">
              <span className="text-xs text-[#8892B0]">
                Última leitura: <strong className="text-white">{pressaoArterial.timestampUltimaMedicao}</strong>
              </span>

              <button
                onClick={aferirPressaoArterial}
                disabled={pressaoArterial.emMedicao}
                className={`px-3.5 py-1.5 text-xs font-bold transition-all flex items-center gap-2 ${
                  pressaoArterial.emMedicao 
                    ? 'bg-[#F59E0B] text-black animate-pulse cursor-wait' 
                    : 'bg-[#0099FF] hover:bg-[#0080dd] text-white'
                }`}
              >
                <Activity className={`w-3.5 h-3.5 ${pressaoArterial.emMedicao ? 'animate-spin' : ''}`} />
                <span>{pressaoArterial.emMedicao ? 'INSUFLANDO MANGUITO...' : 'AFERIR PRESSÃO AGORA'}</span>
              </button>
            </div>
          </div>

          {/* Seletor Rápido e Diagnóstico das Zonas Corporais */}
          <div className="bg-[#060F1E] border border-[#1E3A5F] p-3.5 space-y-2.5">
            <div className="text-xs text-[#8892B0] font-bold tracking-wider">
              INSPEÇÃO BIOMÉDICA POR REGIÃO DO CORPO HUMANO:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {zonasCorporais.map((zona) => {
                const color = getColorClass(zona.nivelFadiga);
                const isSelected = zonaSelecionada?.id === zona.id;

                return (
                  <button
                    key={zona.id}
                    onClick={() => setZonaSelecionada(zona)}
                    className={`p-2 text-left border transition-all text-xs font-mono ${
                      isSelected
                        ? `${color.bg} ${color.border} text-white`
                        : 'bg-[#0F253E] border-[#1E3A5F] text-[#8892B0] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        zona.nivelFadiga === 'CRITICO' ? 'bg-[#EF4444]' : 
                        zona.nivelFadiga === 'ALERTA' ? 'bg-[#F59E0B]' : 'bg-[#10B981]'
                      }`}></span>
                      <span className="font-bold">{zona.percentual}%</span>
                    </div>
                    <div className="truncate font-semibold text-white leading-tight">
                      {zona.nome.split('//')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Painel de Diagnóstico da Zona Selecionada */}
            {zonaSelecionada && (
              <div className={`p-3 border mt-2 ${getColorClass(zonaSelecionada.nivelFadiga).bg} ${getColorClass(zonaSelecionada.nivelFadiga).border}`}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white tracking-wide">{zonaSelecionada.nome}</span>
                  <span className={`px-2 py-0.5 text-xs font-bold ${getColorClass(zonaSelecionada.nivelFadiga).badge}`}>
                    {zonaSelecionada.nivelFadiga === 'CRITICO' ? 'PARAR URGENTE' : zonaSelecionada.nivelFadiga}
                  </span>
                </div>
                <div className="text-xs text-slate-200 leading-relaxed">
                  {zonaSelecionada.detalheClinico}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
