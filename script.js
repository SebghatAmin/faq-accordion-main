const back = document.querySelector(".back");
const body = document.getElementsByTagName("body");
back.addEventListener("click", changeColor);

function changeColor() {
  document.body.classList.add("changeback");
}
