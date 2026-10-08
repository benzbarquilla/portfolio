// Check icon if local or online
function getIcon(tech) {
  return tech.local
    ? tech.icon
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${tech.icon}.svg`;
}
// Returns every available link for a project, in display order
const icons = {
  external: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
};
function getProjectLinks(link = {}) {
  const linkConfig = [
    { key: "view", label: "Live", icon: icons.external },
    { key: "code", label: "Code", icon: icons.code },
    { key: "demo", label: "Demo", icon: icons.play },
  ];

  return linkConfig
    .filter((item) => link[item.key])
    .map((item) => ({
      url: link[item.key],
      label: item.label,
      icon: item.icon,
    }));
}
// Renders Development Card
function renderDevelopmentCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const linksHTML = getProjectLinks(project.link)
    .map(
      (link) => `
      <a href="${link.url}" target="_blank" rel="noopener" class="project-link">
        ${link.label}${link.icon}
      </a>`,
    )
    .join("");

  const techHTML = project.techStack
    .map(
      (tech) =>
        `<img src="${getIcon(tech)}" alt="${tech.name}" title="${tech.name}" class="tech-icon" />`,
    )
    .join("");

  // the phone only renders when the project has a mobile screenshot
  const phoneHTML = project.mobile
    ? `<div class="phone">
         <img src="${project.mobile}" alt="Mobile view of ${project.title}" loading="lazy" />
       </div>`
    : "";

  card.innerHTML = `
    <div class="mockup">
      <div class="browser">
        <img src="${project.image}" alt="Desktop view of ${project.title}" loading="lazy" />
      </div>
      ${phoneHTML}
    </div>
    <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-footer">
        <div class="project-tech">${techHTML}</div>
        <div class="project-links">${linksHTML}</div>
      </div>
    </div>
  `;
  return card;
}
// Renders Productivity Card
function renderProductivityCard(project) {
  const card = document.createElement("article");
  card.className = "doc-card";

  const labelHTML = project.label
    ? `<span class="project-label">${project.label}</span>`
    : "";

  const linksHTML = getProjectLinks(project.link)
    .map(
      (link) => `
      <a href="${link.url}" target="_blank" rel="noopener" class="project-link">
        ${link.label}${link.icon}
      </a>`,
    )
    .join("");

  const techHTML = project.techStack
    .map(
      (tech) =>
        `<img src="${getIcon(tech)}" alt="${tech.name}" title="${tech.name}" class="tech-icon" />`,
    )
    .join("");

  const mediaHTML = project.before
    ? `<div class="ba" style="--pos: 50%">
         <img class="ba-img" src="${project.image}" alt="After: ${project.title}" loading="lazy" />
         <img class="ba-img ba-before" src="${project.before}" alt="Before: ${project.title}" loading="lazy" />
         <span class="ba-label ba-label-before">Before</span>
         <span class="ba-label ba-label-after">After</span>
         <div class="ba-handle" aria-hidden="true"></div>
         <input type="range" min="0" max="100" value="50" class="ba-range"
                aria-label="Compare before and after" />
       </div>`
    : `<img src="${project.image}" alt="Preview of ${project.title}" loading="lazy" />`;

  card.innerHTML = `
  <div class="doc-preview">
    ${mediaHTML}
  </div>
  <div class="project-info">
    <div class="project-head">
      <h3 class="project-title">${project.title}</h3>
      ${labelHTML}
    </div>
    <p class="project-desc">${project.description}</p>
    <div class="project-footer">
      <div class="project-tech">${techHTML}</div>
      <div class="project-links">${linksHTML}</div>
    </div>
  </div>
`;

  const range = card.querySelector(".ba-range");
  const ba = card.querySelector(".ba");
  if (range && ba) {
    range.addEventListener("input", () => {
      ba.style.setProperty("--pos", `${range.value}%`);
    });
  }
  return card;
}

const PLAY_ICON = `<svg class="gallery-play" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;

function renderContentCard(project) {
  // the whole tile links to the first available link (view, code or demo)
  const href = getProjectLinks(project.link)[0]?.url;

  const tile = document.createElement(href ? "a" : "div");
  tile.className = "gallery-tile" + (project.tall ? " tall" : "");

  if (href) {
    tile.href = href;
    tile.target = "_blank";
    tile.rel = "noopener";
  }

  const toolsHTML = (project.techStack || [])
    .map(
      (tech) =>
        `<img src="${getIcon(tech)}" alt="${tech.name}" title="${tech.name}" class="gallery-tool" />`,
    )
    .join("");

  const descHTML = project.description
    ? `<p class="gallery-desc">${project.description}</p>`
    : "";

  tile.innerHTML = `
    <img class="gallery-img" src="${project.image}" alt="${project.title}" loading="lazy" />
    ${project.type === "video" ? PLAY_ICON : ""}
    <div class="gallery-caption">
      <div class="gallery-head">
        <span class="gallery-title">${project.title}</span>
      </div>
      ${descHTML}
      <div class="gallery-foot">
        <div class="gallery-tools">${toolsHTML}</div>
        ${href ? `<span class="gallery-cta">View ↗</span>` : ""}
      </div>
    </div>
  `;

  return tile;
}
// Renders card per category
const cardRenderers = {
  development: renderDevelopmentCard,
  productivity: renderProductivityCard,
  digital: renderContentCard,
};
// Checker
function renderProjectCard(project) {
  const render = cardRenderers[project.category];
  return render(project);
}
// Render cards
function renderProjects(containerId, projectList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  projectList.forEach((project) => {
    container.appendChild(renderProjectCard(project));
  });
}
