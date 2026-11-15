import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { ZonaCorporalBiometrica, TelemetriaPressaoArterial } from '../types';

export interface HoloAstronaut3DProps {
  rotacaoAngulo: number; // em graus
  onRotacaoChange?: (novoAngulo: number) => void;
  fadigaScore: number;
  pressaoArterial: TelemetriaPressaoArterial;
  zonasCorporais: ZonaCorporalBiometrica[];
  zonaSelecionadaId: string | null;
  onSelecionarZona: (zona: ZonaCorporalBiometrica) => void;
  modoRaioX?: boolean;
}

interface Node3DDef {
  id: string;
  zonaId: string;
  label: string;
  position: THREE.Vector3;
}

export const HoloAstronaut3D: React.FC<HoloAstronaut3DProps> = ({
  rotacaoAngulo,
  onRotacaoChange,
  fadigaScore,
  pressaoArterial,
  zonasCorporais,
  zonaSelecionadaId,
  onSelecionarZona,
  modoRaioX = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvas2dRef = useRef<HTMLCanvasElement>(null);

  const isDraggingRef = useRef<boolean>(false);
  const startDragXRef = useRef<number>(0);
  const startAngleRef = useRef<number>(0);

  const isHipertenso = pressaoArterial.status === 'HIPERTENSAO_CRITICA';

  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const projectedNodesRef = useRef<
    {
      id: string;
      zona: ZonaCorporalBiometrica;
      sx: number;
      sy: number;
      sz: number;
      label: string;
      color: string;
      isSelected: boolean;
    }[]
  >([]);

  // Obter cores oficiais da missão
  const getZoneColor = useCallback((nivel?: 'NORMAL' | 'ALERTA' | 'CRITICO') => {
    if (nivel === 'CRITICO') return '#EF4444';
    if (nivel === 'ALERTA') return '#F59E0B';
    return '#10B981';
  }, []);

  // Interações de Mouse Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startDragXRef.current = e.clientX;
    startAngleRef.current = rotacaoAngulo;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current && onRotacaoChange) {
      const deltaX = e.clientX - startDragXRef.current;
      const novo = (startAngleRef.current + deltaX * 0.8 + 360) % 360;
      onRotacaoChange(novo);
    } else {
      // Detecção de hover sobre os nós
      const container = mountRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const hit = projectedNodesRef.current.find((node) => {
        const dist = Math.hypot(mouseX - node.sx, mouseY - node.sy);
        return dist <= 20;
      });
      setHoveredNodeId(hit ? hit.id : null);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = (e: React.MouseEvent) => {
    const container = mountRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const clickedNode = projectedNodesRef.current.find((node) => {
      const dist = Math.hypot(mouseX - node.sx, mouseY - node.sy);
      return dist <= 24;
    });

    if (clickedNode) {
      onSelecionarZona(clickedNode.zona);
    }
  };

  // Suporte a Touch em dispositivos móveis
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      startDragXRef.current = e.touches[0].clientX;
      startAngleRef.current = rotacaoAngulo;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDraggingRef.current && onRotacaoChange && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - startDragXRef.current;
      const novo = (startAngleRef.current + deltaX * 0.8 + 360) % 360;
      onRotacaoChange(novo);
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 440;
    const height = 480;

    // 1. Cena Three.js
    const scene = new THREE.Scene();

    // 2. Câmera Perspectiva
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 5.2);

    // 3. Renderizador WebGL
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Shader Holográfico Transparente Azul (Inspirado no Homem Vitruviano Médico Holográfico)
    const holoVertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const holoFragmentShader = `
      uniform vec3 uColor;
      uniform vec3 uRimColor;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uFresnelPower;
      uniform float uScanlineDensity;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Efeito Fresnel Transparente de Vidro / Energia
        float fresnel = 1.0 - clamp(abs(dot(normal, viewDir)), 0.0, 1.0);
        fresnel = pow(fresnel, uFresnelPower);

        // Linhas de varredura holográfica vertical (Scanlines futuristas)
        float scanline = sin(vWorldPosition.y * uScanlineDensity - uTime * 4.0) * 0.08 + 0.92;

        // Combinação de cor do núcleo azul profundo com borda ciano vibrante
        vec3 finalColor = mix(uColor * 0.45, uRimColor * 1.5, fresnel) * scanline;
        finalColor += uRimColor * pow(fresnel, 2.5) * 0.75;

        float alpha = clamp(0.22 + fresnel * 0.78, 0.0, 1.0) * uOpacity;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const holoMaterial = new THREE.ShaderMaterial({
      vertexShader: holoVertexShader,
      fragmentShader: holoFragmentShader,
      uniforms: {
        uColor: { value: new THREE.Color(modoRaioX ? 0x0088cc : 0x0055ff) },
        uRimColor: { value: new THREE.Color(modoRaioX ? 0x00ffff : 0x38bdf8) },
        uTime: { value: 0 },
        uOpacity: { value: modoRaioX ? 0.75 : 0.88 },
        uFresnelPower: { value: modoRaioX ? 1.6 : 2.0 },
        uScanlineDensity: { value: 28.0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    // Material de Manguito de Pressão Arterial
    const cuffMaterial = new THREE.MeshBasicMaterial({
      color: isHipertenso ? 0xef4444 : 0x0099ff,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });

    // Grupo Raiz do Humanoide Anatômico
    const humanGroup = new THREE.Group();
    scene.add(humanGroup);

    // ---------------- CORPO HUMANO ANATÔMICO SEM ROUPA ----------------
    // Proporções atléticas do corpo humano (Homem Vitruviano em holograma médico)

    // A. Cabeça & Crânio
    const headGeom = new THREE.SphereGeometry(0.24, 24, 24);
    headGeom.scale(0.85, 1.15, 0.95);
    const headMesh = new THREE.Mesh(headGeom, holoMaterial);
    headMesh.position.set(0, 1.55, 0);
    humanGroup.add(headMesh);

    // Queixo / Mandíbula esculpida
    const chinGeom = new THREE.CylinderGeometry(0.12, 0.08, 0.16, 16);
    const chinMesh = new THREE.Mesh(chinGeom, holoMaterial);
    chinMesh.position.set(0, 1.38, 0.06);
    chinMesh.rotation.x = 0.2;
    humanGroup.add(chinMesh);

    // Pescoço
    const neckGeom = new THREE.CylinderGeometry(0.11, 0.13, 0.22, 16);
    const neckMesh = new THREE.Mesh(neckGeom, holoMaterial);
    neckMesh.position.set(0, 1.28, 0);
    humanGroup.add(neckMesh);

    // B. Tronco Superior / Peitorais & Costelas
    const chestGeom = new THREE.CylinderGeometry(0.38, 0.32, 0.45, 20);
    chestGeom.scale(1.15, 1.0, 0.75);
    const chestMesh = new THREE.Mesh(chestGeom, holoMaterial);
    chestMesh.position.set(0, 1.05, 0);
    humanGroup.add(chestMesh);

    // Peitoral Esquerdo e Direito (Músculos Peitorais)
    const pecGeom = new THREE.SphereGeometry(0.15, 16, 16);
    pecGeom.scale(1.1, 0.75, 0.55);
    const pecL = new THREE.Mesh(pecGeom, holoMaterial);
    pecL.position.set(0.14, 1.08, 0.14);
    humanGroup.add(pecL);

    const pecR = new THREE.Mesh(pecGeom, holoMaterial);
    pecR.position.set(-0.14, 1.08, 0.14);
    humanGroup.add(pecR);

    // C. Tronco Médio / Abdômen
    const absGeom = new THREE.CylinderGeometry(0.30, 0.29, 0.42, 20);
    absGeom.scale(1.0, 1.0, 0.7);
    const absMesh = new THREE.Mesh(absGeom, holoMaterial);
    absMesh.position.set(0, 0.65, 0);
    humanGroup.add(absMesh);

    // D. Pelve & Quadril
    const pelvisGeom = new THREE.CylinderGeometry(0.29, 0.32, 0.28, 20);
    pelvisGeom.scale(1.1, 1.0, 0.75);
    const pelvisMesh = new THREE.Mesh(pelvisGeom, holoMaterial);
    pelvisMesh.position.set(0, 0.32, 0);
    humanGroup.add(pelvisMesh);

    // E. Coluna Vertebral Luminescente (Visível no centro do corpo)
    const spineGroup = new THREE.Group();
    for (let i = 0; i < 14; i++) {
      const vertGeom = new THREE.CylinderGeometry(0.04, 0.045, 0.05, 12);
      const vertMesh = new THREE.Mesh(
        vertGeom,
        new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.65,
        })
      );
      vertMesh.position.set(0, 0.35 + i * 0.07, -0.06);
      spineGroup.add(vertMesh);
    }
    humanGroup.add(spineGroup);

    // F. Coração Biométrico Pulsante (Lado esquerdo do peito)
    const heartGeom = new THREE.SphereGeometry(0.075, 14, 14);
    heartGeom.scale(0.9, 1.1, 0.85);
    const heartMesh = new THREE.Mesh(
      heartGeom,
      new THREE.MeshBasicMaterial({
        color: isHipertenso ? 0xef4444 : 0x00f0ff,
        transparent: true,
        opacity: 0.9,
      })
    );
    heartMesh.position.set(0.12, 1.04, 0.06);
    humanGroup.add(heartMesh);

    // G. Membros Superiores (Braços Anatômicos em Pose A Aberta)
    // Braço Esquerdo
    const shoulderL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), holoMaterial);
    shoulderL.position.set(0.48, 1.18, 0);
    humanGroup.add(shoulderL);

    const bicepLGeom = new THREE.CylinderGeometry(0.09, 0.08, 0.38, 16);
    const bicepL = new THREE.Mesh(bicepLGeom, holoMaterial);
    bicepL.position.set(0.58, 0.98, 0);
    bicepL.rotation.z = -0.32;
    humanGroup.add(bicepL);

    // Manguito de Pressão Arterial no Braço Esquerdo (Anel Holo-Digital)
    const cuffGeom = new THREE.CylinderGeometry(0.115, 0.115, 0.14, 24);
    const cuffMesh = new THREE.Mesh(cuffGeom, cuffMaterial);
    cuffMesh.position.set(0.58, 1.0, 0);
    cuffMesh.rotation.z = -0.32;
    humanGroup.add(cuffMesh);

    const forearmLGeom = new THREE.CylinderGeometry(0.075, 0.065, 0.42, 16);
    const forearmL = new THREE.Mesh(forearmLGeom, holoMaterial);
    forearmL.position.set(0.72, 0.65, 0.04);
    forearmL.rotation.z = -0.38;
    humanGroup.add(forearmL);

    const handLGeom = new THREE.SphereGeometry(0.06, 12, 12);
    handLGeom.scale(1.2, 1.5, 0.6);
    const handL = new THREE.Mesh(handLGeom, holoMaterial);
    handL.position.set(0.83, 0.38, 0.06);
    handL.rotation.z = -0.35;
    humanGroup.add(handL);

    // Braço Direito
    const shoulderR = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), holoMaterial);
    shoulderR.position.set(-0.48, 1.18, 0);
    humanGroup.add(shoulderR);

    const bicepRGeom = new THREE.CylinderGeometry(0.09, 0.08, 0.38, 16);
    const bicepR = new THREE.Mesh(bicepRGeom, holoMaterial);
    bicepR.position.set(-0.58, 0.98, 0);
    bicepR.rotation.z = 0.32;
    humanGroup.add(bicepR);

    const forearmRGeom = new THREE.CylinderGeometry(0.075, 0.065, 0.42, 16);
    const forearmR = new THREE.Mesh(forearmRGeom, holoMaterial);
    forearmR.position.set(-0.72, 0.65, 0.04);
    forearmR.rotation.z = 0.38;
    humanGroup.add(forearmR);

    const handRGeom = new THREE.SphereGeometry(0.06, 12, 12);
    handRGeom.scale(1.2, 1.5, 0.6);
    const handR = new THREE.Mesh(handRGeom, holoMaterial);
    handR.position.set(-0.83, 0.38, 0.06);
    handR.rotation.z = 0.35;
    humanGroup.add(handR);

    // H. Membros Inferiores (Pernas Anatômicas)
    // Perna Esquerda
    const thighLGeom = new THREE.CylinderGeometry(0.14, 0.11, 0.65, 18);
    const thighL = new THREE.Mesh(thighLGeom, holoMaterial);
    thighL.position.set(0.18, -0.12, 0);
    thighL.rotation.z = -0.06;
    humanGroup.add(thighL);

    const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.10, 14, 14), holoMaterial);
    kneeL.position.set(0.19, -0.48, 0.02);
    humanGroup.add(kneeL);

    const calfLGeom = new THREE.CylinderGeometry(0.10, 0.075, 0.65, 18);
    const calfL = new THREE.Mesh(calfLGeom, holoMaterial);
    calfL.position.set(0.19, -0.85, 0);
    humanGroup.add(calfL);

    const footLGeom = new THREE.BoxGeometry(0.10, 0.07, 0.22);
    const footL = new THREE.Mesh(footLGeom, holoMaterial);
    footL.position.set(0.20, -1.22, 0.07);
    humanGroup.add(footL);

    // Perna Direita
    const thighRGeom = new THREE.CylinderGeometry(0.14, 0.11, 0.65, 18);
    const thighR = new THREE.Mesh(thighRGeom, holoMaterial);
    thighR.position.set(-0.18, -0.12, 0);
    thighR.rotation.z = 0.06;
    humanGroup.add(thighR);

    const kneeR = new THREE.Mesh(new THREE.SphereGeometry(0.10, 14, 14), holoMaterial);
    kneeR.position.set(-0.19, -0.48, 0.02);
    humanGroup.add(kneeR);

    const calfRGeom = new THREE.CylinderGeometry(0.10, 0.075, 0.65, 18);
    const calfR = new THREE.Mesh(calfRGeom, holoMaterial);
    calfR.position.set(-0.19, -0.85, 0);
    humanGroup.add(calfR);

    const footRGeom = new THREE.BoxGeometry(0.10, 0.07, 0.22);
    const footR = new THREE.Mesh(footRGeom, holoMaterial);
    footR.position.set(-0.20, -1.22, 0.07);
    humanGroup.add(footR);

    // I. Matriz Interna de Bio-Partículas / DNA Neural (Luz interna subindo)
    const particleCount = 70;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 0.45;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 2.8 + 0.2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleMesh = new THREE.Points(particleGeom, particleMat);
    humanGroup.add(particleMesh);

    // J. Base Emissora Holográfica no Piso
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, -1.35, 0);
    baseGroup.rotation.x = Math.PI / 2;

    const ringGeom1 = new THREE.RingGeometry(1.05, 1.08, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0099ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    baseGroup.add(new THREE.Mesh(ringGeom1, ringMat1));

    const ringGeom2 = new THREE.RingGeometry(0.72, 0.74, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    baseGroup.add(new THREE.Mesh(ringGeom2, ringMat2));
    scene.add(baseGroup);

    // K. Disco de Varredura Laser de Telemetria
    const scanGeom = new THREE.RingGeometry(0.01, 0.95, 32);
    const scanMat = new THREE.MeshBasicMaterial({
      color: modoRaioX ? 0x00ffff : 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const scanMesh = new THREE.Mesh(scanGeom, scanMat);
    scanMesh.rotation.x = Math.PI / 2;
    scene.add(scanMesh);

    // 5. Definição dos 6 Nós Biométricos em Coordenadas 3D Locais do Humanoide
    const nodeDefs: Node3DDef[] = [
      { id: 'zona-cabeca', zonaId: 'zona-cabeca', label: 'CÓRTEX // HUD', position: new THREE.Vector3(0, 1.58, 0.26) },
      { id: 'zona-coracao', zonaId: 'zona-coracao', label: 'CORAÇÃO', position: new THREE.Vector3(0.12, 1.05, 0.20) },
      { id: 'zona-braco-esq', zonaId: 'zona-braco-esq', label: 'MANGUITO ESQ', position: new THREE.Vector3(0.58, 1.0, 0.15) },
      { id: 'zona-coluna', zonaId: 'zona-coluna', label: 'COLUNA', position: new THREE.Vector3(0, 0.85, -0.22) },
      { id: 'zona-maos', zonaId: 'zona-maos', label: 'MOTRICIDADE', position: new THREE.Vector3(0.83, 0.38, 0.10) },
      { id: 'zona-pernas', zonaId: 'zona-pernas', label: 'CIRCULAÇÃO', position: new THREE.Vector3(0.19, -0.48, 0.14) },
    ];

    let animId: number;
    let clock = new THREE.Clock();

    // 6. Loop de Animação e Renderização em 60 FPS
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Levitação suave em microgravidade
      const floatY = Math.sin(elapsedTime * 1.8) * 0.06;
      const pitchSway = Math.sin(elapsedTime * 1.2) * 0.015;
      const rollSway = Math.cos(elapsedTime * 1.4) * 0.012;

      humanGroup.position.y = floatY;
      humanGroup.rotation.x = pitchSway;
      humanGroup.rotation.z = rollSway;

      // Rotação em 360 graus sincronizada com o estado
      const yawRad = (rotacaoAngulo * Math.PI) / 180;
      humanGroup.rotation.y = yawRad;

      // Pulsação do Coração
      const heartPulse = 1.0 + Math.sin(elapsedTime * 6.5) * 0.12;
      heartMesh.scale.set(heartPulse, heartPulse, heartPulse);

      // Pulsação do Manguito de Pressão se Hipertenso
      if (isHipertenso) {
        const cuffAlertPulse = 1.0 + Math.sin(elapsedTime * 10.0) * 0.14;
        cuffMesh.scale.set(cuffAlertPulse, 1.0, cuffAlertPulse);
        cuffMaterial.color.setHex(0xef4444);
      } else {
        cuffMesh.scale.set(1.0, 1.0, 1.0);
        cuffMaterial.color.setHex(0x0099ff);
      }

      // Varredura Laser Subindo e Descendo
      const scanY = Math.sin(elapsedTime * 1.5) * 1.45 + 0.15;
      scanMesh.position.y = scanY;

      // Giro da Base Holográfica
      baseGroup.rotation.z = elapsedTime * 0.4;

      // Atualizar Uniforms do Shader
      holoMaterial.uniforms.uTime.value = elapsedTime;

      // Renderizar Cena 3D
      renderer.render(scene, camera);

      // 7. Projeção dos Nós Biométricos 3D -> Tela 2D (Overlay Técnico)
      const canvas2d = canvas2dRef.current;
      if (canvas2d) {
        const ctx2d = canvas2d.getContext('2d');
        if (ctx2d) {
          ctx2d.clearRect(0, 0, width, height);

          const currentProjected: {
            id: string;
            zona: ZonaCorporalBiometrica;
            sx: number;
            sy: number;
            sz: number;
            label: string;
            color: string;
            isSelected: boolean;
          }[] = [];

          nodeDefs.forEach((ndef) => {
            const zona = zonasCorporais.find((z) => z.id === ndef.zonaId);
            if (!zona) return;

            // Converter ponto local do humanoide para espaço global com rotação e flutuação
            const worldPos = ndef.position.clone();
            humanGroup.localToWorld(worldPos);

            // Projetar para espaço de tela (NDC -> Pixels)
            const projected = worldPos.clone().project(camera);
            const sx = ((projected.x + 1) / 2) * width;
            const sy = ((-projected.y + 1) / 2) * height;
            const sz = projected.z;

            const isSelected = zonaSelecionadaId === zona.id;
            const isHovered = hoveredNodeId === ndef.id;
            const cor = getZoneColor(zona.nivelFadiga);

            currentProjected.push({
              id: ndef.id,
              zona,
              sx,
              sy,
              sz,
              label: ndef.label,
              color: cor,
              isSelected,
            });

            // Se o nó estiver voltado para a frente da visão (Z relativo)
            if (projected.z < 1.0) {
              ctx2d.save();
              ctx2d.shadowColor = cor;
              ctx2d.shadowBlur = isSelected ? 18 : isHovered ? 14 : 8;

              // Anel pulsante
              const pulseR = (isSelected ? 9 : 6) + Math.sin(elapsedTime * 6.0) * 2;
              ctx2d.strokeStyle = cor;
              ctx2d.lineWidth = isSelected ? 2.5 : 1.5;
              ctx2d.beginPath();
              ctx2d.arc(sx, sy, pulseR, 0, Math.PI * 2);
              ctx2d.stroke();

              // Ponto central
              ctx2d.fillStyle = cor;
              ctx2d.beginPath();
              ctx2d.arc(sx, sy, isSelected ? 5 : 4, 0, Math.PI * 2);
              ctx2d.fill();

              // Linha técnica de chamada com etiqueta
              const tagX = sx + (ndef.position.x >= 0 ? 38 : -38);
              const tagY = sy - 14;

              ctx2d.strokeStyle = isSelected ? '#FFFFFF' : 'rgba(56, 189, 248, 0.45)';
              ctx2d.lineWidth = 1;
              ctx2d.beginPath();
              ctx2d.moveTo(sx, sy);
              ctx2d.lineTo(tagX, tagY);
              ctx2d.lineTo(tagX + (ndef.position.x >= 0 ? 46 : -46), tagY);
              ctx2d.stroke();

              ctx2d.fillStyle = isSelected ? '#FFFFFF' : '#38BDF8';
              ctx2d.font = 'bold 9px JetBrains Mono, monospace';
              ctx2d.textAlign = ndef.position.x >= 0 ? 'left' : 'right';
              ctx2d.fillText(`${ndef.label} [${zona.percentual}%]`, tagX + (ndef.position.x >= 0 ? 4 : -4), tagY - 2);

              ctx2d.restore();
            }
          });

          projectedNodesRef.current = currentProjected;
        }
      }
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 440;
      camera.aspect = newW / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, height);
      if (canvas2dRef.current) {
        canvas2dRef.current.width = newW;
        canvas2dRef.current.height = height;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      holoMaterial.dispose();
      cuffMaterial.dispose();
      scene.clear();
    };
  }, [rotacaoAngulo, isHipertenso, modoRaioX, zonasCorporais, zonaSelecionadaId, hoveredNodeId, getZoneColor]);

  return (
    <div
      ref={mountRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full max-w-[440px] h-[480px] flex items-center justify-center select-none overflow-hidden ${
        hoveredNodeId ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'
      }`}
      title="Arraste para girar o corpo humano holográfico 360° ou clique nos nós biométricos"
    >
      {/* Canvas 2D Overlay para Linhas Técnicas de HUD e Textos dos Nós */}
      <canvas
        ref={canvas2dRef}
        width={440}
        height={480}
        className="absolute inset-0 pointer-events-none z-10"
      />
    </div>
  );
};
