const navTooge = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navTooge.addEventListener("click", function () {
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
  links.classList.toggle("show-links");
});
