const projects = [
  // Development
  {
    image: "assets/images/projects/apex/desktop-1.webp",
    mobile: "assets/images/projects/apex/mobile-1.png",
    title: "Apex Home Cleaning",
    category: "development",
    link: {
      demo: "https://drive.google.com/drive/folders/1veUNi_15-Dk4YzHJiBd1vdJbfRHMwtzt?usp=sharing",
    },
    description:
      "A responsive service-based website concept designed for a residential cleaning company. The project focuses on clear service presentation, strong calls-to-action, responsive layouts, and a clean, professional visual identity.",
    techStack: [
      { name: "WordPress", icon: "assets/icons/wordpress.svg", local: "true" },
      {
        name: "Elementor",
        icon: "assets/icons/elementor.svg",
        local: "true",
      },
    ],
  },
  {
    image: "assets/images/projects/idp/1.webp",
    mobile: "assets/images/projects/idp/mobile-1.png",
    title: "ISAAC Internal Developer Platform",
    category: "development",
    link: {
      demo: "https://drive.google.com/drive/folders/1veUNi_15-Dk4YzHJiBd1vdJbfRHMwtzt?usp=sharing",
    },
    description:
      "Internal Developer Platform designed to streamline development workflows by providing a centralized interface for managing internal tools and services.",
    techStack: [
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "React", icon: "react/react-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  {
    image: "assets/images/projects/ecosentry/1.webp",
    title: "EcoSentry",
    category: "development",
    link: {
      code: "https://github.com/benzbarquilla/capstone-project",
      demo: "https://drive.google.com/file/d/1Ktp26auyY5KzcxQIN5qC6KFxJGudS456/view?usp=sharing",
    },
    description:
      "IoT-based environmental monitoring system that detects chainsaw sounds using machine learning and transmits alerts through LoRa to a web dashboard.",
    techStack: [
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Express", icon: "express/express-original" },
      { name: "React", icon: "react/react-original" },
      { name: "Nodejs", icon: "nodejs/nodejs-original" },
      { name: "Python", icon: "python/python-original" },
      { name: "Arduino", icon: "arduino/arduino-original" },
    ],
  },
  {
    image: "assets/images/projects/gebms/1.webp",
    title: "Gym Equipment Borrowing & Management",
    category: "development",
    link: { code: "https://github.com/benzbarquilla/gebms-react" },
    description:
      " Web application for managing equipment inventory, streamlining borrowing and returns. ",
    techStack: [
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Express", icon: "express/express-original" },
      { name: "React", icon: "react/react-original" },
      { name: "Nodejs", icon: "nodejs/nodejs-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  {
    image: "assets/images/projects/sis/1.webp",
    title: "Student Information System",
    category: "development",
    link: { code: "https://github.com/benzbarquilla/student-info-system" },
    description:
      "Simple CRUD Web application to manange and store student data",
    techStack: [{ name: "Laravel", icon: "laravel/laravel-original" }],
  },
  {
    image: "assets/images/projects/applandingpage/1.webp",
    mobile: "assets/images/projects/applandingpage/mobile.png",
    title: "Gymmigo App Landing Page",
    category: "development",
    link: { view: "https://benzbarquilla.github.io/gymmigo-landingpage/" },
    description: "App version of Gym Equipment Borrowing & Management System",
    techStack: [
      { name: "HTML", icon: "html5/html5-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  // Productivity
  {
    image: "assets/images/projects/productivity/clean data.png",
    before: "assets/images/projects/productivity/raw data.png",
    title: "E-commerce Sales Data Cleaning & Reporting",
    label: "Practice Project",
    category: "productivity",
    description:
      "Clean and prepare an e-commerce sales dataset for accurate reporting and management use.",
    techStack: [
      {
        name: "Microsoft Excel",
        icon: "assets/icons/microsoft-excel.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/productivity/dashboard.webp",
    before: "assets/images/projects/productivity/before.png",
    title: "Interactive Business Dashboard",
    label: "Academic Project",
    category: "productivity",
    description: "E-Commerce Business data cleaning and visualization",
    techStack: [
      {
        name: "Microsoft Excel",
        icon: "assets/icons/microsoft-excel.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/productivity/email-after.png",
    before: "assets/images/projects/productivity/email-before.png",
    title: "Email Management/Zero Inbox",
    label: "Practice Project",
    category: "productivity",
    description:
      "The Challenge: An overflowing inbox buried in promotional noise, clutter, and unorganized threads. The Solution: Cleared the backlog by deleting promotional and unnecessary emails, then built a clean structural framework by creating custom labels to organize remaining messages.The Result: Transformed a chaotic inbox into a clean, categorized Workspace Zero, making future emails easy to find and manage instantly",
    techStack: [
      {
        name: "Microsoft Excel",
        icon: "assets/icons/microsoft-excel.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/productivity/digital-marketing-ppt.webp",
    title: "Presentation",
    category: "productivity",
    description: "Simple presentation",
    link: { view: "https://canva.link/xjbx5gkqwowtofa" },
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },

  {
    image: "assets/images/projects/productivity/pestle-analysis-ppt.webp",
    title: "Presentation",
    category: "productivity",
    description: "Simple presentation",
    link: { view: "https://canva.link/g6imnf56azm05b9" },
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },
  // Media
  {
    image: "assets/images/projects/digital/8.webp",
    title: "Short-Form Edit: Product Teaser",
    category: "digital",
    type: "video",
    link: {
      view: "https://drive.google.com/file/d/1FE84ozsIgz8qdoMRmRWLzaV8hIiJmsqs/view?usp=sharing",
    },
    description:
      "Minimum Viable Product (MVP) used by our capstone startup to explain an idea, or pitch a product before building it fully.",
    techStack: [
      {
        name: "Capcut",
        icon: "assets/icons/capcut.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/digital/2.webp",
    title: "Short-Form Edit",
    category: "digital",
    type: "video",
    tall: true,
    link: {
      view: "https://drive.google.com/file/d/1MzzSAZ1xv0ATZdYUmuj7DEP_bF5B52Nf/view?usp=sharing",
    },
    description: "I turned a long video into a fully edited short.",
    techStack: [
      {
        name: "Capcut",
        icon: "assets/icons/capcut.svg",
        local: true,
      },
    ],
  },

  {
    image: "assets/images/projects/digital/1.webp",
    title: "Cover Page",
    category: "digital",
    description: "Simple travel book cover page",
    link: { view: "https://canva.link/40i97iy7xbmzoi3" },
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },

  {
    image: "assets/images/projects/digital/infographic-1.png",
    title: "Infographic",
    category: "digital",
    tall: true,
    link: { view: "https://canva.link/68iip51dtum7jm8" },
    description: "Simple infographic",
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/digital/6.webp",
    title: "Cover Page",
    category: "digital",
    link: { view: "https://canva.link/mtoqsf3zgkvb2z3" },
    description: "Simple cover/hero page",
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/digital/poster-1.png",
    title: "Poster",
    category: "digital",
    description: "Digital marketing social media posts",
    link: { view: "https://canva.link/2e73mbovlubggu5" },
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },

  {
    image: "assets/images/projects/digital/brochure.png",
    title: "Brochure",
    category: "digital",
    description: "Simple promotional brochure",
    link: { view: "https://canva.link/6x8wlre64b61rvd" },
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },

  {
    image: "assets/images/projects/digital/pamphlet-1.png",
    title: "Pamphlet",
    category: "digital",
    description: "Simple educational pamphlet",
    link: { view: "https://canva.link/q06ualbxzvk92lw" },
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },
];
