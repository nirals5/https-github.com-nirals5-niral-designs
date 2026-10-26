import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { JourneyStep } from "../types";
import { ArrowRight } from "lucide-react";

export default function Journey() {
  const [activeStep, setActiveStep] = useState<string>("Systems"); // Default selected is "Systems" to showcase the middle of the growth

  const steps: JourneyStep[] = [
    {
      id: "Interfaces",
      label: "Interfaces",
      title: "Learning the language of interfaces",
      description: "I learned that great interfaces aren't about decoration, they're about clarity. Every pixel, interaction, and animation shapes how a product feels long before users can explain why.",
      accomplishment: "Mastered visual craft, front-end collaboration, and tactile interaction design."
    },
    {
      id: "Experiences",
      label: "Experiences",
      title: "Connecting moments into experiences",
      description: "As products became more complex, I stopped designing individual screens and started designing relationships between them, connecting moments into experiences people could navigate intuitively.",
      accomplishment: "Designed end-to-end customer journeys and service experiences."
    },
    {
      id: "Systems",
      label: "Systems",
      title: "Designing the invisible",
      description: "Great products aren't collections of screens. They're coherent systems. I began designing the foundations that let teams build coherent platforms across TV, mobile, and web.",
      accomplishment: "Designed and scaled unified design system frameworks, slashing design-dev handoff cycles by 30%."
    },
    {
      id: "Leadership",
      label: "Leadership",
      title: "Empowering Teams & Product Strategy",
      description: "My impact grew beyond the products I shipped. I began building teams, mentoring designers, and aligning design decisions with business strategy.",
      accomplishment: "Built high-performing design teams while modernizing products used by millions."
    },
    {
      id: "Founder",
      label: "Consulting",
      title: "Consulting & Building Intelligent Products",
      description: "Today I'm combining product strategy, AI, and holistic wellness to build products that adapt to people—not the other way around.",
      accomplishment: "Bringing together design, business strategy, and AI to build intelligent products from the ground up."
    }
  ];

  const currentStepData = steps.find((step) => step.id === activeStep) || steps[2];

  return (
    <div className="w-full">
      {/* Horizontal / Vertical interactive node flow */}
      <div className="max-w-4xl mx-auto px-4">
        {/* The Node Stepper Container */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-8 mb-8 border-b hairline">
          {steps.map((step, idx) => {
            const isActive = step.id === activeStep;
            return (
              <React.Fragment key={step.id}>
                {/* Step Pill */}
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`relative min-h-11 px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ink/40 ${
                    isActive
                      ? "text-white shadow-sm"
                      : "bg-paper-deep/60 hover:bg-paper-deep text-ink hover:text-ink-deep"
                  }`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span className="relative z-10">{step.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-journey-tab"
                      className="absolute inset-0 bg-ink rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Arrow Connector between steps */}
                {idx < steps.length - 1 && (
                  <span className="text-ink/30 hidden sm:inline" aria-hidden="true">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Detailed info panel for current step */}
        <div className="bg-white/50 border border-ink/10 rounded-2xl p-6 md:p-8 min-h-[220px] flex flex-col justify-between shadow-sm relative overflow-hidden backdrop-blur-sm">
          {/* Subtle floral/geometric backdrop indicator */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-48 h-48 rounded-full border-2 border-ink/5 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs uppercase bg-ink/10 text-ink-deep px-2.5 py-1 rounded">
                  Phase 0{steps.findIndex((s) => s.id === activeStep) + 1}
                </span>
              </div>

              <h3 className="font-display font-semibold text-h3 text-ink-deep mb-4">
                {currentStepData.title}
              </h3>

              <p className="text-body text-gray leading-relaxed mb-6 max-w-2xl">
                {currentStepData.description}
              </p>

              {/* Accomplishment highlight box */}
              <div className="bg-paper-deep/40 border-l-2 border-ink p-4 rounded-r-lg">
                <span className="block font-mono text-[10px] uppercase text-ink/80 tracking-[0.15em] mb-1">
                  what changed
                </span>
                <p className="text-body-sm font-medium text-ink-deep leading-normal">
                  {currentStepData.accomplishment}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
