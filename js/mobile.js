const toggleBtn = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu-links");
toggleBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
