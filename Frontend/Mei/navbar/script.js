const navToggleButton = document.querySelector("button.nav-toggle");
const navigationOnSidebar = document.querySelector("div.nav");
const backgroundSidebar = document.querySelector(".background-sidebar");

window.onclick = (event) => {
  if (event.target === backgroundSidebar) {
    navigationOnSidebar.classList.remove("slide");
    backgroundSidebar.style.display = "none";
    navToggleButton.classList.remove("active");
  }
};

navToggleButton.addEventListener("click", () => {
  navigationOnSidebar.classList.toggle("slide");
  if (navigationOnSidebar.classList.contains("slide"))
    backgroundSidebar.style.display = "block";
  else backgroundSidebar.style.display = "none";

  navToggleButton.classList.toggle("active");
});

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    navigationOnSidebar.classList.remove("slide");
    backgroundSidebar.style.display = "none";
    navToggleButton.classList.remove("active");
  }
}
