import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: string) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'failure' | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const enquiryCategories = [
    'Student & Athlete Enquiries',
    'Parent & Guardian Enquiries',
    'School & Institutional Partnerships',
    'Coach & Trainer Enquiries',
    'Sponsorship & CSR Partnerships',
    'Events & Community Engagement',
    'General Support & Administration'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot !== '') return; // block spam

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulated transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      category: '',
      message: ''
    });
    setSubmitStatus(null);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="font-sans text-brand-black bg-[#FDFDFB] bg-cover bg-center relative py-12"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508615070457-7baebe4003ab?auto=format&fit=crop&w=1200&q=80')" }}
    >
      {/* Visible overlay mask */}
      <div className="absolute inset-0 bg-[#FDFDFB]/80 backdrop-blur-[2px] z-0"></div>

      {/* HEADER HERO */}
      <section 
        className="relative bg-cover bg-center pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-150/60 flex items-center justify-center overflow-hidden font-sans z-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600')` }}
      >
        {/* Dark overlay mask */}
        <div className="absolute inset-0 bg-slate-900/65 z-0"></div>
 
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3 font-sans">
          <div className="flex items-center gap-1.5 justify-center font-sans">
            <div className="w-4 h-[1px] bg-brand-sandal"></div>
            <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Get in Touch</span>
          </div>
          <h1 className="font-display font-semibold text-2xl sm:text-4xl tracking-tight text-white leading-tight">
            Contact &amp; Support
          </h1>
          <p className="text-[11px] sm:text-xs text-white/90 max-w-2xl mx-auto leading-relaxed">
            KAYF welcomes enquiries, participation requests, institutional discussions, partnership opportunities, and support-related communication from students, parents, athletes, schools, organisations, and community stakeholders.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={scrollToForm}
              className="px-5 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white text-xs uppercase tracking-widest font-bold rounded-sm transition duration-150 cursor-pointer shadow-md"
            >
              Get in Touch &darr;
            </button>
            <button
              onClick={() => onNavigate('join')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs uppercase tracking-widest font-bold rounded-sm transition duration-150 cursor-pointer"
            >
              Join Us &rarr;
            </button>
          </div>
        </div>
      </section>
 
      {/* CORE CONTACT DETAILS & ENQUIRY CATEGORIES */}
      <section className="py-20 bg-transparent relative z-10 text-left font-sans border-b border-gray-150/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left coordinates column */}
            <div className="lg:col-span-5 space-y-8 relative z-10">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand-sandal uppercase font-mono tracking-widest block">Direct Coordinates</span>
                <h2 className="font-display font-semibold text-xl sm:text-2xl text-brand-black tracking-tight leading-normal">Get in Touch With KAYF</h2>
                <p className="text-xs text-gray-550 leading-relaxed font-sans">
                  Connect with Kalgreen Youth Foundation (KAYF). Please find direct administrative linkages below.
                </p>
              </div>
 
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-brand-sky border border-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 rounded-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[11px] text-brand-black uppercase tracking-widest">Phone Line</h4>
                    <p className="text-xs font-mono text-gray-800 mt-1 font-semibold">+91 96000 47713</p>
                    <p className="text-xs font-mono text-gray-800 font-semibold">+91 94449 79482</p>
                  </div>
                </div>
 
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-brand-sky border border-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 rounded-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[11px] text-brand-black uppercase tracking-widest">Email Coordinates</h4>
                    <p className="text-xs font-mono text-gray-800 mt-1 font-semibold">greenglobalsportsacademy@gmail.com</p>
                  </div>
                </div>
 
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-brand-sky border border-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 rounded-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-sans font-semibold text-[11px] text-brand-black uppercase tracking-widest">Address Coordination</h4>
                    
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-[#72bf44] uppercase tracking-wider font-mono">Registered Office:</p>
                      <p className="text-xs text-gray-650 leading-relaxed font-sans">
                        Gowri Tower, No. 4, Canal Road,<br />
                        Venkateswara Nagar, Korattur,<br />
                        Chennai - 600076.
                      </p>
                    </div>

                    <div className="space-y-1 pt-1.5 border-t border-gray-150">
                      <p className="text-[10px] font-bold text-[#72bf44] uppercase tracking-wider font-mono">Administration Office:</p>
                      <p className="text-xs text-gray-650 leading-relaxed font-sans">
                        Samyuktha Apartments, No. 89, Flat S1,<br />
                        Doctor's Colony, IV th Cross Street,<br />
                        Jayanti Nagar, Kolathur, Chennai - 600099.
                      </p>
                    </div>
                  </div>
                </div>
 
                <div className="flex items-start space-x-4">
                  <div className="w-9 h-9 bg-brand-sky border border-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 rounded-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[11px] text-brand-black uppercase tracking-widest">Support Availability</h4>
                    <p className="text-xs text-brand-blue font-sans font-semibold mt-1">Monday to Saturday</p>
                    <p className="text-xs font-mono text-gray-700">10:00 AM to 6:00 PM</p>
                    <p className="text-[9px] text-gray-500 mt-1 border-t border-gray-150 pt-1.5 leading-relaxed font-sans">
                      Response timelines may vary during events, camps, competitions, or institutional activity periods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Right category categorization column */}
            <div className="lg:col-span-7 bg-white/95 p-6 sm:p-8 rounded-sm border border-gray-200 shadow-md relative z-10">
              <div className="space-y-4">
                <h3 className="font-sans font-semibold text-[11px] text-brand-black uppercase tracking-widest">How Can We Help You?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans pb-2 border-b border-gray-150">
                  To ensure better coordination and response handling, enquiries may be directed under the following categories:
                </p>
                
                <div className="space-y-4 pt-1">
                  {[
                    { title: 'Student & Athlete Enquiries', desc: 'Sports participation, coaching, camps, competitions, and athlete development-related enquiries.' },
                    { title: 'Parent & Guardian Enquiries', desc: 'Program clarification, student participation guidance, sports engagement, safety, and development-related support.' },
                    { title: 'School & Institutional Partnerships', desc: 'School sports initiatives, collaborations, competitions, and institutional sports development enquiries.' },
                    { title: 'Coach & Trainer Enquiries', desc: 'Coaching opportunities, mentorship programs, and sports education initiatives.' },
                    { title: 'Sponsorship & CSR Partnerships', desc: 'Support and partnership discussions relating to youth and sports development initiatives.' },
                    { title: 'Events & Community Engagement', desc: 'Sports events, volunteering, community initiatives, and collaboration opportunities.' },
                    { title: 'General Support & Administration', desc: 'General communication, operational support, and organisational enquiries.' }
                  ].map((cat, idx) => (
                    <div key={idx} className="space-y-0.5 text-xs">
                      <p className="font-semibold text-brand-black">{cat.title}</p>
                      <p className="text-gray-550 leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
 
          </div>

          {/* Full-width Map Layout Wrapper */}
          <div className="w-full bg-white p-4 rounded-sm border border-gray-200 shadow-sm mt-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.0167647617172!2d80.20059857412292!3d13.127735911437824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52654d2fdb7fc5%3A0x564abeaeb5b690e8!2sSamyuktha%20apartments!5e1!3m2!1sen!2sin!4v1781276061365!5m2!1sen!2sin"
              className="w-full h-[400px] rounded-sm border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KAYF Administration Office Location"
            />
          </div>

        </div>
      </section>



      {/* 4. HOW WE RESPOND (5-Stage Communication Commitment) */}
      <section className="py-20 bg-transparent relative z-10 border-b border-gray-150/60 text-left font-sans">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-12 relative z-10">
            <span className="text-[10px] font-bold text-brand-blue uppercase font-mono tracking-widest block">Response Framework</span>
            <h3 className="font-display font-semibold text-2xl text-brand-black tracking-tight leading-none">Professional Support &amp; Communication</h3>
            <p className="text-xs text-gray-550 leading-relaxed">
              KAYF aims to respond to enquiries and support requests in a professional and organised manner.
            </p>
          </div>

          <div className="relative border-l border-brand-sandal/30 pl-6 space-y-6 text-xs font-sans z-10">
            {[
              { id: '1', title: 'Enquiry Acknowledgement &amp; Review', desc: 'Incoming details are vetted by administration desk within 12 hours.' },
              { id: '2', title: 'Category-Based Routing &amp; Coordination', desc: 'Tickets routed directly to the appropriate Certified Coaches, Institutional Directors, or CSR sponsors desk.' },
              { id: '3', title: 'Initial Response &amp; Clarification', desc: 'Introductory contact or telephone scheduling occurs logged onto physical registers.' },
              { id: '4', title: 'Follow-Up Communication Where Required', desc: 'Detailed program customization plans, calendar bookings, or site approvals draft are aligned.' },
              { id: '5', title: 'Participation Or Support Guidance', desc: 'Active onboarding and coordination is rolled out on court.' }
            ].map((node) => {
              return (
                <div key={node.id} className="relative space-y-1 z-10">
                  {/* Pin dot */}
                  <span className="absolute -left-[29.5px] top-1.5 w-2 h-2 rounded-none bg-brand-sandal border border-white"></span>
                  <h4 className="font-sans font-semibold text-brand-black uppercase tracking-widest text-[11px]" dangerouslySetInnerHTML={{ __html: `${node.id}. ${node.title}` }}></h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{node.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM SECTION */}
      <section id="contact-form-anchor" className="py-20 bg-transparent relative z-10 border-b border-gray-150/60 font-sans">
        <div className="max-w-xl mx-auto px-4 text-left relative z-10">
          
          <div className="text-center max-w-md mx-auto space-y-2 mb-10 relative z-10">
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-brand-black tracking-tight">Send Us a Message</h3>
            <p className="text-xs text-gray-550 leading-relaxed font-sans">
              Visitors can send enquiries, requests, or messages directly through the form below. Submissions are received and managed via email.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="p-6 bg-white/95 border border-brand-blue/30 rounded-sm text-center space-y-4 shadow-xl relative z-10">
              <CheckCircle2 className="w-8 h-8 text-brand-blue mx-auto" />
              <h4 className="font-display font-semibold text-base text-brand-black uppercase tracking-wider">Message Conveyed</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Thank you for reaching out to KAYF. Your message has been received and our team will respond shortly.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-sm cursor-pointer hover:bg-brand-blue/90"
              >
                Send Another Message
              </button>
            </div>
          )}

          {submitStatus === 'failure' && (
            <div className="p-6 bg-rose-50/95 border border-rose-250 rounded-sm text-center space-y-4 font-sans shadow-xl relative z-10">
              <AlertCircle className="w-8 h-8 text-rose-700 mx-auto" />
              <h4 className="font-display font-semibold text-base text-rose-700 uppercase tracking-wider">Submission Failed</h4>
              <p className="text-xs text-rose-800 leading-relaxed">
                Something went wrong while sending your message. Please try again, or reach us directly at greenglobalsportsacademy@gmail.com.
              </p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="px-4 py-2 bg-rose-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm cursor-pointer"
              >
                Retry Sending Message
              </button>
            </div>
          )}

          {submitStatus === null && (
            <form onSubmit={handleFormSubmit} className="relative z-10 bg-white/95 p-6 sm:p-8 rounded-sm border border-gray-100 shadow-xl space-y-4">
              {/* Spam honey pot */}
              <div className="hidden">
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  placeholder="Do not fill"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700" htmlFor="cf-name">Full Name <span className="text-rose-500">*</span></label>
                <input
                  id="cf-name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 bg-[#FDFDFB]/50 border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700" htmlFor="cf-email">Email Address <span className="text-rose-500">*</span></label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 bg-[#FDFDFB]/50 border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                  placeholder="Enter contact email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700" htmlFor="cf-phone">Phone Number <span className="text-gray-400">(Optional)</span></label>
                <input
                  id="cf-phone"
                  type="tel"
                  className="w-full px-4 py-2.5 bg-[#FDFDFB]/50 border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                  placeholder="Enter telephone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700" htmlFor="cf-category">Subject Category <span className="text-rose-500">*</span></label>
                <select
                  id="cf-category"
                  required
                  className="w-full px-4 py-2.5 bg-[#FDFDFB]/50 border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="">Select subject category</option>
                  {enquiryCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700" htmlFor="cf-message">Message <span className="text-rose-500">*</span></label>
                <textarea
                  id="cf-message"
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-[#FDFDFB]/50 border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                  placeholder="Type your message description here..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-gray-400 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </section>


    </div>
  );
}
