const projects = [
  // Development
  {
    image: "assets/images/projects/idp/1.png",
    title: "ISAAC Internal Developer Platform",
    category: "development",
    description:
      "Internal Developer Platform designed to streamline development workflows by providing a centralized interface for managing internal tools and services.",
    techStack: [
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "React", icon: "react/react-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  {
    image: "assets/images/projects/ecosentry/1.png",
    title: "EcoSentry",
    category: "development",
    link: {
      view: "https://github.com/benzbarquilla/capstone-project",
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
    image: "assets/images/projects/gebms/1.png",
    title: "Gym Equipment Borrowing & Management",
    category: "development",
    link: { view: "https://github.com/benzbarquilla/gebms-react" },
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
    image: "assets/images/projects/sis/1.png",
    title: "Student Information System",
    category: "development",
    link: { view: "https://github.com/benzbarquilla/student-info-system" },
    description:
      "Simple CRUD Web application to manange and store student data",
    techStack: [{ name: "Laravel", icon: "laravel/laravel-original" }],
  },
  {
    image: "assets/images/projects/applandingpage/1.png",
    title: "Gymmigo App Landing Page",
    category: "development",
    link: { live: "https://benzbarquilla.github.io/gymmigo-landing-page/" },
    description:
      "Simple App version of Gym Equipment Borrowing & Management System",
    techStack: [
      { name: "HTML", icon: "html5/html5-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  // Productivity
  {
    image: "assets/images/projects/productivity/dashboard.png",
    title: "Interactive Business Dashboard",
    category: "productivity",
    description:
      "E-Commerce Business Dashboard data preprocessing and visualization",
    techStack: [
      {
        name: "Microsoft Excel",
        icon: "assets/icons/microsoft-excel.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/productivity/digital-marketing-ppt.png",
    title: "Presentation",
    category: "productivity",
    description: "Simple presentation layout",
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
    image: "assets/images/projects/productivity/pestle-analysis-ppt.png",
    title: "Presentation",
    category: "productivity",
    description: "Simple presentation layout",
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
    image: "assets/images/projects/digital/8.png",
    title: "Minimim Viable Product",
    category: "digital",
    link: {
      view: "https://drive.google.com/file/d/1FE84ozsIgz8qdoMRmRWLzaV8hIiJmsqs/view?usp=sharing",
    },
    description:
      "A short simple video used by our capstone startup to explain an idea, or pitch a product before building it fully.",
    techStack: [
      {
        name: "Capcut",
        icon: "assets/icons/capcut.svg",
        local: true,
      },
    ],
  },
  {
    image: "assets/images/projects/digital/1.png",
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
    image: "assets/images/projects/digital/6.png",
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
    image: "assets/images/projects/digital/5.png",
    title: "Infographic",
    category: "digital",
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
    image: "assets/images/projects/digital/7.png",
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
    image: "assets/images/projects/digital/9.png",
    title: "Research Poster",
    category: "digital",
    description: "Rat Repellant Capstone Poster",
    techStack: [
      {
        name: "Canva",
        icon: "figma/figma-original",
      },
    ],
  },
  {
    image: "assets/images/projects/digital/3.png",
    title: "Brochure",
    category: "digital",
    description: "Simple promotional brochure",
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },

  {
    image: "assets/images/projects/digital/4.png",
    title: "Pamphlet",
    category: "digital",
    description: "Simple educational pamphlet",
    techStack: [
      {
        name: "Canva",
        icon: "assets/icons/canva.svg",
        local: true,
      },
    ],
  },
];
