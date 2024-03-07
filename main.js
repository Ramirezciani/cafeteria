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

document.addEventListener('DOMContentLoaded', function() {
  const hamburguesa = document.querySelector('.hamburguesa');
  const menuNav = document.querySelector('nav ul');

  hamburguesa.addEventListener('click', function() {
    const ariaExpanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !ariaExpanded);
    menuNav.classList.toggle('activo');
  });

  // Cerrar el menú al hacer clic en cualquier enlace del menú
  const enlacesMenu = document.querySelectorAll('nav ul li a');
  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
      hamburguesa.setAttribute('aria-expanded', 'false');
      menuNav.classList.remove('activo');
    });
  });

  // Cerrar el menú al hacer clic en cualquier lugar fuera del menú
  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    const isClickInside = menuNav.contains(targetElement) || hamburguesa.contains(targetElement);
    if (!isClickInside) {
      hamburguesa.setAttribute('aria-expanded', 'false');
      menuNav.classList.remove('activo');
    }
  });
});


