import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Nike RTFKT Dunks',
    client: 'Concept / RTFKT',
    thumbnailImg: 'https://img.youtube.com/vi/YrP0aW7jse4/maxresdefault.jpg',
    heroImg: 'https://img.youtube.com/vi/YrP0aW7jse4/maxresdefault.jpg',
    aspectRatio: 'landscape',
    tools: ['Suno', 'Midjourney', 'KlingAI', 'Procreate', 'CapCut'],
    promptHook: "Suno AI + Midjourney + Frame-by-Frame Animation Sync",
    strategyDesc: "Create street-style brand awareness content for RTFKT Dunks release by merging custom AI-generated music with choreographed dance sequences and product-integrated visuals.",
    videoUrl: "https://www.youtube.com/embed/u2HpG6c8tAQ?autoplay=1&mute=1&rel=0", // Switched to embeddable official RTFKT trailer
    cotSteps: [
      { stepName: "The Input", description: "Initial brief—blend Dunks product showcase with energetic dance content and custom original music. Started with loose lyrical concepts and rough dance storyboards." },
      { stepName: "The Process", description: "Created the Storyboard with Midjourney, matching actual Dunks colorways and branding. Full music video production integrating actual Dunks product placements within animated sequences." },
      { stepName: "The Craft", description: "Hand-edited Midjourney images to include actual products uisng Procreate. Frame-by-frame animation synced to Suno-generated music timing using CapCut." }
    ]
  },
  {
    id: 'p2',
    title: 'Persona Music Video',
    client: 'Contest Entry',
    thumbnailImg: '/images/persona-thumbnail.jpg',
    heroImg: '/images/persona-thumbnail.jpg',
    aspectRatio: 'landscape',
    tools: ['ChatGPT', 'Suno', 'CapCut'],
    promptHook: "ChatGPT Lyrics + Suno Music + Anime Sync Editing",
    strategyDesc: "Capture nostalgic 90s anime brand essence by creating an anime-themed title track with original lyrics and seamlessly synced video clips, targeting contest requirements for emotional storytelling.",
    videoUrl: "https://player.vimeo.com/video/1140228198?autoplay=1&muted=1&title=0&byline=0&portrait=0", // Updated Vimeo Embed
    cotSteps: [
      { stepName: "The Input", description: "Brief called for an anime-style theme song. Generated initial lyrical concepts using ChatGPT, aiming for that classic anime opening feel—emotional buildup with Japanese lyrics." },
      { stepName: "The Process", description: " Refined lyrics to include specific references to the brand (Timefall Valley)." },
      { stepName: "The Craft", description: "Sourced official Persona clips and precisely synced them to match the timing of the OST using CapCut." }
    ]
  },
  {
    id: 'p3',
    title: 'DJ Set Loops',
    client: 'Ser En',
    thumbnailImg: '/images/djset-thumbnail.jpg',
    heroImg: '/images/djset-thumbnail.jpg',
    aspectRatio: 'landscape',
    tools: ['Midjourney', 'Blender', 'CapCut'],
    promptHook: "Blender 3D Overlay + Midjourney Keyframes + Seamless Loop Assembly",
    strategyDesc: "Develop on-brand visual content for live DJ set with custom looping animation that sustains visual interest throughout extended performance without jarring cuts or transitions.",
    videoUrl: "https://player.vimeo.com/video/1140228553?autoplay=1&muted=1&title=0&byline=0&portrait=0",
    cotSteps: [
      { stepName: "The Input", description: "Client (Ser En) needed visual backdrop for DJ set. Created initial storyboard with key visual moments aligned to DJ set energy progression and key points in the mix." },
      { stepName: "The Process", description: "Utilised Blender to create a 3D coin drop sequence, which was layered over the animation. Created repeating visual segments that loop seamlessly while maintaining hypnotic, entrancing quality." },
      { stepName: "The Craft", description: "Generated key frame sequences using Midjourney, referencing meme IPs required by client. Built custom 3D animation and overlay in Blender." }
    ]
  },
  {
    id: 'p4',
    title: 'That Chocolate Cake',
    client: 'E-Commerce Store',
    thumbnailImg: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    heroImg: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1600',
    aspectRatio: 'portrait',
    tools: ['Bolt', 'Windsurf', 'Netlify', 'Supabase', 'Resend', 'Git'],
    promptHook: "Custom No-Code Stack (Bolt + Supabase) → $0 Recurring Fees",
    strategyDesc: "Transition small home-based bakery business away from expensive recurring SaaS costs ($200/year Shopify/Wix) toward fully customized, subscription-free e-commerce platform with professional UX and operational efficiency.",
    videoUrl: "https://www.thatchocolatecake.com", // Website embed
    externalLink: "https://www.thatchocolatecake.com",
    cotSteps: [
      { stepName: "The Input", description: "Business pain point—high subscription fees for limited customization. Requirements gathering revealed needs: product catalog display, secure checkout, admin inventory management, customer notifications, backend order management." },
      { stepName: "The Process", description: "Initially vibe coded the site with Bolt. Then switched to Windsurf and Git integration for long-term cost-free deployment." },
      { stepName: "The Craft", description: "Built responsive front-end, set up Supabase backend, configured Resend for transactional emails, deployed on Netlify, and integrated UAT-Production environment for client." }
    ]
  },
  {
    id: 'p5',
    title: 'Ciel Labs Music',
    client: 'Ciel Labs',
    thumbnailImg: '/images/ciellabs-thumbnail.jpg',
    heroImg: '/images/ciellabs-thumbnail.jpg',
    aspectRatio: 'landscape',
    tools: ['Suno', 'Wan', 'Seedance', 'Midjourney', 'KlingAI'],
    promptHook: "Full AI Pipeline: Suno → Visuals → Multi-Channel Distribution",
    strategyDesc: "Build engaged listener community by establishing consistent presence across Spotify, YouTube, Instagram, and TikTok. Demonstrate complete end-to-end AI music production—from lyric generation through music composition to music video creation.",
    videoUrl: "https://open.spotify.com/embed/artist/6UkIBgJwXqOi9BJ3l56Hyz?utm_source=generator&theme=0", // Spotify Artist Embed
    cotSteps: [
      { stepName: "The Input", description: "Vision—showcase what's possible with AI music production while building authentic brand around original compositions. Started with genre exploration and conceptual direction using research and ideation." },
      { stepName: "The Process", description: "Realized single-track releases wouldn't sustain momentum. Developed integrated multi-channel strategy: Spotify as anchor distribution, YouTube for long-form artist/production storytelling, TikTok/Instagram for clip-based virality." },
      { stepName: "The Craft", description: "Generated songs and full albums using Suno. Created complementary visual assets using Gen AI tools. Results are a Work in Progress." }
    ]
  },
  {
    id: 'p6',
    title: 'Lost in the Concrete Jungle',
    client: 'Music Video',
    thumbnailImg: 'https://img.youtube.com/vi/gtn2fisBo64/maxresdefault.jpg',
    heroImg: 'https://img.youtube.com/vi/gtn2fisBo64/maxresdefault.jpg',
    aspectRatio: 'landscape',
    tools: ['ChatGPT', 'Suno', 'Wan 2.2', 'CapCut'],
    promptHook: "Suno Bilingual + Wan 2.2 Video Model + Anime Aesthetic",
    strategyDesc: "Test Wan 2.2's video generation capabilities by creating an anime-style music video with Chinese-English bilingual lyrics that explores urban isolation themes.",
    videoUrl: "https://www.youtube.com/embed/gtn2fisBo64?autoplay=1&mute=1&rel=0",
    cotSteps: [
      { stepName: "The Input", description: "Generated bilingual Chinese-English lyrics, aiming for cultural authenticity and emotional resonance across both language segments." },
      { stepName: "The Process", description: "Wanted to push Wan 2.2's capabilities beyond basic prompts. Developed specific anime scene references and character archetypes to guide video generation." },
      { stepName: "The Craft", description: "Generated music track on Suno. Used Wan 2.2 to create anime-style video sequences synced to lyrical transitions. Fine-tuned scene pacing and transitions in CapCut." }
    ]
  },
  {
    id: 'p7',
    title: 'Time Labyrinth',
    client: 'Music Video',
    thumbnailImg: 'https://img.youtube.com/vi/MyNH6NZw-AI/maxresdefault.jpg',
    heroImg: 'https://img.youtube.com/vi/MyNH6NZw-AI/maxresdefault.jpg',
    aspectRatio: 'landscape',
    tools: ['Claude', 'Suno', 'Nanobanana', 'Wan', 'Seedance', 'CapCut'],
    promptHook: "Claude + Suno + Seedance",
    strategyDesc: "Create surreal visual journey through interconnected worlds and pushing the limits on Seedance's new video generation model.",
    videoUrl: "https://www.youtube.com/embed/MyNH6NZw-AI?autoplay=1&mute=1&rel=0",
    cotSteps: [
      { stepName: "The Input", description: "Brief—explore time/dimension-bending concept with bilingual Japanese-English lyrics. Used Claude for lyrical ideation and storyboarding of initial visual concept with world-hopping sequences." },
      { stepName: "The Process", description: "Created images of multiple angles using Google's latest Nanobanana model. Used Seedance's video generation to transport protagonist through different worlds." },
      { stepName: "The Craft", description: "Putting together Japanese-English track generated on Suno with visuals created using Nanobanana for key frames, then animated with Seedance." }
    ]
  }
];