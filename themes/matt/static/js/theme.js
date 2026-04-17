// matt theme — dark/light toggle
(function () {
  const STORAGE_KEY = "matt-theme";

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // apply immediately to avoid flash
  apply(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const current =
        document.documentElement.getAttribute("data-theme") || "light";
      apply(current === "dark" ? "light" : "dark");
    });
  });
})();
