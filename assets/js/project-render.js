// Check icon if local or online
function getIcon(tech) {
  return tech.local
    ? tech.icon
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${tech.icon}.svg`;
}
// Creates Card
function renderProjectCard(project) {
  const card = document.createElement("div");
  card.className = "card";
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
      </div>
    </div>
  `;
  return card;
}

function renderProjects(containerId, projectList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  projectList.forEach((project) => {
    container.appendChild(renderProjectCard(project));
  });
}
