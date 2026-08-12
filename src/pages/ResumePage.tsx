import React, { useEffect } from "react";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe, Linkedin, Download } from "lucide-react";
import NiralLogo from "../components/NiralLogo";

interface ResumePageProps {
  onNavigateHome: () => void;
}

export default function ResumePage({ onNavigateHome }: ResumePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-ink/20">
      
      {/* Top Sticky Nav Header */}
      <nav className="sticky top-0 z-40 bg-paper-deep/95 backdrop-blur-md border-b hairline py-4 px-6 md:px-12 print:hidden">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 font-display font-semibold text-base text-ink-deep hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <NiralLogo size={22} className="rounded" />
              <span>Niral Shah</span>
            </button>
            <span className="text-ink/30 font-mono hidden sm:inline">|</span>
            <span className="font-display font-semibold text-sm text-ink-deep hidden sm:inline">
              Niral Shah • Resume
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-primary text-xs px-4 py-2 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Resume Page Container */}
      <main className="max-w-4xl mx-auto px-6 py-10 md:py-16 space-y-10 print:p-0 print:m-0 print:max-w-none">
        
        {/* Header Section */}
        <header className="border-b-2 border-ink pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <span className="font-mono text-kicker uppercase text-ink tracking-[0.18em] mb-2 block">
                SENIOR PRODUCT DESIGNER
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink-deep">
                Niral Shah
              </h1>
            </div>

            <div className="shrink-0 print:hidden">
              <a 
                href="#/" 
                onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <NiralLogo className="h-10 text-ink-deep" />
              </a>
            </div>
          </div>

          <p className="font-sans text-base md:text-lg font-semibold text-ink-deep/90 mb-6">
            Mobile Interaction Design • AI, Multimodal &amp; Hardware Platforms
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs md:text-sm text-gray font-mono pt-4 border-t border-ink/15">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-ink/70 shrink-0" /> Pleasanton, CA
            </span>
            <a href="tel:4085053940" className="flex items-center gap-1.5 hover:text-ink-deep transition-colors">
              <Phone className="w-3.5 h-3.5 text-ink/70 shrink-0" /> 408.505.3940
            </a>
            <a href="mailto:niral.s5@gmail.com" className="flex items-center gap-1.5 hover:text-ink-deep transition-colors">
              <Mail className="w-3.5 h-3.5 text-ink/70 shrink-0" /> niral.s5@gmail.com
            </a>
            <a href="https://niraldesigns.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink-deep transition-colors">
              <Globe className="w-3.5 h-3.5 text-ink/70 shrink-0" /> niraldesigns.com
            </a>
            <a href="https://www.linkedin.com/in/niralshah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink-deep transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-ink/70 shrink-0" /> LinkedIn
            </a>
          </div>
        </header>

        {/* Executive Summary */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-ink-deep border-b border-ink/20 pb-1.5 mb-3">
            SUMMARY
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray font-sans">
            Senior Product Designer with 12+ years crafting intuitive, delightful, human-centered experiences across Android, iOS, web, TV OS, and multimodal AI platforms. Background in voice-adjacent interaction design, hardware-constrained HMI, and Material-based scalable design systems; now applying that foundation to conversational AI and ambient computing. Currently building PranaVeda, an AI-powered wellness companion that combines personalization, conversational guidance, and multimodal interaction design. Dependable, collaborating with product, engineering, and business teams to turn early-stage ideas into polished products that improve people's lives.
          </p>
        </section>

        {/* Core Skills */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-ink-deep border-b border-ink/20 pb-1.5 mb-3">
            CORE SKILLS
          </h2>
          <div className="space-y-2.5 text-sm md:text-base text-gray">
            <p>
              <strong className="font-semibold text-ink-deep">Design:</strong> Android · iOS · Interaction Design · Visual Design · Prototyping · Accessibility · Design Systems · Figma
            </p>
            <p>
              <strong className="font-semibold text-ink-deep">AI Fluency:</strong> Conversational UX · Behavior Change Design · Context Engineering · AI Personalization
            </p>
            <p>
              <strong className="font-semibold text-ink-deep">Leadership &amp; Research:</strong> 0→1 Product Strategy · Product Storytelling · Stakeholder Alignment · UXR
            </p>
          </div>
        </section>

        {/* Education & Credentials */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-ink-deep border-b border-ink/20 pb-1.5 mb-3">
            EDUCATION &amp; PROFESSIONAL DEVELOPMENT
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray">
            <strong className="font-semibold text-ink-deep">Stanford LEAD</strong> – Graduate School of Business (In Progress) · <strong className="font-semibold text-ink-deep">Design Leadership at Scale</strong> – Maven · <strong className="font-semibold text-ink-deep">Master UX Design for AI Apps</strong> – Maven · <strong className="font-semibold text-ink-deep">Design Thinking with AI Foundations</strong> – IDEO U · <strong className="font-semibold text-ink-deep">Foundations of Humane Technology</strong> – Center for Humane Technology · <strong className="font-semibold text-ink-deep">User-Centered Analyst</strong> – Human Factors International (HFI) · <strong className="font-semibold text-ink-deep">Applied Arts</strong> – Sophia College, Mumbai
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-ink-deep border-b border-ink/20 pb-1.5 mb-4">
            EXPERIENCE
          </h2>

          {/* Job 1 */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-display font-bold text-lg text-ink-deep">
                PranaVeda, AI Wellness Companion <span className="font-normal text-gray">• Founder · Product Design Lead</span>
              </h3>
              <span className="font-mono text-xs text-gray font-medium shrink-0">
                March 2025 – Present · Pleasanton, CA
              </span>
            </div>
            <p className="text-xs sm:text-sm italic text-gray/90">
              Designing a voice-forward, AI-powered wellness companion that personalizes yoga, breathwork, and Ayurvedic practices based on individual body type, time of day, and energy level, built to demonstrate ambient, multimodal AI design for health and wellness contexts.
            </p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs sm:text-sm text-gray pt-1">
              <li>
                <strong className="text-ink-deep font-semibold">Architected a voice-first interaction model</strong> using Web Speech API for live transcription and Eleven Labs for natural-sounding AI voice responses, translating voice design principles into a functioning prototype without backend infrastructure.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Designed an individual predisposition-aware AI response system</strong> that personalizes practice recommendations by body type (Vata, Pitta, Kapha), session context, and user energy, demonstrating AI personalization at the interaction layer, not just the recommendation layer.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Built multimodal interaction flows</strong> that combine conversational guidance, visual instruction, a real-time yoga timer, a breathwork player, and a habit-reinforcing dashboard, each surface designed to coexist with ambient voice input.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Conducted generative interviews and usability testing</strong> with individuals managing chronic health conditions to identify unmet needs and validate onboarding and personalized coaching experiences.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Applied behavior change principles</strong> (motivation, ability, trigger model) to daily ritual design, improving adherence through personalized onboarding, saved ritual flows, and progressive guidance that adapts to the user's current state.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-display font-bold text-lg text-ink-deep">
                Xperi (formerly TiVo) <span className="font-normal text-gray">• Senior Product Designer</span>
              </h3>
              <span className="font-mono text-xs text-gray font-medium shrink-0">
                Jul 2019 – Jul 2024 · San Jose, CA
              </span>
            </div>
            <p className="text-xs sm:text-sm italic text-gray/90">
              Led interaction design across mobile, connected devices, TV OS, automotive displays, and web with a focus on AI-powered personalization, multimodal experiences, and scalable design systems.
            </p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs sm:text-sm text-gray pt-1">
              <li>
                <strong className="text-ink-deep font-semibold">Designed dual-input interaction paradigms</strong> (remote + voice) that preserved speed, clarity, and focus hierarchy across hardware-limited environments and display multimodal surfaces.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Led 0→1 AI-driven personalization and content discovery experiences</strong> for 400K active users, translating behavioral signals into intuitive, adaptive interfaces, contributing to a 20% lift in engagement across mobile and TV platforms.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Built a modular, Material Design–based design system</strong> from the ground up, adaptable across brands, platforms, aspect ratios, and device types. Contributed components and interaction standards to Figma libraries shared across product teams, reducing design and development cycles by 30%.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Designed HMI frameworks for BMW in-vehicle displays</strong>, accounting for viewing distance, glanceability, driver safety, and aspect ratio constraints. The hardware-constrained design discipline directly maps to Echo and Alexa display form factors.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Presented platform-level UX strategy and product vision</strong> to executive leadership, influencing roadmap prioritization across multiple product lines.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Conducted and incorporated user research</strong> throughout the design process, including usability studies and behavioral data analysis, to validate decisions, reduce ambiguity, and iterate toward improvements.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Mentored designers through structured critiques</strong>, design reviews, and cross-functional collaboration while guiding 15+ engineers through implementation of scalable interaction systems.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Led hackathon-winning concepts in 2023 and 2024</strong> that directly influenced product strategy and roadmap, demonstrating the ability to ideate, prototype, and build conviction around net-new product directions.
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-display font-bold text-lg text-ink-deep">
                TiVo <span className="font-normal text-gray">• Product Designer</span>
              </h3>
              <span className="font-mono text-xs text-gray font-medium shrink-0">
                Jan 2013 – Jul 2019 · San Jose, CA
              </span>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs sm:text-sm text-gray pt-1">
              <li>
                <strong className="text-ink-deep font-semibold">Owned the Android user experience for TiVo's mobile applications</strong>, leading design for new features, platform evolution, and Material Design adoption while partnering closely with Product and Engineering.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Re-architected information hierarchy and metadata systems</strong>, reducing content truncation issues by 98% and improving scanability across content-dense, multi-platform interfaces.
              </li>
              <li>
                <strong className="text-ink-deep font-semibold">Collaborated with PMs and engineers</strong> to balance user needs, business goals, and platform constraints, building a foundation of cross-functional partnership that has defined my career approach.
              </li>
            </ul>
          </div>

          {/* Additional Career History */}
          <div className="space-y-3 pt-4 border-t border-ink/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <span className="font-semibold text-ink-deep">Niral Designs <span className="font-normal text-gray">• Independent Design Consultant</span></span>
              <span className="font-mono text-xs text-gray">Jun 2004 – Dec 2012 · California, US</span>
            </div>
            <p className="text-xs sm:text-sm text-gray pl-3 border-l-2 border-ink/20">
              UX strategy, interaction design, and branding across finance, education, e-commerce, and wellness.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm pt-2">
              <span className="font-semibold text-ink-deep">Puretech Internet Pvt. Ltd. <span className="font-normal text-gray">• Senior Designer</span></span>
              <span className="font-mono text-xs text-gray">Apr 2000 – May 2002 · Mumbai, India</span>
            </div>
            <p className="text-xs sm:text-sm text-gray pl-3 border-l-2 border-ink/20">
              Award-winning visual designs for global clients including Yahoo!, McDonald's, and Kotak Securities.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm pt-2">
              <span className="font-semibold text-ink-deep">Tata Interactive Systems <span className="font-normal text-gray">• Graphic Designer</span></span>
              <span className="font-mono text-xs text-gray">Jan 1999 – Mar 2000 · Mumbai, India</span>
            </div>
            <p className="text-xs sm:text-sm text-gray pl-3 border-l-2 border-ink/20">
              Interactive learning programs for global clients, including UCSC, Cadence, and British Gas.
            </p>
          </div>
        </section>

        {/* Leadership & Community */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-ink-deep border-b border-ink/20 pb-1.5 mb-3">
            LEADERSHIP &amp; COMMUNITY
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-gray">
            <p>
              <strong className="font-semibold text-ink-deep">West Coast Chair, Women in Tech ERG:</strong> Led regional expansion strategy, scaled global DEI programs, and grew community to 300+ engaged members across multiple geographies.
            </p>
            <p>
              <strong className="font-semibold text-ink-deep">Design Leadership &amp; Mentorship:</strong> Championed design craft and mentorship through weekly critiques, quarterly UX Summit presentations, and creative problem-solving workshops that elevated team capabilities.
            </p>
          </div>
        </section>

        {/* Bottom Page Navigation */}
        <div className="pt-10 border-t border-ink/15 flex items-center justify-between print:hidden">
          <button
            onClick={onNavigateHome}
            className="btn-secondary text-xs px-5 py-2.5 flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <button
            onClick={handlePrint}
            className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save PDF</span>
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-paper-deep border-t hairline py-8 px-6 text-center text-xs text-gray font-mono print:hidden">
        <p>© 2026 Niral Shah • Senior Product Designer</p>
      </footer>

    </div>
  );
}
