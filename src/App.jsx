import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  Wind, 
  Activity, 
  Feather, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Globe, 
  Clock, 
  CheckCircle2,
  RotateCcw,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    format: 'virtual',
    focus: 'somatic',
    message: ''
  });

  const handleEnter = () => {
    setIsZooming(true);
    setTimeout(() => {
      setHasEntered(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 1800);
  };

  const handleResetPortal = () => {
    setHasEntered(false);
    setIsZooming(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f0e] text-[#e3e1d9] selection:bg-[#323832] selection:text-[#f7f5ee]">
      {/* ===================== THE THRESHOLD PORTAL ===================== */}
      {!hasEntered && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black transition-opacity duration-1000 ${
            isZooming ? 'opacity-0 delay-700 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Background Image with Black & White blend effect */}
          <div 
            className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-no-repeat transition-all ease-[cubic-bezier(0.7,0,0.2,1)]"
            style={{
              backgroundImage: "url('./portal_mouth.jpg')",
              backgroundPosition: '50% 38%',
              filter: 'grayscale(100%) contrast(115%) brightness(60%)',
              transformOrigin: '50% 55%',
              transform: isZooming ? 'scale(9)' : 'scale(1)',
              transitionDuration: '2.4s'
            }}
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_55%,transparent_20%,rgba(0,0,0,0.8)_70%,#000_100%)]" />

          {/* Center Card */}
          <div 
            className={`relative z-10 text-center px-6 max-w-xl transition-all duration-700 ${
              isZooming ? 'opacity-0 scale-90 translate-y-4' : 'opacity-100 scale-100'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md mb-6 text-xs uppercase tracking-[0.3em] text-[#b0ae9f]">
              <Sparkles className="w-3.5 h-3.5 text-[#d0cdbb]" />
              <span>Step Across The Threshold</span>
            </div>

            <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light tracking-[0.08em] text-[#faf8f2] mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              SAYA INTEGRATIVE
            </h1>

            <p className="font-serif-cormorant italic text-lg md:text-xl text-[#ccc9bb] mb-10 tracking-wide">
              Psycho-Spiritual Embodied Integration
            </p>

            <button
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 hover:border-white/80 text-white text-xs uppercase tracking-[0.3em] backdrop-blur-md transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Enter</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}

      {/* ===================== THE MAIN WEBSITE ===================== */}
      <div className={`transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 bg-[#0d0f0e]/85 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-serif-cormorant text-2xl tracking-[0.1em] text-[#faf8f2]">
                SAYA
              </span>
              <span className="hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#8e8d82] border-l border-white/15 pl-3">
                Integrative Therapy
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#a4a296]">
              <a href="#about" className="hover:text-[#faf8f2] transition-colors">About</a>
              <a href="#modalities" className="hover:text-[#faf8f2] transition-colors">Modalities</a>
              <a href="#integration" className="hover:text-[#faf8f2] transition-colors">Integration</a>
              <a href="#pathway" className="hover:text-[#faf8f2] transition-colors">Pathway</a>
              <a href="#contact" className="hover:text-[#faf8f2] transition-colors">Inquiries</a>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={handleResetPortal}
                title="Re-enter Portal"
                className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#7a7970] hover:text-[#c4c2b5] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Portal</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-[0.2em] text-[#faf8f2] transition-all cursor-pointer"
              >
                Consultation
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#ccc9bb]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#131514] border-b border-white/10 px-6 py-6 space-y-4 text-xs uppercase tracking-[0.2em]">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#ccc9bb]">About</a>
              <a href="#modalities" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#ccc9bb]">Modalities</a>
              <a href="#integration" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#ccc9bb]">Integration</a>
              <a href="#pathway" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#ccc9bb]">Pathway</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#ccc9bb]">Inquiries</a>
              <button onClick={handleResetPortal} className="block py-2 text-[#8e8d82]">Re-enter Threshold Portal</button>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 mb-8 text-xs uppercase tracking-[0.25em] text-[#b8b5a5]">
            <Compass className="w-3.5 h-3.5 text-[#cdc9b5]" />
            <span>Psychotherapist & Contemplative Mentor</span>
          </div>

          <h2 className="font-serif-cormorant text-5xl sm:text-6xl md:text-7xl font-light leading-[1.15] text-[#faf8f2] mb-8 max-w-4xl mx-auto">
            Psycho-Spiritual <br />
            <span className="italic font-normal text-[#dfdcd0]">Embodied Integration</span>
          </h2>

          <p className="text-base sm:text-lg text-[#aaa89b] font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Offering a collaborative, confidential container bridging evidence-informed somatic psychotherapy with the sacred depth of Eastern contemplative wisdom (inspired by the lineage of Mark Guruji).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#f4f2ea] text-[#0f1110] font-medium text-xs uppercase tracking-[0.25em] hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Request Initial Consultation
            </a>
            <a
              href="#modalities"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-white/50 text-[#e0ded2] text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition-all cursor-pointer text-center"
            >
              Explore Modalities
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-xs uppercase tracking-[0.2em] text-[#7a786e]">
            <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#9e9c8e]" /> In-Person Australia</span>
            <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-[#9e9c8e]" /> Virtual Worldwide</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-[#9e9c8e]" /> Confidential & Trauma-Informed</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-[#131614] border-y border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 aspect-[4/5] shadow-2xl">
                <img 
                  src="./portal_mouth.jpg" 
                  alt="Threshold Gateway" 
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-serif-cormorant text-2xl text-[#f3f1e7] italic">
                    "The journey inward begins where certainty dissolves."
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9a9787]">
                About The Practice
              </span>
              <h3 className="font-serif-cormorant text-4xl sm:text-5xl text-[#faf8f2] font-light leading-snug">
                Grounded in Science. <br />
                Rooted in Contemplative Depth.
              </h3>
              <p className="text-sm sm:text-base text-[#aaa799] font-light leading-relaxed">
                Beginning therapy is a sacred, intentional step. SAYA Integrative is guided by Mataji, providing a supportive, collaborative space where your autonomy, pacing, and goals direct the therapeutic journey.
              </p>
              <p className="text-sm sm:text-base text-[#aaa799] font-light leading-relaxed">
                Rather than treating symptoms in isolation, this practice views the human organism as an inseparable continuum of nervous system physiology, emotional memory, and spiritual meaning.
              </p>
              
              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="font-serif-cormorant text-lg text-[#eae8db] mb-1">Trauma-Informed</div>
                  <p className="text-xs text-[#8c8a7e] leading-normal">Gentle, titrated nervous system regulation prioritizing safety.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="font-serif-cormorant text-lg text-[#eae8db] mb-1">Eastern Lineage</div>
                  <p className="text-xs text-[#8c8a7e] leading-normal">Carrying the contemplative meditative wisdom of Mark Guruji.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modalities Section */}
        <section id="modalities" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9a9787]">Core Pillars</span>
            <h3 className="font-serif-cormorant text-4xl sm:text-5xl text-[#faf8f2] font-light mt-2 mb-4">
              Therapeutic Modalities
            </h3>
            <p className="text-sm text-[#9c998b] font-light leading-relaxed">
              Every body and psyche carries its own cadence. Modalities are woven individually based on ongoing assessment and client readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Somatic Psychotherapy */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 text-[#dad7c7] group-hover:scale-110 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-serif-cormorant text-2xl text-[#f5f3e8] mb-3">Somatic Psychotherapy</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                Body-centered emotional processing, vagal tone regulation, and releasing trauma held within the somatic architecture.
              </p>
            </div>

            {/* Trauma-Informed Yoga */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 text-[#dad7c7] group-hover:scale-110 transition-transform">
                <Feather className="w-5 h-5" />
              </div>
              <h4 className="font-serif-cormorant text-2xl text-[#f5f3e8] mb-3">Clinical & Mindful Yoga</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                Gentle Hatha, Yin Yoga, and deep restorative Yoga Nidra tailored for nervous system down-regulation and somatic settling.
              </p>
            </div>

            {/* Breathwork & Sound */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 text-[#dad7c7] group-hover:scale-110 transition-transform">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="font-serif-cormorant text-2xl text-[#f5f3e8] mb-3">Sound & Breathwork</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                Acoustic frequency immersion and contemplative pranayama practices that quiet the analytical mind and restore equilibrium.
              </p>
            </div>

            {/* Contemplative Inquiry */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 text-[#dad7c7] group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif-cormorant text-2xl text-[#f5f3e8] mb-3">Contemplative Inquiry</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                Structured self-inquiry and spiritual mentorship guiding meaning-making, existential clarity, and inner integration.
              </p>
            </div>
          </div>
        </section>

        {/* Altered States & Integration Section */}
        <section id="integration" className="py-24 px-6 bg-[#131614] border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9a9787]">Integration Container</span>
            <h3 className="font-serif-cormorant text-4xl sm:text-5xl text-[#faf8f2] font-light">
              Altered States & Non-Ordinary Consciousness
            </h3>
            <p className="text-sm sm:text-base text-[#aba89b] font-light leading-relaxed max-w-2xl mx-auto">
              For individuals or couples navigating or integrating non-ordinary states of consciousness, SAYA provides preparation and integration support grounded in psychological safety and clinical harm-reduction.
            </p>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-left max-w-2xl mx-auto space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c7c4b3]">
                <ShieldCheck className="w-4 h-4 text-[#e1decb]" />
                <span>Ethical & Clinical Boundaries</span>
              </div>
              <p className="text-xs text-[#8f8d80] leading-relaxed">
                This service focuses strictly on psychological preparation, meaning-making, and trauma-informed somatic grounding. <strong className="text-[#d8d5c4]">No psychoactive substances are supplied, administered, or consumed.</strong> Work is undertaken only after careful clinical screening and mutual alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Client Pathway Section */}
        <section id="pathway" className="py-24 px-6 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9a9787]">How We Work</span>
            <h3 className="font-serif-cormorant text-4xl sm:text-5xl text-[#faf8f2] font-light mt-2 mb-4">
              The Client Journey
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
              <div className="font-serif-cormorant text-3xl text-[#b8b5a5]">01</div>
              <h4 className="font-serif-cormorant text-2xl text-[#faf8f2]">Meet & Greet</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                A brief initial consultation focused on understanding what brings you to therapy, exploring alignment, and ensuring a comfortable space with zero pressure to share before you are ready.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
              <div className="font-serif-cormorant text-3xl text-[#b8b5a5]">02</div>
              <h4 className="font-serif-cormorant text-2xl text-[#faf8f2]">Assessment & Formulation</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                In-depth somatic and psychological mapping to co-create an individualised care plan tailored to your nervous system needs and spiritual orientation.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
              <div className="font-serif-cormorant text-3xl text-[#b8b5a5]">03</div>
              <h4 className="font-serif-cormorant text-2xl text-[#faf8f2]">Ongoing Integration</h4>
              <p className="text-xs text-[#9c9a8c] leading-relaxed">
                Weekly or fortnightly sessions combining somatic psychotherapy, contemplative movement, and conscious embodied integration (in Australia or virtually).
              </p>
            </div>
          </div>
        </section>

        {/* Inquiries & Consultation Form */}
        <section id="contact" className="py-24 px-6 bg-[#131614] border-t border-white/5">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9a9787]">Confidential Inquiries</span>
              <h3 className="font-serif-cormorant text-4xl sm:text-5xl text-[#faf8f2] font-light mt-2 mb-3">
                Begin The Conversation
              </h3>
              <p className="text-xs sm:text-sm text-[#9c998c] font-light">
                Please complete the form below to request a brief meet-and-greet or ongoing consultation.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl border border-white/20 bg-white/[0.04] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#dad6c5] mx-auto" />
                <h4 className="font-serif-cormorant text-2xl text-[#faf8f2]">Thank You for Reaching Out</h4>
                <p className="text-xs text-[#aaa799] leading-relaxed">
                  Your inquiry has been received in strict confidence. Mataji will review your notes and respond within 1-2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#a19f90] mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/40 text-sm text-[#eee] focus:border-white/50 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#a19f90] mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/40 text-sm text-[#eee] focus:border-white/50 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#a19f90] mb-2">Preferred Format</label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({...formData, format: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/40 text-sm text-[#eee] focus:border-white/50 focus:outline-none transition-colors"
                    >
                      <option value="virtual">Virtual (Zoom)</option>
                      <option value="in-person">In-Person (Australia)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#a19f90] mb-2">Focus Area</label>
                    <select
                      value={formData.focus}
                      onChange={(e) => setFormData({...formData, focus: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/40 text-sm text-[#eee] focus:border-white/50 focus:outline-none transition-colors"
                    >
                      <option value="somatic">Somatic Psychotherapy</option>
                      <option value="yoga">Clinical Yoga & Nidra</option>
                      <option value="integration">Altered States Integration</option>
                      <option value="general">Meet & Greet Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#a19f90] mb-2">Message or Context</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Briefly share what brings you to this work..."
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-black/40 text-sm text-[#eee] focus:border-white/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#f4f2ea] text-[#0f1110] font-medium text-xs uppercase tracking-[0.25em] hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Submit Confidential Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10 bg-[#0d0f0e] text-center text-xs text-[#737167] space-y-4">
          <div className="font-serif-cormorant text-2xl tracking-[0.08em] text-[#dfddd1]">
            SAYA INTEGRATIVE THERAPY
          </div>
          <p className="max-w-md mx-auto leading-relaxed">
            Psycho-Spiritual Embodied Integration · Australia · sayaintegrative.com
          </p>
          <div className="pt-4 text-[10px] tracking-widest uppercase text-[#55544c]">
            © {new Date().getFullYear()} SAYA Integrative Therapy. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
