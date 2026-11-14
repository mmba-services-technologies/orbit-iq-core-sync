import React, { useState, useEffect, useRef } from 'react';
import { useOrbit } from '../context/OrbitContext';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  PhoneCall, 
  Activity, 
  AudioWaveform, 
  AlertTriangle, 
  Camera, 
  CheckCircle2, 
  Cpu, 
  User, 
  Radio
} from 'lucide-react';

export const TelemedicineVideoFeed: React.FC = () => {
  const { 
    astronautaAtivo, 
    analiseVozIA, 
    iniciarChamadaTelemedicina, 
    encerrarChamadaTelemedicina, 
    alternarModoCamera, 
    delayHouston, 
    modoContencaoAtivo 
  } = useOrbit();

  const [micMuted, setMicMuted] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [waveSeed, setWaveSeed] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [webcamAtiva, setWebcamAtiva] = useState(false);

  // Animação contínua da onda de espectro de áudio da IA
  useEffect(() => {
    if (!analiseVozIA.emChamada) return;
    const interval = setInterval(() => {
      setWaveSeed((prev) => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, [analiseVozIA.emChamada]);

  // Lógica de webcam real opcional do navegador
  useEffect(() => {
    let stream: MediaStream | null = null;
    if (analiseVozIA.emChamada && analiseVozIA.modoCamera === 'WEBCAM') {
      navigator.mediaDevices?.getUserMedia({ video: true, audio: false })
        .then((s) => {
          stream = s;
          if (videoRef.current) {
            videoRef.current.srcObject = s;
          }
          setWebcamAtiva(true);
        })
        .catch(() => {
          setWebcamAtiva(false);
          alternarModoCamera();
        });
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((t) => t.stop());
        videoRef.current.srcObject = null;
      }
      setWebcamAtiva(false);
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  }, [analiseVozIA.emChamada, analiseVozIA.modoCamera, alternarModoCamera]);

  // Cálculo das barras do osciloscópio de fala
  const audioBars = Array.from({ length: 24 }).map((_, i) => {
    if (!analiseVozIA.emChamada || micMuted) return 8;
    const isFadiga = astronautaAtivo.indiceFadiga >= 75;
    const freq = isFadiga ? 0.3 : 0.8;
    const amplitude = isFadiga ? 24 : 48;
    const val = Math.abs(Math.sin((i + waveSeed) * freq) * amplitude) + 8;
    return Math.min(60, Math.round(val));
  });

  const isFadigaSevera = astronautaAtivo.indiceFadiga >= 75 || analiseVozIA.sindromeAstronautaRisco >= 70;

  return (
    <div className={`p-4 md:p-5 border font-mono transition-colors ${
      isFadigaSevera ? 'bg-[#251C30] border-[#EF4444]' : 'bg-[#0F253E] border-[#1E3A5F]'
    }`}>
      {/* Top Header da Telemedicina */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#1E3A5F] gap-2">
        <div className="flex items-center gap-2">
          <Video className="w-5 h-5 text-[#38BDF8]" />
          <div>
            <span className="font-bold text-sm md:text-base text-white tracking-wider">
              TELEMEDICINA ESPACIAL // CONSULTA CLÍNICA AO VIVO
            </span>
            <div className="text-xs text-[#8892B0]">
              Canal Criptografado DSN: Astronauta {astronautaAtivo.nome} ⟷ Dra. Elena Rostova (Houston Flight Surgeon)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-[#060F1E] border border-[#1E3A5F] px-2.5 py-1 text-[#F59E0B] flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#F59E0B]" />
            <span>DELAY HOUSTON: {delayHouston}</span>
          </span>

          {!analiseVozIA.emChamada ? (
            <button
              onClick={iniciarChamadaTelemedicina}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#10B981] hover:bg-[#0da070] text-black font-bold text-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>CONECTAR CONSULTA</span>
            </button>
          ) : (
            <button
              onClick={encerrarChamadaTelemedicina}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EF4444] hover:bg-[#dc2626] text-white font-bold text-xs transition-colors"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              <span>DESCONECTAR</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Tela de Vídeo com Astronauta em Traje vs IA de Análise de Voz e Síndrome */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Lado Esquerdo (7 cols): Janela de Transmissão de Vídeo */}
        <div className="lg:col-span-7 bg-[#030712] border border-[#1E3A5F] relative min-h-[340px] flex flex-col justify-between overflow-hidden">
          {/* Header do Feed de Vídeo */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-20 text-xs">
            <div className="flex items-center gap-2 bg-[#060F1E]/80 backdrop-blur px-2.5 py-1 border border-[#1E3A5F]">
              <span className={`w-2 h-2 rounded-full ${analiseVozIA.emChamada ? 'bg-[#EF4444] animate-ping' : 'bg-slate-500'}`}></span>
              <span className="text-white font-bold">{analiseVozIA.emChamada ? 'REC // LIVE FEED' : 'STANDBY'}</span>
              <span className="text-[#8892B0]">|</span>
              <span className="text-[#38BDF8]">1080p60 H.265</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={alternarModoCamera}
                title="Alternar entre simulação de cabine orbital e webcam real"
                className="bg-[#0F253E]/80 hover:bg-[#1E3A5F] text-slate-200 border border-[#1E3A5F] px-2 py-1 text-xs flex items-center gap-1"
              >
                <Camera className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{analiseVozIA.modoCamera === 'SIMULADO' ? 'USAR WEBCAM' : 'FEED ORBITAL'}</span>
              </button>
            </div>
          </div>

          {/* Área Central do Vídeo */}
          <div className="relative w-full h-full flex-1 flex items-center justify-center p-4">
            {/* Se Webcam ativa */}
            {analiseVozIA.modoCamera === 'WEBCAM' && webcamAtiva ? (
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover rounded-none"
              />
            ) : (
              /* Feed Simulado: Astronauta Fotorrealista em Fato Espacial na Cabine */
              <div className="relative w-full h-[300px] bg-[#030712] flex items-center justify-center border border-[#1E3A5F]/50 overflow-hidden">
                {/* Imagem Fotorrealista de Fundo do Astronauta */}
                <img 
                  src="/astronaut-suit.jpg" 
                  alt="Astronauta em Consulta Online - Telemedicina" 
                  className="w-full h-full object-cover object-top opacity-90 filter contrast-110"
                />

                {/* HUD Militar Aeroespacial Sobreposto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-grid-aerospace opacity-20 pointer-events-none"></div>
                <div className="absolute w-44 h-44 border border-[#0099FF]/40 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#0099FF]/20 pointer-events-none"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#0099FF]/20 pointer-events-none"></div>

                {/* Telemetria de Canto no Feed de Vídeo */}
                <div className="absolute bottom-3 left-3 bg-[#0F253E]/90 backdrop-blur border border-[#1E3A5F] px-3 py-1.5 z-10 font-mono">
                  <div className="text-white font-bold text-xs">
                    {astronautaAtivo.nome} ({astronautaAtivo.indicativo})
                  </div>
                  <div className="text-[10px] text-[#38BDF8]">
                    FATO ESPACIAL EVA MK-IV // ECLSS TELEMEDICINE BUS
                  </div>
                </div>

                {/* Picture-in-Picture: Houston Flight Surgeon */}
                <div className="absolute bottom-3 right-3 w-32 h-24 bg-[#0F253E] border border-[#0099FF] z-20 p-1.5 flex flex-col justify-between shadow-2xl">
                  <div className="text-[10px] text-[#38BDF8] font-bold">HOUSTON // SURGEON</div>
                  <div className="flex items-center justify-center flex-1">
                    <span className="text-xs text-white font-semibold">Dra. Rostova</span>
                  </div>
                  <div className="text-[9px] text-[#10B981] flex items-center gap-1 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span>LINK ATIVO (DSN)</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Barra de Controles da Chamada */}
          <div className="bg-[#0A192F] border-t border-[#1E3A5F] px-4 py-2 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMicMuted(!micMuted)}
                className={`p-2 border transition-colors ${
                  micMuted 
                    ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' 
                    : 'bg-[#060F1E] border-[#1E3A5F] text-slate-200 hover:text-white'
                }`}
                title={micMuted ? 'Desmutar Microfone' : 'Mutar Microfone'}
              >
                {micMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setVideoMuted(!videoMuted)}
                className={`p-2 border transition-colors ${
                  videoMuted 
                    ? 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]' 
                    : 'bg-[#060F1E] border-[#1E3A5F] text-slate-200 hover:text-white'
                }`}
                title={videoMuted ? 'Ligar Câmera' : 'Desligar Câmera'}
              >
                {videoMuted ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
              </button>
            </div>

            {/* Osciloscópio de Voz da IA ao Vivo */}
            <div className="flex items-center gap-1 h-8 px-2 bg-[#060F1E] border border-[#1E3A5F]">
              <span className="text-[10px] text-[#8892B0] mr-1 hidden sm:inline">VOZ:</span>
              {audioBars.map((h, idx) => (
                <div
                  key={idx}
                  className={`w-1 rounded-sm transition-all duration-75 ${
                    isFadigaSevera ? 'bg-[#EF4444]' : 'bg-[#0099FF]'
                  }`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Lado Direito (5 cols): IA Biométrica de Voz & Síndrome do Astronauta */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="bg-[#060F1E] border border-[#1E3A5F] p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E3A5F]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-bold text-xs md:text-sm text-white tracking-wider">
                  ANÁLISE NEURO-ACÚSTICA POR IA
                </span>
              </div>
              <span className="text-xs text-[#10B981] font-semibold">PROCESSANDO AO VIVO</span>
            </div>

            {/* Métrica 1: Velocidade de Fala */}
            <div className="p-2.5 bg-[#0F253E] border border-[#1E3A5F]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[#8892B0]">VELOCIDADE DE FALA (PPM):</span>
                <strong className={`text-sm ${
                  analiseVozIA.velocidadeFalaPPM < 90 ? 'text-[#EF4444]' : 'text-white'
                }`}>
                  {analiseVozIA.velocidadeFalaPPM} palavras/min
                </strong>
              </div>
              <div className="w-full bg-[#060F1E] h-1.5 border border-[#1E3A5F]">
                <div 
                  className={`h-full ${analiseVozIA.velocidadeFalaPPM < 90 ? 'bg-[#EF4444]' : 'bg-[#0099FF]'}`}
                  style={{ width: `${Math.min(100, (analiseVozIA.velocidadeFalaPPM / 150) * 100)}%` }}
                ></div>
              </div>
              <div className="text-[10px] text-[#8892B0] mt-1 flex justify-between">
                <span>Norma: 130-150 PPM</span>
                <span>{analiseVozIA.velocidadeFalaPPM < 90 ? 'Bradilalia Severa (Lentidão)' : 'Cadência Nominal'}</span>
              </div>
            </div>

            {/* Métrica 2: Tom de Voz & Micro-Tremor (Jitter) */}
            <div className="p-2.5 bg-[#0F253E] border border-[#1E3A5F]">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[#8892B0]">PITCH FUNDAMENTAL:</span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {analiseVozIA.tomVozHz} Hz
                  </div>
                </div>
                <div>
                  <span className="text-[#8892B0]">JITTER ACÚSTICO:</span>
                  <div className={`text-sm font-bold mt-0.5 ${
                    analiseVozIA.jitterAcusticoPercent > 5 ? 'text-[#EF4444]' : 'text-[#10B981]'
                  }`}>
                    {analiseVozIA.jitterAcusticoPercent}% (Tremor)
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-[#8892B0] mt-1">
                {analiseVozIA.monotoniaScore > 60 
                  ? 'Entonação vocal monótona detectada (Apatia depressiva de isolamento).' 
                  : 'Modulação e harmônicos vocais com dinâmica normal.'}
              </div>
            </div>

            {/* Métrica 3: Síndrome do Astronauta (Space Adaptation Syndrome - SAS) */}
            <div className={`p-3 border ${
              analiseVozIA.sindromeAstronautaRisco >= 70 ? 'bg-[#18121E] border-[#EF4444]' : 'bg-[#0F253E] border-[#1E3A5F]'
            }`}>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <AlertTriangle className={`w-3.5 h-3.5 ${
                    analiseVozIA.sindromeAstronautaRisco >= 70 ? 'text-[#EF4444]' : 'text-[#F59E0B]'
                  }`} />
                  SÍNDROME DO ASTRONAUTA (SAS):
                </span>
                <span className={`px-2 py-0.5 text-xs font-bold ${
                  analiseVozIA.sindromeAstronautaRisco >= 70 
                    ? 'bg-[#EF4444] text-white' 
                    : 'bg-[#1E3A5F] text-[#38BDF8]'
                }`}>
                  {analiseVozIA.sindromeAstronautaRisco}% RISCO
                </span>
              </div>

              <div className="text-xs text-slate-200 leading-relaxed mb-2">
                {analiseVozIA.diagnosticoClinico}
              </div>

              <div className="text-[10px] text-[#8892B0] border-t border-[#1E3A5F] pt-1.5 flex items-center justify-between">
                <span>DESVIO CEFÁLICO DE FLUIDOS:</span>
                <strong className={analiseVozIA.edemaFacialDetectado ? 'text-[#EF4444]' : 'text-[#10B981]'}>
                  {analiseVozIA.edemaFacialDetectado ? 'CONFIRMADO (EDEMA VISÍVEL)' : 'NEGATIVO'}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
