# 🛰️ ORBIT-IQ // CORE SYNC
### Motor Híbrido de Proteção Circadiana & Detecção Não-Invasiva de Fadiga Cognitiva para Tripulações Aeroespaciais
**NASA Space Apps Challenge** | *Arquitetura Operacional de Prontidão de Voo*

---

## 📋 Sumário Executivo

Em missões espaciais de longa duração (como a transição Terra-Marte e habitats lunares do Programa Artemis), a **fadiga cognitiva crônica** e a dessincronização circadiana representam um dos maiores riscos catastróficos para a vida da tripulação e o sucesso da missão. 

Tradicionalmente, a detecção de fadiga depende de:
1. **Bio-sensores intrusivos (wearables)** que causam dermatite de contato e geram atrito no dia a dia da tripulação;
2. **Câmeras de vigilância facial**, rejeitadas pelos astronautas por violarem a privacidade no ambiente de confinamento;
3. **Autoavaliações puramente subjetivas**, sistematicamente contaminadas pelo chamado **"Fator Omissão"** — onde o astronauta mascara o próprio cansaço por receio de ser retirado de caminhadas espaciais (EVAs) ou tarefas críticas de pilotagem.

O **ORBIT-IQ: CORE SYNC** introduz uma abordagem pioneira: uma **IA Sensorless (sem sensores invasivos)** de borda (*Edge Computing*) capaz de quantificar a fadiga neuromotora em tempo real por meio da cadência de digitação de relatórios operacionais (WPM, micro-latência entre teclas e taxa de erros), cruzando esses dados com o volume de tarefas e check-ins subjetivos.

Se a fadiga atingir o limiar crítico, a espaçonave **assume autonomamente a cabine** (ajustando o espectro de iluminação e adiando manobras arriscadas) com **0ms de latência**, sem depender do sinal da Terra, que pode levar de 5 a 20 minutos para chegar.

---

## 🎨 Identidade Visual e Filosofia de Design

O dashboard foi projetado com **autoridade aeroespacial máxima**, inspirado nos consoles de comando da **NASA Mission Control (JSC Houston)** e nos sistemas de aviônica da **SpaceX Crew Dragon**:
- **Densidade Técnica Cirúrgica:** Interface sóbria, de alta densidade informativa, sem gradientes chamativos de IA comercial ou sombras decorativas.
- **Modo Nominal (Operação Padrão):** Fundo Deep Space Navy (`#060F1E` / `#0A192F`), superfícies industriais chanfradas (`#0F253E`) com bordas técnicas de 1px em `#1E3A5F`, destaques em azul aeroespacial (`#0099FF` / `#38BDF8`) e verde institucional fosco (`#10B981`).
- **Modo de Contenção Circadiana (Transição de Emergência):** Ao atingir o limiar crítico (&ge; 75%) ou via simulação, a interface migra instantaneamente para o espectro de segurança circadiana (`#18121E`, painéis `#251C30`, acentos em Âmbar de Segurança `#F59E0B` e Vermelho Técnico `#EF4444`).

---

## 👥 Os 3 Perfis Operacionais (Viewport Role Switcher)

No topo da aplicação, o seletor rápido **VIEWPORT MODE** permite alternar instantaneamente a perspectiva entre os 3 atores reais do ecossistema da missão (sem tela de login ou fricção durante o pitch):

```
+---------------------------------------------------------------------------------------+
|  [1. ASTRONAUTA A BORDO]     |    [2. EQUIPA MÉDICA]        |  [3. COORDENAÇÃO CAPCOM]|
|  ONBOARD CREW (0ms LATENCY)  |    HOUSTON (-18m 42s DELAY)  |  MISSION CONTROL MCC-H  |
+---------------------------------------------------------------------------------------+
```

### 1. 🧑‍🚀 Perfil 1: Astronauta a Bordo (`ONBOARD CREW - REAL TIME`)
- **Foco:** Execução operacional e proteção autônoma imediata (0ms de latência local).
- **Scanner Anatômico 3D do Astronauta em Fato Espacial:**
  - Modelo tridimensional em rotação contínua de 360° com traje EVA/IVA completo (capacete com visor espelhado, juntas biomecânicas, botas pressurizadas e mochila de suporte de vida PLSS).
  - Mapeamento dinâmico de cores por zona: **Verde** (Nominal), **Amarelo** (Fadiga moderada) e **Vermelho** (Fadiga Crítica - Parar Urgente!).
  - **Medidor de Tensão Arterial no Braço Esquerdo:** Manguito braquial integrado no traje espacial com aferição em tempo real (`118/76 mmHg` nominal vs `165/106 mmHg` em crise hipertensiva). Se for detectada hipertensão, a aplicação emite o alarme **`ALERTA MÉDICO DE HIPERTENSÃO SEVERA: PARADA OPERACIONAL IMEDIATA`** e bloqueia tarefas manuais.
- **Canal de Telemedicina Houston & IA de Voz em Tempo Real:**
  - Videochamada criptografada de bordo com a equipa médica na Terra (comutação entre simulação de cabine orbital e webcam real do usuário).
  - Enquanto a chamada ocorre, um motor de IA analisa ao vivo:
    - **Velocidade de Fala (PPM):** Detecção de bradilalia e lentidão articulatória decorrente de exaustão.
    - **Tom de Voz & Jitter Acústico (%):** Osciloscópio espectral de áudio, micro-tremores de estresse vocal e monotonia depressiva.
    - **Síndrome do Astronauta (Space Adaptation Syndrome - SAS):** Probabilidade de risco, desorientação vestibular e edema facial por redistribuição cefálica de fluidos.
- **Terminal de Comando Interativo:** Área onde o tripulante digita relatórios de bordo e rotinas técnicas. O sistema captura cada pressionamento de tecla, calculando dinamicamente WPM, erros e latência.
- **Micro-Check-in Subjetivo de 30s:** Botões rápidos (`ÓTIMO`, `NEUTRO`, `EXAUSTO`).
- **Lista de Tarefas em Curso:** Exibe status, módulo e tempo estimado com travas autônomas.

### 2. 🩺 Perfil 2: Equipa Médica na Terra (`FLIGHT SURGEON / MEDICAL - HOUSTON`)
- **Foco:** Análise clínica longitudinal, auditoria do "Fator Omissão" e sincronização com retardo orbital.
- **Selo de Telemetria com Retardo:** Badge `TELEMETRY SYNC DELAY: -18m 42s`, simulando o tempo de viagem do sinal de rádio entre a Terra e Marte/Espaço Profundo.
- **Gráfico Vetorial Comparativo SVG:** Curva longitudinal comparando o **Índice de Fadiga Real (Sensorless Engine)** contra a **Autoavaliação Subjetiva** ao longo dos sóis da missão (SOL 138 ao SOL 142).
- **Auditoria do Fator Omissão:** Histórico clínico de incongruências (ex: dia em que o astronauta afirmou estar "ÓTIMO", mas o algoritmo registrou queda de 45% na velocidade motora e erros elevados).
- **Métricas de Débito Circadiano:** Horas acumuladas de débito de sono, vulnerabilidade a micro-sono e risco de lapsos de vigilância psicomotora.
- **Protocolos de Recuperação Assíncronos:** Envio de comandos médicos de Houston para a espaçonave (ex: `DELTA-CIRC-01` para atenuação noturna ou `RAPID-RESET-04` de 26 min conforme pesquisas da NASA Ames) com confirmação de uplink.

### 3. 📡 Perfil 3: Coordenação de Missão na Terra (`MISSION CONTROL / CAPCOM`)
- **Foco:** Gestão estratégica do cronograma orbital, risco operacional global e remanejamento de tripulação.
- **Matriz Consolidada da Tripulação:** Visão unificada de prontidão de voo para todos os tripulantes (Comandante Alex Vance, Especialista Marcus Chen, Engenheira Sarah Sato).
- **Cronograma de Operações Orbitais:** Linha do tempo de marcos críticos do dia (EVA, propulsores RCS, depurador de CO2 do suporte de vida ECLSS).
- **Painel de Auditoria de Decisões da IA:** Listagem das tarefas que o computador de bordo adiou para proteger a tripulação, permitindo que a coordenação na Terra:
  - **Aprove o novo horário seguro** sugerido pelo sistema;
  - **Execute Override Manual de CAPCOM**, se a exigência tática da missão justificar a assunção de risco.

---

## 🧮 O Motor Algorítmico (Sensorless Hybrid Heuristic)

O cálculo do **Índice de Fadiga Cognitiva (0 a 100%)** opera em tempo real no dashboard, atualizando-se conforme o astronauta digita no terminal ou conclui tarefas:

$$\text{Índice Final} = (\text{Carga Operacional} \times 0.5) + (\text{Deterioração Motora} \times 0.5) + \text{Penalidade do Fator Omissão}$$

Onde:
1. **Carga Operacional:** Proporção de tarefas críticas com risco de catástrofe pendentes no turno ativo;
2. **Deterioração Motora:** Queda de WPM em relação à linha de base do astronauta ($68 \text{ WPM}$) somada à multiplicação ponderada da taxa de correções mecânicas (backspaces);
3. **Fator Omissão:** Se o astronauta seleciona "ÓTIMO", mas o motor detecta digitação degradada ($< 35 \text{ WPM}$ ou erro $> 8\%$), uma penalidade imediata de $+18\%$ é aplicada pelo risco de mascaramento.

---

## 🛡️ Robustez Técnica e Modo Fallback Edge (Anti-Crash)

Projetado especificamente para ambientes de alta pressão como **bancas de jurados de hackathon** e conectividade espacial intermitente:

- **Serviço Centralizado (`src/services/api.ts`):** Preparado com rotas para integração com backends locais:
  - `PHP_API_URL` (`http://localhost:8000/api/tarefas.php` - Gestão de tarefas e MySQL);
  - `NODE_API_URL` (`http://localhost:3001/api/analisar-fadiga` - Inferência comportamental).
- **Mecanismo Edge Fail-Safe:** Se os servidores Node.js ou PHP não estiverem rodando localmente durante a apresentação, a aplicação **não falha, não quebra e não exibe alertas de erro vermelhos na tela**. Ela executa toda a heurística nativamente em memória no motor React e exibe discretamente no rodapé:
  `ENGINE MODE: LOCAL EDGE SYNC ACTIVE (OFFLINE RESILIENT)`.

---

## 💻 Tecnologias Empregadas

| Componente | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Framework** | React 19 + TypeScript | Interface reativa, modular e com tipagem estrita de dados aeroespaciais |
| **Estilização** | Tailwind CSS v4 | Estilização industrial cirúrgica, layout fixo de alta densidade |
| **Build & Dev** | Vite | Inicialização instantânea (`npm run dev`) e empacotamento ultraleve |
| **Ícones** | Lucide React | Simbologia técnica padronizada de controles de missão |
| **Gráficos** | SVG Nativo de Alta Precisão | Visualização longitudinal customizada com anotações de discrepância |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js**: Versão 18 ou superior instalada (testado e otimizado no Node 22).
- **NPM**: Gerenciador padrão de pacotes.

### Passo 1: Clonar e Acessar o Diretório
```bash
git clone https://github.com/seu-usuario/orbit-iq-core-sync.git
cd orbit-iq-core-sync
```

### Passo 2: Instalar as Dependências
```bash
npm install
```

### Passo 3: Executar em Modo de Desenvolvimento
```bash
npm run dev
```
*(Opcionalmente, `npm start` também está configurado para inicializar o servidor Vite).*

Abra seu navegador no endereço:
```
http://localhost:3000
```

### Passo 4: Build de Produção
Para verificar a integridade da tipagem TypeScript e gerar a versão otimizada de produção:
```bash
npm run build
```

---

## 🎙️ Roteiro Sugerido de Demonstração para os Jurados (Pitch de 3 Minutos)

1. **Introdução (30s):** Abra no **Perfil 1 (`ONBOARD CREW`)**. Aponte para o selo `SENSORLESS HYBRID ENGINE` e explique que o sistema monitora o cansaço do astronauta sem relógios desconfortáveis ou câmeras de vigilância.
2. **Scanner Anatômico 3D & Braço Esquerdo (45s):** 
   - Aponte para o modelo do astronauta em seu fato espacial girando em 360°.
   - Mostre o **Manguito de Pressão no Braço Esquerdo** medindo a tensão arterial em tempo real e as zonas coloridas (Verde = Nominal, Amarelo = Alerta, Vermelho = Parar Urgente).
   - Clique em **`AFERIR PRESSÃO AGORA`** para demonstrar a insuflação pneumática de 3s.
3. **Telemedicina ao Vivo & IA de Voz (30s):**
   - Clique na aba **`2. CONSULTA ONLINE AO VIVO & IA DE VOZ`** (ou conecte a chamada).
   - Mostre o osciloscópio de áudio em tempo real e os 3 indicadores da IA: Velocidade de fala (PPM), Jitter vocal (tremores) e risco da **Síndrome do Astronauta (SAS)**.
4. **Disparando a Anomalia (30s):** Clique no botão do cabeçalho **`FORÇAR ANOMALIA / FADIGA`**.
   - O corpo do astronauta no scanner entra em alerta vermelho;
   - O manguito do braço esquerdo dispara para **165/106 mmHg**, acionando o alarme: **`ALERTA MÉDICO DE HIPERTENSÃO SEVERA: PARADA OPERACIONAL IMEDIATA`**;
   - A IA de voz detecta bradilalia (fala lenta a 78 PPM) e risco de 91% na Síndrome do Astronauta;
   - A nave assume o controle da cabine e trava as tarefas críticas.
4. **Visão da Equipe Médica (30s):** Mude para a aba **`2. EQUIPA MÉDICA`**. Destaque o selo de atraso de `-18m 42s` e o gráfico comparativo SVG apontando a bandeira de **"FATOR OMISSÃO"** (quando o astronauta disse estar bem, mas a digitação provou o contrário). Clique no botão **`TRANSMITIR`** de um dos protocolos de Houston.
5. **Visão de Coordenação (30s):** Mude para a aba **`3. COORDENAÇÃO DE MISSÃO`**. Mostre a matriz consolidada da tripulação, o log da tarefa que foi adiada pela IA a bordo e clique em **`APROVAR NOVO HORÁRIO (14:00)`** para reorganizar a linha do tempo orbital.
6. **Conclusão (15s):** Aponte para o rodapé destacando o `ENGINE MODE: LOCAL EDGE SYNC ACTIVE`, reforçando que o sistema é 100% autônomo, seguro contra desconexões e pronto para missões em Marte.

---

## 🛰️ Estrutura de Diretórios

```
orbit-iq-core-sync/
├── public/                 # Favicon e metadados estáticos
├── src/
│   ├── components/         # Componentes especializados de autoridade aeroespacial
│   │   ├── Header.tsx            # Cabeçalho com role switcher, MET e botões de demo
│   │   ├── CrewView.tsx          # Perfil do Astronauta (Terminal, WPM, tarefas, micro-checkin)
│   │   ├── MedicalView.tsx       # Perfil Médico (Gráfico SVG, Fator Omissão, protocolos)
│   │   ├── MissionControlView.tsx# Perfil Capcom (Matriz de prontidão, cronograma Sol 142)
│   │   ├── SystemConsole.tsx     # Terminal Unix de telemetria e validação cruzada
│   │   └── Footer.tsx            # Rodapé com indicador de modo Edge offline resiliente
│   ├── context/
│   │   └── OrbitContext.tsx      # Motor reativo global e regras de fadiga do sistema
│   ├── services/
│   │   └── api.ts                # Conector PHP/Node com failover automático para Edge local
│   ├── types/
│   │   └── index.ts              # Tipagem estrita TypeScript (Astronauta, Tarefa, Log, etc.)
│   ├── App.tsx             # Orquestrador do layout principal
│   ├── index.css           # Estilos estruturais e paleta industrial aeroespacial
│   ├── main.tsx            # Ponto de entrada React 19
│   └── vite-env.d.ts       # Declarações de tipos do ambiente Vite
├── index.html              # HTML base com tipografia aeroespacial (JetBrains Mono & Inter)
├── package.json            # Configurações de dependências e scripts npm
├── tsconfig.json           # Configuração estrita do compilador TypeScript
└── vite.config.ts          # Configuração do Vite com Tailwind CSS
```

---

*Desenvolvido com precisão para o **NASA Space Apps Challenge**.*
