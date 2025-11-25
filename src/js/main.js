// ------------------------------
// POSTS INSTAGRAM
// ------------------------------
const posts = [
  {
    img: "../img/insta/1.png",
    link: "https://www.instagram.com/p/DQ14NzqjagR/",
  },
  {
    img: "../img/insta/2.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/3.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/4.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/5.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/6.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/7.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/8.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/9.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/10.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/11.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
  {
    img: "../img/insta/12.png",
    link: "https://www.instagram.com/p/DPyoWoiDEBT/",
  },
];

const container = document.querySelector(".insta-grid");
posts.forEach((post) => {
  container.innerHTML += `
    <a href="${post.link}" class="insta-post" target="_blank">
      <img src="${post.img}" alt="Instagram post">
      <i class="fa-brands fa-instagram"></i>
    </a>
  `;
});

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
