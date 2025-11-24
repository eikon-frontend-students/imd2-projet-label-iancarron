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
