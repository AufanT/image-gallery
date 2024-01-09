const container = document.querySelector(".container");
const preview = document.querySelector(".preview");
let active = [];

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    preview.src = e.target.src;

    if (active.length != 0) active.pop().classList.remove("active");
    active.push(e.target);
    e.target.classList.add("active");
  }
});
