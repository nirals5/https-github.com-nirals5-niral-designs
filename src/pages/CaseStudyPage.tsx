import React, { useEffect, useState } from "react";
import { 
  ArrowLeft, ArrowRight, Sparkles, CheckCircle2, User, Building2, Clock, 
  Layers, ChevronRight, Quote, Lightbulb, TrendingUp, Compass, Tv, 
  Globe2, ShieldAlert, Zap, Smartphone, Eye, LayoutGrid, Sliders, Check
} from "lucide-react";
import { caseStudiesData } from "../data/caseStudies";

interface CaseStudyPageProps {
  caseStudyId: string;
  onNavigateHome: () => void;
  onNavigateCaseStudy: (id: string) => void;
}

export default function CaseStudyPage({ caseStudyId, onNavigateHome, onNavigateCaseStudy }: CaseStudyPageProps) {
  const currentIndex = caseStudiesData.findIndex((cs) => cs.id === caseStudyId);
  const caseStudy = caseStudiesData[currentIndex] || caseStudiesData[0];

  const prevCaseStudy = caseStudiesData[(currentIndex - 1 + caseStudiesData.length) % caseStudiesData.length];
  const nextCaseStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  const [activeTab, setActiveTab] = useState<string>("intro");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [caseStudyId]);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [isMockup3D, setIsMockup3D] = useState(true);
  const isTiVo = caseStudy.id === "tivo-mobile";

  return (
    <div className="min-h-screen font-body antialiased">
      
      {/* Top Sticky Navigation Header */}
      <nav className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-md border-b border-white/10 py-3.5 px-6 md:px-12 transition-all text-paper selection:bg-paper/25">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest text-paper/80 hover:text-paper transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </button>
            <span className="text-white/20 font-mono hidden sm:inline">|</span>
            <span className="font-mono text-xs text-lilac uppercase tracking-wider font-bold hidden sm:inline">
              Case Study {caseStudy.number}
            </span>
          </div>

          {/* Next / Prev Quick Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateCaseStudy(prevCaseStudy.id)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-paper/80 hover:text-paper hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title={`Previous: ${prevCaseStudy.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Prev</span>
            </button>
            <button
              onClick={() => onNavigateCaseStudy(nextCaseStudy.id)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-paper/80 hover:text-paper hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title={`Next: ${nextCaseStudy.title}`}
            >
              <span className="hidden md:inline">Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sub-Header Section Jumpers (For TiVo Case Study) */}
      {isTiVo && (
        <div className="sticky top-[57px] z-30 bg-charcoal/90 backdrop-blur-md border-b border-white/10 px-6 py-2.5 overflow-x-auto no-scrollbar text-paper selection:bg-paper/25">
          <div className="max-w-6xl mx-auto flex items-center gap-2 md:gap-4 text-xs font-mono">
            <span className="text-paper/40 uppercase tracking-widest shrink-0 text-[10px]">Jump To:</span>
            {[
              { id: "intro", label: "01. Opportunity" },
              { id: "opportunity", label: "02. Research & Audit" },
              { id: "principles", label: "03. 3 Core Principles" },
              { id: "collaboration", label: "04. Cross-Team & Scope" },
              { id: "outcomes", label: "05. Measured Impact" },
              { id: "reflection", label: "06. Reflection" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3 py-1 rounded-full text-xs transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-lilac text-charcoal font-semibold shadow-sm"
                    : "text-paper/70 hover:text-paper hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HERO / HEADER SECTION — DARK BROWN (CONTINUITY FROM HOME PAGE) */}
      <header className="bg-charcoal text-paper py-12 md:py-20 border-b border-white/10 selection:bg-paper/25">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase text-lilac tracking-[0.2em] block font-bold">
              {caseStudy.kicker}
            </span>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-paper leading-[1.12]">
              {caseStudy.title}
            </h1>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-paper/60">
                <User className="w-3.5 h-3.5 text-lilac shrink-0" /> Role
              </span>
              <p className="font-sans text-xs md:text-sm font-semibold text-paper">
                {caseStudy.role}
              </p>
            </div>

            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-paper/60">
                <Building2 className="w-3.5 h-3.5 text-lilac shrink-0" /> Context
              </span>
              <p className="font-sans text-xs md:text-sm font-semibold text-paper">
                {caseStudy.companyOrContext}
              </p>
            </div>

            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-paper/60">
                <Clock className="w-3.5 h-3.5 text-lilac shrink-0" /> Timeline
              </span>
              <p className="font-sans text-xs md:text-sm font-semibold text-paper">
                {caseStudy.timeline}
              </p>
            </div>

            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-paper/60">
                <Layers className="w-3.5 h-3.5 text-lilac shrink-0" /> Scope
              </span>
              <p className="font-sans text-xs md:text-sm font-semibold text-paper truncate" title={caseStudy.deliverables}>
                {caseStudy.deliverables}
              </p>
            </div>
          </div>

          {/* Hero Cover Image & Key Impact Highlight */}
          <div className="space-y-6 pt-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[16/9] relative shadow-2xl group">
              <img
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Key Impact Highlight Banner */}
            <div className="bg-lilac/10 border-l-4 border-lilac p-6 rounded-r-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-lilac font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Measured Key Impact
                </span>
                <p className="font-display text-xl md:text-2xl text-paper font-medium leading-snug">
                  {caseStudy.impactMetric}
                </p>
              </div>
              <div className="shrink-0 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 font-mono text-xs text-lilac">
                Verified Metrics
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- TIVO CUSTOM MULTI-SECTION COLOR PROGRESSION --- */}
      {isTiVo ? (
        <>
          {/* SECTION 01: THE OPPORTUNITY — DARK BROWN (CONTINUITY FROM HOME WORK SECTION) */}
          <section id="intro" className="bg-charcoal text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              
              {/* Section 01 Title */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  01
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  The Challenge of an Unchanged Classic
                </h2>
              </div>

              {/* Title Content & Provided Phone Mockup Split Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Left Text Block */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-body-lg text-paper/90 leading-relaxed">
                    The Live Guide was one of the most frequently used experiences in the TiVo mobile app. It helped people answer one simple question: <strong className="text-paper font-semibold">"What should I watch right now?"</strong>
                  </p>
                  <p className="text-body-lg text-paper/85 leading-relaxed">
                    Yet the experience had barely evolved in years. It was built around navigating television channels rather than discovering content. Dense grids, legacy interaction patterns, and accumulated interface clutter made the Guide feel increasingly disconnected from how people actually watched television.
                  </p>
                </div>

                {/* Right Visual: Provided Phone Mockup at an Interesting 3D Angle */}
                <div className="md:col-span-5 flex flex-col items-center justify-center relative py-4">
                  
                  {/* Perspective View Canvas */}
                  <div 
                    className="relative w-full max-w-[280px] sm:max-w-[310px] flex justify-center items-center py-6"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Ambient Radial Backlight */}
                    <div className="absolute inset-x-8 inset-y-12 bg-lilac/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-lilac/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Angled Phone Container */}
                    <div
                      className={`relative transition-all duration-700 ease-out transform-gpu cursor-pointer group ${
                        isMockup3D
                          ? "rotate-y-[-22deg] rotate-x-[12deg] rotate-z-[2deg] hover:rotate-y-[-10deg] hover:rotate-x-[6deg] hover:rotate-z-[0deg] hover:scale-105"
                          : "rotate-0 scale-100"
                      }`}
                      style={{
                        transformStyle: "preserve-3d",
                        transform: isMockup3D 
                          ? "rotateY(-22deg) rotateX(12deg) rotateZ(2deg)" 
                          : "none"
                      }}
                      onClick={() => setIsMockup3D(!isMockup3D)}
                      title="Click to toggle perspective angle"
                    >
                      <img
                        src={caseStudy.coverImage}
                        alt="Legacy TiVo Live Guide Mobile Phone Mockup"
                        className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Floating Floor Shadow */}
                      {isMockup3D && (
                        <div 
                          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/80 blur-xl rounded-full transform scale-y-40 pointer-events-none transition-opacity duration-500"
                        />
                      )}
                    </div>
                  </div>

                  {/* Caption & Angle Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-[11px] text-paper/60 uppercase tracking-widest">
                      Legacy Live Guide (Mobile)
                    </span>
                    <button
                      onClick={() => setIsMockup3D(!isMockup3D)}
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-lilac transition-colors cursor-pointer"
                    >
                      {isMockup3D ? "Angle: 3D Isometric" : "Angle: Flat Front"}
                    </button>
                  </div>

                </div>

              </div>

              {/* Rest of Section 1 Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                
                {/* Left Column (Key Thesis & Goals) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Central Principle Quote Card */}
                  <div className="bg-white/5 border border-white/15 p-6 rounded-2xl relative overflow-hidden shadow-lg">
                    <Quote className="w-10 h-10 text-lilac/30 absolute -top-1 -right-1" />
                    <span className="font-mono text-[10px] uppercase text-lilac tracking-widest block mb-2 font-bold">
                      Guiding North Star Principle
                    </span>
                    <p className="font-display italic text-lg text-paper leading-snug">
                      "Does this help someone enjoy Live TV?"
                    </p>
                    <p className="text-xs text-paper/60 font-mono mt-3">
                      Core benchmark for every interaction decision.
                    </p>
                  </div>

                  {/* Core Design Goals */}
                  <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-3">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-paper/80 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-lilac" /> Strategic Objectives
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-paper/80">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                        <span>Preserve browsing momentum without interrupting playback.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                        <span>Enable users to preview live channels before committing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                        <span>Provide contextual actions directly where decisions happen.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                        <span>Spend less time navigating television, and more time enjoying it.</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Right Column (Technical Opportunity) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-6 md:p-8 rounded-2xl space-y-4 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-lilac font-bold tracking-widest">
                      <Zap className="w-4 h-4" /> The Technical Catalyst
                    </div>
                    <h3 className="font-display text-xl font-semibold text-paper">
                      From Technical Migration to Product Opportunity
                    </h3>
                    <p className="text-body-lg text-paper/85 leading-relaxed">
                      At the same time, TiVo was undertaking a major transition from legacy Haxe code to native iOS & Android platforms while modernizing its cloud infrastructure. For most teams, that was just a technical migration.
                    </p>
                    <p className="text-body-lg text-paper/85 leading-relaxed">
                      I saw it as a product opportunity. Rather than asking <em className="text-paper">"How can we modernize the Guide?"</em> I asked a different question:
                    </p>
                    <div className="p-4 rounded-xl bg-charcoal/80 border border-lilac/30 text-lilac font-display text-lg font-medium">
                      How might we help people discover what to watch, not just where it's playing?
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 02: RESEARCH & AUDIT — MEDIUM WARM SHADE (PAPER-DEEP) */}
          <section id="opportunity" className="bg-paper-deep text-ink-deep py-16 md:py-24 border-b hairline scroll-mt-28 selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink/10 text-ink border border-ink/20">
                  02
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep">
                  Finding the Opportunity: Competitive Audit &amp; Data Insights
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-body-lg text-gray leading-relaxed max-w-3xl">
                  The Guide wasn't underperforming; it was one of the most visited experiences in the TiVo ecosystem, so very few people questioned it. But the way people discovered television had fundamentally changed.
                </p>

                {/* 8-Platform Audit Banner */}
                <div className="bg-paper border hairline p-6 rounded-2xl space-y-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b hairline pb-3">
                    <span className="font-mono text-xs uppercase text-ink font-bold tracking-widest flex items-center gap-2">
                      <Eye className="w-4 h-4 text-ink" /> 8-Platform Competitive Audit
                    </span>
                    <span className="text-xs text-gray font-mono">Benchmarked Industry Standards</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      "YouTube TV", "Hulu + Live", "Pluto TV", "Sling TV",
                      "Fubo TV", "Philo TV", "Prime Video", "TiVo Legacy"
                    ].map((platform, pIdx) => (
                      <div key={pIdx} className="bg-paper-deep border hairline px-3.5 py-2 rounded-xl text-center font-mono text-xs text-ink-deep flex items-center justify-center gap-2">
                        <Tv className="w-3.5 h-3.5 text-ink shrink-0" />
                        <span>{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bento Grid: 5 Industry Trends Discovered */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-paper border hairline p-5 rounded-2xl space-y-2 md:col-span-1 shadow-sm">
                    <span className="font-mono text-xs text-ink font-bold">Trend 01</span>
                    <h4 className="font-display text-lg font-semibold text-ink-deep">Richer Visual Discovery</h4>
                    <p className="text-xs text-gray leading-relaxed">
                      Replacing dense text schedules with prominent poster artwork and visual cues.
                    </p>
                  </div>

                  <div className="bg-paper border hairline p-5 rounded-2xl space-y-2 md:col-span-1 shadow-sm">
                    <span className="font-mono text-xs text-ink font-bold">Trend 02</span>
                    <h4 className="font-display text-lg font-semibold text-ink-deep">Category Browsing</h4>
                    <p className="text-xs text-gray leading-relaxed">
                      Grouping content into genre buckets (Sports, News, Movies) to reduce visual scanning effort.
                    </p>
                  </div>

                  <div className="bg-paper border hairline p-5 rounded-2xl space-y-2 md:col-span-1 shadow-sm">
                    <span className="font-mono text-xs text-ink font-bold">Trend 03</span>
                    <h4 className="font-display text-lg font-semibold text-ink-deep">Contextual Actions</h4>
                    <p className="text-xs text-gray leading-relaxed">
                      Allowing instant record, favorite, or info lookups directly from the guide view.
                    </p>
                  </div>

                  <div className="bg-paper border hairline p-5 rounded-2xl space-y-2 md:col-span-2 shadow-sm">
                    <span className="font-mono text-xs text-ink font-bold">Trend 04</span>
                    <h4 className="font-display text-lg font-semibold text-ink-deep">Integrated Live Playback</h4>
                    <p className="text-xs text-gray leading-relaxed">
                      Embedding live video previews directly above or inside the schedule view so users can sample channels instantly.
                    </p>
                  </div>

                  <div className="bg-paper border hairline p-5 rounded-2xl space-y-2 md:col-span-1 shadow-sm">
                    <span className="font-mono text-xs text-ink font-bold">Trend 05</span>
                    <h4 className="font-display text-lg font-semibold text-ink-deep">Minimalist Chrome</h4>
                    <p className="text-xs text-gray leading-relaxed">
                      Stripping away heavy borders, gradients, and redundant icons to let content lead.
                    </p>
                  </div>
                </div>

                {/* THE 1% FAVORITE CHANNELS INSIGHT CARD */}
                <div className="bg-paper border border-ink/30 p-6 md:p-8 rounded-2xl space-y-4 shadow-sm relative overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b hairline pb-4">
                    <div>
                      <span className="font-mono text-xs text-ink font-bold uppercase tracking-widest block mb-1">
                        Critical Data Insight
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink-deep">
                        The "1% Favorite Channels" Paradox
                      </h3>
                    </div>
                    <div className="bg-ink text-paper px-4 py-2 rounded-xl font-mono text-xs font-bold shrink-0">
                      Buried Feature → Only ~1% Usage
                    </div>
                  </div>
                  <p className="text-body-lg text-ink-deep/90 leading-relaxed">
                    Our internal product data revealed a major revelation: The <strong>Favorite Channels</strong> feature had been designed to help people find the content they cared about most, yet it was buried inside deep Settings. Only about <strong>1% of users</strong> ever discovered or used it.
                  </p>
                  <div className="p-4 rounded-xl bg-paper-deep border border-ink/20 font-sans text-sm text-ink-deep font-medium">
                    <strong className="text-ink">The Lesson:</strong> The problem wasn't the feature; it was the experience surrounding it. This proved the redesign needed to be driven by a content-forward philosophy, not cosmetic tweaks.
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 03: CORE EXPERIENCE PRINCIPLES — BRIGHT CANVAS (PAPER) */}
          <section id="principles" className="bg-paper text-ink-deep py-16 md:py-24 border-b hairline scroll-mt-28 selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink/10 text-ink border border-ink/20">
                  03
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep">
                  Bringing the Vision to Life: The 3 Core Experience Principles
                </h2>
              </div>

              {/* THREE CORE PRINCIPLE BLOCKS */}
              <div className="space-y-10">
                
                {/* PRINCIPLE 1 */}
                <div className="bg-paper-deep/60 border hairline p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
                  <div className="flex items-center justify-between border-b hairline pb-4">
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-ink font-bold uppercase tracking-widest">
                        Principle 01
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink-deep">
                        Make Discovery Faster
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-xl bg-ink/10 text-ink">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-body-lg text-gray leading-relaxed">
                    The existing Guide required users to scan dense rows of information before making a choice. I redesigned the Guide around a content-forward Grid Guide, simplifying typography, clearing hierarchy, and introducing prominent program artwork.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-paper border hairline p-5 rounded-xl space-y-2">
                      <span className="font-mono text-xs text-red-700 font-bold uppercase">Before</span>
                      <p className="text-xs text-gray leading-relaxed">
                        Scanning dense text rows without artwork; no way to sample channels without leaving the guide screen.
                      </p>
                    </div>
                    <div className="bg-paper border border-ink/40 p-5 rounded-xl space-y-2">
                      <span className="font-mono text-xs text-ink font-bold uppercase">After</span>
                      <p className="text-xs text-ink-deep leading-relaxed">
                        Live playback above the Guide lets users preview what is currently airing in real time while continuing to scroll.
                      </p>
                    </div>
                  </div>

                  <div className="bg-ink/5 border-l-4 border-ink p-4 rounded-r-xl space-y-1">
                    <span className="font-mono text-[11px] text-ink uppercase font-bold tracking-widest block">
                      Design Decision
                    </span>
                    <p className="text-sm text-ink-deep font-medium">
                      "We chose to lead with live content instead of interface chrome. Every visual decision answered one question faster: 'Do I want to watch this?'"
                    </p>
                  </div>
                </div>

                {/* PRINCIPLE 2 */}
                <div className="bg-paper-deep/60 border hairline p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
                  <div className="flex items-center justify-between border-b hairline pb-4">
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-ink font-bold uppercase tracking-widest">
                        Principle 02
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink-deep">
                        Make Interactions Lighter
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-xl bg-ink/10 text-ink">
                      <Sliders className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-body-lg text-gray leading-relaxed">
                    Browsing television isn't linear. People discover something interesting, check the schedule, add a favorite, or compare another channel within moments. The existing experience sent users to separate full-screen views for almost every action.
                  </p>

                  {/* Contextual Quick Actions Grid */}
                  <div className="bg-paper border hairline p-5 rounded-xl space-y-3">
                    <span className="font-mono text-xs text-ink uppercase font-bold tracking-wider block">
                      Contextual Quick Actions (Bottom Sheets)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 bg-paper-deep rounded-lg border hairline text-center font-mono text-ink-deep">
                        ⚡ Catch Up Episode
                      </div>
                      <div className="p-3 bg-paper-deep rounded-lg border hairline text-center font-mono text-ink-deep">
                        📅 Channel Schedule
                      </div>
                      <div className="p-3 bg-paper-deep rounded-lg border hairline text-center font-mono text-ink-deep">
                        ⭐ Favorite Channel
                      </div>
                      <div className="p-3 bg-paper-deep rounded-lg border hairline text-center font-mono text-ink-deep">
                        🔗 Alternate Sources
                      </div>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink-deep">
                    <li className="flex items-center gap-2 bg-paper p-3 rounded-lg border hairline">
                      <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                      <span>Live playback remains visible while browsing</span>
                    </li>
                    <li className="flex items-center gap-2 bg-paper p-3 rounded-lg border hairline">
                      <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                      <span>Gesture-based controls reduce UI friction</span>
                    </li>
                    <li className="flex items-center gap-2 bg-paper p-3 rounded-lg border hairline">
                      <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                      <span>Skeleton loading replaces blank waiting states</span>
                    </li>
                    <li className="flex items-center gap-2 bg-paper p-3 rounded-lg border hairline">
                      <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                      <span>Playback &amp; browsing work together seamlessly</span>
                    </li>
                  </ul>

                  <div className="bg-ink/5 border-l-4 border-ink p-4 rounded-r-xl space-y-1">
                    <span className="font-mono text-[11px] text-ink uppercase font-bold tracking-widest block">
                      Design Decision
                    </span>
                    <p className="text-sm text-ink-deep font-medium">
                      "Bottom sheets weren't simply a UI pattern. They represented a fundamental shift in interaction philosophy: keep people engaged with content instead of navigation."
                    </p>
                  </div>
                </div>

                {/* PRINCIPLE 3 */}
                <div className="bg-paper-deep/60 border hairline p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
                  <div className="flex items-center justify-between border-b hairline pb-4">
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-ink font-bold uppercase tracking-widest">
                        Principle 03
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink-deep">
                        Make Live TV Feel Immediate
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-xl bg-ink/10 text-ink">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-body-lg text-gray leading-relaxed">
                    One of the biggest opportunities was improving how the product felt. Small interaction details have an outsized impact on perceived quality.
                  </p>

                  {/* Micro-Interaction Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-paper border hairline p-4 rounded-xl text-center space-y-1">
                      <span className="font-mono text-xs text-ink font-bold block">Autoplay</span>
                      <span className="text-xs text-gray">Muted video previews</span>
                    </div>
                    <div className="bg-paper border hairline p-4 rounded-xl text-center space-y-1">
                      <span className="font-mono text-xs text-ink font-bold block">Memory</span>
                      <span className="text-xs text-gray">Remembered last channel</span>
                    </div>
                    <div className="bg-paper border hairline p-4 rounded-xl text-center space-y-1">
                      <span className="font-mono text-xs text-ink font-bold block">Transitions</span>
                      <span className="text-xs text-gray">Polished skeleton states</span>
                    </div>
                    <div className="bg-paper border hairline p-4 rounded-xl text-center space-y-1">
                      <span className="font-mono text-xs text-ink font-bold block">Motion</span>
                      <span className="text-xs text-gray">Calm spring physics</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 04: CROSS-TEAM & SCOPE DISCIPLINE — WARM TRANSITION (PAPER-DEEP) */}
          <section id="collaboration" className="bg-paper-deep text-ink-deep py-16 md:py-24 border-b hairline scroll-mt-28 selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink/10 text-ink border border-ink/20">
                  04
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep">
                  Designing Across Teams &amp; Knowing What Not to Build
                </h2>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Card: Global Collaboration */}
                <div className="bg-paper border hairline p-6 rounded-2xl space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 font-mono text-xs text-ink font-bold uppercase tracking-widest">
                    <Globe2 className="w-4 h-4" /> Global Cross-Functional Alignment
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-deep">
                    US, Romania, &amp; Bangalore Teams
                  </h3>
                  <p className="text-sm text-gray leading-relaxed">
                    Rather than handing designs off after completion, I brought engineers into the process early through collaborative workshops, design reviews, and technical feasibility discussions.
                  </p>
                  <div className="bg-paper-deep p-4 rounded-xl border hairline space-y-2">
                    <span className="font-mono text-xs text-ink font-bold">Platform-Native Principles:</span>
                    <p className="text-xs text-ink-deep leading-relaxed">
                      Instead of forcing identical UIs across iOS and Android, we respected native interaction patterns, like keeping the native iOS date picker while crafting a custom Android interaction model.
                    </p>
                  </div>
                </div>

                {/* Right Card: Knowing What NOT to Build */}
                <div className="bg-paper border hairline p-6 rounded-2xl space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 font-mono text-xs text-ink font-bold uppercase tracking-widest">
                    <ShieldAlert className="w-4 h-4" /> Scope Discipline
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-deep">
                    Knowing What Not to Build
                  </h3>
                  <p className="text-sm text-gray leading-relaxed">
                    Not every good idea belonged in the initial release. We deliberately postponed secondary features like deep search to prioritize the core browsing &amp; discovery experience.
                  </p>
                  <div className="bg-ink/10 border-l-4 border-ink p-4 rounded-r-xl space-y-1">
                    <span className="font-mono text-[10px] text-ink uppercase font-bold tracking-widest block">
                      Core Discipline Takeaway
                    </span>
                    <p className="text-xs text-ink-deep font-medium">
                      "Good product design isn't just deciding what to build. It's deciding what not to build."
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 05: OUTCOMES & MEASURED IMPACT — DARK BROWN AGAIN (CHARCOAL) */}
          <section id="outcomes" className="bg-charcoal text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  05
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  Outcomes &amp; Measurable Business Impact
                </h2>
              </div>

              {/* High Impact Dashboard Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/15 p-6 rounded-2xl text-center space-y-2 shadow-lg">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-lilac block">
                    +21%
                  </span>
                  <span className="font-mono text-xs uppercase text-paper/90 font-bold block">
                    Increase in Guide Visits
                  </span>
                  <p className="text-xs text-paper/60">
                    Direct result of content-forward grid &amp; live preview.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/15 p-6 rounded-2xl text-center space-y-2 shadow-lg">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-lilac block">
                    +6–8%
                  </span>
                  <span className="font-mono text-xs uppercase text-paper/90 font-bold block">
                    Growth in Unique Active Users
                  </span>
                  <p className="text-xs text-paper/60">
                    Sustained post-launch engagement lift across cohorts.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/15 p-6 rounded-2xl text-center space-y-2 shadow-lg">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-lilac block">
                    FIFA World Cup
                  </span>
                  <span className="font-mono text-xs uppercase text-paper/90 font-bold block">
                    Global Deployment Partner
                  </span>
                  <p className="text-xs text-paper/60">
                    Launched with Liberty Latin America before global rollout.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
                <h4 className="font-mono text-xs uppercase text-lilac font-bold tracking-widest">
                  Key System Accomplishments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-paper/85">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                    <span>Established foundation for TiVo's native mobile architecture.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                    <span>Enabled faster product iteration velocity for future teams.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                    <span>Received glowing customer feedback on browsing speed &amp; visual quality.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-lilac shrink-0 mt-0.5" />
                    <span>Successfully scaled to international pay-TV &amp; broadband operators.</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 06: REFLECTION & NEXT CASE STUDY — DARK BROWN (CHARCOAL) */}
          <section id="reflection" className="bg-charcoal text-paper py-16 md:py-24 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-16">
              
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                    06
                  </span>
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                    Reflection: The Sum of Small Decisions
                  </h2>
                </div>

                {/* Editorial Reflection Banner */}
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 p-8 md:p-12 rounded-3xl space-y-6 relative overflow-hidden shadow-2xl">
                  <Quote className="w-16 h-16 text-lilac/20 absolute -bottom-2 -right-2 pointer-events-none" />
                  <p className="font-display text-xl sm:text-2xl text-paper leading-relaxed italic">
                    "This project wasn't about giving the Guide a fresh coat of paint. It was about rethinking hundreds of small decisions that collectively shape how a product feels."
                  </p>
                  <div className="text-body-lg text-paper/85 space-y-4 font-body leading-relaxed">
                    <p>
                      Visual hierarchy. Playback behavior. Loading states. Navigation. Gestures. Quick Actions. Personalization. Individually, none of these decisions transformed the experience on their own. Together, they fundamentally changed how people discovered and enjoyed Live TV.
                    </p>
                    <p>
                      Looking back, this project changed how I think about product design. I stopped designing individual screens and started designing the continuity between them. The best experiences aren't defined by a single feature; they emerge from thoughtful systems where every interaction supports the next.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="font-sans font-bold text-sm text-paper block">Niral Shah</span>
                      <span className="font-mono text-xs text-lilac">Lead Product Designer, TiVo / Xperi</span>
                    </div>
                    <Sparkles className="w-5 h-5 text-lilac opacity-80" />
                  </div>
                </div>
              </div>

              {/* Next Case Study Switcher Banner */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/[0.07] transition-colors">
                <div>
                  <span className="font-mono text-xs uppercase text-lilac tracking-widest block mb-1">
                    Next Case Study ({nextCaseStudy.number})
                  </span>
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-paper">
                    {nextCaseStudy.title}
                  </h3>
                  <p className="text-xs md:text-sm text-paper/60 font-mono mt-1">
                    Role: {nextCaseStudy.role}
                  </p>
                </div>

                <button
                  onClick={() => onNavigateCaseStudy(nextCaseStudy.id)}
                  className="btn-primary text-xs px-5 py-3 flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Explore {nextCaseStudy.number}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </section>
        </>
      ) : (
        /* STANDARD LAYOUT FOR OTHER CASE STUDIES WITH COLOR PROGRESSION */
        <>
          {/* SECTION 1: OVERVIEW & CHALLENGES — MEDIUM WARM (PAPER-DEEP) */}
          <section className="bg-paper-deep text-ink-deep py-16 md:py-24 border-b hairline selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep border-b hairline pb-3">
                  Project Overview
                </h2>
                <p className="text-body-lg text-gray leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-paper border hairline p-6 md:p-8 rounded-2xl space-y-4 shadow-sm">
                  <h3 className="font-display font-semibold text-xl text-ink-deep flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-ink" /> Core Challenges
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm md:text-base text-gray leading-relaxed flex items-start gap-2.5">
                        <span className="text-ink font-mono text-sm mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-paper border hairline p-6 md:p-8 rounded-2xl space-y-4 shadow-sm">
                  <h3 className="font-display font-semibold text-xl text-ink-deep flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-ink" /> Key Contributions
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.contributions.map((contribution, idx) => (
                      <li key={idx} className="text-sm md:text-base text-gray leading-relaxed flex items-start gap-2.5">
                        <span className="text-ink font-mono text-sm mt-0.5">✓</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: OUTCOMES & SYSTEM TAKEAWAYS — BRIGHT CANVAS (PAPER) */}
          <section className="bg-paper text-ink-deep py-16 md:py-24 border-b hairline selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-8">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep border-b hairline pb-3">
                Outcomes &amp; System Takeaways
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {caseStudy.keyOutcomes.map((outcome, idx) => (
                  <div key={idx} className="bg-paper-deep/60 border hairline p-6 rounded-xl flex flex-col justify-between space-y-3 shadow-sm">
                    <span className="font-mono text-sm text-ink font-bold bg-paper w-8 h-8 rounded-full border hairline flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <p className="text-sm md:text-base text-ink-deep font-sans leading-snug">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: NEXT CASE STUDY SWITCHER — DARK BROWN (CHARCOAL) */}
          <section className="bg-charcoal text-paper py-16 md:py-20 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/[0.07] transition-colors">
                <div>
                  <span className="font-mono text-xs uppercase text-lilac tracking-widest block mb-1">
                    Next Case Study ({nextCaseStudy.number})
                  </span>
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-paper">
                    {nextCaseStudy.title}
                  </h3>
                  <p className="text-xs md:text-sm text-paper/60 font-mono mt-1">
                    Role: {nextCaseStudy.role}
                  </p>
                </div>

                <button
                  onClick={() => onNavigateCaseStudy(nextCaseStudy.id)}
                  className="btn-primary text-xs px-5 py-3 flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Explore {nextCaseStudy.number}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-charcoal border-t border-white/10 py-8 px-6 text-center text-xs text-paper/50 font-mono selection:bg-paper/25">
        <p>© 2026 Niral Shah • {caseStudy.title}</p>
      </footer>

    </div>
  );
}
