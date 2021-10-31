console.log("hello");
const hamburgermenu = document.querySelector(".hamburgerIcon");

hamburgermenu.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("displayNav");
}
