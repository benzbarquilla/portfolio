const techs = [
  // dev
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original" },
  { name: "React", icon: "react/react-original" },
  { name: "Visual Studio Code", icon: "vscode/vscode-original" },
  { name: "Git", icon: "git/git-original" },
  { name: "Github", icon: "github/github-original" },
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  { name: "Figma", icon: "figma/figma-original" },
  // Productivity
  { name: "Microsoft 365", icon: "assets/icons/microsoft.svg", local: true },
  {
    name: "Google Workspace",
    icon: "assets/icons/google-workspace.svg",
    local: true,
  },

  // Media
  { name: "Capcut", icon: "assets/icons/capcut.svg", local: true },
  { name: "Canva", icon: "assets/icons/canva.svg", local: true },
  // AI
  { name: "ChatGPT", icon: "assets/icons/openai.svg", local: true },
  { name: "Gemini", icon: "assets/icons/google-gemini.svg", local: true },
  { name: "Claude", icon: "assets/icons/claude.svg", local: true },
];

const techPills = document.getElementById("tech-pills");

function renderPills() {
  techs.forEach((tech) => {
    const pill = document.createElement("span");
    pill.className = "pill";

    const iconSrc = tech.local
      ? tech.icon
      : `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${tech.icon}.svg`;
    pill.innerHTML = `<img src="${iconSrc}" alt="${tech.name}" title="${tech.name}" class="pill-icon" />
      ${tech.name}`;
    techPills.appendChild(pill);
  });
}

renderPills();
renderPills();
