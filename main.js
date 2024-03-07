  // Función para mostrar el popup con la descripción del producto
  function mostrarPopup(titulo, descripcion) {
    document.getElementById("popup-titulo").innerText = titulo;
    document.getElementById("popup-descripcion").innerText = descripcion;
    document.getElementById("popup").style.display = "block";
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}
  

window.addEventListener("scroll", function() {
  var button = document.getElementById("whatsapp-button");
  if (window.pageYOffset > 100) { // Cambia 100 según sea necesario para ajustar el punto de activación
      button.style.transform = "translateX(-60px)"; // Mueve el botón hacia la izquierda
  } else {
      button.style.transform = "translateX(0)"; // Vuelve a la posición original
  }
});
