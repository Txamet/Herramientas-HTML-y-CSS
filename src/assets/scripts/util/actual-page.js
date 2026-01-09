const actualPage = () => {
  const page = document.body.dataset.page;
  if (!page) return;

  const actual = document.getElementById(page);
  if (actual) {
    actual.classList.add("menu__enlace--actual");
  }
}

window.addEventListener("DOMContentLoaded", actualPage);