// ===== DARK MODE TOGGLE =====
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
`;

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
`;

// Apply a theme: update the attribute, swap icon, save choice
function applyTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  themeToggleBtn.innerHTML = theme === "dark" ? sunIcon : moonIcon;
  localStorage.setItem("theme", theme);
}

// On page load: use saved preference, or fall back to system preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

// On click: flip the theme
themeToggleBtn.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
