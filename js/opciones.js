var seccionesPagina = new fullpage("#fullpage", {
  autoScrolling: true,
  fitToSection: false,
  fitToSectionDelay: 300,
  easing: "easeInOutCubic",
  scrollingSpeed: 700,
  css3: true,
  easingcss3: "ease-out",
  loopBottom: false,

  navigation: true,
  menu: "#menu",
  anchors: ["Home", "Product", "Video", "Contact"],
  navigationTooltips: ["Home", "Product", "Video", "Contact"],
  showActiveTooltip: false,

  sectionsColor: ["#000", "#000", "#000", "#000"],
  verticalCentered: true,

  controlArrows: true,
  slidesNavigation: false,

  afterLoad: function (origin, destination) {
    if (destination.anchor == "contacto") {
      document.querySelector(".footer").querySelector("h2").style.opacity = 1;
    }
  },
});
