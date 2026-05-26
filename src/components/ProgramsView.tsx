import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Target, FileText, CheckCircle, HelpCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { programsData } from '../data';
import { ProgramDetail } from '../types';

interface ProgramsViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  initialSelectedId?: string;
}

export default function ProgramsView({ onNavigate, initialSelectedId }: ProgramsViewProps) {
  const [selectedId, setSelectedId] = useState(initialSelectedId || programsData[0].id);

  // Sync if selected ID updates externally
  useEffect(() => {
    if (initialSelectedId) {
      setSelectedId(initialSelectedId);
    }
  }, [initialSelectedId]);

  const activeProgram = programsData.find(p => p.id === selectedId) || programsData[0];

  const handleProgramChange = (id: string) => {
    setSelectedId(id);
    const element = document.getElementById('program-detail-viewer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCTA = () => {
    // Navigate to Join Us
    onNavigate('join');
    // Scroll to form
    const formSec = document.getElementById('join-us-form-section');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="font-sans text-brand-black bg-[#FDFDFB] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80')" }}
    >
      {/* Absolute near-total white backdrop masking overlay layer right at the base */}
      <div className="absolute inset-0 bg-[#FDFDFB]/97 backdrop-blur-[1px] z-0"></div>

      {/* SECTION HERO */}
      <section 
        className="relative bg-cover bg-center pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-150/60 flex items-center justify-center overflow-hidden font-sans z-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1431324155629-1a6edd1dec1d?auto=format&fit=crop&q=80&w=1600')` }}
      >
        {/* Dark overlay mask */}
        <div className="absolute inset-0 bg-slate-900/65 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="w-4 h-[1px] bg-brand-sandal"></div>
            <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Our Framework</span>
          </div>
          <h1 className="font-display font-semibold text-2xl sm:text-4xl tracking-tight text-white leading-tight">
            Building Sporting Excellence Through Structured Development
          </h1>
          <p className="text-[11px] sm:text-xs text-white/90 max-w-2xl mx-auto leading-relaxed">
            From grassroots participation to high-performance outcomes, KAYF delivers professional, safe, and systematic development programs matching modern athletic parameters.
          </p>
        </div>
      </section>

      {/* CORE SPLIT READER */}
      <section id="program-detail-viewer" className="py-12 bg-transparent relative z-10 scroll-mt-24 border-b border-gray-150/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sidebar Controller */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 h-fit relative z-10">
              <div className="p-4 bg-[#FDFDFB]/95 rounded-sm border border-gray-250/90 relative z-10">
                <h3 className="text-[10px] font-bold text-brand-black uppercase tracking-widest mb-4 pl-1">Select Core Program</h3>
                <div className="space-y-1.5">
                  {programsData.map((prog) => {
                    const isSelected = prog.id === selectedId;
                    return (
                      <button
                        key={prog.id}
                        onClick={() => handleProgramChange(prog.id)}
                        className={`w-full text-left px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                          isSelected
                            ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                            : 'bg-white text-gray-700 hover:text-brand-blue hover:bg-brand-sky/10 border-gray-200/85'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-brand-sandal' : 'text-gray-400'}`}>
                            {prog.num}
                          </span>
                          <span className="font-sans text-[11px] font-bold tracking-wider leading-none pt-0.5">{prog.name}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-brand-sandal' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Informative Side Notice */}
              <div className="p-4 bg-[#FDFDFB]/95 rounded-sm border border-gray-250/90 text-left space-y-2 relative z-10">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm text-[9px] font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider font-mono">
                  Safeguards In Force
                </span>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  All programs operate under strictly certified coaches, validated sports equipment ratios, and documented safety protocols in line with national standards.
                </p>
              </div>
            </div>

            {/* Right Detailed Reader Board */}
            <div className="lg:col-span-8 text-left space-y-10 relative z-10">
              
              {/* Program Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] font-bold bg-brand-sandal/10 text-brand-sandal px-2.5 py-1 rounded-sm">
                    {`PROGRAM ${activeProgram.num}`}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase font-bold">Kalgreen Youth Foundation</span>
                </div>
                
                <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-brand-black leading-tight">
                  {activeProgram.name}
                </h2>
                
                <h3 className="font-display font-medium text-lg text-brand-blue italic tracking-tight leading-relaxed">
                  &ldquo;{activeProgram.heroTagline}&rdquo;
                </h3>
                
                <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase font-bold mt-1">
                  {activeProgram.heroSub}
                </p>
              </div>

              {/* Program Overview */}
              <div className="p-6 bg-[#FDFDFB]/95 rounded-sm border border-gray-200 space-y-3 relative z-10">
                <h4 className="font-display font-medium text-[10px] uppercase tracking-widest text-brand-black font-mono font-bold">General Overview</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                  {activeProgram.overview}
                </p>
              </div>

              {/* Why This Program Matters (with Growth Green Indicators) */}
              <div className="space-y-4">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  {activeProgram.importanceTitle}
                </h4>
                <ul className="space-y-3">
                  {activeProgram.importanceList.map((imp, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-gray-500 leading-relaxed">
                      {/* Growth Green success icon checkmark */}
                      <span className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-green/10">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-green" />
                      </span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Program Coverage grid layout */}
              <div className="space-y-6 relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  Program Coverage &amp; Technical Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {activeProgram.coverage.map((cov, cIdx) => (
                    <div key={cIdx} className="bg-[#FDFDFB]/95 p-5 rounded-sm border border-gray-200 space-y-3 relative z-10">
                      <h5 className="font-display font-semibold text-xs tracking-wider uppercase text-brand-blue">{cov.title}</h5>
                      <ul className="space-y-2 text-xs text-gray-500 leading-relaxed font-sans">
                        {cov.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-sandal mt-1.5 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience segments */}
              <div className="space-y-4 relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  Who This Program is For
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {activeProgram.forWhom.map((whom, wIdx) => (
                    <div key={wIdx} className="bg-[#FDFDFB]/95 p-4 rounded-sm border border-gray-200 space-y-1.5 text-xs font-sans relative z-10">
                      <p className="font-semibold text-brand-black tracking-wide text-[13px]">{whom.category}</p>
                      <p className="text-gray-500 leading-relaxed">{whom.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Five-stage implementation approach */}
              <div className="space-y-4 relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black border-b border-gray-150 pb-2">
                  Our Implementation Methodology
                </h4>
                <div className="relative border-l border-gray-150 pl-4 py-1 space-y-6 text-xs sm:text-sm z-10">
                  {activeProgram.approach.map((appr, aIdx) => (
                    <div key={aIdx} className="relative space-y-1 z-10">
                      {/* Timeline dot */}
                      <span className="absolute -left-[22.5px] top-1 w-2.5 h-2.5 rounded-full bg-brand-sandal border border-white"></span>
                      <h5 className="font-display font-semibold text-brand-blue text-xs uppercase tracking-wider">
                        {appr.title}
                      </h5>
                      <p className="text-gray-500 text-xs leading-relaxed font-sans">{appr.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Key Outcomes */}
              <div className="space-y-4 bg-brand-blue/5 p-6 rounded-sm border border-brand-blue/10 font-sans relative z-10">
                <h4 className="font-sans font-semibold text-base text-brand-black">
                  Key Deliverable Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {activeProgram.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-start space-x-2.5 text-xs text-gray-500 leading-relaxed">
                      <span className="w-4 h-4 bg-brand-blue/15 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold font-mono text-[9px] border border-brand-blue/10">
                        ✓
                      </span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>



              {/* Local Page CTA */}
              <div className="p-8 bg-brand-black text-white rounded-sm border border-gray-200/10 space-y-4 text-center relative z-10">
                <p className="text-brand-sandal text-[10px] font-bold uppercase tracking-widest font-mono">Action Gateway</p>
                <h4 className="font-display font-semibold text-lg sm:text-l tracking-tight text-white">{activeProgram.ctaText}</h4>
                <p className="text-xs text-gray-450 max-w-sm mx-auto font-sans leading-relaxed">
                  Click below to launch an administrative enquiry with the KAYF team. We will review files and establish custom schedules.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleCTA}
                    className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <span>{activeProgram.ctaButton}</span>
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
