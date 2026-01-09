const yt = document.querySelector(".youtube");

yt.addEventListener("click", () => {
  const id = yt.dataset.id;
  const iframe = document.createElement("iframe");

  iframe.src =`https://www.youtube.com/embed/${id}?autoplay=1`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.width = "100%";
  iframe.height = "auto";
  iframe.className = "articulo__figure-imagen";

  yt.replaceWith(iframe);
});