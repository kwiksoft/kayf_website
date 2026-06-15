import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Shield, Users, Mail, Phone, Calendar } from 'lucide-react';

import kayfLogo from '../assets/images/KAYF_Logo.png';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, subSectionId?: string) => void;
}

const programSubItems = [
  { id: 'in-school-training', label: 'In-School Training' },
  { id: 'pro-coaching', label: 'Pro Coaching' },
  { id: 'events-competitions', label: 'Events & Competitions' },
  { id: 'coach-development', label: 'Coach Development' },
  { id: 'seasonal-camps', label: 'Seasonal Camps' },
  { id: 'sports-arena-services', label: 'Sports Arena Services' },
];

const sportsSubItems = [
  { id: 'athletics', label: 'Athletics' },
  { id: 'football', label: 'Football' },
  { id: 'basketball', label: 'Basketball' },
  { id: 'hockey', label: 'Hockey' },
  { id: 'tennis', label: 'Tennis' },
  { id: 'pickleball', label: 'Pickleball' },
  { id: 'kabaddi', label: 'Kabaddi' },
  { id: 'silambam', label: 'Silambam' },
];

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileSportsOpen, setMobileSportsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'sports', label: 'Sports Covered' },
    { id: 'join', label: 'Join Us' },
    { id: 'contact', label: 'Contact & Support' },
  ];

  const handleNavClick = (id: string, subSectionId?: string) => {
    onNavigate(id, subSectionId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="app-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFDFB] shadow-sm border-b border-gray-200/80 py-2'
          : 'bg-[#FDFDFB]/95 backdrop-blur-md border-b border-gray-200/50 py-3.5'
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 font-sans">
        {/* Logo Section */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex-shrink-0 flex items-center cursor-pointer group py-2"
        >
          {/* Standard HTML image element pointing directly to the imported KAYF vector logo scaled block */}
          <img 
            src={kayfLogo} 
            alt="KAYF Logo" 
            className="h-22 min-h-[88px] w-auto object-contain select-none transition-transform duration-300 group-hover:scale-102 block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row items-center justify-end ml-auto space-x-4">
          {navItems.map((item) => {
            const isActive = currentView === item.id;

            if (item.id === 'programs') {
              return (
                <div key={item.id} className="relative group/prog">
                  <button
                    onClick={() => handleNavClick('programs')}
                    className={`px-3 py-2 rounded-sm text-xs font-bold font-sans tracking-wide uppercase transition-all duration-205 cursor-pointer flex items-center gap-1 ${
                      isActive
                        ? 'text-brand-blue bg-brand-sky/60 font-bold'
                        : 'text-brand-black/80 hover:text-brand-blue hover:bg-gray-100/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current opacity-70 group-hover/prog:rotate-180 transition-transform duration-300">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  {/* Hover Dropdown menu */}
                  <div className="absolute left-0 mt-1 w-64 bg-[#FDFDFB] rounded-sm shadow-md border border-gray-200/50 py-1.5 opacity-0 invisible group-hover/prog:opacity-100 group-hover/prog:visible transition-all duration-300 z-50 transform translate-y-1 group-hover/prog:translate-y-0">
                    {programSubItems.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('programs', sub.id);
                        }}
                        className="px-4 py-2.5 hover:bg-brand-sky/40 text-sm sm:text-base font-semibold text-brand-black/90 hover:text-brand-blue cursor-pointer transition-colors text-left block"
                      >
                        {sub.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (item.id === 'sports') {
              return (
                <div key={item.id} className="relative group/sport">
                  <button
                    onClick={() => handleNavClick('sports')}
                    className={`px-3 py-2 rounded-sm text-xs font-bold font-sans tracking-wide uppercase transition-all duration-205 cursor-pointer flex items-center gap-1 ${
                      isActive
                        ? 'text-brand-blue bg-brand-sky/60 font-bold'
                        : 'text-brand-black/80 hover:text-brand-blue hover:bg-gray-100/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current opacity-70 group-hover/sport:rotate-180 transition-transform duration-300">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  {/* Hover Dropdown menu */}
                  <div className="absolute left-0 mt-1 w-60 bg-[#FDFDFB] rounded-sm shadow-md border border-gray-200/50 py-1.5 opacity-0 invisible group-hover/sport:opacity-100 group-hover/sport:visible transition-all duration-300 z-50 transform translate-y-1 group-hover/sport:translate-y-0">
                    {sportsSubItems.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('sports', sub.id);
                        }}
                        className="px-4 py-2.5 hover:bg-brand-sky/40 text-sm sm:text-base font-semibold text-brand-black/90 hover:text-brand-blue cursor-pointer transition-colors text-left block"
                      >
                        {sub.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-sm text-xs font-bold font-sans tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-brand-blue bg-brand-sky/60 font-bold'
                    : 'text-brand-black/80 hover:text-brand-blue hover:bg-gray-100/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('join')}
            className="ml-4 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-sm shadow-sm transition-all duration-200 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-sm text-brand-black hover:text-brand-blue hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="sm:hidden bg-[#FDFDFB] border-t border-gray-200/80 shadow-md px-4 pt-2 pb-6 space-y-1.5 absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = currentView === item.id;

            if (item.id === 'programs') {
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    className={`w-full text-left px-4 py-2.5 rounded-sm font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-205 flex justify-between items-center ${
                      isActive
                        ? 'text-brand-blue bg-brand-sky font-bold'
                        : 'text-brand-black/90 hover:text-brand-blue hover:bg-gray-100/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-none stroke-current transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180' : ''}`}>
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileProgramsOpen && (
                    <div className="pl-6 pr-4 py-1 space-y-1 bg-gray-50/50 rounded-sm">
                      <button
                        onClick={() => handleNavClick('programs')}
                        className="w-full text-left py-2 text-xs font-bold text-brand-blue uppercase"
                      >
                        &rarr; View All Programs
                      </button>
                      {programSubItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick('programs', sub.id)}
                          className="w-full text-left py-2 text-xs font-semibold text-brand-black/70 hover:text-brand-blue transition-colors block"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.id === 'sports') {
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => setMobileSportsOpen(!mobileSportsOpen)}
                    className={`w-full text-left px-4 py-2.5 rounded-sm font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-205 flex justify-between items-center ${
                      isActive
                        ? 'text-brand-blue bg-brand-sky font-bold'
                        : 'text-brand-black/90 hover:text-brand-blue hover:bg-gray-100/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-none stroke-current transition-transform duration-200 ${mobileSportsOpen ? 'rotate-180' : ''}`}>
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileSportsOpen && (
                    <div className="pl-6 pr-4 py-1 space-y-1 bg-gray-50/50 rounded-sm">
                      <button
                        onClick={() => handleNavClick('sports')}
                        className="w-full text-left py-2 text-xs font-bold text-brand-blue uppercase"
                      >
                        &rarr; View All Sports
                      </button>
                      {sportsSubItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick('sports', sub.id)}
                          className="w-full text-left py-2 text-xs font-semibold text-brand-black/70 hover:text-brand-blue transition-colors block"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-sm font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-200 block ${
                  isActive
                    ? 'text-brand-blue bg-brand-sky font-bold'
                    : 'text-brand-black/90 hover:text-brand-blue hover:bg-gray-100/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-gray-200 px-4">
            <button
              onClick={() => handleNavClick('join')}
              className="w-full text-center py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-xs uppercase tracking-wider rounded-sm shadow transition-all duration-200"
            >
              Submit Enquiry / Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
