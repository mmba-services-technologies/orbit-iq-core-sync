import React from 'react';
import { OrbitProvider, useOrbit } from './context/OrbitContext';
import { Header } from './components/Header';
import { CrewView } from './components/CrewView';
import { MedicalView } from './components/MedicalView';
import { MissionControlView } from './components/MissionControlView';
import { SystemConsole } from './components/SystemConsole';
import { Footer } from './components/Footer';

const DashboardContent: React.FC = () => {
  const { perfilAtivo, modoContencaoAtivo, escalaZoom } = useOrbit();

  return (
    <div 
      style={{ zoom: escalaZoom }}
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        modoContencaoAtivo 
          ? 'bg-[#18121E] text-slate-100 bg-grid-alert' 
          : 'bg-[#060F1E] text-slate-100 bg-grid-aerospace'
      }`}
    >
      {/* Universal Technical Header */}
      <Header />

      {/* Primary Viewport Area (High-Density Operational Console) */}
      <main className="flex-1 p-3 md:p-5 max-w-[1720px] w-full mx-auto space-y-4">
        {/* Dynamic Viewport depending on Selected User Profile */}
        {perfilAtivo === 'crew' && <CrewView />}
        {perfilAtivo === 'medical' && <MedicalView />}
        {perfilAtivo === 'capcom' && <MissionControlView />}

        {/* Real-Time System Event Console (Always Active & Functional) */}
        <div className="pt-2">
          <SystemConsole />
        </div>
      </main>

      {/* Technical Offline-Resilient Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <OrbitProvider>
      <DashboardContent />
    </OrbitProvider>
  );
}
