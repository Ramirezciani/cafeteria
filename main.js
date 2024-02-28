document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.details-btn');
    const productDetails = document.querySelector('.product-details');
    const closeBtn = document.querySelector('.close-btn');

    // Mostrar detalles del producto al hacer clic en el botón "Ver detalles"
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const productDetailsContent = document.querySelector('.product-details .details-content');

            // Aquí puedes cargar los detalles del producto desde una base de datos o alguna fuente de datos
            // Por ahora, simplemente mostramos un texto de ejemplo
            productDetailsContent.innerHTML = `
                <h2>Detalles del Producto ${productId}</h2>
                <div class="ingredients">
                    <h3>Ingredientes:</h3>
                    <p>Lista de ingredientes del producto ${productId}.</p>
                </div>
                <button class="close-btn">Cerrar</button>
            `;

            productDetails.style.display = 'flex';

            // Escuchar eventos del botón "Cerrar" dentro de los detalles del producto
            const closeDetailsBtn = document.querySelector('.product-details .close-btn');
            closeDetailsBtn.addEventListener('click', function() {
                productDetails.style.display = 'none';
            });
        });
    });

});
