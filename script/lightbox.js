const hamburger1 = document.querySelector(".hamburguesa");
const imagenes = document.querySelectorAll(".img-galeria");
const imgLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");


imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    apareceImagen(imagen.getAttribute('src'));
  })
})

contenedorLight.addEventListener('click', e => {
  if(e.target != imgLight) {
    contenedorLight.classList.toggle("show");
    imgLight.classList.toggle("showImage");
    hamburger1.style.opacity = "1";
  }
})

const apareceImagen = imagen => {
  imgLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imgLight.classList.toggle("showImage");
  hamburger1.style.opacity = "0";
}