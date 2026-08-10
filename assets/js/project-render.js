// Check icon if local or online
function getIcon(tech) {
  return tech.local
    ? tech.icon
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${tech.icon}.svg`;
}
// Returns every available link for a project, in display order
function getProjectLinks(link = {}) {
  const linkConfig = [
    { key: "view", label: "View" },
    { key: "live", label: "Live View" },
    { key: "demo", label: "Watch Demo" },
  ];

  return linkConfig
    .filter((item) => link[item.key])
    .map((item) => ({ url: link[item.key], label: item.label }));
}
// Creates Card
function renderProjectCard(project) {
  const card = document.createElement("div");
  card.className = "card";

  const links = getProjectLinks(project.link);
  const linksHTML = links
    .map(
      (link) => `
      <a href="${link.url}" target="_blank" rel="noopener" class="card__link-btn">
        ${link.label}
      </a>`,
    )
    .join("");

  card.innerHTML = `
    <div class="card__shine"></div>
    <div class="card__glow"></div>
    <div class="card__content">
      <img src="${project.image}" alt="Screenshot of ${project.title}" class="card__image" />
      <div class="card__text">
        <p class="card__title">${project.title}</p>
        <p class="card__description">${project.description}</p>
      </div>
      <div class="card__footer">
        ${project.techStack
          .map(
            (tech) =>
              `<img src="${getIcon(tech)}" alt="${tech.name}" title="${tech.name}" class="tech-icon" />`,
          )
          .join("")}
          <div class="card__links">${linksHTML}</div>
      </div>
    </div>
  `;
  return card;
}
// Render
function renderProjects(containerId, projectList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  projectList.forEach((project) => {
    container.appendChild(renderProjectCard(project));
  });
}
