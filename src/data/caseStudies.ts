import liveGuideCover from "../assets/images/live_guide_mobile_cover.png";
import pranavedaCover from "../assets/images/pranaveda_cover.jpg";
import tivoOneAdCover from "../assets/images/tivo-one_ad_cover.jpg";

export interface DesignDecision {
  label?: string;
  statement: string;
}

export interface CaseStudySection {
  id?: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  quote?: string;
  designDecision?: DesignDecision;
  bullets?: string[];
  metrics?: { label: string; value: string }[];
  subsections?: {
    title: string;
    paragraphs?: string[];
    designDecision?: DesignDecision;
    bullets?: string[];
  }[];
}

export interface CaseStudyData {
  id: string;
  number: string;
  kicker: string;
  title: string;
  role: string;
  companyOrContext: string;
  timeline: string;
  coverImage: string;
  summary: string;
  impactMetric: string;
  overview: string;
  challenges: string[];
  contributions: string[];
  keyOutcomes: string[];
  deliverables: string;
  sections?: CaseStudySection[];
}

export const caseStudiesData: CaseStudyData[] = [
  {
    id: "tivo-mobile",
    number: "01",
    kicker: "01 • SCALE & IMPACT",
    title: "Reimagining Live TV Around People, Not Channels",
    role: "Lead Product Designer",
    companyOrContext: "Xperi",
    timeline: "6 Months",
    coverImage: liveGuideCover,
    summary: "A ground-up rethink of TiVo's live TV guide for native mobile apps, transforming legacy channel grids into an immersive, content-first discovery experience.",
    impactMetric: "21% increase in Guide visits & 6–8% growth in unique Guide users across global partner deployments.",
    overview: "The Live Guide was one of the most frequently used experiences in the TiVo mobile app, helping people answer one simple question: 'What should I watch right now?' Yet the experience had barely evolved in years, built around television channels rather than discovering content. This case study details how we transformed the Guide from a legacy channel utility into a content-first discovery engine during TiVo's major transition to native mobile platforms.",
    challenges: [
      "Translating dense multi-channel television schedules onto vertical mobile viewports without visual overload.",
      "Shifting user habits from manual channel browsing to context-rich content discovery.",
      "Designing lightweight contextual actions (Quick Actions) that keep users engaged in the Guide without interrupting playback."
    ],
    contributions: [
      "Formulated product strategy and led end-to-end UX for native iOS and Android Live Guide apps.",
      "Conducted competitive audits across 8 streaming platforms and synthesized behavioral insights.",
      "Architected content-forward grid layouts, live playback previews, bottom-sheet Quick Actions, and cross-platform native patterns."
    ],
    keyOutcomes: [
      "21% increase in total Guide visits following launch.",
      "6–8% growth in unique active Guide users.",
      "Launched with Liberty Latin America for the FIFA World Cup and scaled to international broadband partners."
    ],
    deliverables: "Product UX Strategy, Native iOS & Android App Design",
    sections: [
      {
        id: "intro",
        title: "The Challenge of an Unchanged Classic",
        paragraphs: [
          "The Live Guide was one of the most frequently used experiences in the TiVo mobile app. It helped people answer one simple question: 'What should I watch right now?' Yet the experience had barely evolved in years.",
          "It was built around navigating television channels rather than discovering content. Dense grids, legacy interaction patterns, and accumulated interface clutter made the Guide feel increasingly disconnected from how people actually watched television.",
          "At the same time, TiVo was undertaking a major transition from Haxe to native mobile and modernizing its cloud infrastructure. For most teams, that was a technical migration. I saw it as a product opportunity.",
          "Rather than asking, 'How can we modernize the Guide?' I asked a different question: How might we help people discover what to watch—not just where it's playing?"
        ],
        quote: "Every design decision was measured against a single principle: Does this help someone enjoy Live TV?",
        bullets: [
          "Preserve browsing momentum without abrupt screen transitions.",
          "Enable people to browse and preview content before committing to full-screen playback.",
          "Provide contextual actions directly where decisions happen.",
          "Help people spend less time navigating television, and more time enjoying it."
        ]
      },
      {
        id: "opportunity",
        title: "Finding the Opportunity",
        paragraphs: [
          "The Guide wasn't underperforming. It was one of the most visited experiences in the TiVo ecosystem, and because of that, very few people questioned it.",
          "But I kept coming back to a simple observation: The way people discovered television was changing. People were no longer deciding what to watch by scrolling through numerical channels. They were discovering content: jumping between streaming services, expecting richer context, faster decisions, and more immediate ways to start watching.",
          "Before recommending any changes, I conducted a competitive audit across eight streaming platforms, including YouTube TV, Hulu, Pluto TV, Sling TV, Fubo TV, Philo TV, Prime Video, and TiVo itself. The research confirmed what I had been sensing: the industry was moving toward helping people discover content, while our Guide was still optimized for navigating channels."
        ],
        bullets: [
          "Richer, more visual content discovery over dense textual grids",
          "Category-based browsing to reduce cognitive scanning effort",
          "Contextual actions available directly from the Guide view",
          "Live playback integrated directly into browsing experiences",
          "Cleaner visual language prioritizing content over interface chrome"
        ],
        designDecision: {
          label: "Product Insight",
          statement: "Our product data revealed that the Favorite Channels feature, designed to surface preferred content, was buried inside Settings. Only ~1% of users ever discovered it. The problem wasn't the feature; it was the surrounding architecture. This was a redesign driven by a new product philosophy: Every interaction should help people spend less time navigating and more time enjoying."
        }
      },
      {
        id: "principles",
        title: "Bringing the Vision to Life",
        paragraphs: [
          "Research gave us direction. The challenge was translating that vision into an experience that felt faster, lighter, and more intuitive without sacrificing the flexibility long-time TiVo users relied on.",
          "Rather than redesigning individual screens in isolation, I focused on three core experience principles that guided every design decision."
        ],
        subsections: [
          {
            title: "1. Make Discovery Faster",
            paragraphs: [
              "The existing Guide required users to scan dense rows of information before making a choice. I redesigned the Guide around a content-forward Grid Guide, making it easier to compare programs across time while reducing visual clutter.",
              "Simplified typography, improved spacing, clearer hierarchy, and a stronger focus on artwork allowed people to scan naturally. To bring content into browsing, I introduced live playback above the Guide, allowing users to preview what was currently airing in real time."
            ],
            designDecision: {
              label: "Design Decision",
              statement: "We chose to lead with live content instead of interface chrome. Every visual decision was made to answer one question faster: 'Do I want to watch this?'"
            }
          },
          {
            title: "2. Make Interactions Lighter",
            paragraphs: [
              "Browsing television isn't linear. People discover something interesting, check the schedule, add a favorite, or compare another channel within moments. The existing experience interrupted that flow by opening separate screens for almost every action.",
              "Instead, I introduced contextual Quick Actions through bottom sheets. Users could catch up, view channel schedules, add favorites, or find alternate viewing sources without leaving the Guide."
            ],
            bullets: [
              "Live playback remained visible while browsing",
              "Gesture-based controls reduced interface friction",
              "Skeleton loading replaced blank waiting states with graceful transitions",
              "Playback and browsing worked together instead of competing for attention"
            ],
            designDecision: {
              label: "Design Decision",
              statement: "Bottom sheets weren't simply a UI pattern. They represented a shift in interaction philosophy: keep people engaged with content instead of navigation."
            }
          },
          {
            title: "3. Make Live TV Feel Immediate",
            paragraphs: [
              "One of the biggest opportunities was improving how the product felt. Small interaction details often have an outsized impact on perceived quality.",
              "I refined transitions, loading behaviors, motion, playback continuity, and default states to make the Guide feel responsive and alive. Muted autoplay, remembered channels, polished loading states, and seamless transitions all contributed to an experience that felt calm, intentional, and immediate."
            ]
          }
        ]
      },
      {
        id: "collaboration",
        title: "Designing Across Teams & Knowing What Not to Build",
        paragraphs: [
          "The redesign required close collaboration across Product, Engineering, QA, and Design teams distributed across the United States, Romania, and Bangalore.",
          "Rather than handing designs off after completion, I brought engineers into the process early through collaborative workshops, design reviews, and technical feasibility discussions. For example, instead of forcing identical experiences across platforms, we intentionally respected native interaction patterns, such as keeping native iOS date pickers while designing an optimized Android interaction.",
          "Simultaneously, we practiced strict discipline regarding scope. Not every good idea belonged in the first release. Although search remained an important opportunity, the Guide's biggest usability challenges centered around browsing and discovery. Improving core browsing delivered far greater value than expanding secondary features."
        ],
        designDecision: {
          label: "Core Discipline",
          statement: "Good product design isn't just deciding what to build. It's deciding what not to build."
        }
      },
      {
        id: "outcomes",
        title: "Outcomes & Measurable Impact",
        paragraphs: [
          "The redesigned Guide became the foundation for TiVo's native mobile experience. It launched successfully with Liberty Latin America ahead of the FIFA World Cup before expanding to additional global broadband providers."
        ],
        metrics: [
          { label: "Increase in Guide Visits", value: "+21%" },
          { label: "Growth in Unique Users", value: "+6-8%" },
          { label: "Global Launch Partner", value: "Liberty Latin America" }
        ],
        bullets: [
          "21% increase in total Guide visits post-launch.",
          "6–8% growth in unique active Guide users.",
          "Native architecture enabled significantly faster product iteration for future teams.",
          "Highly positive customer feedback on usability, visual clarity, and browsing speed."
        ]
      },
      {
        id: "reflection",
        title: "Reflection: The Sum of Small Decisions",
        paragraphs: [
          "This project wasn't about giving the Guide a fresh coat of paint. It was about rethinking hundreds of small decisions that collectively shape how a product feels: visual hierarchy, playback behavior, loading states, navigation, gestures, quick actions, and personalization.",
          "Looking back, this project changed how I think about product design. I stopped designing individual screens and started designing the continuity between them. The best experiences aren't defined by a single feature; they emerge from thoughtful systems where every interaction supports the next."
        ]
      }
    ]
  },
  {
    id: "pranaveda-ai",
    number: "02",
    kicker: "02 • ZERO TO ONE",
    title: "An AI wellness companion, designed from scratch",
    role: "Founder & Lead Product Designer",
    companyOrContext: "PranaVeda",
    timeline: "4 Months",
    coverImage: pranavedaCover,
    summary: "Founder-designer-builder of PranaVeda, combining yoga and Ayurveda with real-time, adaptive AI-driven guidance. Envision a conversational interface and smart computer-vision tracking overlays that respect the user's natural home rhythm.",
    impactMetric: "Designed to target 40% improvement in routine adherence.",
    overview: "PranaVeda is a holistic AI companion bridging ancient wellness wisdom with adaptive technology. It offers personalized daily movement and Ayurvedic guidance that responds intelligently to user rhythms and progress.",
    challenges: [
      "Creating a calm, non-intrusive AI conversational UI that respects traditional mindfulness.",
      "Designing computer-vision camera feedback overlays that guide movement without causing distraction.",
      "Synthesizing complex Ayurvedic health inputs into simple, actionable daily recommendations."
    ],
    contributions: [
      "End-to-end product architecture, visual identity, and conversational interface design.",
      "Designed real-time pose guidance camera screens and dynamic routine adaptive flows.",
      "Created personalized daily dashboard hubs for movement, breathwork, and nutrition."
    ],
    keyOutcomes: [
      "Targeted 40% improvement in daily wellness routine adherence.",
      "Zero-to-one product validation tested with yoga practitioners and Ayurvedic specialists."
    ],
    deliverables: "Brand Identity, Mobile App Specs, Conversational Logic Maps, UI Kit"
  },
  {
    id: "design-system",
    number: "03",
    kicker: "03 • SYSTEMS",
    title: "One language across TV, mobile, and web",
    role: "Design System Lead & Senior Staff Designer",
    companyOrContext: "Multi-Brand Consumer Platform",
    timeline: "8 Months",
    coverImage: tivoOneAdCover,
    summary: "Designed a unified, multi-brand design system framework. Created component architectures that scaled seamlessly across 10-ft television, desktop displays, and strict handheld guidelines.",
    impactMetric: "~30% reduction in design-dev cycle time.",
    overview: "Built a scalable multi-platform design token architecture and component ecosystem serving TV set-top boxes, mobile apps, and web platforms across multiple sub-brands.",
    challenges: [
      "Reconciling starkly different interaction paradigms (10-foot remote focus states vs. touch vs. mouse hover).",
      "Maintaining brand customization tokens while enforcing accessibility (WCAG AA) on high-contrast TV displays.",
      "Establishing unified token governance across distributed engineering teams."
    ],
    contributions: [
      "Defined cross-platform typography, spacing, and color token structures in Figma and code.",
      "Engineered focus-management UI patterns for remote-controlled TV applications.",
      "Authored comprehensive usage guidelines and automated component documentation."
    ],
    keyOutcomes: [
      "~30% reduction in design-to-development cycle duration.",
      "Unification of 3 platform codebases under a single token taxonomy.",
      "Accelerated brand partner onboarding from weeks to days."
    ],
    deliverables: "Design Tokens, Cross-Platform Component Library, Governance Guidelines"
  }
];
