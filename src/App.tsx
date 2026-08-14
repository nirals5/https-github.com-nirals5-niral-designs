import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Instagram, 
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { LinkedInIcon, SubstackIcon } from "./components/SocialIcons";
import heroVine from "./assets/images/hero-vine-animated.svg";
import niralPortrait from "./assets/images/niral_portrait.png";
import liveGuideCover from "./assets/images/live_guide_mobile_cover.png";
import pranavedaCover from "./assets/images/pranaveda_cover.jpg";
import muralImage from "./assets/images/mural.png";
import tivoOneAdCover from "./assets/images/tivo-one_ad_cover.jpg";
import jeffMillerPhoto from "./assets/images/testimonial_jeff.jpeg";
import philGolyshkoPhoto from "./assets/images/testimonial_phil.jpeg";
import PillarDeck from "./components/PillarDeck";
import Journey from "./components/Journey";
import FadeInSection from "./components/FadeInSection";
import NiralLogo from "./components/NiralLogo";
import { caseStudiesData } from "./data/caseStudies";
import ResumePage from "./pages/ResumePage";
import CaseStudyPage from "./pages/CaseStudyPage";

const testimonials = [
  {
    quote: "Niral never treated learning as a solo pursuit. She made the entire team better.",
    name: "Jeff Miller",
    role: "Senior Product Designer",
    context: "Worked together for 10 years",
    linkedin: "https://www.linkedin.com/in/jm-designs/",
    initials: "JM",
    avatar: jeffMillerPhoto
  },
  {
    quote: "Her depth of empathy for users is unmatched.",
    name: "Phil Golyshko",
    role: "Design Manager",
    linkedin: "https://www.linkedin.com/in/philgolyshko/",
    initials: "PG",
    avatar: philGolyshkoPhoto
  },
  {
    quote: "She wasn't just my senior designer; she became my mentor.",
    name: "Ioan-Antonio Bogdan",
    role: "UX Designer",
    initials: "IB"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [aboutPhotoActive, setAboutPhotoActive] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#/");

  // Sync window hash for clean page routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Auto-scrolling for testimonials (resets interval on manual action)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextTestimonial();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  // Monitor scroll state for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dedicated Full Page Routing
  if (currentHash === "#/resume") {
    return <ResumePage onNavigateHome={() => { window.location.hash = "#/"; }} />;
  }

  if (currentHash.startsWith("#/case-study/")) {
    const csId = currentHash.replace("#/case-study/", "");
    return (
      <CaseStudyPage 
        caseStudyId={csId} 
        onNavigateHome={() => { window.location.hash = "#/"; }} 
        onNavigateCaseStudy={(id) => { window.location.hash = `#/case-study/${id}`; }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-paper font-body text-gray antialiased selection:bg-ink/20">
      
      {/* --- NAV BAR --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-paper/90 backdrop-blur-md border-b hairline py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 font-display font-semibold text-h3 text-ink-deep tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            <NiralLogo size={24} className="rounded" />
            <span>Niral Shah</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => smoothScrollTo("work")}
              className="relative py-1.5 font-sans text-[13px] font-semibold uppercase text-ink hover:text-ink-deep tracking-widest transition-colors cursor-pointer group"
            >
              <span>Work</span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => smoothScrollTo("craft")}
              className="relative py-1.5 font-sans text-[13px] font-semibold uppercase text-ink hover:text-ink-deep tracking-widest transition-colors cursor-pointer group"
            >
              <span>Craft</span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => smoothScrollTo("about")}
              className="relative py-1.5 font-sans text-[13px] font-semibold uppercase text-ink hover:text-ink-deep tracking-widest transition-colors cursor-pointer group"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => smoothScrollTo("contact")}
              className="relative py-1.5 font-sans text-[13px] font-semibold uppercase text-ink hover:text-ink-deep tracking-widest transition-colors cursor-pointer group"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => { window.location.hash = "#/resume"; }}
              className="relative py-1.5 font-sans text-[13px] font-semibold uppercase text-ink hover:text-ink-deep tracking-widest transition-colors cursor-pointer group"
            >
              <span>Resume</span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-ink-deep hover:text-ink focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-paper border-b hairline absolute top-full left-0 w-full py-6 px-8 flex flex-col gap-5 shadow-lg"
          >
            <button 
              onClick={() => smoothScrollTo("work")}
              className="font-mono text-left text-sm uppercase text-ink/85 hover:text-ink-deep tracking-widest py-1"
            >
              Work
            </button>
            <button 
              onClick={() => smoothScrollTo("craft")}
              className="font-mono text-left text-sm uppercase text-ink/85 hover:text-ink-deep tracking-widest py-1"
            >
              Craft
            </button>
            <button 
              onClick={() => smoothScrollTo("about")}
              className="font-mono text-left text-sm uppercase text-ink/85 hover:text-ink-deep tracking-widest py-1"
            >
              About
            </button>
            <button 
              onClick={() => smoothScrollTo("contact")}
              className="font-mono text-left text-sm uppercase text-ink/85 hover:text-ink-deep tracking-widest py-1"
            >
              Contact
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.hash = "#/resume";
              }}
              className="font-mono text-left text-sm uppercase text-ink/85 hover:text-ink-deep tracking-widest py-1"
            >
              Resume
            </button>
          </motion.div>
        )}
      </nav>


      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-0 md:pt-40 md:pb-0 overflow-hidden border-b hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center py-10 lg:pr-16">
            {/* Design strategy kicker */}
            <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-4">
              DESIGN STRATEGY & PRODUCT LEADERSHIP
            </span>

            {/* Main elegant H1 */}
            <h1 className="font-display font-semibold text-display text-ink-deep leading-[1.12] tracking-tight mb-6">
              Every meaningful experience begins with an invisible system.
            </h1>

            {/* Secondary bio description */}
            <p className="text-body-lg text-gray leading-relaxed mb-10 max-w-xl">
              I design products people trust while creating the systems that make them feel effortless, from consumer platforms across TV, mobile, and web used by millions to AI experiences built from scratch.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => smoothScrollTo("work")}
                className="btn-primary cursor-pointer"
              >
                See the work
              </button>
              <button 
                onClick={() => { window.location.hash = "#/resume"; }}
                className="btn-secondary cursor-pointer inline-flex items-center gap-2"
              >
                <span>Resume</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Editorial Footer Subtitle */}
            <div className="mt-12 flex gap-4 items-center select-none">
              <span className="h-[1px] w-12 bg-ink opacity-30"></span>
              <span className="font-display italic text-ink text-base">Invisible systems → Visible impact</span>
            </div>
          </div>

          {/* Right Column: Hand-drawn Pencil SVG flower in Split-screen visual column */}
          <div className="lg:col-span-5 relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center bg-paper-deep/40 lg:border-l border-ink/22 p-8 rounded-2xl lg:rounded-none">
            {/* Decorative subtle glow pattern behind the flower */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-lilac/8 blur-3xl -z-10 pointer-events-none" />
            
            <div className="w-full max-w-[380px] relative py-4 flex flex-col items-center">
              <img 
                src={heroVine} 
                alt="Kalamkari Animated Vine Artwork" 
                className="w-full h-auto max-w-[420px] mx-auto select-none drop-shadow-sm filter transition-all duration-300 hover:drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              
              {/* Design Note placed under the flower to ensure absolutely no overlap */}
              <div className="mt-6 text-center select-none max-w-[320px]">
                <p className="font-mono text-[9px] font-bold uppercase text-ink/70 tracking-[0.18em] mb-1">Design Note</p>
                <p className="font-display italic text-ink-deep text-xs leading-relaxed">
                  Part of a mural I designed where every symbol has a story.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll down mouse indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-65 animate-bounce">
          <span className="font-mono text-[10px] tracking-widest text-ink/70 uppercase">Explore</span>
          <ChevronDown className="w-4 h-4 text-ink" />
        </div>
      </header>


      {/* --- PILLARS ("How I Work") SECTION --- */}
      <section className="bg-paper-deep py-20 md:py-28 border-y hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-14 md:mb-18">
            <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-3 block">
              HOW I WORK
            </span>
            <h2 className="font-display font-semibold text-h2 text-ink-deep leading-tight mb-5">
              The principles behind the craft.
            </h2>
            <p className="text-body text-gray leading-relaxed">
              Every element below is from a piece of craft I designed — each one symbolizes a way of working I bring to product teams.
            </p>
          </div>

          {/* Intersecting Stacked Deck Component */}
          <PillarDeck />

        </div>
      </section>


      {/* --- SELECTED WORK SECTION --- */}
      <section id="work" className="py-20 md:py-28 bg-charcoal border-y border-white/10 text-paper selection:bg-paper/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="font-mono text-kicker uppercase text-paper tracking-[0.18em] mb-3 block">
              SELECTED WORK
            </span>
            <h2 className="font-display font-semibold text-h2 text-paper leading-tight mb-5">
              Different problems. Same human-centered approach.
            </h2>
            <p className="text-body text-paper/85 leading-relaxed">
              From consumer platforms used by millions to AI products built from scratch, each project reflects the same belief: meaningful experiences emerge from thoughtful systems.
            </p>
          </div>

          {/* Case Studies Lists */}
          <div className="flex flex-col gap-24 md:gap-36">
            
            {/* Case Study 01 */}
            <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
              {/* Image side - taking 5 cols */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-sm group bg-white/5 p-2">
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-charcoal/50 relative">
                  <img 
                    src={liveGuideCover} 
                    alt="TiVo Live TV Guide Mobile Interface Mockup" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle paper color overlay */}
                  <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>

              {/* Content side - taking 7 cols */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center">
                <span className="font-mono text-kicker uppercase text-paper-deep tracking-[0.18em] mb-2">
                  01 • SCALE & IMPACT
                </span>
                <h3 className="font-display font-semibold text-display text-paper leading-tight mb-3">
                  Reimagining Live TV Around People, Not Channels
                </h3>

                {/* Role badge */}
                <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-wider">
                  <span className="text-lilac font-bold">Role:</span>
                  <span className="text-paper bg-white/10 px-3 py-1 rounded-full font-sans text-xs font-semibold">
                    {caseStudiesData[0].role}
                  </span>
                </div>

                <p className="text-body text-paper/80 leading-relaxed mb-6">
                  A ground-up rethink of TiVo's live TV guide for native mobile apps. Resolved complex legacy schedules into an immersive, content-first experience.
                </p>

                {/* Highlight metric box */}
                <div className="bg-white/5 border-l-2 border-lilac p-4 rounded-r-lg max-w-xl mb-6">
                  <p className="text-body-sm font-medium text-paper font-sans">
                    20% increase in viewership, 36% in device downloads, within two months of launch
                  </p>
                </div>
                
                {/* View Case Study button */}
                <button
                  onClick={() => { window.location.hash = `#/case-study/${caseStudiesData[0].id}`; }}
                  className="bg-paper text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white hover:text-charcoal hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer transition-all border border-paper"
                >
                  <span>View case study</span>
                  <ChevronRight className="w-4 h-4 text-ink-deep" />
                </button>
              </div>
            </FadeInSection>

            {/* Subtle Lilac Divider */}
            <div className="h-px w-full bg-lilac/15" />

            {/* Case Study 02 */}
            <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
              {/* Image side - taking 5 cols */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-sm group bg-white/5 p-2 lg:order-2">
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-charcoal/50 relative">
                  <img 
                    src={pranavedaCover} 
                    alt="AI Yoga Wellness Companion App Interface Mockup" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>

              {/* Content side - taking 7 cols */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center lg:order-1">
                <span className="font-mono text-kicker uppercase text-paper-deep tracking-[0.18em] mb-2">
                  02 • ZERO TO ONE
                </span>
                <h3 className="font-display font-semibold text-display text-paper leading-tight mb-3">
                  An AI wellness companion, designed from scratch
                </h3>

                {/* Role badge */}
                <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-wider">
                  <span className="text-lilac font-bold">Role:</span>
                  <span className="text-paper bg-white/10 px-3 py-1 rounded-full font-sans text-xs font-semibold">
                    {caseStudiesData[1].role}
                  </span>
                </div>

                <p className="text-body text-paper/80 leading-relaxed mb-6">
                  Founder-designer-builder of PranaVeda, combining yoga and Ayurveda with real-time, adaptive AI-driven guidance. Envision a conversational interface and smart computer-vision tracking overlays that respect the user's natural home rhythm.
                </p>

                <div className="bg-white/5 border-l-2 border-lilac p-4 rounded-r-lg max-w-xl mb-6">
                  <p className="text-body-sm font-medium text-paper font-sans">
                    Designed to target 40% improvement in routine adherence
                  </p>
                </div>

                {/* View Case Study button */}
                <button
                  onClick={() => { window.location.hash = `#/case-study/${caseStudiesData[1].id}`; }}
                  className="bg-paper text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white hover:text-charcoal hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer transition-all border border-paper"
                >
                  <span>View case study</span>
                  <ChevronRight className="w-4 h-4 text-ink-deep" />
                </button>
              </div>
            </FadeInSection>

            {/* Subtle Lilac Divider */}
            <div className="h-px w-full bg-lilac/15" />

            {/* Case Study 03 */}
            <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
              {/* Image side - taking 5 cols */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-sm group bg-white/5 p-2">
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-charcoal/50 relative">
                  <img 
                    src={tivoOneAdCover} 
                    alt="Multi-device Design System (TV, Mobile, Web) Mockup" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply pointer-events-none" />
                </div>
              </div>

              {/* Content side - taking 7 cols */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center">
                <span className="font-mono text-kicker uppercase text-paper-deep tracking-[0.18em] mb-2">
                  03 • SYSTEMS
                </span>
                <h3 className="font-display font-semibold text-display text-paper leading-tight mb-3">
                  One language across TV, mobile, and web
                </h3>

                {/* Role badge */}
                <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-wider">
                  <span className="text-lilac font-bold">Role:</span>
                  <span className="text-paper bg-white/10 px-3 py-1 rounded-full font-sans text-xs font-semibold">
                    {caseStudiesData[2].role}
                  </span>
                </div>

                <p className="text-body text-paper/80 leading-relaxed mb-6">
                  Designed a unified, multi-brand design system framework. Created component architectures that scaled seamlessly across 10-ft television, desktop displays, and strict handheld guidelines.
                </p>

                <div className="bg-white/5 border-l-2 border-lilac p-4 rounded-r-lg max-w-xl mb-6">
                  <p className="text-body-sm font-medium text-paper font-sans">
                    ~30% reduction in design-dev cycle time
                  </p>
                </div>

                {/* View Case Study button */}
                <button
                  onClick={() => { window.location.hash = `#/case-study/${caseStudiesData[2].id}`; }}
                  className="bg-paper text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white hover:text-charcoal hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer transition-all border border-paper"
                >
                  <span>View case study</span>
                  <ChevronRight className="w-4 h-4 text-ink-deep" />
                </button>
              </div>
            </FadeInSection>

          </div>

        </div>
      </section>


      {/* --- JOURNEY SECTION --- */}
      <section className="bg-paper-deep py-20 md:py-28 border-y hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-3 block">
              MY JOURNEY
            </span>
            <h2 className="font-display font-semibold text-h2 text-ink-deep leading-tight mb-4">
              Every project taught me to zoom out a little further.
            </h2>
            <p className="text-body-sm text-gray leading-relaxed max-w-xl mx-auto">
              From crafting interfaces to designing experiences, systems, teams, and now intelligent products, each chapter expanded not just what I designed, but how I think.
            </p>
          </div>

          {/* Stepper Node Container */}
          <Journey />

        </div>
      </section>


      {/* --- CRAFT INTERLUDE SECTION --- */}
      <section id="craft" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Mural Full-width Image Card */}
          <div className="rounded-2xl overflow-hidden border border-ink/15 shadow-md p-3 bg-white/70 backdrop-blur-sm mb-12">
            <div className="rounded-xl overflow-hidden bg-paper-deep relative w-full h-[250px] sm:h-[400px] md:h-[480px] lg:h-[540px]">
              <img 
                src={muralImage} 
                alt="Floor-to-ceiling Kalamkari-inspired Kalpavruksha hand-drawn mural by Niral" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/4 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          {/* Mural Description Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Header Column */}
            <div className="lg:col-span-5">
              <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-3 block">
                PROOF OF CRAFT
              </span>
              <h2 className="font-display font-semibold text-h2 text-ink-deep leading-tight">
                I design for delight.
              </h2>
            </div>

            {/* Story & Quote Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p className="text-body text-gray leading-relaxed">
                A floor-to-ceiling, Kalamkari-inspired Kalpavruksha mural, I designed for a curved wall interrupted by a staircase, composed so the fragmented surface reads as one continuous piece.
              </p>

              {/* Framed Quote highlighting systemic core */}
              <div className="border-l-2 border-ink pl-6 py-1 italic font-display text-quote text-ink-deep leading-relaxed">
                "It's the same problem I solve in product: one coherent system across surfaces that were never meant to match."
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* --- TESTIMONIALS SECTION --- */}
      <section className="bg-white py-20 md:py-28 border-y hairline animate-fade-in" id="testimonials">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-3 block">
              WHAT COLLABORATORS REMEMBER
            </span>
          </div>

          {/* Testimonial Quote Display with giant bold typography */}
          <div className="relative min-h-[200px] sm:min-h-[160px] md:min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="w-full"
              >
                <blockquote className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[1.25] text-ink-deep tracking-tight">
                  “{testimonials[currentTestimonial].quote}”
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Collaborator Details & Avatar + Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 mt-12 md:mt-16 pt-8 border-t border-ink/10">
            
            {/* Left Column: Avatar & Person Profile Details */}
            <div className="flex items-center gap-4 md:gap-5">
              
              {/* Avatar picture or initials placeholder */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-paper-deep border border-ink/15 flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative group">
                {testimonials[currentTestimonial].avatar ? (
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={`${testimonials[currentTestimonial].name} portrait`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    <span className="font-display font-semibold text-body md:text-lg text-ink-deep">
                      {testimonials[currentTestimonial].initials}
                    </span>
                    
                    {/* Subtle indicator showing Niral she can insert face files directly here */}
                    <div className="absolute inset-0 bg-ink-deep/80 text-[8px] text-paper font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-1.5 leading-tight tracking-wider select-none pointer-events-none">
                      INSERT FACE
                    </div>
                  </>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-semibold text-body md:text-lg text-ink-deep">
                    {testimonials[currentTestimonial].name}
                  </span>
                  {testimonials[currentTestimonial].linkedin && (
                    <a 
                      href={testimonials[currentTestimonial].linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ink/50 hover:text-ink transition-colors flex p-1"
                      aria-label={`${testimonials[currentTestimonial].name} LinkedIn Profile`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-caption md:text-body-sm text-gray font-sans mt-0.5">
                  {testimonials[currentTestimonial].role}
                </p>
                {testimonials[currentTestimonial].context && (
                  <span className="inline-flex items-center font-mono text-[11px] font-semibold text-ink uppercase tracking-wider mt-2 bg-ink/5 border border-ink/15 px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].context}
                  </span>
                )}
              </div>

            </div>

            {/* Right Column: Custom Slide Controllers & Progress Indicators */}
            <div className="flex items-center gap-5 shrink-0 self-end sm:self-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrevTestimonial}
                className="p-3 rounded-full border border-ink/10 hover:border-ink/25 bg-paper/40 hover:bg-paper text-ink hover:text-ink-deep transition-all cursor-pointer shadow-sm hover:shadow active:scale-95 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Progress counter & dots */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-ink/50 select-none">
                  {String(currentTestimonial + 1).padStart(2, "0")}
                </span>
                <div className="flex gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentTestimonial ? "w-5 bg-ink" : "w-1.5 bg-ink/20 hover:bg-ink/35"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="font-mono text-[11px] text-ink/30 select-none">
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextTestimonial}
                className="p-3 rounded-full border border-ink/10 hover:border-ink/25 bg-paper/40 hover:bg-paper text-ink hover:text-ink-deep transition-all cursor-pointer shadow-sm hover:shadow active:scale-95 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div 
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-ink/15 shadow-md p-3 bg-white/70 backdrop-blur-sm group/portrait cursor-pointer select-none"
            onMouseEnter={() => setAboutPhotoActive(true)}
            onMouseLeave={() => setAboutPhotoActive(false)}
            onClick={() => setAboutPhotoActive((prev) => !prev)}
          >
            <div className="rounded-xl overflow-hidden aspect-[3/4] bg-paper-deep relative">
              <img 
                src={niralPortrait} 
                alt="Niral Shah - Design Strategy & Product Leadership Leader" 
                className={`w-full h-full object-cover transition-all duration-700 ${
                  aboutPhotoActive 
                    ? "grayscale-0 contrast-100 brightness-100" 
                    : "grayscale contrast-[1.05] brightness-[0.98] group-hover/portrait:grayscale-0 group-hover/portrait:contrast-100 group-hover/portrait:brightness-100"
                }`}
                referrerPolicy="no-referrer"
              />
              {/* Lilac duotone monochrome overlay */}
              <div className={`absolute inset-0 bg-lilac mix-blend-color transition-opacity duration-700 pointer-events-none ${
                aboutPhotoActive ? "opacity-0" : "opacity-80 group-hover/portrait:opacity-0"
              }`} />
              {/* Ink tone warm multiplier */}
              <div className="absolute inset-0 bg-ink-deep/10 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-3 block">
              ABOUT
            </span>
            <h2 className="font-display font-semibold text-h2 text-ink-deep leading-tight mb-6">
              Human-centered. Systems-minded.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-body text-gray leading-relaxed">
              <div className="flex-1">
                <p>
                  I help teams create products people trust by bringing clarity to complex systems. Over the past 12 years, I've shipped consumer products at scale, built design systems across TV, mobile, and web, and led teams through the messy middle of growth.
                </p>
              </div>
              <div className="flex-1">
                <p>
                  Today, I'm deepening my business side of design through Stanford LEAD while building PranaVeda, an AI wellness product of my own. You learn best by building!
                </p>
              </div>
            </div>

            {/* Dynamic chips matching brand theme */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-white border border-ink/10 text-ink text-xs font-semibold px-4 py-1.5 rounded-full font-sans">
                Design leadership
              </span>
              <span className="bg-white border border-ink/10 text-ink text-xs font-semibold px-4 py-1.5 rounded-full font-sans">
                Product strategy
              </span>
              <span className="bg-white border border-ink/10 text-ink text-xs font-semibold px-4 py-1.5 rounded-full font-sans">
                Design systems
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="bg-paper-deep py-20 md:py-28 border-t border-ink/10 relative overflow-hidden">
        {/* Subtle decorative vector lines in background */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-ink)" strokeWidth="0.5">
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-4 block">
            CONTACT
          </span>
          <h2 className="font-display font-semibold text-display text-ink-deep leading-tight mb-5">
            Let's build something meaningful.
          </h2>
          <p className="text-body-lg text-gray leading-relaxed mb-10 max-w-xl mx-auto">
            Working with mission-driven companies and scaling consumer teams.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Email link to niral.s5@gmail.com */}
            <a 
              href="mailto:niral.s5@gmail.com" 
              className="btn-primary flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email me</span>
            </a>
            {/* LinkedIn link, opens in new tab */}
            <a 
              href="https://www.linkedin.com/in/niral-shah-designer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 cursor-pointer"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-charcoal py-8 border-t border-white/5 text-paper-deep/60 selection:bg-paper/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo / Credit */}
          <div className="flex items-center gap-3 text-sm font-sans tracking-wide">
            <NiralLogo size={20} className="rounded-sm opacity-80" />
            <span>Niral Designs • designed with love, built with systems.</span>
          </div>

          {/* Social Links (Open in New Tab) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a 
              href="https://www.linkedin.com/in/niral-shah-designer/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-paper transition-colors flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://substack.com/@nirals5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-paper transition-colors flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider"
              aria-label="Substack"
            >
              <SubstackIcon className="w-4 h-4" />
              <span>Substack</span>
            </a>
            <a 
              href="https://www.instagram.com/nirals5/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-paper transition-colors flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
