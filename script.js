const burger = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".off_screen__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
