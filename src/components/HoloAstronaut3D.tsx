import React, { useRef, useEffect } from 'react';
import { ZonaCorporalBiometrica, TelemetriaPressaoArterial } from '../types';

interface HoloAstronaut3DProps {
  rotacaoAngulo: number; // em graus
  fadigaScore: number;
  pressaoArterial: TelemetriaPressaoArterial;
  zonasCorporais: ZonaCorporalBiometrica[];
  zonaSelecionadaId: string | null;
  onSelecionarZona: (zona: ZonaCorporalBiometrica) => void;
  modoRaioX?: boolean;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Polygon3D {
  pts: Point3D[];
  color: string;
  stroke: string;
  isVisor?: boolean;
  isCuff?: boolean;
}

export const HoloAstronaut3D: React.FC<HoloAstronaut3DProps> = ({
  rotacaoAngulo,
  fadigaScore,
  pressaoArterial,
  zonasCorporais,
  zonaSelecionadaId,
  onSelecionarZona,
  modoRaioX = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animTimeRef = useRef<number>(0);

  const isHipertenso = pressaoArterial.status === 'HIPERTENSAO_CRITICA';

  // Obter cores de estado baseadas na fadiga
  const getZoneColor = (nivel: 'NORMAL' | 'ALERTA' | 'CRITICO') => {
    if (nivel === 'CRITICO') return '#EF4444';
    if (nivel === 'ALERTA') return '#F59E0B';
    return '#10B981';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      animTimeRef.current += 1;
      const t = animTimeRef.current;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2 + 10;

      // Limpar com fundo escuro aeroespacial profundo
      ctx.clearRect(0, 0, width, height);

      // Efeito de levitação gravitacional suave (Floating astronaut)
      const floatOffset = Math.sin(t * 0.04) * 8;
      const pitchRad = (8 * Math.PI) / 180; // leve inclinação de 8 graus para ver o topo em perspectiva
      const yawRad = (rotacaoAngulo * Math.PI) / 180;

      // Função de Projeção 3D -> 2D
      const project = (p: Point3D) => {
        // 1. Rotação em Y (Yaw)
        const x1 = p.x * Math.cos(yawRad) + p.z * Math.sin(yawRad);
        const z1 = -p.x * Math.sin(yawRad) + p.z * Math.cos(yawRad);

        // 2. Rotação em X (Pitch suave)
        const y2 = p.y * Math.cos(pitchRad) - z1 * Math.sin(pitchRad);
        const z2 = p.y * Math.sin(pitchRad) + z1 * Math.cos(pitchRad);

        // 3. Flutuação microgravitacional
        const y3 = y2 + floatOffset;

        // 4. Projeção em Perspectiva
        const fov = 380;
        const scale = fov / (fov + z2 + 100);

        return {
          sx: cx + x1 * scale,
          sy: cy + y3 * scale,
          sz: z2,
          scale,
        };
      };

      // 1. Desenhar Emissor Holográfico Circular no Piso (Holo-Emitter Ring)
      const drawEmitterBase = () => {
        const baseRadius = 110;
        ctx.save();
        ctx.lineWidth = 1.5;

        // Anel elíptico principal no chão
        ctx.strokeStyle = modoRaioX ? 'rgba(0, 255, 255, 0.4)' : 'rgba(0, 153, 255, 0.4)';
        ctx.beginPath();
        for (let a = 0; a <= 360; a += 10) {
          const ar = (a * Math.PI) / 180;
          const p = project({ x: Math.cos(ar) * baseRadius, y: 195, z: Math.sin(ar) * baseRadius });
          if (a === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        ctx.closePath();
        ctx.stroke();

        // Anel interno giratório
        const spinA = t * 0.02;
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        for (let a = 0; a <= 360; a += 15) {
          const ar = (a * Math.PI) / 180 + spinA;
          const p = project({ x: Math.cos(ar) * (baseRadius * 0.7), y: 195, z: Math.sin(ar) * (baseRadius * 0.7) });
          if (a === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // Raios de luz verticais subindo do emissor holográfico
        for (let i = 0; i < 4; i++) {
          const a = (i * 90 * Math.PI) / 180 + spinA;
          const pBottom = project({ x: Math.cos(a) * (baseRadius * 0.85), y: 195, z: Math.sin(a) * (baseRadius * 0.85) });
          const pTop = project({ x: Math.cos(a) * (baseRadius * 0.85), y: -190, z: Math.sin(a) * (baseRadius * 0.85) });

          const beamGrad = ctx.createLinearGradient(pBottom.sx, pBottom.sy, pTop.sx, pTop.sy);
          beamGrad.addColorStop(0, 'rgba(0, 153, 255, 0.3)');
          beamGrad.addColorStop(1, 'rgba(0, 153, 255, 0)');
          ctx.strokeStyle = beamGrad;
          ctx.beginPath();
          ctx.moveTo(pBottom.sx, pBottom.sy);
          ctx.lineTo(pTop.sx, pTop.sy);
          ctx.stroke();
        }

        ctx.restore();
      };

      drawEmitterBase();

      // 2. Modelo Geométrico Tridimensional do Fato de Astronauta (Wireframe & Solid Hologram)
      const polys: Polygon3D[] = [];

      // HELMET (Esfera / Cubo facetado do Capacete)
      const hSize = 28;
      const hY = -140;
      polys.push(
        // Frente do capacete / Visor
        {
          pts: [
            { x: -hSize * 0.8, y: hY - hSize * 0.7, z: hSize * 0.9 },
            { x: hSize * 0.8, y: hY - hSize * 0.7, z: hSize * 0.9 },
            { x: hSize * 0.7, y: hY + hSize * 0.7, z: hSize * 0.9 },
            { x: -hSize * 0.7, y: hY + hSize * 0.7, z: hSize * 0.9 },
          ],
          color: 'rgba(217, 119, 6, 0.45)', // Dourado âmbar espacial
          stroke: '#38BDF8',
          isVisor: true,
        },
        // Topo do capacete
        {
          pts: [
            { x: -hSize, y: hY - hSize, z: -hSize * 0.6 },
            { x: hSize, y: hY - hSize, z: -hSize * 0.6 },
            { x: hSize * 0.8, y: hY - hSize * 0.7, z: hSize * 0.9 },
            { x: -hSize * 0.8, y: hY - hSize * 0.7, z: hSize * 0.9 },
          ],
          color: 'rgba(15, 37, 62, 0.75)',
          stroke: '#0099FF',
        },
        // Traseira do capacete
        {
          pts: [
            { x: -hSize, y: hY - hSize, z: -hSize * 0.9 },
            { x: hSize, y: hY - hSize, z: -hSize * 0.9 },
            { x: hSize, y: hY + hSize * 0.8, z: -hSize * 0.9 },
            { x: -hSize, y: hY + hSize * 0.8, z: -hSize * 0.9 },
          ],
          color: 'rgba(10, 25, 47, 0.85)',
          stroke: '#1E3A5F',
        }
      );

      // TORSO & PEITORAL (Tronco Pressurizado do Fato)
      const tW = 38;
      const tH = 75;
      const tY = -105;
      const tD = 24;

      polys.push(
        // Peitoral Frontal
        {
          pts: [
            { x: -tW, y: tY, z: tD },
            { x: tW, y: tY, z: tD },
            { x: tW * 0.8, y: tY + tH, z: tD * 0.8 },
            { x: -tW * 0.8, y: tY + tH, z: tD * 0.8 },
          ],
          color: 'rgba(15, 37, 62, 0.8)',
          stroke: '#38BDF8',
        },
        // Costas do Torso
        {
          pts: [
            { x: tW, y: tY, z: -tD },
            { x: -tW, y: tY, z: -tD },
            { x: -tW * 0.8, y: tY + tH, z: -tD * 0.8 },
            { x: tW * 0.8, y: tY + tH, z: -tD * 0.8 },
          ],
          color: 'rgba(10, 25, 47, 0.85)',
          stroke: '#1E3A5F',
        },
        // Lado Esquerdo do Torso
        {
          pts: [
            { x: tW, y: tY, z: tD },
            { x: tW, y: tY, z: -tD },
            { x: tW * 0.8, y: tY + tH, z: -tD * 0.8 },
            { x: tW * 0.8, y: tY + tH, z: tD * 0.8 },
          ],
          color: 'rgba(15, 37, 62, 0.7)',
          stroke: '#0099FF',
        },
        // Lado Direito do Torso
        {
          pts: [
            { x: -tW, y: tY, z: -tD },
            { x: -tW, y: tY, z: tD },
            { x: -tW * 0.8, y: tY + tH, z: tD * 0.8 },
            { x: -tW * 0.8, y: tY + tH, z: -tD * 0.8 },
          ],
          color: 'rgba(15, 37, 62, 0.7)',
          stroke: '#0099FF',
        }
      );

      // PLSS BACKPACK (Mochila de Oxigênio e Suporte de Vida Atrás do Torso)
      const bW = 32;
      const bH = 80;
      const bY = -115;
      const bZ = -44;

      polys.push({
        pts: [
          { x: -bW, y: bY, z: bZ },
          { x: bW, y: bY, z: bZ },
          { x: bW * 0.9, y: bY + bH, z: bZ },
          { x: -bW * 0.9, y: bY + bH, z: bZ },
        ],
        color: 'rgba(2, 6, 23, 0.9)',
        stroke: '#0099FF',
      });

      // BRAÇO ESQUERDO COM O MANGUITO DE TENSÃO ARTERIAL (Destaque Principal)
      // Ombro até cotovelo
      const cuffY = -68;
      polys.push(
        // Braço superior esquerdo
        {
          pts: [
            { x: tW + 2, y: tY + 8, z: 0 },
            { x: tW + 22, y: tY + 20, z: 4 },
            { x: tW + 20, y: tY + 55, z: 4 },
            { x: tW + 4, y: tY + 50, z: 0 },
          ],
          color: 'rgba(15, 37, 62, 0.7)',
          stroke: '#38BDF8',
        },
        // MANGUITO DE PRESSÃO ARTERIAL INTEGRADO (Cilindro luminoso)
        {
          pts: [
            { x: tW + 12, y: cuffY - 10, z: -10 },
            { x: tW + 28, y: cuffY - 6, z: 8 },
            { x: tW + 27, y: cuffY + 14, z: 8 },
            { x: tW + 11, y: cuffY + 10, z: -10 },
          ],
          color: isHipertenso ? 'rgba(239, 68, 68, 0.6)' : 'rgba(0, 153, 255, 0.5)',
          stroke: isHipertenso ? '#EF4444' : '#38BDF8',
          isCuff: true,
        },
        // Antebraço e luva esquerda
        {
          pts: [
            { x: tW + 20, y: tY + 55, z: 4 },
            { x: tW + 28, y: tY + 95, z: 12 },
            { x: tW + 18, y: tY + 98, z: 10 },
            { x: tW + 12, y: tY + 60, z: 2 },
          ],
          color: 'rgba(15, 37, 62, 0.65)',
          stroke: '#38BDF8',
        }
      );

      // BRAÇO DIREITO
      polys.push(
        {
          pts: [
            { x: -tW - 2, y: tY + 8, z: 0 },
            { x: -tW - 4, y: tY + 50, z: 0 },
            { x: -tW - 20, y: tY + 55, z: 4 },
            { x: -tW - 22, y: tY + 20, z: 4 },
          ],
          color: 'rgba(15, 37, 62, 0.7)',
          stroke: '#38BDF8',
        },
        {
          pts: [
            { x: -tW - 12, y: tY + 60, z: 2 },
            { x: -tW - 18, y: tY + 98, z: 10 },
            { x: -tW - 28, y: tY + 95, z: 12 },
            { x: -tW - 20, y: tY + 55, z: 4 },
          ],
          color: 'rgba(15, 37, 62, 0.65)',
          stroke: '#38BDF8',
        }
      );

      // PERNAS E BOTAS (Membros Inferiores com Juntas Articuladas)
      const legW = 16;
      // Perna Direita
      polys.push(
        {
          pts: [
            { x: -22, y: -25, z: 4 },
            { x: -22 + legW, y: -25, z: 4 },
            { x: -22 + legW, y: 55, z: 2 },
            { x: -22, y: 55, z: 2 },
          ],
          color: 'rgba(15, 37, 62, 0.7)',
          stroke: '#0099FF',
        },
        {
          pts: [
            { x: -23, y: 58, z: 2 },
            { x: -23 + legW, y: 58, z: 2 },
            { x: -23 + legW, y: 145, z: 0 },
            { x: -23, y: 145, z: 0 },
          ],
          color: 'rgba(15, 37, 62, 0.65)',
          stroke: '#0099FF',
        },
        // Bota Direita
        {
          pts: [
            { x: -25, y: 145, z: 0 },
            { x: -25 + legW + 4, y: 145, z: 0 },
            { x: -25 + legW + 6, y: 165, z: 14 },
            { x: -25, y: 165, z: 14 },
          ],
          color: 'rgba(2, 6, 23, 0.85)',
          stroke: '#38BDF8',
        }
      );

      // Perna Esquerda
      polys.push(
        {
          pts: [
            { x: 22 - legW, y: -25, z: 4 },
            { x: 22, y: -25, z: 4 },
            { x: 22, y: 55, z: 2 },
            { x: 22 - legW, y: 55, z: 2 },
          ],
          color: 'rgba(15, 37, 62, 0.7)',
          stroke: '#0099FF',
        },
        {
          pts: [
            { x: 23 - legW, y: 58, z: 2 },
            { x: 23, y: 58, z: 2 },
            { x: 23, y: 145, z: 0 },
            { x: 23 - legW, y: 145, z: 0 },
          ],
          color: 'rgba(15, 37, 62, 0.65)',
          stroke: '#0099FF',
        },
        // Bota Esquerda
        {
          pts: [
            { x: 25 - legW - 4, y: 145, z: 0 },
            { x: 25, y: 145, z: 0 },
            { x: 25, y: 165, z: 14 },
            { x: 25 - legW - 6, y: 165, z: 14 },
          ],
          color: 'rgba(2, 6, 23, 0.85)',
          stroke: '#38BDF8',
        }
      );

      // 3. Depth Sorting dos Polígonos (Painter's Algorithm)
      const projectedPolys = polys.map((poly) => {
        const projs = poly.pts.map(project);
        const avgZ = projs.reduce((acc, p) => acc + p.sz, 0) / projs.length;
        return { poly, projs, avgZ };
      });

      // Ordenar por profundidade (Z menor desenha primeiro, Z maior na frente)
      projectedPolys.sort((a, b) => a.avgZ - b.avgZ);

      // Desenhar Polígonos
      projectedPolys.forEach(({ poly, projs }) => {
        ctx.save();
        ctx.fillStyle = poly.color;
        ctx.strokeStyle = poly.stroke;
        ctx.lineWidth = poly.isCuff ? 2.5 : 1.5;

        if (poly.isCuff && isHipertenso) {
          ctx.shadowColor = '#EF4444';
          ctx.shadowBlur = 12;
        } else if (poly.isVisor) {
          ctx.shadowColor = '#0099FF';
          ctx.shadowBlur = 8;
        }

        ctx.beginPath();
        projs.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Se for o manguito, desenhar o display digital de pressão diretamente sobre a face 3D
        if (poly.isCuff) {
          const center = projs[0];
          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 10px JetBrains Mono, monospace';
          ctx.fillText(
            `${pressaoArterial.sistolica}/${pressaoArterial.diastolica}`,
            center.sx - 10,
            center.sy + 8
          );
        }

        ctx.restore();
      });

      // 4. Desenhar os 6 Nós Biométricos Holográficos Interativos
      const nodesData = [
        { zona: zonasCorporais[0], pos: { x: 0, y: -140, z: 28 }, label: 'CÓRTEX // HUD' },
        { zona: zonasCorporais[1], pos: { x: -6, y: -80, z: 24 }, label: 'CORAÇÃO' },
        { zona: zonasCorporais[2], pos: { x: tW + 20, y: cuffY + 2, z: 0 }, label: 'BRAÇO ESQ' },
        { zona: zonasCorporais[3], pos: { x: 0, y: -90, z: -25 }, label: 'COLUNA' },
        { zona: zonasCorporais[4], pos: { x: tW + 22, y: tY + 98, z: 10 }, label: 'MOTRICIDADE' },
        { zona: zonasCorporais[5], pos: { x: 18, y: 80, z: 0 }, label: 'G-SUIT' },
      ];

      nodesData.forEach(({ zona, pos, label }) => {
        if (!zona) return;
        const p = project(pos);
        const cor = getZoneColor(zona.nivelFadiga);
        const isSelected = zonaSelecionadaId === zona.id;

        ctx.save();
        ctx.shadowColor = cor;
        ctx.shadowBlur = isSelected ? 16 : 8;

        // Anel pulsante
        const pulseR = (isSelected ? 9 : 6) + Math.sin(t * 0.1) * 2;
        ctx.strokeStyle = cor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, pulseR * p.scale, 0, Math.PI * 2);
        ctx.stroke();

        // Ponto central
        ctx.fillStyle = cor;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 4 * p.scale, 0, Math.PI * 2);
        ctx.fill();

        // Linha técnica de chamada com etiqueta
        if (p.sz > -40) {
          const tagX = p.sx + (pos.x >= 0 ? 35 : -35);
          const tagY = p.sy - 15;

          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.beginPath();
          ctx.moveTo(p.sx, p.sy);
          ctx.lineTo(tagX, tagY);
          ctx.lineTo(tagX + (pos.x >= 0 ? 40 : -40), tagY);
          ctx.stroke();

          ctx.fillStyle = isSelected ? '#FFFFFF' : '#38BDF8';
          ctx.font = 'bold 9px JetBrains Mono, monospace';
          ctx.textAlign = pos.x >= 0 ? 'left' : 'right';
          ctx.fillText(`${label} [${zona.percentual}%]`, tagX + (pos.x >= 0 ? 4 : -4), tagY - 2);
        }

        ctx.restore();
      });

      // 5. Linha de Varredura Laser de Telemetria (Holo-Scan Beam)
      const scanLaserY = cy + Math.sin(t * 0.05) * 160;
      const laserGrad = ctx.createLinearGradient(0, scanLaserY, width, scanLaserY);
      laserGrad.addColorStop(0, 'rgba(0, 153, 255, 0)');
      laserGrad.addColorStop(0.5, modoRaioX ? 'rgba(0, 255, 255, 0.8)' : 'rgba(56, 189, 248, 0.8)');
      laserGrad.addColorStop(1, 'rgba(0, 153, 255, 0)');

      ctx.save();
      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#0099FF';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(30, scanLaserY);
      ctx.lineTo(width - 30, scanLaserY);
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotacaoAngulo, fadigaScore, pressaoArterial, zonasCorporais, zonaSelecionadaId, modoRaioX, isHipertenso]);

  return (
    <canvas
      ref={canvasRef}
      width={420}
      height={460}
      className="w-full h-auto max-h-[460px] cursor-grab active:cursor-grabbing select-none"
    />
  );
};
