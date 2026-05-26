import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProgramsView from './components/ProgramsView';
import SportsView from './components/SportsView';
import JoinView from './components/JoinView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedDetailId, setSelectedDetailId] = useState<string | undefined>(undefined);

  // Hash route parsing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // remove '#'
      if (!hash) {
        setCurrentView('home');
        setSelectedDetailId(undefined);
        return;
      }

      // Check split for child indices
      if (hash.startsWith('programs-')) {
        const progId = hash.replace('programs-', '');
        setCurrentView('programs');
        setSelectedDetailId(progId);
      } else if (hash.startsWith('sports-')) {
        const sportId = hash.replace('sports-', '');
        setCurrentView('sports');
        setSelectedDetailId(sportId);
      } else if (['home', 'about', 'programs', 'sports', 'join', 'contact'].includes(hash)) {
        setCurrentView(hash);
        setSelectedDetailId(undefined);
      } else {
        setCurrentView('home');
        setSelectedDetailId(undefined);
      }
    };

    // Parse once on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when navigating inside app
  const navigateTo = (view: string, detailId?: string) => {
    let targetHash = view;
    if (detailId) {
      targetHash = `${view}-${detailId}`;
    }
    window.location.hash = targetHash;
    setCurrentView(view);
    setSelectedDetailId(detailId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-brand-black flex flex-col font-sans select-none antialiased">
      {/* Structural Header Navigation */}
      <Navbar currentView={currentView} onNavigate={(v, id) => navigateTo(v, id)} />

      {/* Main Content Area Views Switchboard */}
      <main className="flex-grow pt-28 md:pt-32">
        {currentView === 'home' && (
          <HomeView onNavigate={(view, detailId) => navigateTo(view, detailId)} />
        )}
        {currentView === 'about' && (
          <AboutView onNavigate={(view) => navigateTo(view)} />
        )}
        {currentView === 'programs' && (
          <ProgramsView
            onNavigate={(view, detailId) => navigateTo(view, detailId)}
            initialSelectedId={selectedDetailId}
          />
        )}
        {currentView === 'sports' && (
          <SportsView
            onNavigate={(view, detailId) => navigateTo(view, detailId)}
            initialSelectedId={selectedDetailId}
          />
        )}
        {currentView === 'join' && (
          <JoinView onNavigate={(view) => navigateTo(view)} />
        )}
        {currentView === 'contact' && (
          <ContactView onNavigate={(view) => navigateTo(view)} />
        )}
      </main>

      {/* Structured Footer coordinates and tags */}
      <Footer onNavigate={(v) => navigateTo(v)} />
    </div>
  );
}
