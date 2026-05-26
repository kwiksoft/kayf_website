import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, MapPin, UserCheck, ShieldAlert, ArrowRight, Check } from 'lucide-react';
import { sportsData } from '../data';
import { SportDetail } from '../types';

interface SportsViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  initialSelectedId?: string;
}

export default function SportsView({ onNavigate, initialSelectedId }: SportsViewProps) {
  const [selectedId, setSelectedId] = useState(initialSelectedId || sportsData[0].id);

  // Sync with parental state if clicked from home page
  useEffect(() => {
    if (initialSelectedId) {
      setSelectedId(initialSelectedId);
    }
  }, [initialSelectedId]);

  const activeSport = sportsData.find(s => s.id === selectedId) || sportsData[0];

  const handleSportChange = (id: string) => {
    setSelectedId(id);
    const viewer = document.getElementById('sport-detail-header-trigger');
    if (viewer) {
      viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAction = () => {
    // Navigate to Joint Us form and prefill sport if possible
    onNavigate('join');
    // Scroll to Join Us form
    setTimeout(() => {
      const el = document.getElementById('join-us-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div 
      className="font-sans text-brand-black bg-[#FDFDFB] bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508615070457-7baebe4003ab?auto=format&fit=crop&w=1200&q=80')" }}
    >
      {/* Absolute ultra-faint masking shield layer */}
      <div className="absolute inset-0 bg-gray-50/96 mix-blend-multiply z-0"></div>

      {/* HEADER HERO */}
      <section 
        className="relative bg-cover bg-center pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-150/60 flex items-center justify-center overflow-hidden z-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1600')` }}
      >
        {/* Dark overlay mask */}
        <div className="absolute inset-0 bg-slate-900/65 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3 font-sans">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="w-4 h-[1px] bg-brand-sandal"></div>
            <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Sporting Ecosystem</span>
          </div>
          <h1 className="font-display font-semibold text-2xl sm:text-4xl tracking-tight text-white leading-tight">
            Multi-Sport Development Pathways
          </h1>
          <p className="text-[11px] sm:text-xs text-white/90 max-w-2xl mx-auto leading-relaxed font-sans">
            Honoring traditional sports heritages alongside contemporary pathways. Facilitating structured muscle learning, reflexes, spatial coordination, and robust discipline boundaries.
          </p>
        </div>
      </section>

      {/* CORE SPORTS BOARD */}
      <section id="sport-detail-header-trigger" className="py-12 bg-transparent relative z-10 scroll-mt-24 border-b border-gray-150/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sidebar list handler */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 h-fit relative z-10">
              <div className="p-4 bg-[#FDFDFB]/95 rounded-sm border border-gray-250/90 relative z-10">
                <h3 className="text-[10px] font-bold text-brand-black uppercase tracking-widest mb-4 pl-1">Sports Disciplines</h3>
                <div className="space-y-1.5">
                  {sportsData.map((sport) => {
                    const isSelected = sport.id === selectedId;
                    return (
                      <button
                        key={sport.id}
                        onClick={() => handleSportChange(sport.id)}
                        className={`w-full text-left px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                            : 'bg-white text-gray-700 hover:text-brand-blue hover:bg-brand-sky/10 border-gray-200/85'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-brand-sandal' : 'text-gray-400'}`}>
                            {sport.num}
                          </span>
                          <span className="font-sans text-[11px] font-bold tracking-wider leading-none pt-0.5">{sport.name}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-brand-sandal' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Aesthetic Cultural callout (especially important for Silambam) */}
              <div className="p-4 bg-[#FDFDFB]/95 rounded-sm border border-gray-250/90 text-left space-y-2 relative z-10">
                <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[9px] font-bold bg-brand-sandal/15 text-amber-800 uppercase font-mono border border-brand-sandal/20">
                  Tamil Heritage Integration
                </span>
                <p className="text-[10px] text-gray-500 leading-relaxed font-sans">
                  KAYF integrates local martial heritages such as Silambam as complete modern sports, reflecting Tamil-rooted institutional design codes that align identity with progression.
                </p>
              </div>
            </div>

            {/* Main content display details panel */}
            <div className="lg:col-span-8 text-left space-y-10 relative z-10">
              
              {/* Header Title blocks */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] font-bold bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-sm">
                    {`SPORT ${activeSport.num}`}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase font-bold">Kalgreen Youth Foundation</span>
                </div>
                
                <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-brand-black leading-tight">
                  {activeSport.name} Program
                </h2>
                
                <h3 className="font-display font-medium text-lg text-brand-blue italic tracking-tight leading-relaxed">
                  &ldquo;{activeSport.heroTagline}&rdquo;
                </h3>
                
                <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase font-bold mt-1">
                  {activeSport.heroSub}
                </p>
              </div>

              {/* General sport overview */}
              <div className="p-6 bg-[#FDFDFB]/95 rounded-sm border border-gray-200/90 space-y-3 relative z-10">
                <h4 className="font-display font-medium text-[10px] uppercase tracking-widest text-brand-black font-mono font-bold">Overview</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans font-light">
                  {activeSport.overview}
                </p>
              </div>

              {/* What makes this sport unique */}
              <div className="space-y-4 relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  {activeSport.importanceTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  {activeSport.importanceList.map((imp, idx) => (
                    <div key={idx} className="p-4 rounded-sm border border-gray-200 bg-[#FDFDFB]/95 flex items-start space-x-2.5 relative z-10">
                      <span className="w-5 h-5 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 border border-brand-green/10">
                        {`✓`}
                      </span>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">{imp}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Areas breakdowns */}
              <div className="space-y-4 relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  Development Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {activeSport.focusAreas.map((area, idx) => (
                    <div key={idx} className="bg-[#FDFDFB]/95 p-5 rounded-sm border border-gray-200/90 space-y-2 relative z-10">
                      <h5 className="font-display font-semibold text-xs tracking-wider uppercase text-brand-blue">{area.title}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audiences segments */}
              <div className="space-y-4 relative z-10 font-sans">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  Audience Pathways &amp; Direct Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {activeSport.forWhom.map((whom, idx) => (
                    <div key={idx} className="bg-[#FDFDFB]/95 p-4 rounded-sm border border-gray-200 space-y-1 text-xs font-sans relative z-10">
                      <p className="font-semibold text-brand-black tracking-wide text-sm">{whom.category}</p>
                      <p className="text-gray-500 leading-relaxed">{whom.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training methodology steps list */}
              <div className="space-y-4 bg-brand-blue/5 p-6 rounded-sm border border-brand-blue/10 text-left font-sans">
                <h4 className="font-sans font-semibold text-base text-brand-black">
                  Our Training &amp; Development Approach
                </h4>
                <ul className="space-y-4 pt-1 text-xs text-gray-500">
                  {activeSport.approach.map((app, idx) => (
                    <li key={idx} className="flex items-start space-x-3 leading-relaxed">
                      <span className="w-5 h-5 rounded-none bg-brand-sky border border-brand-blue/10 text-brand-blue font-bold font-mono text-[9px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes list layout */}
              <div className="space-y-4 relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  Key Participant Outcomes
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2 text-xs text-gray-500 relative z-10">
                  {activeSport.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start space-x-2 bg-[#FDFDFB]/95 p-3 rounded-sm border border-gray-200 relative z-10">
                      <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ecosystem path descriptor & Facility context notes */}
              {activeSport.facilityNote && (
                <div className="p-4 bg-brand-sky/10 rounded-sm border border-brand-sky/15 text-xs text-gray-600 leading-relaxed flex items-start space-x-2.5 relative z-10">
                  <MapPin className="w-4.5 h-4.5 flex-shrink-0 text-brand-blue mt-0.5" />
                  <div>
                    <h5 className="font-bold text-brand-black">Facility &amp; Court Setup Notes</h5>
                    <p className="mt-0.5 font-sans text-xs text-gray-500 leading-relaxed">{activeSport.facilityNote}</p>
                  </div>
                </div>
              )}

              {/* Institutional choice notes ("Why this sport") */}
              <div className="p-4 bg-[#FDFDFB]/95 rounded-sm border border-gray-200 text-xs text-gray-500 leading-relaxed flex items-start space-x-2.5 relative z-10">
                <Award className="w-4.5 h-4.5 flex-shrink-0 text-brand-sandal mt-0.5" />
                <div>
                  <h5 className="font-semibold text-brand-black">Institutional Rationale</h5>
                  <p className="mt-0.5 font-sans text-gray-500 leading-relaxed">{activeSport.whyThisSport}</p>
                </div>
              </div>

              {/* CTA trigger panel */}
              <div className="p-8 bg-brand-black text-white rounded-sm border border-gray-200/10 space-y-4 text-center relative z-10">
                <p className="text-brand-sandal text-[10px] font-bold uppercase tracking-widest font-mono">Sport Enquiry</p>
                <h4 className="font-display font-semibold text-lg sm:text-xl text-white tracking-tight">{activeSport.ctaText}</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto font-sans leading-relaxed">
                  Submit an application under our centralized Student / Athlete cohort. Please ensure to select {activeSport.name} in the Sport of Interest drop-down.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleAction}
                    className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <span>{activeSport.ctaButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
