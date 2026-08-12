import React, { useEffect, useState } from "react";
import { 
  ArrowLeft, ArrowRight, Sparkles, CheckCircle2, User, Building2, Clock, 
  Layers, ChevronRight, Quote, TrendingUp, Compass, Tv, 
  Globe2, ShieldAlert, Zap, Smartphone, Eye, LayoutGrid, Sliders, Check,
  Play, Volume2, Star, Film, Tv2, Info, ListFilter, Maximize2, AlertCircle,
  Calendar, Link, RotateCcw
} from "lucide-react";
import { caseStudiesData } from "../data/caseStudies";
import tivoLegacyGuide from "../assets/images/casestudy_01_tivo_legacy_guide.png";
import redesignedGridGuide from "../assets/images/redesigned_grid_guide.png";
import fubotvImg from "../assets/images/fubotv.png";
import huluImg from "../assets/images/hulu.png";
import philotvImg from "../assets/images/philotv.png";
import plutotvImg from "../assets/images/plutotv.png";
import primevideoImg from "../assets/images/primevideo.png";
import slingtvImg from "../assets/images/slingtv.png";
import tubiImg from "../assets/images/tubi.png";
import youtubeImg from "../assets/images/youtube.png";

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
  const [selectedScreenTab, setSelectedScreenTab] = useState<"after" | "before">("after");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("Sports");

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
      <nav aria-label="Case Study Header Navigation" className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-md border-b border-white/10 py-3.5 px-6 md:px-12 transition-all text-paper selection:bg-paper/25">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              aria-label="Back to Portfolio Home Page"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest text-paper/80 hover:text-paper transition-colors cursor-pointer group focus-visible:ring-2 focus-visible:ring-lilac"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </button>
            <span className="text-white/20 font-mono hidden sm:inline" aria-hidden="true">|</span>
            <span className="font-mono text-xs text-lilac uppercase tracking-wider font-bold hidden sm:inline">
              Case Study {caseStudy.number}
            </span>
          </div>

          {/* Next / Prev Quick Switcher */}
          <div className="flex items-center gap-2" role="group" aria-label="Quick case study switcher">
            <button
              onClick={() => onNavigateCaseStudy(prevCaseStudy.id)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-paper/80 hover:text-paper hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono focus-visible:ring-2 focus-visible:ring-lilac"
              aria-label={`Previous Case Study: ${prevCaseStudy.title}`}
              title={`Previous: ${prevCaseStudy.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden md:inline">Prev</span>
            </button>
            <button
              onClick={() => onNavigateCaseStudy(nextCaseStudy.id)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-paper/80 hover:text-paper hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono focus-visible:ring-2 focus-visible:ring-lilac"
              aria-label={`Next Case Study: ${nextCaseStudy.title}`}
              title={`Next: ${nextCaseStudy.title}`}
            >
              <span className="hidden md:inline">Next</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sub-Header Section Jumpers (For TiVo Case Study) */}
      {isTiVo && (
        <nav aria-label="Case Study Section Jumper" className="sticky top-[57px] z-30 bg-charcoal/90 backdrop-blur-md border-b border-white/10 px-6 py-2.5 overflow-x-auto no-scrollbar text-paper selection:bg-paper/25">
          <div className="max-w-6xl mx-auto flex items-center gap-2 md:gap-4 text-xs font-mono" role="tablist" aria-label="Section shortcuts">
            <span className="text-paper/40 uppercase tracking-widest shrink-0 text-xs">Jump To:</span>
            {[
              { id: "intro", label: "01. The Challenge" },
              { id: "opportunity", label: "02. Research & Audit" },
              { id: "principles", label: "03. Screen Designs & Principles" },
              { id: "collaboration", label: "04. Team & Scope" },
              { id: "outcomes", label: "05. Measured Impact" },
              { id: "reflection", label: "06. Reflection" },
              { id: "next-case-study", label: "07. Next Story" },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3 py-1 rounded-full text-xs transition-all whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-lilac ${
                  activeTab === tab.id
                    ? "bg-lilac text-charcoal font-semibold shadow-sm"
                    : "text-paper/70 hover:text-paper hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
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

          {/* Metadata Bar - Flat Clean Horizontal Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 py-4 border-y border-white/10 text-xs">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-paper/60 block">
                Role
              </span>
              <p className="font-sans text-sm font-semibold text-paper">
                {caseStudy.role}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-paper/60 block">
                Timeline
              </span>
              <p className="font-sans text-sm font-semibold text-paper">
                {caseStudy.timeline}
              </p>
            </div>

            {/* Scope Metadata Block: Two-column width to fit text cleanly */}
            <div className="space-y-1 sm:col-span-2">
              <span className="font-mono text-xs uppercase text-paper/60 block">
                Scope
              </span>
              <p className="font-sans text-sm font-semibold text-paper leading-relaxed break-words whitespace-normal">
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
            <div className="border-l-4 border-lilac/30 bg-white/5 rounded-r-xl p-5 pl-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-lilac font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Measured Key Impact
                </span>
                <p className="font-display text-xl md:text-2xl text-paper font-medium leading-snug pl-2">
                  {caseStudy.impactMetric}
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- TIVO CUSTOM MULTI-SECTION COLOR PROGRESSION --- */}
      {isTiVo ? (
        <>
          {/* SECTION 01: THE OPPORTUNITY — DARK BROWN */}
          <section id="intro" className="bg-charcoal text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              
              {/* Section Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  01
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  The Challenge of an Unchanged Classic
                </h2>
              </div>

              {/* Text & Mockup Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Column: Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-body-lg text-paper/90 leading-relaxed font-body">
                    The Live Guide was one of the most frequently used experiences in the TiVo mobile app. It helped people answer one simple question: <strong className="text-paper font-semibold">"What should I watch right now?"</strong>
                  </p>
                  <p className="text-body-lg text-paper/85 leading-relaxed font-body">
                    Yet the experience had barely evolved in years. It was built around navigating numerical television channels rather than discovering content. Dense grids, legacy interaction patterns, and accumulated interface clutter made the Guide feel increasingly disconnected from modern viewing habits.
                  </p>

                  <div className="pt-2 space-y-4">
                    <h3 className="font-display font-bold text-xl text-paper">
                      The Opportunity Behind a Technical Migration
                    </h3>
                    <p className="text-body-lg text-paper/85 leading-relaxed font-body">
                      TiVo was undertaking a major transition from legacy Haxe code to native iOS &amp; Android platforms while modernizing its cloud infrastructure. For most teams, that was just a technical migration.
                    </p>
                    <p className="text-body-lg text-paper/85 leading-relaxed font-body">
                      I saw it as a product opportunity. Rather than asking, "How can we modernize the Guide?" I asked a different question:
                    </p>
                    
                    {/* How might we callout box */}
                    <div className="border-l-4 border-lilac/40 bg-white/5 rounded-r-xl p-5 pl-7 my-4">
                      <p className="italic font-display text-paper text-lg sm:text-xl font-medium leading-snug">
                        How might we help people enjoy an immersive Live TV experience?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Provided Phone Mockup Screen */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                  <div 
                    className="relative w-full max-w-[280px] sm:max-w-[320px] flex justify-center items-center py-4"
                    style={{ perspective: "1000px" }}
                  >
                    <div className="absolute inset-x-8 inset-y-12 bg-lilac/20 rounded-full blur-3xl pointer-events-none" />

                    <img
                      src={tivoLegacyGuide}
                      alt="Legacy Live Guide"
                      className="relative w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] transform-gpu transition-all duration-500 ease-out -rotate-3 hover:rotate-0 hover:scale-105"
                      style={{
                        transform: "rotateY(-12deg) rotateX(6deg) rotateZ(-2deg)",
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex items-center justify-center mt-2">
                    <span className="font-mono text-[11px] text-paper/60 uppercase tracking-widest">
                      Legacy Live Guide
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 02: RESEARCH & COMPETITIVE AUDIT — #555250 */}
          <section id="opportunity" className="bg-[#555250] text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  02
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  Competitive Audit &amp; Data Insights
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-body-lg text-paper/90 leading-relaxed max-w-3xl">
                  The Guide wasn't underperforming; it was one of the most visited experiences in the TiVo ecosystem. But an audit across eight leading streaming platforms revealed that the industry had moved toward content discovery while TiVo remained focused on channel numbers.
                </p>

                {/* 9-Platform Visual Audit Grid with Real Screenshots */}
                <div className="pt-4 space-y-6">
                  <div className="border-b border-white/10 pb-2">
                    <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest block">
                      Competitive Audit Matrix &amp; Screenshot Analysis
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 pb-8">
                    {[
                      { name: "YouTube TV", image: youtubeImg },
                      { name: "Hulu + Live", image: huluImg },
                      { name: "Pluto TV", image: plutotvImg },
                      { name: "Sling TV", image: slingtvImg },
                      { name: "Fubo TV", image: fubotvImg },
                      { name: "Philo TV", image: philotvImg },
                      { name: "Prime Video", image: primevideoImg },
                      { name: "Tubi", image: tubiImg },
                    ].map((platform, pIdx) => (
                      <div key={pIdx} className="flex flex-col justify-between group">
                        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-black/30 border border-white/10 flex items-start justify-center shadow-md">
                          <img 
                            src={platform.image} 
                            alt={platform.name} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="pt-3">
                          <span className="font-sans text-sm font-medium text-paper/75 block text-center">
                            {platform.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Competitive Audit Key Takeaways / Patterns Cards */}
                  <div className="pt-2 pb-4 space-y-4 sm:space-y-5">
                    {/* Row 1: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                      <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                        <h4 className="font-display font-bold text-lg sm:text-xl text-paper">Richer Visual Discovery</h4>
                        <p className="text-sm text-paper/80 leading-relaxed font-sans">
                          Replacing dense text schedules with prominent poster artwork and visual cues.
                        </p>
                      </div>
                      <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                        <h4 className="font-display font-bold text-lg sm:text-xl text-paper">Category Browsing</h4>
                        <p className="text-sm text-paper/80 leading-relaxed font-sans">
                          Grouping content into genre buckets (Sports, News, Movies) to reduce visual scanning effort.
                        </p>
                      </div>
                      <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                        <h4 className="font-display font-bold text-lg sm:text-xl text-paper">Contextual Actions</h4>
                        <p className="text-sm text-paper/80 leading-relaxed font-sans">
                          Allowing instant record, favorite, or info lookups directly from the guide view.
                        </p>
                      </div>
                    </div>

                    {/* Row 2: 2 Cards (Integrated Live Playback & Minimalist Chrome) */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
                      <div className="md:col-span-3 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                        <h4 className="font-display font-bold text-lg sm:text-xl text-paper">Integrated Live Playback</h4>
                        <p className="text-sm text-paper/80 leading-relaxed font-sans">
                          Embedding live video previews directly above or inside the schedule view so users can sample channels instantly.
                        </p>
                      </div>
                      <div className="md:col-span-2 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                        <h4 className="font-display font-bold text-lg sm:text-xl text-paper">Minimalist Chrome</h4>
                        <p className="text-sm text-paper/80 leading-relaxed font-sans">
                          Stripping away heavy borders, gradients, and redundant icons to let content lead.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The 1% Favorite Channels Data Insight Block */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-paper">
                      The "1% Favorite Channels" Paradox
                    </h3>
                  </div>
                  <p className="text-body-lg text-paper/85 leading-relaxed">
                    Product telemetry revealed that the <strong className="text-paper font-semibold">Favorite Channels</strong> feature, designed to save users time, was buried inside deep Settings. Only about <strong className="text-paper font-semibold">1% of active users</strong> ever discovered it. The feature itself wasn't bad; it was hidden by bad information architecture.
                  </p>
                </div>

                {/* DESIGN DECISION CALLOUT */}
                <div className="border-l-4 border-lilac bg-white/5 rounded-r-xl p-5 pl-7 space-y-3 my-6">
                  <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest block">
                    Key Design Decision
                  </span>
                  <p className="text-body-md text-paper font-medium leading-relaxed font-body">
                    Rather than iterating on the existing list-based Guide, I proposed a content-first Grid Guide that prioritized faster scanning, richer context, and lightweight interactions. The goal wasn't simply to modernize the interface; it was to reduce the effort required to discover something worth watching.
                  </p>
                  <p className="text-body-md text-paper font-medium leading-relaxed font-body">
                    Instead of asking users to navigate television, the experience would help them navigate content.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 03: SCREEN DESIGNS & CORE PRINCIPLES — BRIGHT CANVAS */}
          <section id="principles" className="bg-paper text-ink-deep py-16 md:py-24 border-b hairline scroll-mt-28 selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-16">
              
              {/* Section Header */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b hairline pb-4">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink/10 text-ink border border-ink/20">
                    03
                  </span>
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep">
                    Bringing the Vision to Life
                  </h2>
                </div>

                <div className="space-y-4 max-w-3xl">
                  <p className="text-body-lg text-gray leading-relaxed font-body">
                    Research gave us direction. The challenge now was translating that vision into an experience that felt faster, lighter, and more intuitive without sacrificing the flexibility that long-time TiVo users relied on.
                  </p>
                  <p className="text-body-lg text-gray leading-relaxed font-body font-medium text-ink-deep">
                    Rather than redesigning individual screens, I focused on four experience principles that guided every design decision.
                  </p>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* PRINCIPLE 1: MAKE DISCOVERY FASTER */}
              {/* ------------------------------------------------------------- */}
              <div className="space-y-8">
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-ink-deep">
                    1. Make Discovery Faster
                  </h3>
                  <p className="text-body-lg text-gray leading-relaxed max-w-3xl">
                    Compare the legacy, text-heavy interface with the redesigned Live Guide, featuring an embedded video preview, simplified typography, improved spacing, clearer hierarchy, and category filters.
                  </p>
                </div>

                {/* Single Combined Box Container for Tabs and Before/After View */}
                <div className="bg-paper-deep rounded-3xl p-6 md:p-8 border hairline space-y-8">
                  
                  {/* Header / Tab Switcher inside the same box */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b hairline pb-5">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase text-ink font-bold tracking-widest block">
                        Compare Before &amp; After
                      </span>
                      <span className="text-xs text-gray font-mono block">
                        Select a tab below to switch views:
                      </span>
                    </div>

                    <div className="flex items-center gap-2" role="tablist" aria-label="Compare legacy vs redesigned guide">
                      <button
                        role="tab"
                        aria-selected={selectedScreenTab === "after"}
                        onClick={() => setSelectedScreenTab("after")}
                        className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex-1 sm:flex-initial text-center focus-visible:ring-2 focus-visible:ring-ink ${
                          selectedScreenTab === "after"
                            ? "bg-ink text-paper shadow-md"
                            : "bg-paper text-ink-deep hover:bg-ink/10 border hairline"
                        }`}
                      >
                        Redesigned Guide
                      </button>
                      <button
                        role="tab"
                        aria-selected={selectedScreenTab === "before"}
                        onClick={() => setSelectedScreenTab("before")}
                        className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex-1 sm:flex-initial text-center focus-visible:ring-2 focus-visible:ring-ink ${
                          selectedScreenTab === "before"
                            ? "bg-ink text-paper shadow-md"
                            : "bg-paper text-ink-deep hover:bg-ink/10 border hairline"
                        }`}
                      >
                        Legacy Guide
                      </button>
                    </div>
                  </div>

                  {/* SCREEN RENDERING BODY INSIDE SAME LIGHT BOX */}
                  {selectedScreenTab === "after" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left: Rendered Redesigned Guide Screen Image */}
                      <div className="lg:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] flex justify-center items-center py-2">
                          <img
                            src={redesignedGridGuide}
                            alt="Redesigned Grid Guide"
                            className="w-full h-auto object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>

                      {/* Right: Key Improvements matching exact provided design & copy */}
                      <div className="lg:col-span-6 space-y-6 pl-0 lg:pl-4">
                        <div className="space-y-6">
                          
                          {/* Item 1 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-ink/10 text-ink font-serif font-bold text-lg flex items-center justify-center shrink-0 mt-0.5">
                              1
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="font-sans font-bold text-base sm:text-lg text-ink-deep">
                                Reduce visual clutter
                              </h4>
                              <p className="font-sans text-sm text-ink/70">
                                Clear visual hierarchy
                              </p>
                            </div>
                          </div>

                          {/* Item 2 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-ink/10 text-ink font-serif font-bold text-lg flex items-center justify-center shrink-0 mt-0.5">
                              2
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="font-sans font-bold text-base sm:text-lg text-ink-deep">
                                Instant Video Preview
                              </h4>
                              <p className="font-sans text-sm text-ink/70">
                                Human-centered experience
                              </p>
                            </div>
                          </div>

                          {/* Item 3 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-ink/10 text-ink font-serif font-bold text-lg flex items-center justify-center shrink-0 mt-0.5">
                              3
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="font-sans font-bold text-base sm:text-lg text-ink-deep">
                                Easy-to-scan
                              </h4>
                              <p className="font-sans text-sm text-ink/70">
                                Usability with aesthetics
                              </p>
                            </div>
                          </div>

                          {/* Item 4 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-ink/10 text-ink font-serif font-bold text-lg flex items-center justify-center shrink-0 mt-0.5">
                              4
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="font-sans font-bold text-base sm:text-lg text-ink-deep">
                                Efficient content experience
                              </h4>
                              <p className="font-sans text-sm text-ink/70">
                                Minimalist Design
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  ) : (
                    /* LEGACY 2020 GRID MOCKUP */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left: Legacy Guide Image */}
                      <div className="lg:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] flex justify-center items-center py-2">
                          <img
                            src={tivoLegacyGuide}
                            alt="Legacy Live Guide"
                            className="w-full h-auto object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-6 space-y-4 pl-0 lg:pl-4">
                        <h4 className="font-display text-xl font-bold text-red-600">
                          Legacy Friction Points:
                        </h4>
                        <div className="space-y-3 text-xs md:text-sm text-ink-deep font-body">
                          <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-4 pl-6 space-y-1">
                            <strong className="text-red-950 block font-mono text-xs uppercase">No Video Preview</strong>
                            <p className="text-red-900/80 leading-relaxed">Users had to leave the guide and wait for full playback to see what was airing.</p>
                          </div>
                          <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-4 pl-6 space-y-1">
                            <strong className="text-red-950 block font-mono text-xs uppercase">High Cognitive Scanning Load</strong>
                            <p className="text-red-900/80 leading-relaxed">Small numerical channel text required manual scanning line-by-line.</p>
                          </div>
                          <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-4 pl-6 space-y-1">
                            <strong className="text-red-950 block font-mono text-xs uppercase">Buried Favorites</strong>
                            <p className="text-red-900/80 leading-relaxed">Favorites required navigating deep into settings menus.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* ------------------------------------------------------------- */}
              {/* PRINCIPLE 2: MINIMIZE NAVIGATION FRICTION */}
              {/* ------------------------------------------------------------- */}
              <div className="pt-12 border-t hairline space-y-8">
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-ink-deep">
                    2. Minimize Navigation Friction
                  </h3>
                  <p className="text-body-lg text-gray leading-relaxed max-w-3xl">
                    Instead of sending users to separate screens for channel schedules or recording options, bottom sheets keep playback visible in the background while actions execute instantly.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Bottom Sheet Mobile UI Render */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-full max-w-[340px] bg-charcoal rounded-[40px] p-3 border-4 border-white/20 shadow-2xl relative font-sans overflow-hidden">
                      {/* Dimmed Background Live Guide */}
                      <div className="opacity-30 blur-sm pointer-events-none space-y-3">
                        <div className="h-28 bg-blue-900 rounded-2xl" />
                        <div className="h-12 bg-white/20 rounded-xl" />
                        <div className="h-12 bg-white/20 rounded-xl" />
                        <div className="h-12 bg-white/20 rounded-xl" />
                      </div>

                      {/* Translucent Glass Bottom Sheet Modal */}
                      <div className="absolute inset-x-2 bottom-2 bg-charcoal/95 backdrop-blur-xl border border-white/20 rounded-3xl p-4 shadow-2xl space-y-3">
                        <div className="w-10 h-1 bg-white/30 rounded-full mx-auto mb-2" />
                        
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <div>
                            <span className="text-[10px] font-mono text-lilac uppercase font-bold block">
                              Channel Actions • Ch 104
                            </span>
                            <h5 className="text-sm font-bold text-white">NBC • Nightly News</h5>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-[9px] font-bold">
                            LIVE
                          </span>
                        </div>

                        {/* Interactive Sheet Action Buttons (Emojis Removed) */}
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                          <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center gap-2 cursor-pointer transition-colors">
                            <Zap className="w-3.5 h-3.5 text-lilac shrink-0" />
                            <span>Catch Up Episode</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center gap-2 cursor-pointer transition-colors">
                            <Tv2 className="w-3.5 h-3.5 text-lilac shrink-0" />
                            <span>7-Day Schedule</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-lilac/20 border border-lilac/40 text-paper font-bold flex items-center gap-2 cursor-pointer transition-colors">
                            <Star className="w-3.5 h-3.5 text-lilac fill-lilac shrink-0" />
                            <span>Favorite Channel</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center gap-2 cursor-pointer transition-colors">
                            <Film className="w-3.5 h-3.5 text-lilac shrink-0" />
                            <span>Alternate Sources</span>
                          </div>
                        </div>

                        <div className="text-[10px] text-white/50 text-center font-mono pt-1">
                          Swipe down or tap background to dismiss
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interaction Rationale & Design Decision Style */}
                  <div className="lg:col-span-6 space-y-4">
                    {/* DESIGN DECISION CALLOUT: Light canvas style (Outline left 30% alpha) */}
                    <div className="border-l-4 border-ink/30 bg-ink/[0.04] rounded-r-xl p-5 pl-7 space-y-2">
                      <span className="font-mono text-xs uppercase text-ink font-bold tracking-widest block">
                        Key Design Decision
                      </span>
                      <h4 className="font-display font-bold text-lg text-ink-deep">
                        In-Context Bottom Sheets Over Page Navigation
                      </h4>
                      <p className="text-body-md text-gray leading-relaxed font-body pl-2">
                        Instead of kicking users to separate full-screen views to set recordings or view episode guides, translucent bottom sheets preserve live playback in the background, reducing drop-off rates by 40%.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                      <div className="p-3 border-b border-ink/10 space-y-1">
                        <span className="text-ink font-bold flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Catch Up Episode</span>
                        <p className="text-gray text-[11px]">Stream previous airings instantly.</p>
                      </div>
                      <div className="p-3 border-b border-ink/10 space-y-1">
                        <span className="text-ink font-bold flex items-center gap-1.5"><Star className="w-3.5 h-3.5" /> 1-Tap Favorite</span>
                        <p className="text-gray text-[11px]">Pin channel directly from sheet.</p>
                      </div>
                      <div className="p-3 border-b border-ink/10 space-y-1">
                        <span className="text-ink font-bold flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Full Schedule</span>
                        <p className="text-gray text-[11px]">View upcoming 7-day grid.</p>
                      </div>
                      <div className="p-3 border-b border-ink/10 space-y-1">
                        <span className="text-ink font-bold flex items-center gap-1.5"><Link className="w-3.5 h-3.5" /> Alternate Sources</span>
                        <p className="text-gray text-[11px]">Jumps directly to Peacock/DVR.</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* ------------------------------------------------------------- */}
              {/* PRINCIPLE 3: GROUP AND CATEGORIZE CONTENT */}
              {/* ------------------------------------------------------------- */}
              <div className="pt-12 border-t hairline space-y-8">
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-ink-deep">
                    3. Group and Categorize Content
                  </h3>
                  <p className="text-body-lg text-gray leading-relaxed max-w-3xl">
                    Aggregating linear cable, FAST channels (TiVo+ Free), and sports broadcasts required category filters that group channels dynamically without confusing the user.
                  </p>
                </div>

                {/* Interactive Category Filter Visualizer */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2" role="tablist" aria-label="Channel category filters">
                    {["Sports", "Favorites", "News", "Movies", "TiVo+ Free"].map((cat) => (
                      <button
                        key={cat}
                        role="tab"
                        aria-selected={activeCategoryFilter === cat}
                        onClick={() => setActiveCategoryFilter(cat)}
                        className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-ink ${
                          activeCategoryFilter === cat
                            ? "bg-ink text-paper shadow-sm"
                            : "bg-paper-deep text-ink-deep hover:bg-ink/10"
                        }`}
                      >
                        {cat} Channels
                      </button>
                    ))}
                  </div>

                  {/* Filtered Channel Results Render */}
                  <div className="border-t border-b hairline py-4 space-y-3">
                    <span className="font-mono text-[11px] text-gray uppercase block">
                      Showing Filtered Channels: <strong className="text-ink-deep">{activeCategoryFilter}</strong>
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {activeCategoryFilter === "Sports" && (
                        <>
                          <div className="p-4 border-l-4 border-ink bg-ink/[0.03] rounded-r-xl space-y-1">
                            <span className="font-mono text-xs text-ink font-bold block">ESPN • Ch 206</span>
                            <h5 className="font-display font-bold text-ink-deep">NBA Regular Season Live</h5>
                            <p className="text-xs text-gray pl-2">Golden State Warriors vs. Philadelphia 76ers</p>
                          </div>
                          <div className="p-4 border-l-4 border-ink bg-ink/[0.03] rounded-r-xl space-y-1">
                            <span className="font-mono text-xs text-ink font-bold block">Golf Channel • Ch 218</span>
                            <h5 className="font-display font-bold text-ink-deep">PGA Tour Championship</h5>
                            <p className="text-xs text-gray pl-2">Round 3 Highlights Live Coverage</p>
                          </div>
                          <div className="p-4 border-l-4 border-ink bg-ink/[0.03] rounded-r-xl space-y-1">
                            <span className="font-mono text-xs text-ink font-bold block">NBC Sports • Ch 220</span>
                            <h5 className="font-display font-bold text-ink-deep">Premier League Live</h5>
                            <p className="text-xs text-gray pl-2">Arsenal vs. Manchester City</p>
                          </div>
                        </>
                      )}

                      {activeCategoryFilter !== "Sports" && (
                        <>
                          <div className="p-4 border-l-4 border-ink bg-ink/[0.03] rounded-r-xl space-y-1">
                            <span className="font-mono text-xs text-ink font-bold block">TiVo+ Free • Ch 402</span>
                            <h5 className="font-display font-bold text-ink-deep">TiVo+ Action Movies</h5>
                            <p className="text-xs text-gray pl-2">24/7 Blockbuster Movie Broadcast</p>
                          </div>
                          <div className="p-4 border-l-4 border-ink bg-ink/[0.03] rounded-r-xl space-y-1">
                            <span className="font-mono text-xs text-ink font-bold block">CNN • Ch 102</span>
                            <h5 className="font-display font-bold text-ink-deep">The Lead Live</h5>
                            <p className="text-xs text-gray pl-2">National &amp; World News Headlines</p>
                          </div>
                          <div className="p-4 border-l-4 border-ink bg-ink/[0.03] rounded-r-xl space-y-1">
                            <span className="font-mono text-xs text-ink font-bold block">HBO Max • Ch 301</span>
                            <h5 className="font-display font-bold text-ink-deep">House of the Dragon</h5>
                            <p className="text-xs text-gray pl-2">On-Demand Stream Available</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* ------------------------------------------------------------- */}
              {/* PRINCIPLE 4: BALANCE FLEXIBILITY AND SIMPLICITY */}
              {/* ------------------------------------------------------------- */}
              <div className="pt-12 border-t hairline space-y-8">
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-ink-deep">
                    4. Balance Flexibility and Simplicity
                  </h3>
                  <p className="text-body-lg text-gray leading-relaxed max-w-3xl">
                    Power users rely on deep customization, while casual viewers want zero setup. The new experience balances both by serving smart defaults upfront while offering one-tap access to advanced filters and channel organization.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-6 rounded-2xl bg-paper-deep border hairline space-y-3">
                    <span className="font-mono text-xs uppercase text-ink font-bold tracking-widest block">
                      Smart Defaults
                    </span>
                    <h4 className="font-display font-bold text-lg text-ink-deep">Zero-Config Out of the Box</h4>
                    <p className="text-sm text-gray leading-relaxed">
                      Auto-surfacing trending live broadcasts, favorite channels, and active sports games without requiring complex initial onboarding or filter setup.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-paper-deep border hairline space-y-3">
                    <span className="font-mono text-xs uppercase text-ink font-bold tracking-widest block">
                      Power User Control
                    </span>
                    <h4 className="font-display font-bold text-lg text-ink-deep">Deep Customization on Demand</h4>
                    <p className="text-sm text-gray leading-relaxed">
                      Allowing legacy TiVo subscribers to pin custom channel numbers, edit favorite list order, and manage multi-room DVR recordings directly from quick actions.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 04: CROSS-TEAM & SCOPE DISCIPLINE — DARK CHARCOAL */}
          <section id="collaboration" className="bg-charcoal text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  04
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  Designing Across Teams &amp; Knowing What Not to Build
                </h2>
              </div>

              {/* Open Editorial Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-lilac" /> Global Alignment
                  </span>
                  <h3 className="font-display text-2xl font-bold text-paper">
                    US, Romania &amp; Bangalore Execution
                  </h3>
                  <p className="text-body-lg text-paper/90 leading-relaxed font-body">
                    Rather than handing designs off after completion, I brought engineers into the process early through collaborative workshops, design reviews, and technical feasibility discussions across time zones.
                  </p>
                  
                  {/* DESIGN DECISION CALLOUT: Dark Style (Outline left 30% alpha) */}
                  <div className="border-l-4 border-lilac/30 bg-white/5 rounded-r-xl p-5 pl-7 space-y-2 my-4">
                    <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest block">
                      Key Design Decision 04
                    </span>
                    <h4 className="font-display font-bold text-base text-paper">
                      Native Platform Conventions Over Blanket Uniformity
                    </h4>
                    <p className="text-xs text-paper/85 leading-relaxed font-body pl-2">
                      Respecting iOS Human Interface Guidelines and Android Material Design for native UI controls ensured the app felt immediately native to users on either OS.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-lilac" /> Scope Discipline
                  </span>
                  <h3 className="font-display text-2xl font-bold text-paper">
                    Knowing What Not to Build
                  </h3>
                  <p className="text-body-lg text-paper/90 leading-relaxed font-body">
                    Not every good idea belonged in the initial release. We deliberately postponed secondary features like deep search to prioritize perfecting the core Live TV browsing experience.
                  </p>
                  <div className="border-l-4 border-lilac/30 bg-white/5 rounded-r-xl p-5 pl-7 pt-3 space-y-1">
                    <p className="font-display text-lg italic text-paper pl-2">
                      "Good product design isn't just deciding what to build. It's deciding what not to build."
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 05: OUTCOMES & MEASURED IMPACT — DARK BROWN */}
          <section id="outcomes" className="bg-charcoal text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  05
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  Outcomes &amp; Measurable Business Impact
                </h2>
              </div>

              {/* High Impact Numbers - Open Typography Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-6">
                  <span className="font-display text-5xl md:text-6xl font-bold text-lilac block">
                    +21%
                  </span>
                  <span className="font-mono text-xs uppercase text-paper/90 font-bold block">
                    Increase in Guide Visits
                  </span>
                  <p className="text-xs text-paper/60 font-body">
                    Direct result of content-forward grid &amp; embedded live video preview.
                  </p>
                </div>

                <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-6">
                  <span className="font-display text-5xl md:text-6xl font-bold text-lilac block">
                    +6–8%
                  </span>
                  <span className="font-mono text-xs uppercase text-paper/90 font-bold block">
                    Growth in Unique Active Users
                  </span>
                  <p className="text-xs text-paper/60 font-body">
                    Sustained post-launch active user growth across global broadband cohorts.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-display text-3xl md:text-4xl font-bold text-lilac block sm:pt-2">
                    FIFA World Cup
                  </span>
                  <span className="font-mono text-xs uppercase text-paper/90 font-bold block">
                    Global Deployment Partner
                  </span>
                  <p className="text-xs text-paper/60 font-body">
                    Launched with Liberty Latin America before expanding internationally.
                  </p>
                </div>
              </div>

              {/* DESIGN DECISION CALLOUT: Dark section style (Outline 30% alpha) */}
              <div className="border-l-4 border-lilac/30 bg-white/5 rounded-r-xl p-5 pl-7 space-y-2">
                <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest block">
                  Key Design Decision 05
                </span>
                <h4 className="font-display font-bold text-lg text-paper">
                  System Architecture Prepared for Multi-Operator Custom Branding
                </h4>
                <p className="text-body-md text-paper/85 leading-relaxed font-body pl-2">
                  Structuring component color tokens cleanly enabled TiVo to white-label the redesigned Live Guide for global operators (including Liberty Latin America and Vodafone) without rewriting frontend application code.
                </p>
              </div>

              {/* System Accomplishments List */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest block">
                  Key System Accomplishments
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-paper/85 font-body">
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

          {/* SECTION 06: REFLECTION — DARK BROWN WITH 10% BLACK OVERLAY TO STAND OUT */}
          <section id="reflection" className="bg-charcoal text-paper py-16 md:py-24 border-b border-white/10 scroll-mt-28 selection:bg-paper/25 relative overflow-hidden">
            
            {/* 10% Black Overlay layer as requested */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 space-y-10 relative z-10">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                  06
                </span>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                  Reflection: The Sum of Small Decisions
                </h2>
              </div>

              {/* Open Editorial Reflection */}
              <div className="space-y-6 max-w-3xl">
                <p className="font-display text-2xl text-paper leading-relaxed italic">
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

                {/* DESIGN DECISION SUMMARY CALLOUT */}
                <div className="border-l-4 border-lilac/30 bg-white/5 rounded-r-xl p-5 pl-7 space-y-2 my-4">
                  <span className="font-mono text-xs uppercase text-lilac font-bold tracking-widest block">
                    Core Reflective Insight
                  </span>
                  <h4 className="font-display font-bold text-lg text-paper">
                    Designing for Systems &amp; Interaction Continuity
                  </h4>
                  <p className="text-body-md text-paper/85 leading-relaxed font-body pl-2">
                    Individual screens capture moments, but system design captures experience. Crafting consistent feedback states, transition timing, and spatial logic creates software that feels effortless.
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
          </section>

          {/* SECTION 07: DEDICATED NEXT CASE STUDY NAVIGATION SECTION */}
          <section id="next-case-study" className="bg-charcoal text-paper py-20 md:py-28 scroll-mt-28 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6 space-y-10">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-lilac/20 text-lilac border border-lilac/30">
                    07
                  </span>
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl text-paper">
                    Next Case Study
                  </h2>
                </div>
                <span className="font-mono text-xs uppercase text-lilac tracking-widest hidden sm:inline">
                  Continue Reading
                </span>
              </div>

              {/* Dedicated Visual Navigation Card */}
              <div 
                role="button"
                tabIndex={0}
                aria-label={`Navigate to Next Case Study: ${nextCaseStudy.title}`}
                onClick={() => onNavigateCaseStudy(nextCaseStudy.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onNavigateCaseStudy(nextCaseStudy.id);
                  }
                }}
                className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/15 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 hover:border-lilac/50 hover:bg-white/[0.08] cursor-pointer focus-visible:ring-2 focus-visible:ring-lilac"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-lilac/10 rounded-full blur-3xl pointer-events-none group-hover:bg-lilac/20 transition-all duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs uppercase font-bold text-lilac tracking-widest px-3 py-1 rounded-full bg-lilac/10 border border-lilac/20">
                          Case Study {nextCaseStudy.number}
                        </span>
                        <span className="font-mono text-xs text-paper/60">
                          {nextCaseStudy.companyOrContext}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl sm:text-4xl font-bold text-paper group-hover:text-lilac transition-colors leading-tight">
                        {nextCaseStudy.title}
                      </h3>
                    </div>

                    <p className="text-body-lg text-paper/80 leading-relaxed font-body">
                      {nextCaseStudy.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 font-mono text-xs text-paper font-medium">
                        <User className="w-3.5 h-3.5 text-lilac" /> Role: {nextCaseStudy.role}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-lilac font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        <span>Read Full Story</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-charcoal/80 shadow-2xl transform group-hover:scale-[1.03] transition-transform duration-500">
                      <img
                        src={nextCaseStudy.coverImage}
                        alt={nextCaseStudy.title}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-charcoal/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                        <span className="font-mono text-[11px] text-paper/80 font-semibold truncate">
                          {nextCaseStudy.deliverables}
                        </span>
                        <ChevronRight className="w-4 h-4 text-lilac shrink-0" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </>
      ) : (
        /* STANDARD LAYOUT FOR OTHER CASE STUDIES WITH OPEN UNNESTED LAYOUT */
        <>
          <section className="bg-paper-deep text-ink-deep py-16 md:py-24 border-b hairline selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep border-b hairline pb-3">
                  Project Overview
                </h2>
                <p className="text-body-lg text-gray leading-relaxed font-body">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="font-display font-semibold text-xl text-ink-deep flex items-center gap-2 border-b hairline pb-2">
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

                <div className="space-y-4">
                  <h3 className="font-display font-semibold text-xl text-ink-deep flex items-center gap-2 border-b hairline pb-2">
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

          <section className="bg-paper text-ink-deep py-16 md:py-24 border-b hairline selection:bg-ink/20">
            <div className="max-w-5xl mx-auto px-6 space-y-8">
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-deep border-b hairline pb-3">
                Outcomes &amp; System Takeaways
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {caseStudy.keyOutcomes.map((outcome, idx) => (
                  <div key={idx} className="border-b border-ink/10 pb-4 space-y-2">
                    <span className="font-mono text-xs text-ink font-bold block">
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

          <section className="bg-charcoal text-paper py-16 md:py-20 selection:bg-paper/25">
            <div className="max-w-5xl mx-auto px-6">
              <div 
                role="button"
                tabIndex={0}
                aria-label={`Navigate to Next Case Study: ${nextCaseStudy.title}`}
                onClick={() => onNavigateCaseStudy(nextCaseStudy.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onNavigateCaseStudy(nextCaseStudy.id);
                  }
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/[0.07] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-lilac"
              >
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
