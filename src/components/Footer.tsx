import React from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';

import kayfLogo from '../assets/images/KAYF_Logo.png';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-brand-black text-gray-400 font-sans border-t border-gray-800/60">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto pt-12 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Identity column */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="relative flex-shrink-0 flex items-center justify-center">
                <img 
                  src={kayfLogo} 
                  alt="KAYF Logo" 
                  className="h-20 w-auto object-contain select-none max-h-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Kalgreen Youth Foundation is a youth development and sports ecosystem committed to building character, discipline, leadership, and future opportunities through structured sports participation.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center px-2 py-1 rounded-none text-[9px] font-bold uppercase tracking-widest bg-brand-blue/10 text-brand-sky border border-brand-blue/20">
                Institutional Development Identity
              </span>
            </div>
          </div>

          {/* Quick links column */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-white tracking-widest uppercase text-xs">Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-brand-sandal transition-colors text-left cursor-pointer font-sans">
                  &middot; Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-brand-sandal transition-colors text-left cursor-pointer font-sans">
                  &middot; About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-brand-sandal transition-colors text-left cursor-pointer font-sans">
                  &middot; Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sports')} className="hover:text-brand-sandal transition-colors text-left cursor-pointer font-sans">
                  &middot; Sports Covered
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('join')} className="hover:text-brand-sandal transition-colors text-left cursor-pointer font-sans">
                  &middot; Partnership &amp; Joining
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Covered inline Column */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-white tracking-widest uppercase text-xs">Core Programs</h3>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li>&middot; In-School Sports Development</li>
              <li>&middot; Pro Coaching Programs</li>
              <li>&middot; Events &amp; Competitions</li>
              <li>&middot; Coach Development Initiatives</li>
              <li>&middot; Seasonal Training Camps</li>
              <li>&middot; Sports Arena Services</li>
            </ul>
          </div>

          {/* Contact coordinates column */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-white tracking-widest uppercase text-xs">Contact Details</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-brand-sandal flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-mono tracking-wide">+91 96000 47713</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-brand-sandal flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="mailto:info@kayf.co.in" className="text-gray-300 font-mono hover:text-white transition-colors">info@kayf.co.in</a>
                  <a href="mailto:support@kayf.co.in" className="text-gray-300 font-mono hover:text-white transition-colors">support@kayf.co.in</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-sandal flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed font-sans text-xs">
                  Kalgreen Youth Foundation (KAYF)<br />
                  Chennai, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tagline separator banner */}
        <div className="mt-6 pt-4 border-t border-gray-800/40 flex flex-col items-center text-center">
          <p className="text-[11px] font-sans tracking-wide text-brand-sandal uppercase font-semibold py-1 max-w-2xl px-4">
            &ldquo;The true strength of sports lies in the communities and individuals it helps shape.&rdquo;
          </p>
        </div>
      </div>

      {/* Deep bottom info bar */}
      <div className="bg-[#141414] py-4 text-center text-[10px] text-gray-500 font-sans border-t border-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p>&copy; {currentYear} Kalgreen Youth Foundation (KAYF). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
