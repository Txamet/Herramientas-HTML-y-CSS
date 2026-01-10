let topButton;

const scrollFunction = () => {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    topButton.style.display = "block";

  } else {
    topButton.style.display = "none";
  }
}

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("DOMContentLoaded", () => {
  topButton = document.querySelector(".top-button");
  window.addEventListener("scroll", scrollFunction);
  topButton.addEventListener("click", topFunction);
})