import React from 'react';
import { ShieldCheck, Target, Heart, Eye, Users, ArrowRight, Award, UserCheck, HelpCircle } from 'lucide-react';
import { valuesData } from '../data';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const missionPoints = [
    'To identify and encourage young talent through structured sports participation and developmental activities.',
    'To support schools and institutions in strengthening sports culture and student engagement.',
    'To provide meaningful opportunities for athlete growth, coaching, and competitive exposure.',
    'To promote discipline, teamwork, leadership, wellness, and active lifestyles through sports.',
    'To encourage professional, ethical, and respectful sporting participation.',
    'To contribute toward sustainable and inclusive sporting ecosystems that positively impact communities.'
  ];

  const coreCommitments = [
    'A youth-centred approach to sports and personal development.',
    'Inclusive sporting opportunities that encourage participation across communities.',
    'Structured pathways for learning, growth, and competitive exposure.',
    'Safe, disciplined, and respectful sporting environments.',
    'Long-term development beyond short-term performance outcomes.',
    'Institutional and community-oriented sports engagement.',
    'Encouraging leadership, teamwork, and social responsibility through sports.'
  ];

  const whatWeDoList = [
    'In-School Sports Initiatives',
    'Athlete Development Programs',
    'Professional Coaching Support',
    'Events & Competitions',
    'Coach Development Programs',
    'Seasonal Sports Camps',
    'Sports Arena Services',
    'Community & Youth Engagement Activities',
    'Institutional Sports Collaboration'
  ];

  return (
    <div className="font-sans text-brand-black bg-[#FDFDFB]">
      {/* HEADER HERO */}
      <section 
        className="relative bg-cover bg-center pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-150/60 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/About_us.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="w-4 h-[1px] bg-brand-sandal"></div>
            <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Institutional Vision</span>
          </div>
          <h1 className="font-display font-semibold text-2xl sm:text-4xl tracking-tight text-white leading-tight">
            Building Youth. Building Character. Building Futures.
          </h1>
          <p className="text-[11px] sm:text-xs text-white/90 max-w-2xl mx-auto leading-relaxed">
            Kalgreen Youth Foundation (KAYF) is committed to creating meaningful opportunities for youth development through sports, participation, discipline, leadership, and community engagement.
          </p>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-150/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Institutional Identity</span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black leading-tight">
                Who We Are &amp; Our Philosophy
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-500 leading-relaxed">
                <p>
                  Kalgreen Youth Foundation (KAYF) is a youth development and sports advancement foundation focused on identifying and nurturing talent while creating structured opportunities through sports, education, and developmental initiatives.
                </p>
                <p>
                  KAYF works toward building an inclusive and progressive sporting ecosystem where students, athletes, coaches, institutions, and communities can grow through discipline, teamwork, resilience, leadership, and active participation.
                </p>
                <p>
                  We believe sports is not merely competition. It is a powerful platform for physical wellness, confidence building, life skills, personal growth, social responsibility, and long-term character development.
                </p>
                <p>
                  Through organised programs, institutional collaboration, coaching initiatives, camps, competitions, and community-oriented activities, KAYF encourages positive youth engagement and a sustainable sporting culture.
                </p>
              </div>
            </div>

            {/* What We Do Quick List Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFDFB] p-6 sm:p-8 rounded-sm border border-gray-200">
                <h3 className="font-display font-bold text-[10px] text-brand-black uppercase tracking-wider mb-6 pb-2 border-b border-gray-200">Our Areas of Engagement</h3>
                <ul className="space-y-3">
                  {whatWeDoList.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-xs text-gray-700">
                      <Award className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative border-b border-gray-150/60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80')" }}
      >
        {/* Absolute inner layout tint mask layer */}
        <div className="absolute inset-0 bg-[#FDFDFB]/94 backdrop-blur-[1px] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Vision card */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-sm bg-brand-blue/5 text-brand-blue flex items-center justify-center border border-brand-blue/10">
                  <Eye className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-black">Our Vision</h3>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                  To build a progressive and inclusive sporting ecosystem that empowers youth, strengthens communities, and creates opportunities for excellence at local, national, and international levels.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-150 text-[10px] text-brand-blue font-mono uppercase tracking-widest font-bold">
                Strategic Path Forwards
              </div>
            </div>

            {/* Mission card */}
            <div className="bg-white p-8 rounded-sm border border-gray-200 text-left space-y-4">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-sm bg-brand-sandal/10 text-brand-sandal flex items-center justify-center border border-brand-sandal/20">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-black">Our Mission</h3>
                <p className="text-[10px] text-[#72bf44] font-mono tracking-widest uppercase font-bold">KAYF Commits To:</p>
                
                <ul className="space-y-2.5 pt-1">
                  {missionPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-gray-550 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-1.5"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="py-25 bg-white border-b border-gray-150/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl space-y-3 mb-12">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-mono">Our Character Matrix</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
              The Guiding Values of KAYF
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesData.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FDFDFB] rounded-sm border border-gray-200 text-left space-y-3 group hover:border-[#72bf44] transition-colors"
              >
                <div className="w-9 h-9 bg-[#72bf44]/10 text-[#72bf44] rounded-sm flex items-center justify-center font-display font-bold text-xs border border-[#72bf44]/25">
                  {`0${idx + 1}`}
                </div>
                <h3 className="font-display font-semibold text-base text-brand-black">
                  {val.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE-STAGE DEVELOPMENT MODEL */}
      <section className="py-20 bg-[#FDFDFB] border-b border-gray-150/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl space-y-3 mb-12">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-mono">Structured Progression</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
              Our Five-Stage Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: '1. Identify', desc: 'Recognise school-level participation milestones, emerging athletic talent, and school infrastructure constraints.' },
              { title: '2. Encourage', desc: 'Create active, highly disciplined, and collaborative sporting grids that spark initial athlete confidence.' },
              { title: '3. Develop', desc: 'Deliver rigorous sport-specific drills, physical conditioning metrics, and tactical understanding.' },
              { title: '4. Empower', desc: 'Provide exposure via matches, cluster tournaments, elite counseling, and regional leagues.' },
              { title: '5. Strengthen', desc: 'Build long-standing sporting heritages and strong social community impacts through sustained initiatives.' }
            ].map((stage, sIdx) => (
              <div key={sIdx} className="bg-white p-5 rounded-sm border border-gray-200 space-y-2">
                <span className="text-[10px] font-bold text-[#72bf44] font-mono uppercase tracking-widest">{`STAGE 0${sIdx+1}`}</span>
                <h4 className="font-display font-semibold text-sm text-brand-black">{stage.title}</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE IMPACT BANNER */}
      <section 
        className="w-full bg-cover bg-center relative py-16"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508615070457-7baebe4003ab?auto=format&fit=crop&w=1200&q=80')" }}
      >
        {/* Dark overlay screen */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-black/85 z-0"></div>
        
        <div className="relative z-10 text-center py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-white text-3xl font-extrabold tracking-tight mb-4">
            Shaping the Future of Institutional Sports
          </h2>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto leading-relaxed">
            By integrating structured physical education models directly into school frameworks, we build foundational character, elite discipline, and healthy lifelong habits.
          </p>
        </div>
      </section>

      {/* LEADERSHIP & ADVISORY INFORMATION */}
      <section 
        className="py-20 bg-cover bg-center relative border-b border-gray-150/60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80')" }}
      >
        {/* Light gray overlay mask */}
        <div className="absolute inset-0 bg-gray-50/96 mix-blend-overlay z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-2xl space-y-3 mb-12">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-mono">Leadership Structure</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
              Governance &amp; Trust
            </h2>
          </div>

          <div className="max-w-md mx-auto bg-[#FDFDFB] p-8 rounded-sm border border-gray-200 text-center space-y-4">
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-sm mx-auto flex items-center justify-center border border-brand-blue/15">
              <UserCheck className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-lg text-brand-black">Mr. G.K. Kalairajan</h3>
              <p className="text-xs font-semibold text-brand-sandal font-mono uppercase tracking-widest">Founder</p>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed">
              Serving as the foundational leader, directing Kalgreen Youth Foundation (KAYF) toward structured sports integration, youth empowerment, and cultural rootedness throughout Tamil Nadu.
            </p>

            <div className="text-[9px] text-gray-400 pt-3 border-t border-gray-200 font-mono uppercase tracking-wider font-bold">
              Kalgreen Youth Foundation &bull; Chennai Office
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS SECTION */}
      <section className="py-20 bg-[#FDFDFB] border-b border-gray-150/60">
        <div className="max-w-4xl mx-auto px-4 text-left space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-display font-semibold text-xl text-brand-black">Our Shared Commitments</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold font-mono">What KAYF Stands For</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreCommitments.map((com, comIdx) => (
              <div key={comIdx} className="bg-white p-4 rounded-sm border border-gray-250 flex items-start space-x-3 text-xs text-gray-500 leading-relaxed">
                <span className="w-5 h-5 rounded-none bg-brand-sky text-brand-blue font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 border border-brand-blue/10">
                  {comIdx + 1}
                </span>
                <span>{com}</span>
              </div>
            ))}
          </div>

          {/* Official Corporate Tracking Details */}
          <div className="mt-8 p-6 bg-white rounded-sm border border-gray-250 text-left space-y-4 shadow-sm">
            <div className="flex items-center space-x-2 border-b border-gray-150 pb-2.5">
              <span className="w-2.5 h-2.5 rounded-none bg-[#72bf44]"></span>
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand-black">Official Foundation Details &amp; Registration Offices</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
              <div className="space-y-1.5 p-4 bg-[#FDFDFB] rounded border border-gray-200">
                <span className="text-[10px] font-bold text-[#72bf44] font-mono uppercase tracking-widest">Registered Office Address</span>
                <p className="text-xs text-gray-750 leading-relaxed font-sans">
                  <strong>Kalgreen Youth Foundation</strong><br />
                  Gowri Tower, No. 4, Canal Road,<br />
                  Venkateswara Nagar, Korattur,<br />
                  Chennai - 600076, Tamil Nadu, India.
                </p>
              </div>
              <div className="space-y-1.5 p-4 bg-[#FDFDFB] rounded border border-gray-200">
                <span className="text-[10px] font-bold text-[#72bf44] font-mono uppercase tracking-widest">Administration Office Address</span>
                <p className="text-xs text-gray-750 leading-relaxed font-sans">
                  <strong>Kalgreen Youth Foundation</strong><br />
                  Samyuktha Apartments, No. 89, Flat S1,<br />
                  Doctor's Colony, IV th Cross Street,<br />
                  Jayanti Nagar, Kolathur, Chennai - 600099.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-white leading-normal">
            Join the Movement for Youth and Sports Development.
          </h2>
          <p className="text-xs text-gray-355 max-w-xl mx-auto leading-relaxed">
            KAYF welcomes students, athletes, coaches, schools, institutions, parents, and supporters who share the vision of building stronger futures through sports, participation, and community development.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('join')}
              className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-200 cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Join Us Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
