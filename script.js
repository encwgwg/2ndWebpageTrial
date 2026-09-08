(function () {
  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll("[data-font]"));
  const scales = { normal: "1", large: "1.14", xlarge: "1.28" };
  const saved = localStorage.getItem("shitangwan-font-size");

  function setFontSize(size) {
    const next = scales[size] ? size : "normal";
    root.style.setProperty("--reading-scale", scales[next]);
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.font === next));
    });
    localStorage.setItem("shitangwan-font-size", next);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setFontSize(button.dataset.font));
  });

  setFontSize(saved || "normal");
})();
