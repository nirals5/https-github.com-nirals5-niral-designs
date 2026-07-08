import React, { useState } from "react";
import { motion } from "motion/react";
import pillar01 from "../assets/images/pillar_01.svg";
import pillar02 from "../assets/images/pillar_02.svg";
import pillar03 from "../assets/images/pillar_03.svg";
import pillar04 from "../assets/images/pillar_04.svg";

interface Pillar {
  id: string;
  number: string;
  title: string;
  content: string;
  highlight?: string;
  chips?: string[];
  imageSrc?: string; // Optional generated image
  svgIcon?: React.ReactNode;
}

export default function PillarDeck() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const pillars: Pillar[] = [
    {
      id: "care",
      number: "01",
      title: "Build with care",
      content: "Craft is care made visible — the details people never notice are the reason everything feels effortless.",
      highlight: "TiVo Live Guide redesign → 20% lift in viewership",
      imageSrc: pillar01
    },
    {
      id: "systems",
      number: "02",
      title: "Think in systems",
      content: "From design systems to AI workflows, I build the invisible foundations that let products and teams move fast with confidence.",
      highlight: "Cross platform system → ~30% faster design dev cycles",
      imageSrc: pillar02
    },
    {
      id: "learn",
      number: "03",
      title: "Learn continuously",
      content: "Stanford LEAD, AI-native workflows, and a habit of staying curious — then sharing what I learn with the design community.",
      chips: ["Stanford LEAD", "AI UX Design", "Design Thinking with AI"],
      imageSrc: pillar03
    },
    {
      id: "grow",
      number: "04",
      title: "Help others grow",
      content: "Impact isn't only what I ship — it's the designers I mentor and the environments where curiosity spreads.",
      highlight: "Groomed design teams · Helped mission-driven communities",
      imageSrc: pillar04
    }
  ];

  return (
    <div className="w-full py-6">
      {/* Cards container - stacked deck on desktop, responsive layout on mobile */}
      <div 
        className="relative min-h-[500px] flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0 px-4 md:px-12 max-w-6xl mx-auto"
        onMouseLeave={() => setActiveIdx(null)}
      >
        {pillars.map((pillar, idx) => {
          const isHovered = activeIdx === idx;
          const isAnyHovered = activeIdx !== null;
          const rotations = [-6, -2, 2, 6];
          const initialRotate = rotations[idx];

          // Compute dynamic positioning offsets for the fan overlap effect on desktop
          // Standard overlap of e.g. -60px on desktop.
          // When hovered, the hovered card lifts up.
          // Neighbors to the left translate left; neighbors to the right translate right.
          let desktopTranslateX = 0;
          if (isAnyHovered && !isHovered) {
            if (idx < (activeIdx ?? 0)) {
              desktopTranslateX = -28; // Shift left
            } else {
              desktopTranslateX = 28; // Shift right
            }
          }

          return (
            <motion.div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              className={`relative w-full md:w-[280px] bg-white border border-ink/22 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden group`}
              style={{
                // Absolute styling combined with overlap on desktop
                marginLeft: idx > 0 ? "var(--desktop-margin-left)" : "0",
                zIndex: isHovered ? 50 : 10 + idx,
              }}
              // CSS variables mapped dynamically for media-queries or tailwind prefixes
              animate={{
                y: isHovered ? -16 : 0,
                x: typeof window !== "undefined" && window.innerWidth >= 768 ? desktopTranslateX : 0,
                rotate: isHovered ? 0 : initialRotate,
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(isHovered ? null : idx)}
              tabIndex={0}
              onFocus={() => setActiveIdx(idx)}
              onBlur={() => {
                if (activeIdx === idx) setActiveIdx(null);
              }}
              aria-expanded={isHovered}
            >
              {/* Dynamic desktop negative margin mapping in tailwind */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-ink transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              
              <div>
                {/* Header of card: Number + Kicker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-ink/60 tracking-widest">{pillar.number}</span>
                  <span className="font-mono text-[10px] uppercase text-ink/40 tracking-[0.18em]">how i work</span>
                </div>

                {/* Card Artwork container */}
                <div className="w-full h-32 mb-6 bg-paper-deep/40 rounded-lg flex items-center justify-center overflow-hidden border border-ink/5 relative">
                  {pillar.imageSrc ? (
                    <img 
                      src={pillar.imageSrc} 
                      alt={`${pillar.title} Kalamkari Artwork`} 
                      className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'}`}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className={`w-full h-full p-2 transition-transform duration-500 ${isHovered ? 'scale-105' : 'group-hover:scale-105'}`}>
                      {pillar.svgIcon}
                    </div>
                  )}
                  {/* Decorative faint overlay */}
                  <div className="absolute inset-0 bg-ink/2 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Card Title */}
                <h3 className="font-display font-semibold text-case-title text-ink-deep mb-3">
                  {pillar.title}
                </h3>

                {/* Card Description - remains perfectly accessible */}
                <p className="text-body-sm text-gray leading-relaxed mb-6">
                  {pillar.content}
                </p>
              </div>

              {/* Card Footer: Highlight metric / tags */}
              <div className="mt-auto pt-4 border-t border-ink/10">
                {pillar.highlight && (
                  <div className="text-[12px] italic text-ink font-sans font-medium leading-normal">
                    {pillar.highlight}
                  </div>
                )}
                {pillar.chips && (
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.chips.map((chip) => (
                      <span 
                        key={chip} 
                        className={`border border-ink/10 text-ink/80 text-[11px] font-medium px-2.5 py-0.5 rounded-full font-sans transition-colors duration-200 ${isHovered ? 'bg-lilac/20' : 'bg-paper group-hover:bg-lilac/20'}`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Styled companion CSS for overlapping margin */}
      <style>{`
        @media (min-width: 768px) {
          #pillar-card-systems, #pillar-card-learn, #pillar-card-grow {
            margin-left: -52px !important;
          }
        }
      `}</style>
    </div>
  );
}
