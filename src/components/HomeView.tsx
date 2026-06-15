import React from 'react';
import { ArrowRight, Trophy, Users, ShieldCheck, Zap, Sparkles, Building, Landmark, Medal, Award, Heart, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import targetHeroBanner from '../assets/images/Hero-Section.png';
import footballImg from '../assets/images/football.png';
import kabaddiImg from './kabaddi-v2.png';
import silambamImg from './silambam-v2.png';
import coachesImg from '../assets/images/Coaches.png';

interface HomeViewProps {
  onNavigate: (view: string, detailId?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [heroImgUrl, setHeroImgUrl] = React.useState(targetHeroBanner);

  const focusAreas = [
    { 
      title: 'Youth Participation & Engagement', 
      desc: 'Starting from grassroots to inspire a lifetime of healthy physical activity.',
      icon: Users,
      iconColor: 'text-brand-blue', 
      bgColor: 'bg-brand-sky/60 border-brand-blue/30'
    },
    { 
      title: 'School & Institutional Sports', 
      desc: 'Partnering with academic institutions to provide structured, safe athletic curricula.',
      icon: Building,
      iconColor: 'text-brand-sandal',
      bgColor: 'bg-amber-50 border-brand-sandal/30'
    },
    { 
      title: 'Athlete Growth & Exposure', 
      desc: 'Crafting systemic pathways for talented players to access district, state, and national trials.',
      icon: Trophy,
      iconColor: 'text-brand-yellow',
      bgColor: 'bg-yellow-500/10 border-brand-yellow/30'
    },
    { 
      title: 'Coach Development & Mentorship', 
      desc: 'Certifying physical education instructors in modern sports science and active pedagogy.',
      icon: Award,
      iconColor: 'text-brand-green',
      bgColor: 'bg-emerald-50 border-brand-green/30'
    },
    { 
      title: 'Sports Culture & Community Impact', 
      desc: 'Strengthening community integration and local social responsibility through multi-sports.',
      icon: Heart,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50 border-rose-200/80'
    },
    { 
      title: 'Discipline, Leadership & Wellness', 
      desc: 'Imbuing athletes with emotional resilience, teamwork principles, and cognitive focus.',
      icon: ShieldCheck,
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-50 border-indigo-200/80'
    }
  ];

  const corePrograms = [
    { 
      id: 'in-school-training', 
      num: '01', 
      name: 'In-School Training', 
      desc: 'Professionally guided athletic and physical education integration directly on school campuses.',
      bg: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'pro-coaching', 
      num: '02', 
      name: 'Pro Coaching', 
      desc: 'Systematic technical improvement, fitness conditioning, and tactical match reading schedules.',
      bg: 'https://images.unsplash.com/photo-1517650862521-d580d5348145?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'events-competitions', 
      num: '03', 
      name: 'Events & Competitions', 
      desc: 'Organised leagues, cluster meets, and tournaments testing capabilities under official match environments.',
      bg: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'coach-development', 
      num: '04', 
      name: 'Coach Development', 
      desc: 'Technical instruction clinics, mental behavior workshops, and sports science orientation for PE mentors.',
      bg: coachesImg
    },
    { 
      id: 'seasonal-camps', 
      num: '05', 
      name: 'Seasonal Camps', 
      desc: 'Immersive vacation programs for high-intensity technical progression and focused physical builds.',
      bg: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 'sports-arena-services', 
      num: '06', 
      name: 'Sports Arena Services', 
      desc: 'Advisory on athletic layout designs, turf and synthetic materials coordinating, and safety audits.',
      bg: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const sportFallbacks: Record<string, string> = {
    athletics: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80',
    football: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=500&q=80',
    basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80',
    hockey: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=500&q=80',
    tennis: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=500&q=80',
    pickleball: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=500&q=80',
    kabaddi: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=500&q=80',
    silambam: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=500&q=80'
  };

  const sportsCovered = [
    { 
      id: 'athletics', 
      name: 'Athletics', 
      tag: 'Speed & Stamina', 
      bg: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'football', 
      name: 'Football', 
      tag: 'Team Strategy', 
      bg: footballImg
    },
    { 
      id: 'basketball', 
      name: 'Basketball', 
      tag: 'Dribbling & Precision', 
      bg: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'hockey', 
      name: 'Hockey', 
      tag: 'Speed & Resilience', 
      bg: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'tennis', 
      name: 'Tennis', 
      tag: 'Poise & Precision', 
      bg: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'pickleball', 
      name: 'Pickleball', 
      tag: 'Dynamic Reflexes', 
      bg: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'kabaddi', 
      name: 'Kabaddi', 
      tag: 'Strength & Breath', 
      bg: kabaddiImg
    },
    { 
      id: 'silambam', 
      name: 'Silambam', 
      tag: 'Heritage & Balance', 
      bg: silambamImg
    }
  ];

  return (
    <div className="font-sans text-brand-black bg-[#FDFDFB]">
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full aspect-[3/2] overflow-hidden border-b border-gray-100 flex items-end pb-[16.5%] sm:pb-[16%] md:pb-[15%] lg:pb-[14.5%] xl:pb-[14%]"
      >
        <img 
          src={heroImgUrl} 
          alt="Hero Banner" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-5 max-w-md sm:max-w-lg md:max-w-2xl text-left"
          >
            
          </motion.div>

          {/* Live Action buttons floating responsively on top of the lower-left side over the grass area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative z-10 flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-[170px] sm:max-w-md text-left"
          >
            <button
              onClick={() => onNavigate('programs')}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-brand-blue hover:bg-brand-blue/90 text-white text-[9px] sm:text-xs font-bold uppercase tracking-wider rounded-sm shadow-md transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('join')}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-200 text-brand-black text-[9px] sm:text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-gray-50 shadow-md transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Join the Movement</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL STATEMENT (Sports Beyond Competition) */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat relative border-y border-gray-250/60"
        style={{ backgroundImage: "url('/About_us.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Absolute white backdrop tint overlay layer */}
        <div className="absolute inset-0 bg-[#FDFDFB]/85 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="flex items-center gap-1.5 justify-center">
            <span className="text-[10px] font-bold text-[#72bf44] uppercase tracking-widest">KAYF Core Philosophy</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-blue tracking-tight">
            Sports Beyond Competition
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed font-sans max-w-2xl mx-auto">
            At KAYF, sports is viewed as a platform for confidence, discipline, teamwork, leadership, wellness, and long-term personal growth &mdash; not merely competition alone. Our mission is to integrate cultural pride with modern athletic structures to empower the upcoming generation.
          </p>
        </div>
      </section>

      {/* 3. DEVELOPMENT FOCUS AREAS */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508615070457-7baebe4003ab?auto=format&fit=crop&w=1200&q=80')" }}
      >
        {/* Faint light gray masking overlay layer */}
        <div className="absolute inset-0 bg-gray-50/95 mix-blend-overlay z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-3xl space-y-3 mb-12"
          >
            <span className="text-[10px] font-bold text-[#72bf44] uppercase tracking-widest font-mono">Strategic Pillars</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight leading-tight">
              Encouraging Participation. Supporting Growth. Building Communities.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-sm border border-gray-200/80 hover:border-brand-sandal transition-all duration-200 space-y-4 text-left group"
                >
                  <div className={`w-10 h-10 ${area.bgColor} rounded-sm flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className={`w-5 h-5 ${area.iconColor}`} />
                  </div>
                  <h3 className="font-display font-semibold text-base text-brand-black group-hover:text-brand-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CORE PROGRAMS OVERVIEW */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative border-t border-gray-200/60"
        style={{ backgroundImage: "url('/Programs.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Soft white backdrop tint overlay layer for supreme readability */}
        <div className="absolute inset-0 bg-[#FDFDFB]/90 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div className="text-left max-w-2xl space-y-2">
              <span className="text-[10px] font-bold text-[#72bf44] uppercase tracking-widest font-mono">Systematic Modules</span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
                Structured Programs for Youth and Sports Development
              </h2>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="mt-4 md:mt-0 font-display font-bold text-xs uppercase text-[#72bf44] hover:text-[#72bf44]/80 flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePrograms.map((prog) => (
              <motion.div
                key={prog.id}
                onClick={() => onNavigate('programs', prog.id)}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-cover bg-center rounded-sm border border-gray-200/10 hover:border-[#72bf44] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer overflow-hidden flex flex-col justify-between h-64 group"
                style={{ backgroundImage: `url('${prog.bg}')` }}
              >
                {/* Smooth dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:via-black/75 transition-all duration-305 z-0"></div>

                <div className="relative z-10 space-y-3 p-6 flex flex-col justify-between h-full w-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[9px] text-[#72bf44] font-bold tracking-widest uppercase">{`PROGRAM ${prog.num}`}</span>
                      <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider">KAYF</span>
                    </div>
                    <h3 className="font-display font-semibold text-base text-white group-hover:text-[#72bf44] transition-colors leading-snug">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed line-clamp-3 font-sans">
                      {prog.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-bold text-white flex items-center space-x-1 uppercase group-hover:text-[#72bf44] transition-colors tracking-wider">
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 text-white group-hover:text-[#72bf44]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL SPORTS AUDIT TOOL HERO BANNER */}
      <section 
        className="w-full bg-cover bg-center relative py-16 px-8 my-12"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=1200&q=80')" }}
      >
        {/* Dark green / black overlay screen */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-black/80 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            <h2 className="text-white text-3xl font-bold tracking-tight mb-3">
              School Sports Audit Tool
            </h2>
            <p className="text-gray-200 text-sm mb-6 max-w-xl leading-relaxed">
              Take our quick audit to assess your physical education infrastructure and discover how you can take your school's journey toward active, quality sports education.
            </p>
            <button
              onClick={() => onNavigate('join')}
              className="inline-flex items-center px-6 py-3 bg-white text-brand-black hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider rounded-full shadow-md transition-all duration-200 cursor-pointer"
            >
              Start Audit &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 5. SPORTS OVERVIEW SECTION */}
      <section className="py-20 bg-[#FDFDFB] border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-3xl space-y-3 mb-12"
          >
            <span className="text-[10px] font-bold text-[#72bf44] uppercase tracking-widest block font-mono">Multi-Sport Development</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
              Multi-Sport Development Pathways
            </h2>
          </motion.div>

          {/* Canonical 8 Sports covered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sportsCovered.map((sport) => (
              <motion.div
                key={sport.id}
                onClick={() => onNavigate('sports', sport.id)}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.92 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative h-48 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200/10 cursor-pointer group flex flex-col justify-end p-4 text-left font-sans"
              >
                {/* Visual Action Image Asset Layer (Allows zoom effect safely without scaling the text) */}
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0"
                  src={sport.bg}
                  alt={sport.name}
                  referrerPolicy="no-referrer"
                />

                {/* Dark blend overlay mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/55 to-black/25 group-hover:from-black/95 group-hover:via-black/65 transition-all duration-300 z-10"></div>

                <div className="relative z-20 space-y-1">
                  <h3 className="font-display font-semibold text-sm text-white group-hover:text-[#72bf44] transition-colors tracking-tight leading-tight">
                    {sport.name}
                  </h3>
                  <p className="text-[9px] text-white/80 font-mono tracking-widest uppercase font-bold">
                    {sport.tag}
                  </p>
                  <div className="pt-1.5 flex items-center text-[9px] text-white/90 group-hover:text-[#72bf44] font-bold uppercase tracking-widest transition-colors leading-none">
                    <span>View Detail</span>
                    <span className="ml-1">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('sports')}
              className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer"
            >
              Explore All Sports Covered
            </button>
          </div>
        </div>
      </section>

      {/* 6. OUR PHILOSOPHY (Sports That Shape People) */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="flex items-center gap-1.5 justify-center">
            <span className="text-[10px] font-bold text-[#72bf44] uppercase tracking-widest block font-mono">The Foundation Stone Engagement</span>
          </div>
          <h2 className="font-display font-medium text-2xl sm:text-3xl text-white italic tracking-tight">
            &ldquo;Sports That Shape People, Not Just Players.&rdquo;
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            KAYF believes that the true value of sports lies not only in winning competitions, but in building character, confidence, resilience, leadership, discipline, and stronger communities. This underpins our commitment to creating safe training platforms with standard safeguards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 text-left space-y-2">
              <span className="text-[#72bf44] text-lg font-bold font-mono">01. Strength</span>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Physical wellness</p>
              <p className="text-xs text-gray-400 leading-relaxed">Developing agile movement templates, structural fitness, and sports conditioning baselines.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 text-left space-y-2">
              <span className="text-[#72bf44] text-lg font-bold font-mono">02. Discipline</span>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Focus &amp; Respect</p>
              <p className="text-xs text-gray-400 leading-relaxed">Upholding strict schedules, training consistency, and extreme respect toward coaches and peers.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 text-left space-y-2">
              <span className="text-[#72bf44] text-lg font-bold font-mono">03. Culture</span>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Grounded roots</p>
              <p className="text-xs text-gray-400 leading-relaxed">Honoring Tamil heritage through sporting modules such as the traditional stick formulation of Silambam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNER WITH KAYF SECTION */}
      <section className="py-20 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context details */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-wider bg-[#72bf44]/10 text-[#72bf44] uppercase font-sans">
                Institutional Collaboration
              </span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight leading-snug">
                Building Stronger Sporting Ecosystems Together.
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                KAYF welcomes collaboration with institutions, trusts, schools, and organizations that share the vision of meaningful youth and sports development. Partner with us to free up administration, configure certified athletic training, and unlock modern sports science.
              </p>

              {/* Targets columns list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-black font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-sandal"></div>
                    <span>Schools &amp; Trusts</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed pl-3.5">Integrating turn-key sports periods and active PE matrices without burdening staff resources.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-black font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-sandal"></div>
                    <span>Coaches &amp; Mentors</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed pl-3.5">Providing advanced certification levels, and clinical hours managing large student cohorts.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-black font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-sandal"></div>
                    <span>Sponsors &amp; CSR Teams</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed pl-3.5">Securing highly transparent execution, social development metrics, and community reports.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-black font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-sandal"></div>
                    <span>Infrastructure Partners</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed pl-3.5">Designing safe court layouts, and verifying structural athletic parameters with certified audits.</p>
                </div>
              </div>
            </div>

            {/* Layout box CTA triggers */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFDFB] p-6 rounded-sm border border-gray-200 space-y-4 text-left">
                <div className="w-9 h-9 bg-brand-sandal/10 text-brand-sandal rounded-sm flex items-center justify-center">
                  <Building className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-base text-brand-black">Initiate Institutional Dialogues</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ready to deploy structured sports coaching on your campus or establish corporate CSR metrics? Connect with our administration team directly to align objectives.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('join')}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>Partner with KAYF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW THE PROCESS WORKS ROADMAP */}
      <section className="py-20 bg-[#FDFDFB] border-b border-gray-200/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2 text-center max-w-2xl mx-auto"
          >
            <span className="text-[10px] font-bold text-[#72bf44] uppercase tracking-widest font-mono">Onboarding Lifecycle</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
              A Simple and Organised Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3 text-left p-5 bg-white rounded-sm border border-gray-200 relative">
              <span className="font-mono text-xl font-bold text-[#72bf44] absolute right-4 top-2">/01</span>
              <h3 className="font-display font-bold text-xs uppercase tracking-wide text-brand-black mt-2">1. Submit Interest</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Select the appropriate role category (Student, Coach, School, Sponsor) and fill our dynamic enquiry form.</p>
            </div>
            <div className="space-y-3 text-left p-5 bg-white rounded-sm border border-gray-200 relative">
              <span className="font-mono text-xl font-bold text-[#72bf44] absolute right-4 top-2">/02</span>
              <h3 className="font-display font-bold text-xs uppercase tracking-wide text-brand-black mt-2">2. Initial Alignment</h3>
              <p className="text-xs text-gray-500 leading-relaxed">The KAYF administration team filters request criteria and logs introductory coordination contact with you within 48 hours.</p>
            </div>
            <div className="space-y-3 text-left p-5 bg-white rounded-sm border border-gray-200 relative">
              <span className="font-mono text-[#72bf44] text-xl font-bold absolute right-4 top-2">/03</span>
              <h3 className="font-display font-bold text-xs uppercase tracking-wide text-brand-black mt-2">3. Strategic Planning</h3>
              <p className="text-xs text-gray-500 leading-relaxed">We customize training blocks, site templates, certified coach rosters, or CSR parameters matching your parameters.</p>
            </div>
            <div className="space-y-3 text-left p-5 bg-white rounded-sm border border-gray-200 relative">
              <span className="font-mono text-xl font-bold text-[#72bf44] absolute right-4 top-2">/04</span>
              <h3 className="font-display font-bold text-xs uppercase tracking-wide text-brand-black mt-2">4. Onboarding Launch</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Active deployment commences. Structured physical metrics trackers are logged to assure developmental goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. JOIN THE MOVEMENT BOTTOM CARD */}
      <section className="py-20 bg-brand-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight text-white leading-normal">
            Join the Movement for Youth and Sports Development.
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Whether you are a student, athlete, parent, coach, or regional supporter, KAYF creates opportunities to participate, learn, grow, and contribute through sports and community engagement.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('join')}
              className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer"
            >
              Apply / Enquire Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/25 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer"
            >
              Contact &amp; Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
