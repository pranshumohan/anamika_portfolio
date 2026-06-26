export const portfolioData = {
  personalInfo: {
    name: "Anamika Pandey",
    greet: "Hi, I'm Anamika 👋",
    titleParts: {
      part1: "Content-Led Growth",
      part2: "Strategist",
      part3: " & Social ",
      part4: "Media Manager."
    },
    sub: "I help brands turn content into growth — combining storytelling, social media strategy, and performance marketing to drive engagement, leads, and revenue.",
    email: "anamika.p.18@gmail.com",
    phone: "+91 93905 36310",
    location: "Kanpur, India · Open to EST / GMT overlap",
    linkedIn: "https://www.linkedin.com/in/anamika-pandey-neesh-digital/",
    linkedInDisplay: "linkedin.com/in/anamika-pandey",
    status: "Available · Full-time or Consulting · Immediately",
    resumePath: "/assets/anamika-resume.pdf",
    bookingUrl: "https://cal.com/anamika-pandey",
    bookingDisplay: "cal.com/anamika-pandey"
  },
  heroStats: [
    { value: "40%", label: "Organic Growth", counter: 40, sfx: "%" },
    { value: "38K+", label: "Impressions", counter: 38368, fmt: "k", sfx: "+" },
    { value: "6.91%", label: "Avg CTR" }, // Static
    { value: "300+", label: "Leads Generated", counter: 300, sfx: "+" }
  ],
  about: {
    title: "Both creative and analytical. That's the edge.",
    items: [
      {
        icon: "✍️",
        title: "Content-First Strategist",
        desc: "Carousels, Reels, LinkedIn articles — built to convert, not just impress"
      },
      {
        icon: "📊",
        title: "Performance Marketing",
        desc: "CPL optimisation, A/B testing, multi-market paid campaigns"
      },
      {
        icon: "🎓",
        title: "MS Information Technology",
        desc: "4.0 GPA · Middle Georgia State University, USA"
      },
      {
        icon: "🚀",
        title: "Co-Founder · Neesh Digital",
        desc: "End-to-end GTM strategy for SaaS & B2B clients"
      }
    ],
    bio: [
      "Most marketers are creative <strong>or</strong> analytical. I'm both — and that combination is rare. I build content systems that tell compelling stories <strong>and</strong> track whether those stories are driving business results.",
      "For BizCloud Experts, I designed a content engine — high-engagement carousels, thought leadership posts, and strategic storytelling — generating <strong>38,368+ organic impressions</strong> at 6.91% average CTR, with a 30% engagement increase and 40% organic traffic growth. The audience wasn't vanity followers: 844 Senior-level and 606 enterprise-company professionals.",
      "On the performance side, I've managed paid campaigns across 8 international markets, cut CPL by 48% through data-driven demographic pivots, and delivered 300+ qualified leads across projects. Every number here comes from a real report, not an estimate."
    ],
    tags: [
      { text: "BizCloud Experts · AWS Partner", active: true },
      { text: "Neesh Digital · Co-Founder", active: true },
      { text: "Phool Chatti Ashram", active: true },
      { text: "Brunswick Fur Food", active: true },
      { text: "KKDM · IIT JEE", active: false },
      { text: "Klera Solutions", active: false }
    ]
  },
  impact: {
    title: "The results, at a glance.",
    sub: "Across organic content, social media, and paid campaigns — numbers backed by actual reports.",
    cards: [
      { value: "40%", label: "Organic Traffic Growth", desc: "BizCloud Experts · 12 months · No paid amplification" },
      { value: "30%", label: "Engagement Increase", desc: "Content strategy, carousels & storytelling formats" },
      { value: "300+", label: "Global Leads Generated", desc: "Across paid & organic campaigns · Multiple markets" },
      { value: "25%", label: "Avg CPL Reduction", desc: "Through real-time data pivots & audience optimisation" }
    ]
  },
  work: {
    title: "Real campaigns. Real data. No estimates.",
    sub: "Two disciplines, one strategist. Browse by what matters most to you.",
    socialPath: {
      icon: "✍️",
      title: "Social Media & Content Growth",
      sub: "Organic content, brand storytelling, Instagram & LinkedIn strategy, audience building",
      projects: [
        {
          id: "bizcloud",
          name: "BizCloud Experts",
          tag: "AWS Partner · B2B Content Strategy · Mar 2023 – Present",
          headline: "Designing high-engagement carousels and a 3-pillar content system that grew organic traffic by 40%.",
          challenge: "BizCloud had deep technical credibility but a stagnant LinkedIn presence. The audience — CIOs, CTOs, and engineering leaders — needed content that matched their sophistication. Everything was either too abstract for buyers or too generic for engineers.",
          approach: "Built a 3-pillar content system (cloud governance, security, GenAI infrastructure). Designed high-engagement carousels that broke down complex technical concepts into scroll-stopping stories. Tracked content performance to optimise engagement and identify which formats drove real landing page traffic. Applied a hashtag strategy validated through analytics to consistently reach Senior and C-suite audiences.",
          kpis: [
            { value: "40%", label: "Traffic Growth" },
            { value: "288", label: "Posts Authored" },
            { value: "38K+", label: "Org. Impressions" },
            { value: "30%", label: "Engagement Lift" }
          ],
          chart: {
            title: "LinkedIn Monthly Impressions · Apr 2025 – Mar 2026",
            labels: ["Apr '25", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan '26", "Feb", "Mar"],
            data: [925, 2749, 3362, 2962, 8184, 3699, 2963, 1818, 5200, 1614, 1655, 3237]
          },
          gallery: [
            { type: "image", src: "/assets/bce-ai-readiness-carousel.png", caption: "Static Post · Enterprise AI Readiness — Data, Workflow, Infrastructure, Governance", tag: "Static Post", title: "Enterprise AI Readiness Framework" },
            { type: "image", src: "/assets/bce-genai-intellistream-carousel.png", caption: "Carousel · IntelliStream — Intelligent Processing with GenAI", tag: "Static Post", title: "IntelliStream: GenAI Processing" },
            { type: "image", src: "/assets/bce-st-patricks-day.png", caption: "Themed Content · St. Patrick's Day — BizCloud Experts LinkedIn", tag: "Themed Content", title: "St. Patrick's Day LinkedIn Post" },
            { type: "image", src: "/assets/bce-devops-automation.png", caption: "Engagement Post · One Enables the Other — DevOps Automation", tag: "Engagement Post", title: "DevOps Automation: One Enables the Other" },
            { type: "video", src: "/assets/bce-intelligent-contact-center-video.mp4", caption: "Video Post · Intelligent Contact Center — Customer Engagement", tag: "Video", title: "Intelligent Contact Center" },
            { type: "video", src: "/assets/bce-legacy-proptech-video.mp4", caption: "Video Post · Legacy PropTech is Holding You Back", tag: "Video", title: "Legacy PropTech is Holding You Back" },
            { type: "image", src: "/assets/bce-ethical-ai-healthcare.png", caption: "Awareness Post · AI Is Powerful — Ethical AI in Predictive Healthcare", tag: "Awareness Post", title: "Ethical AI in Predictive Healthcare" },
            { type: "image", src: "/assets/bce-disaster-recovery-workshop.png", caption: "Campaign Post · Data Loss: A Silent Threat — ResilienceX Workshop", tag: "Campaign Post", title: "DR Workshop: ResilienceX" },
            { type: "video", src: "/assets/bce-india-outreach-video.mp4", caption: "Brand Video · BizCloud Experts India Outreach", tag: "Video", title: "Brand Video: India Outreach" },
            { type: "video", src: "/assets/bce-local-business-growth-video.mp4", caption: "Facebook Video · Helping Local Businesses Grow", tag: "Video", title: "Facebook Video: Helping Local Businesses" },
            { type: "pdf", src: "/assets/bce-genai-business-impact.pdf", caption: "LinkedIn Carousel · 3 Practical Ways GenAI Can Boost Your Bottom Line", tag: "PDF Carousel", title: "GenAI Business Impact · 5 Slides", slides: "5-slide carousel" },
            { type: "image", src: "/assets/bce-aws-well-architected.png", caption: "Achievement Post · AWS Well-Architected Partner Program", tag: "Static Post", title: "AWS Well-Architected Partner Achievement" },
            { type: "youtube", src: "https://youtu.be/h_SlLp8Qd8g?si=hYCzkU7yNNulho-0", caption: "Podcast Edit", tag: "YouTube", title: "Podcast Edit" }
          ]
        },
        {
          id: "phoolchatti",
          name: "Phool Chatti Ashram",
          tag: "Wellness Retreat · Storytelling & Instagram Strategy · Project-Based",
          headline: "How a Reels-first storytelling strategy turned a Himalayan retreat into a globally recognised wellness destination.",
          challenge: "Phool Chatti Ashram offered a life-changing 7-day retreat experience — but had no social presence to tell that story to a global audience. The destination was sacred, the transformation was real, but the content was invisible.",
          approach: "Developed a Reels-first content strategy built on three pillars: authentic daily ritual footage, transformation testimonials, and the visual magic of the Himalayan setting. Created a consistent brand aesthetic that communicated serenity, trust, and spiritual depth. Paired organic content with geo-targeted distribution across 8 wellness markets — India, US, France, Netherlands, Italy, Spain, Germany, Israel — to convert engaged viewers into booking enquiries.",
          kpis: [
            { value: "8", label: "Markets Reached" },
            { value: "98+", label: "Booking Leads" },
            { value: "Global", label: "Audience Built" },
            { value: "High-Ticket", label: "Product Sold" }
          ],
          gallery: [
            { type: "video", src: "/assets/pc-retreat-campaign-ad-reel.mp4", caption: "Ad Reel · Phool Chatti Ashram — Himalayan Retreat Campaign", tag: "Ad Reel", title: "Retreat Campaign Ad Reel" },
            { type: "video", src: "/assets/pc-vertical-instagram-reel.mp4", caption: "Instagram Reel · Phool Chatti Ashram — Vertical Format 1080×1920", tag: "Instagram Reel", title: "Vertical Reel 1080×1920" },
            { type: "video", src: "/assets/pc-retreat-reel-sep-part1.mp4", caption: "Organic Reel · Phool Chatti Ashram — September Content", tag: "Organic Reel", title: "Retreat Reel Sep · Part 1" },
            { type: "video", src: "/assets/pc-retreat-reel-sep-part2.mp4", caption: "Organic Reel · Phool Chatti Ashram — September Content Part 2", tag: "Organic Reel", title: "Retreat Reel Sep · Part 2" },
            { type: "video", src: "/assets/pc-himalayan-reel-august.mp4", caption: "Organic Reel · Phool Chatti Ashram — August Himalayan Content", tag: "Organic Reel", title: "Himalayan Reel August" }
          ]
        },
        {
          id: "brunswick",
          name: "Brunswick Fur Food",
          tag: "Pet Nutrition · Brand Strategy · Consumer Psychology · Project-Based",
          headline: "Building emotional brand equity for a premium pet food brand through psychology-driven storytelling.",
          challenge: "Brunswick Fur Food needed to stand out in a crowded pet nutrition market where every brand led with rational product claims. Ingredient lists and certifications weren't converting — the brand needed an emotional narrative that resonated with pet owners on a deeper, human level.",
          approach: "Developed a brand voice centred on the human-animal bond, using consumer psychology frameworks to create content that triggers emotional resonance before introducing product logic. Built a \"Nourish the Love\" content narrative across Instagram and Facebook. Designed carousels combining educational storytelling with heartfelt visuals — trust first, product second.",
          kpis: [
            { value: "Brand", label: "Voice Defined" },
            { value: "3-Pillar", label: "Content System" },
            { value: "IG + FB", label: "Presence Built" },
            { value: "Emotion", label: "-First Strategy" }
          ]
        }
      ]
    },
    performancePath: {
      icon: "📊",
      title: "Performance & Growth Marketing",
      sub: "Paid campaigns, CPL optimisation, lead generation, multi-market funnel strategy",
      projects: [
        {
          id: "phoolchatti-paid",
          name: "Phool Chatti · Paid Campaign",
          tag: "Wellness · High-Ticket · International · Paid Campaigns",
          headline: "48% CPL reduction through a real-time demographic pivot across 8 international markets.",
          challenge: "The Phool Chatti paid campaign needed bookings from wellness audiences across India, US, France, Netherlands, Italy, Spain, Germany, and Israel. Strict CPL ceiling. Previous campaigns had no demographic-level decision-making — a significant efficiency leak.",
          approach: "Geo-segmented campaigns per market. Real-time age/gender data revealed a 2.5× CPL gap: male 25–34 at ₹44.62 vs female 25–34 at ₹111.62. Reallocated budget mid-flight to the high-performing cohort. Blended CPL fell from ₹87.52 to ₹45.61 — a 48% drop without pausing a single ad. Every decision was backed by live data, not intuition.",
          kpis: [
            { value: "98", label: "Leads / 7 Days" },
            { value: "₹45.61", label: "Final CPL" },
            { value: "8", label: "Markets Active" },
            { value: "48%", label: "CPL Reduction" }
          ],
          chart: {
            title: "CPL by Demographic Segment — The Pivot Insight",
            labels: ['Male 25–34', 'Male 35–44', 'Male 65+', 'Female 25–34', 'Female 35–44'],
            data: [44.62, 65.22, 70.97, 111.62, 135.98],
            leads: [56, 13, 10, 10, 5]
          }
        },
        {
          id: "iit-jee",
          name: "IIT JEE Coaching",
          tag: "Education · Lead Generation · Oct – Nov 2025",
          headline: "3.4× lead volume at a lower CPL — the A/B campaign architecture in action.",
          challenge: "An IIT JEE coaching institute needed high-intent leads within a strict ₹40 CPL ceiling. Previous campaigns: high CPC, low conversion. A creative-to-audience mismatch that needed more than new creative — it needed a different architecture.",
          approach: "Deployed Campaign 1 as a deliberate learning vehicle with 7-day click attribution to isolate high-intent signals. Applied every finding to a scaled variant. Result: Campaign 2 delivered 3.4× the leads at a lower CPL than an already on-target Campaign 1. Learning compounds.",
          kpis: [
            { value: "131", label: "Total Leads" },
            { value: "₹34.97", label: "Optimised CPL" },
            { value: "247K+", label: "Combined Reach" },
            { value: "3.4×", label: "Volume Scale" }
          ],
          chart: {
            title: "Campaign 1 vs Scaled Campaign — Leads & Reach",
            labels: ['Campaign 1 (Initial)', 'Campaign 2 (Scaled)'],
            leads: [30, 101],
            reach: [58, 190] // original 57950 & 189581 divided by 1000
          }
        }
      ]
    }
  },
  process: {
    title: "My Approach to Growth & Social Media",
    sub: "An integrated system where every piece of content has a purpose — and every campaign has a story.",
    steps: [
      {
        icon: "✍️",
        num: "01 / ATTRACT",
        title: "Content Attracts",
        desc: "Scroll-stopping content that reaches the right audience organically. Built on data — the right format, the right topic, the right timing. Carousels that educate. Reels that resonate. Posts that position."
      },
      {
        icon: "💡",
        num: "02 / ENGAGE",
        title: "Storytelling Engages",
        desc: "Content that builds emotional connection — not just impressions. Narratives that establish trust, communicate value, and make your brand the obvious choice when a buying decision is made."
      },
      {
        icon: "📈",
        num: "03 / CONVERT",
        title: "Funnels Convert",
        desc: "Paid campaigns and conversion strategies that turn engaged audiences into qualified leads and revenue. Every decision data-backed. Every rupee tracked. CPL optimised in real time, not after the fact."
      }
    ],
    insight: '"I help brands grow through <span>content-first strategies</span> backed by <span>performance marketing and data.</span>"'
  },
  metrics: {
    title: "An audience built to convert, not just to follow.",
    sub: "LinkedIn analytics · BizCloud Experts page · Apr 2025 – Apr 2026. All organic, zero paid follower campaigns.",
    cards: [
      { value: "6.91%", label: "Average post CTR", sub: "14× LinkedIn B2B benchmark (0.5%)" },
      { value: "844", label: "Senior-level followers", sub: "Built organically" },
      { value: "606", label: "Enterprise followers", sub: "10,001+ employee companies" },
      { value: "10.26%", label: "Avg engagement rate", sub: "Across 171 posts · 12 months" }
    ],
    charts: {
      aud: {
        title: "Follower Seniority Breakdown — Organic",
        labels: ['Senior', 'Entry', 'Director', 'Manager', 'CXO', 'VP'],
        data: [844, 590, 120, 127, 75, 75]
      },
      imp: {
        title: "Monthly Impressions Growth · 12 Months",
        labels: ["Apr '25", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan '26", "Feb", "Mar"],
        data: [925, 2749, 3362, 2962, 8184, 3699, 2963, 1818, 5200, 1614, 1655, 3237]
      }
    }
  },
  services: {
    title: "Services & How I Contribute",
    sub: "Whether you need a creative partner, a strategist, or a full-stack growth operator — here's where I plug in.",
    list: [
      {
        icon: "📱",
        title: "Social Media Manager",
        desc: "End-to-end social ownership — content strategy, creation, scheduling, and performance analysis across Instagram, LinkedIn, Facebook, and beyond. I don't just post. I build audiences that convert.",
        chips: ["Instagram", "LinkedIn", "Reels & Carousels", "Content Calendar", "Analytics & Reporting"]
      },
      {
        icon: "✍️",
        title: "Content Strategist",
        desc: "Building content systems that serve business goals — content pillars, editorial calendars, and formats designed to attract the right audience and move them through a funnel. Strategy first, creativity second.",
        chips: ["Content Pillars", "Brand Storytelling", "B2B Content", "SEO Writing", "Editorial Planning"]
      },
      {
        icon: "🚀",
        title: "Growth Marketing Strategist",
        desc: "Full-funnel thinking — from organic awareness to paid conversion. I connect content performance to business outcomes and build strategies that scale. Ideal for startups and SaaS companies ready to grow.",
        chips: ["GTM Strategy", "Funnel Architecture", "SaaS Growth", "MQL / SQL Scoring", "CRO"]
      },
      {
        icon: "📊",
        title: "Performance Marketing Manager",
        desc: "Meta Ads, Google Ads, and multi-market campaigns. Real-time CPL optimisation, audience segmentation, and data-backed budget decisions. Campaigns that learn fast and scale faster.",
        chips: ["Meta Ads Manager", "Google Ads", "CPL Optimisation", "A/B Testing", "Multi-Market Campaigns"]
      }
    ]
  },
  skills: {
    title: "Three pillars. One person.",
    sub: "For brands that need more than a content calendar — they need a complete, measurable growth system.",
    pillars: [
      {
        num: "01 / Creative Growth",
        title: "Content & Social Media",
        desc: "Creating scroll-stopping content, building brand voices, and growing audiences that are built to convert — not just accumulate.",
        chips: ["Instagram Reels", "LinkedIn Content", "Carousel Design", "Brand Storytelling", "Content Pillars", "DaVinci Resolve", "Canva (Advanced)"]
      },
      {
        num: "02 / Performance Marketing",
        title: "Paid Media & Funnels",
        desc: "Building systems where traffic, intent, and conversion are connected by data — not gut feel. Every campaign a learning opportunity.",
        chips: ["Meta Ads Manager", "Google Ads", "CPL Optimisation", "A/B Testing", "Audience Segmentation", "MQL / SQL Scoring", "CRO", "Budget Scaling"]
      },
      {
        num: "03 / Analytics & Tracking",
        title: "Data & Performance Insights",
        desc: "Tracking content performance to optimise engagement and conversions. The analytical layer that turns creative work into measurable business results.",
        chips: ["GA4 Analytics", "GTM", "Attribution Modelling", "AWS Certified", "Amazon QuickSight", "CRM Automation", "WordPress", "Server-Side Tracking"]
      }
    ]
  },
  contact: {
    title: "Your brand has a story.",
    titleHighlight: "Let's make sure it converts.",
    desc: "If you're a founder, CMO, or marketing lead who needs someone that can write great content AND track whether it's working — this is the conversation worth having.",
    experience: [
      { icon: "📈", role: "Growth Marketing Manager", company: "BizCloud Experts · AWS Partner · Mar 2023 – Present" },
      { icon: "🚀", role: "Co-Founder & Lead Strategist", company: "Neesh Digital Solutions · Jan 2023 – Present" },
      { icon: "🌿", role: "Digital Growth Strategist", company: "Phool Chatti Ashram · International Content & Paid Campaign" },
      { icon: "🐾", role: "Brand & Content Strategist", company: "Brunswick Fur Food · Brand Positioning & Social Media" },
      { icon: "✉️", role: "Email & Digital Marketing Specialist", company: "Klera Solutions · Aug 2021 – Dec 2022" }
    ]
  }
};
