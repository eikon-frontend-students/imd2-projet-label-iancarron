// ------------------------------
// SCROLL AUTOMATIQUE
// ------------------------------
const scrollIcon = document.querySelector(".scroll");
scrollIcon.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

// ------------------------------
// ICONES DE SCROLL (animation haut/bas)
// ------------------------------
const scrollIcons = document.querySelectorAll(".scroll i");
scrollIcons.forEach((icon, index) => {
  if (index === 1) icon.style.marginTop = "-25px"; // rapprochement deuxième flèche
});

const nav = document.querySelector(".typo-composition nav");
const logo = document.querySelector(".logo");

function updateNavSticky() {
  const logoBottom = logo.getBoundingClientRect().bottom + window.scrollY;

  if (window.scrollY >= logoBottom) {
    nav.classList.add("sticky-active");
  } else {
    nav.classList.remove("sticky-active");
  }
}

window.addEventListener("scroll", updateNavSticky);
window.addEventListener("resize", updateNavSticky);
