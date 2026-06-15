import React, { useState, useRef } from 'react';
import { Upload, CheckCircle2, AlertCircle, Phone, ArrowRight, User, GraduationCap, Building2, HelpCircle } from 'lucide-react';

interface JoinViewProps {
  onNavigate: (view: string) => void;
}

export default function JoinView({ onNavigate }: JoinViewProps) {
  const [activeTab, setActiveTab] = useState<'student' | 'coach' | 'school' | 'sponsor'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'failure' | null>(null);
  
  // Anti-spam honeypot
  const [honeypot, setHoneypot] = useState('');

  // Sponsoring check states
  const [csrChecked, setCsrChecked] = useState(false);
  const [eventChecked, setEventChecked] = useState(false);
  const [devChecked, setDevChecked] = useState(false);
  const [infraChecked, setInfraChecked] = useState(false);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherSponsorText, setOtherSponsorText] = useState('');

  // Drag and drop states for Coach Upload
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Canonical 8 sports
  const canonicalSports = [
    'Athletics',
    'Football',
    'Basketball',
    'Hockey',
    'Tennis',
    'Pickleball',
    'Kabaddi',
    'Silambam'
  ];

  // Forms state
  const [studentForm, setStudentForm] = useState({
    fullName: '',
    age: '',
    gender: '',
    schoolName: '',
    sportOfInterest: '',
    experienceLevel: '',
    city: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    message: '',
    consent: false
  });

  const [coachForm, setCoachForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    sportArea: '',
    experienceYears: '',
    certifications: '',
    organisation: '',
    city: '',
    additionalInfo: ''
  });

  const [schoolForm, setSchoolForm] = useState({
    institutionName: '',
    contactName: '',
    designation: '',
    phone: '',
    email: '',
    studentsCount: '',
    existingInfra: '',
    areasOfInterest: '',
    meetingRequest: '',
    notes: ''
  });

  const [sponsorForm, setSponsorForm] = useState({
    orgName: '',
    contactName: '',
    designation: '',
    phone: '',
    email: '',
    budgetRange: '',
    proposal: ''
  });

  // Drag handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Antispam protection rule
    if (honeypot.trim() !== '') {
      console.warn("Spam attempt identified.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate standard email-routing timeout
    setTimeout(() => {
      setIsSubmitting(false);
      // Failsafe validator
      setSubmitStatus('success');
    }, 1200);
  };

  const resetForm = () => {
    setSubmitStatus(null);
    setUploadedFile(null);
    setStudentForm({
      fullName: '',
      age: '',
      gender: '',
      schoolName: '',
      sportOfInterest: '',
      experienceLevel: '',
      city: '',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      message: '',
      consent: false
    });
    setCoachForm({
      fullName: '',
      phone: '',
      email: '',
      sportArea: '',
      experienceYears: '',
      certifications: '',
      organisation: '',
      city: '',
      additionalInfo: ''
    });
    setSchoolForm({
      institutionName: '',
      contactName: '',
      designation: '',
      phone: '',
      email: '',
      studentsCount: '',
      existingInfra: '',
      areasOfInterest: '',
      meetingRequest: '',
      notes: ''
    });
    setSponsorForm({
      orgName: '',
      contactName: '',
      designation: '',
      phone: '',
      email: '',
      budgetRange: '',
      proposal: ''
    });
    setCsrChecked(false);
    setEventChecked(false);
    setDevChecked(false);
    setInfraChecked(false);
    setOtherChecked(false);
    setOtherSponsorText('');
  };

  return (
    <div className="font-sans text-brand-black bg-[#FDFDFB]">
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-cover bg-center pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-150/60 flex items-center justify-center overflow-hidden font-sans"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1600')` }}
      >
        {/* Dark overlay mask */}
        <div className="absolute inset-0 bg-slate-900/65 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="flex items-center gap-1.5 justify-center">
            <div className="w-4 h-[1px] bg-brand-sandal"></div>
            <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Onboard Today</span>
          </div>
          <h1 className="font-display font-semibold text-2xl sm:text-4xl tracking-tight text-white leading-tight">
            Join the Movement for Youth and Sports Development.
          </h1>
          <p className="text-[11px] sm:text-xs text-white/90 max-w-2xl mx-auto leading-relaxed">
            KAYF welcomes individuals and institutions who believe in creating stronger futures through sports, participation, discipline, leadership, and community engagement.
          </p>
          <div className="pt-2">
            <a
              href="#join-us-form-section"
              className="px-5 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-200 inline-block cursor-pointer shadow-md"
            >
              Apply / Enquire Now &darr;
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN KAYF */}
      <section className="py-20 bg-white border-b border-gray-150/65 text-left font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-brand-sandal uppercase tracking-widest block font-mono">Value Prop</span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight leading-normal">
                Opportunities to Learn, Grow, and Contribute.
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                Joining KAYF creates a pathway toward multi-discipline participation, structured coaching, and systemic athletic evaluations. We assure safety safeguards, cultural rootedness, and performance records that help parents, students, schools, and communities excel in cooperative confidence.
              </p>
            </div>

            <div className="bg-[#FDFDFB] p-6 rounded-sm border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Develop Character', desc: 'Acquire robust discipline, leadership frameworks, and teamwork composure.' },
                { title: 'Physical Alignment', desc: 'Secure coordination, biometric endurance, and motor reflex refinement.' },
                { title: 'Traditional Footing', desc: 'Celebrate regional heritage via registered traditional sports such as Silambam.' },
                { title: 'Ethical Environment', desc: 'Interact with fully background-checked, safepending certified sport coaches.' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1 text-left">
                  <div className="flex items-center space-x-2 text-brand-blue font-bold text-xs uppercase tracking-wider font-sans">
                    <span className="w-4 h-4 rounded-none bg-brand-blue/10 text-brand-blue flex items-center justify-center text-[9px] border border-brand-blue/10">✓</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE ENQUIRY FORM PANEL CONTAINER */}
      <section 
        id="join-us-form-section" 
        className="relative py-12 bg-cover bg-center bg-no-repeat scroll-mt-24 border-b border-gray-150/60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80')" }}
      >
        {/* Visible, clear masking shield overlay directly over the image to keep forms legible */}
        <div className="absolute inset-0 bg-[#FDFDFB]/85 backdrop-blur-[2px] z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest font-mono">Registration Portal</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-brand-black tracking-tight">
              Apply or Connect With KAYF
            </h2>
            <p className="text-xs text-gray-550 max-w-xl mx-auto leading-relaxed">
              The Join Us section contains a dynamic enquiry form with category-based field visibility. No separate dashboard, CRM, or backend system is included in v1.0 &mdash; submissions are received and managed through the configured KAYF email address(es).
            </p>
          </div>

          {/* Primary Selector buttons rows */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-white p-1.5 rounded-sm border border-gray-255">
            <button
              onClick={() => { setActiveTab('student'); resetForm(); }}
              className={`py-3 px-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'student'
                  ? 'bg-brand-blue text-white shadow-xs'
                  : 'text-gray-500 hover:text-brand-blue hover:bg-gray-55/40'
              }`}
            >
              Student / Athlete
            </button>
            <button
              onClick={() => { setActiveTab('coach'); resetForm(); }}
              className={`py-3 px-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'coach'
                  ? 'bg-brand-blue text-white shadow-xs'
                  : 'text-gray-500 hover:text-brand-blue hover:bg-gray-55/40'
              }`}
            >
              Coach / Trainer
            </button>
            <button
              onClick={() => { setActiveTab('school'); resetForm(); }}
              className={`py-3 px-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'school'
                  ? 'bg-brand-blue text-white shadow-xs'
                  : 'text-gray-500 hover:text-brand-blue hover:bg-gray-55/40'
              }`}
            >
              School / Institution
            </button>
            <button
              onClick={() => { setActiveTab('sponsor'); resetForm(); }}
              className={`py-3 px-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === 'sponsor'
                  ? 'bg-brand-blue text-white shadow-xs'
                  : 'text-gray-500 hover:text-brand-blue hover:bg-gray-55/40'
              }`}
            >
              Sponsor / CSR
            </button>
          </div>

          {/* RESPONSE MESSAGE OUTCOMES */}
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-brand-sky/20 border border-brand-blue/20 rounded-sm text-left space-y-3 font-sans">
              <div className="flex items-center space-x-2 text-brand-blue">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <h4 className="font-display font-semibold text-base uppercase tracking-wider">Submission Transmitted Successfully</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Thank you for reaching out to KAYF. Your enquiry has been received and our team will respond shortly. For urgent communication, please contact us directly via the Contact &amp; Support page.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-4 py-2 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all cursor-pointer hover:bg-brand-blue/90"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          )}

          {submitStatus === 'failure' && (
            <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-sm text-left space-y-3 font-sans">
              <div className="flex items-center space-x-2 text-rose-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <h4 className="font-display font-semibold text-base uppercase tracking-wider">Something went wrong</h4>
              </div>
              <p className="text-xs text-rose-800 leading-relaxed font-sans">
                Something went wrong while submitting your enquiry. Please try again, or reach us directly at info@kayf.co.in.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="px-4 py-2 bg-rose-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm cursor-pointer hover:bg-rose-800"
                >
                  Retry Form Submit
                </button>
              </div>
            </div>
          )}

          {/* MASTER ACTIVE FORM */}
          {submitStatus === null && (
            <form onSubmit={handleFormSubmit} className="relative z-10 bg-white/95 shadow-xl border border-gray-100 p-6 sm:p-10 rounded-sm space-y-6 text-left">
              
              {/* Honey Pot Spam Shield Hidden Input */}
              <div className="hidden">
                <label htmlFor="honey-pot-shield">Do not fill this field:</label>
                <input
                  id="honey-pot-shield"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  placeholder="Leave empty"
                />
              </div>

              {/* A. STUDENT / ATHLETE CATEGORY FIELDS */}
              {activeTab === 'student' && (
                <div className="space-y-5">
                  <div className="border-b border-gray-200 pb-2">
                    <h3 className="font-display font-bold text-base text-brand-black">Student / Athlete Affiliation Form</h3>
                    <p className="text-xs text-gray-400 mt-1">Please ensure correct academic credentials are logged.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-fullName">Full Name <span className="text-rose-500">*</span></label>
                      <input
                        id="stud-fullName"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter student full name"
                        value={studentForm.fullName}
                        onChange={(e) => setStudentForm({...studentForm, fullName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-age">Age <span className="text-rose-500">*</span></label>
                      <input
                        id="stud-age"
                        type="number"
                        required
                        min="1"
                        max="99"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter student age"
                        value={studentForm.age}
                        onChange={(e) => setStudentForm({...studentForm, age: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-gender">Gender</label>
                      <select
                        id="stud-gender"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        value={studentForm.gender}
                        onChange={(e) => setStudentForm({...studentForm, gender: e.target.value})}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Prefer not to say</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-schoolName">School / Institution Name <span className="text-rose-500">*</span></label>
                      <input
                        id="stud-schoolName"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter school or college name"
                        value={studentForm.schoolName}
                        onChange={(e) => setStudentForm({...studentForm, schoolName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-sport">Sport of Interest <span className="text-rose-500">*</span></label>
                      <select
                        id="stud-sport"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        value={studentForm.sportOfInterest}
                        onChange={(e) => setStudentForm({...studentForm, sportOfInterest: e.target.value})}
                      >
                        <option value="">Select Sports covered (8 Canonical)</option>
                        {canonicalSports.map((sport) => (
                          <option key={sport} value={sport}>{sport}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-exp">Experience Level</label>
                      <select
                        id="stud-exp"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        value={studentForm.experienceLevel}
                        onChange={(e) => setStudentForm({...studentForm, experienceLevel: e.target.value})}
                      >
                        <option value="">Select Experience (Optional)</option>
                        <option value="beginner">Beginner (No past experience)</option>
                        <option value="intermediate">School / Zonal Level representation</option>
                        <option value="advanced">District or State representation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700" htmlFor="stud-city">City / District <span className="text-rose-500">*</span></label>
                    <input
                      id="stud-city"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                      placeholder="e.g. Chennai, Madurai, Coimbatore"
                      value={studentForm.city}
                      onChange={(e) => setStudentForm({...studentForm, city: e.target.value})}
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-3 space-y-4">
                    <h4 className="font-display font-semibold text-sm text-brand-black">Parent or Guardian Safeguard Information</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-700" htmlFor="stud-parentName">Parent / Guardian Name <span className="text-rose-500">*</span></label>
                        <input
                          id="stud-parentName"
                          type="text"
                          required
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                          placeholder="Contact person name"
                          value={studentForm.parentName}
                          onChange={(e) => setStudentForm({...studentForm, parentName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-700" htmlFor="stud-parentPhone">Parent / Guardian Contact Number <span className="text-rose-500">*</span></label>
                        <input
                          id="stud-parentPhone"
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                          placeholder="Parent phone coordinate"
                          value={studentForm.parentPhone}
                          onChange={(e) => setStudentForm({...studentForm, parentPhone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="stud-parentEmail">Email Address <span className="text-rose-500">*</span></label>
                      <input
                        id="stud-parentEmail"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Guardian standard email coordinate"
                        value={studentForm.parentEmail}
                        onChange={(e) => setStudentForm({...studentForm, parentEmail: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700" htmlFor="stud-msg">Additional Message / Goals</label>
                    <textarea
                      id="stud-msg"
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                      placeholder="List any medical considerations or specific athlete goals..."
                      value={studentForm.message}
                      onChange={(e) => setStudentForm({...studentForm, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start space-x-3 text-xs text-gray-600 leading-relaxed cursor-pointer" htmlFor="stud-consent">
                      <input
                        id="stud-consent"
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 rounded border-gray-350 text-brand-blue focus:ring-brand-blue cursor-pointer"
                        checked={studentForm.consent}
                        onChange={(e) => setStudentForm({...studentForm, consent: e.target.checked})}
                      />
                      <span>
                        I confirm that I am the parent or guardian of the applicant (if under 18), and I consent to their participation in KAYF programs. <span className="text-rose-500">*</span>
                      </span>
                    </label>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-gray-400 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Processing request details...</span>
                      ) : (
                        <>
                          <span>Submit Student Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* B. COACH / TRAINER CATEGORY FIELDS */}
              {activeTab === 'coach' && (
                <div className="space-y-5">
                  <div className="border-b border-gray-200 pb-2">
                    <h3 className="font-display font-bold text-base text-brand-black">Coach &amp; Instructor Registration Form</h3>
                    <p className="text-xs text-gray-400 mt-1">Certified credits, clinical clearances, and background disclosures apply.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-fullName">Full Name <span className="text-rose-500">*</span></label>
                      <input
                        id="co-fullName"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter your full name"
                        value={coachForm.fullName}
                        onChange={(e) => setCoachForm({...coachForm, fullName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-phone">Phone Number <span className="text-rose-500">*</span></label>
                      <input
                        id="co-phone"
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter active telephone coordinate"
                        value={coachForm.phone}
                        onChange={(e) => setCoachForm({...coachForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-email">Email Address <span className="text-rose-500">*</span></label>
                      <input
                        id="co-email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter personal email coordinate"
                        value={coachForm.email}
                        onChange={(e) => setCoachForm({...coachForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-sport">Sport / Coaching Area <span className="text-rose-500">*</span></label>
                      <select
                        id="co-sport"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        value={coachForm.sportArea}
                        onChange={(e) => setCoachForm({...coachForm, sportArea: e.target.value})}
                      >
                        <option value="">Select Sports area (8 Canonical)</option>
                        {canonicalSports.map((sport) => (
                           <option key={sport} value={sport}>{sport}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-exp">Coaching Experience (years) <span className="text-rose-500">*</span></label>
                      <input
                        id="co-exp"
                        type="number"
                        required
                        min="0"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Coaching experience in years"
                        value={coachForm.experienceYears}
                        onChange={(e) => setCoachForm({...coachForm, experienceYears: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-city">City / District <span className="text-rose-500">*</span></label>
                      <input
                        id="co-city"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter active city location"
                        value={coachForm.city}
                        onChange={(e) => setCoachForm({...coachForm, city: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-certs">Certifications / Qualifications</label>
                      <input
                        id="co-certs"
                        type="text"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="e.g. NetS-certified, Sports degrees..."
                        value={coachForm.certifications}
                        onChange={(e) => setCoachForm({...coachForm, certifications: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="co-org">Current Organisation</label>
                      <input
                        id="co-org"
                        type="text"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter company or school name"
                        value={coachForm.organisation}
                        onChange={(e) => setCoachForm({...coachForm, organisation: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700" htmlFor="co-info">Additional Information</label>
                    <textarea
                      id="co-info"
                      rows={2}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                      placeholder="Share your coaching philosophy or details..."
                      value={coachForm.additionalInfo}
                      onChange={(e) => setCoachForm({...coachForm, additionalInfo: e.target.value})}
                    ></textarea>
                  </div>

                  {/* Drag-and-Drop File Upload according to UX patterns */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700">File Upload &mdash; Certificates / Resume</label>
                    
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${
                        dragActive
                          ? 'border-brand-blue bg-brand-sky/20'
                          : uploadedFile
                          ? 'border-brand-green bg-brand-green/5'
                          : 'border-gray-300 hover:border-brand-blue hover:bg-brand-sky/10'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      
                      <div className="flex flex-col items-center space-y-2">
                        <Upload className={`w-8 h-8 ${uploadedFile ? 'text-brand-green' : 'text-gray-400'}`} />
                        {uploadedFile ? (
                          <div className="space-y-1">
                            <p className="text-xs font-semibold text-brand-green">Selected File: {uploadedFile.name}</p>
                            <p className="text-[10px] text-gray-500">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB &bull; PDF / Word</p>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <p className="text-xs font-semibold text-gray-700">Drag &amp; drop your resume or certificates here, or click to browse</p>
                            <p className="text-[10px] text-gray-400">Supports PDF, DOC, DOCX up to 5MB</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-gray-400 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Uploading files &amp; details...</span>
                      ) : (
                        <>
                          <span>Submit Coach Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* C. SCHOOL / INSTITUTION LAYOUT */}
              {activeTab === 'school' && (
                <div className="space-y-5">
                  <div className="border-b border-gray-200 pb-2">
                    <h3 className="font-display font-bold text-base text-brand-black">Campus Partnership Request Form</h3>
                    <p className="text-xs text-gray-400 mt-1">Integrating turnkey sports modules with state-level physical education matrices.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-name">Institution Name <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-name"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter school or college name"
                        value={schoolForm.institutionName}
                        onChange={(e) => setSchoolForm({...schoolForm, institutionName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-person">Contact Person Name <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-person"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter contact representative name"
                        value={schoolForm.contactName}
                        onChange={(e) => setSchoolForm({...schoolForm, contactName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-role">Designation / Role <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-role"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="e.g. Principal, Trust Director, Coach Head"
                        value={schoolForm.designation}
                        onChange={(e) => setSchoolForm({...schoolForm, designation: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-phone">Phone Number <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-phone"
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Direct phone coordinate"
                        value={schoolForm.phone}
                        onChange={(e) => setSchoolForm({...schoolForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-email">Email Address <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Institutional standard email"
                        value={schoolForm.email}
                        onChange={(e) => setSchoolForm({...schoolForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-count">Number of Students <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-count"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Estimated active student strength"
                        value={schoolForm.studentsCount}
                        onChange={(e) => setSchoolForm({...schoolForm, studentsCount: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-infra">Existing Sports Infrastructure</label>
                      <input
                        id="sch-infra"
                        type="text"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="e.g. Mud ground, cement courts..."
                        value={schoolForm.existingInfra}
                        onChange={(e) => setSchoolForm({...schoolForm, existingInfra: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-interest">Areas of Interest <span className="text-rose-500">*</span></label>
                      <input
                        id="sch-interest"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="In-School Programs, Arena layout advisory..."
                        value={schoolForm.areasOfInterest}
                        onChange={(e) => setSchoolForm({...schoolForm, areasOfInterest: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-meet">Meeting / Discussion Request</label>
                      <select
                        id="sch-meet"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        value={schoolForm.meetingRequest}
                        onChange={(e) => setSchoolForm({...schoolForm, meetingRequest: e.target.value})}
                      >
                        <option value="">Select Priority Preference</option>
                        <option value="call-urgent">Urgent callback within 24 Hours</option>
                        <option value="visit-campus">Schedule physical campus visit</option>
                        <option value="virtual-meet">Schedule Virtual Zoom/Meet</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="sch-notes">Additional Notes</label>
                      <input
                        id="sch-notes"
                        type="text"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Best days or hours of context contact..."
                        value={schoolForm.notes}
                        onChange={(e) => setSchoolForm({...schoolForm, notes: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-gray-400 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Processing alignment request...</span>
                      ) : (
                        <>
                          <span>Submit Institutional Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* D. SPONSOR / CSR PARTNER LAYOUT */}
              {activeTab === 'sponsor' && (
                <div className="space-y-5">
                  <div className="border-b border-gray-200 pb-2">
                    <h3 className="font-display font-bold text-base text-brand-black">Sponsorship &amp; CSR Alignment Form</h3>
                    <p className="text-xs text-gray-400 mt-1">Leveraging sports as an active social empower framework with transparent metrics reporting.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="spon-org">Organisation Name <span className="text-rose-500">*</span></label>
                      <input
                        id="spon-org"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter corporate or foundation name"
                        value={sponsorForm.orgName}
                        onChange={(e) => setSponsorForm({...sponsorForm, orgName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="spon-person">Contact Person Name <span className="text-rose-500">*</span></label>
                      <input
                        id="spon-person"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Enter representative name"
                        value={sponsorForm.contactName}
                        onChange={(e) => setSponsorForm({...sponsorForm, contactName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="spon-desig">Designation <span className="text-rose-500">*</span></label>
                      <input
                        id="spon-desig"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="CSR Lead, Marketing Executive, etc."
                        value={sponsorForm.designation}
                        onChange={(e) => setSponsorForm({...sponsorForm, designation: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="spon-phone">Phone Number <span className="text-rose-500">*</span></label>
                      <input
                        id="spon-phone"
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        placeholder="Direct contact telephone number"
                        value={sponsorForm.phone}
                        onChange={(e) => setSponsorForm({...sponsorForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700" htmlFor="spon-email">Email Address <span className="text-rose-500">*</span></label>
                    <input
                      id="spon-email"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                      placeholder="Corporate email coordinate"
                      value={sponsorForm.email}
                      onChange={(e) => setSponsorForm({...sponsorForm, email: e.target.value})}
                    />
                  </div>

                  {/* Sponsorship checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-semibold text-gray-700 block">Sponsorship Interest Type (Select all that apply)</label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                      <label className="flex items-center space-x-2.5 text-xs text-gray-600 cursor-pointer" htmlFor="cb-csr">
                        <input
                          id="cb-csr"
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-350 text-brand-blue cursor-pointer"
                          checked={csrChecked}
                          onChange={(e) => setCsrChecked(e.target.checked)}
                        />
                        <span>CSR Partnership</span>
                      </label>
                      <label className="flex items-center space-x-2.5 text-xs text-gray-600 cursor-pointer" htmlFor="cb-event">
                        <input
                          id="cb-event"
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-350 text-brand-blue cursor-pointer"
                          checked={eventChecked}
                          onChange={(e) => setEventChecked(e.target.checked)}
                        />
                        <span>Event Sponsorship</span>
                      </label>
                      <label className="flex items-center space-x-2.5 text-xs text-gray-600 cursor-pointer" htmlFor="cb-dev">
                        <input
                          id="cb-dev"
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-350 text-brand-blue cursor-pointer"
                          checked={devChecked}
                          onChange={(e) => setDevChecked(e.target.checked)}
                        />
                        <span>Sports Development Support</span>
                      </label>
                      <label className="flex items-center space-x-2.5 text-xs text-gray-600 cursor-pointer" htmlFor="cb-infra">
                        <input
                          id="cb-infra"
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-350 text-brand-blue cursor-pointer"
                          checked={infraChecked}
                          onChange={(e) => setInfraChecked(e.target.checked)}
                        />
                        <span>Infrastructure Support</span>
                      </label>
                      <label className="flex items-center space-x-2.5 text-xs text-gray-600 cursor-pointer" htmlFor="cb-other">
                        <input
                          id="cb-other"
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-350 text-brand-blue cursor-pointer"
                          checked={otherChecked}
                          onChange={(e) => setOtherChecked(e.target.checked)}
                        />
                        <span>Other (please specify)</span>
                      </label>
                    </div>

                    {otherChecked && (
                      <div className="pt-2 pl-6">
                        <input
                          type="text"
                          required={otherChecked}
                          className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-xs focus:border-brand-blue outline-none"
                          placeholder="Please clarify dynamic category interest..."
                          value={otherSponsorText}
                          onChange={(e) => setOtherSponsorText(e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700" htmlFor="spon-budg">Sponsorship Budget Range</label>
                      <select
                        id="spon-budg"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                        value={sponsorForm.budgetRange}
                        onChange={(e) => setSponsorForm({...sponsorForm, budgetRange: e.target.value})}
                      >
                        <option value="">Select Budget Preference</option>
                        <option value="under-1">Below ₹1 Lakhs</option>
                        <option value="1-5">₹1 Lakhs to ₹5 Lakhs</option>
                        <option value="5-10">₹5 Lakhs to ₹10 Lakhs</option>
                        <option value="above-10">Above ₹10 Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700" htmlFor="spon-prop">Message / Proposal Details <span className="text-rose-500">*</span></label>
                    <textarea
                      id="spon-prop"
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded text-sm focus:border-brand-blue outline-none"
                      placeholder="List the campaign objectives, timelines, preferred regional tracks..."
                      value={sponsorForm.proposal}
                      onChange={(e) => setSponsorForm({...sponsorForm, proposal: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/90 disabled:bg-gray-400 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Processing proposal metrics...</span>
                      ) : (
                        <>
                          <span>Submit Sponsorship Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>
      </section>

      {/* 4. DETAILS - HOW THE PROCESS WORKS ROADMAP */}
      <section className="py-20 bg-brand-offwhite border-t border-gray-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-mono">Operations Lifecycle</span>
            <h2 className="font-display font-medium text-3xl text-neutral-900 tracking-tight">
              A Simple and Organised Participation Process
            </h2>
            <div className="w-12 h-0.5 bg-brand-sandal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: '1', title: 'Step 1 &mdash; Submit Your Interest', desc: 'Select the appropriate category and complete the enquiry form.' },
              { id: '2', title: 'Step 2 &mdash; Review &amp; Initial Interaction', desc: 'The KAYF team reviews the submission and connects where required.' },
              { id: '3', title: 'Step 3 &mdash; Participation / Partnership Planning', desc: 'Relevant programs, opportunities, or collaboration pathways are identified.' },
              { id: '4', title: 'Step 4 &mdash; Onboarding &amp; Engagement', desc: 'Participants, institutions, or partners are guided through the next stage of involvement.' }
            ].map((step) => (
              <div key={step.id} className="bg-white p-5 rounded-lg border border-gray-200">
                <span className="font-mono text-brand-blue text-sm font-bold block mb-2">{`STEP 0${step.id}`}</span>
                <h4 className="font-display font-bold text-sm text-brand-black" dangerouslySetInnerHTML={{ __html: step.title }}></h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALTERNATIVE CONTACT SECTION */}
      <section className="py-16 bg-white border-t border-gray-150 text-left">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 bg-brand-sky/20 rounded-lg border border-brand-sky/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-brand-black">Prefer to Talk First?</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                For direct communication, support, or clarification before applying, visitors may contact the KAYF support team directly. We are fully aligned Monday to Saturday.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center space-x-2 cursor-pointer flex-shrink-0"
            >
              <span>Contact &amp; Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
