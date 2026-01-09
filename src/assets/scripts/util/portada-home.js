const portada = document.querySelector(".portada");
const imagen = portada.querySelector(".portada__imagen");

if (imagen.complete) {
  portada.classList.replace("portada--cargando", "portada--listo");

} else {
  imagen.addEventListener("load", () => {
    portada.classList.replace("portada--cargando", "portada--listo");
  })
}
