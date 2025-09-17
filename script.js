// Mostrar u ocultar las variantes
function mostrarVariantes(id) {
  const variantes = document.getElementById("variantes-" + id.toLowerCase());
  if (variantes) {
    variantes.classList.toggle("mostrar");
  }
}


// Cambiar imagen principal al hacer clic en una variante
document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");

  productos.forEach(producto => {
    const principal = producto.querySelector(".img-principal");
    const variantes = producto.querySelectorAll(".colores img");

    variantes.forEach(variacion => {
      variacion.addEventListener("click", () => {
        // Cambiar la imagen principal al src de la variante
        principal.src = variacion.src;
        principal.alt = variacion.alt;
      });
    });
  });
});
