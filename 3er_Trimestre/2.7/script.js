let likes = [9, 12, 9];  // Likes iniciales para las tres publicaciones

// Seleccionar todos los botones de like
const likeButtons = document.querySelectorAll('.like-button');

// Añadir evento onclick a cada botón
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Obtener el ID del botón de like desde el atributo "data-id"
        const id = button.getAttribute('data-id');
        
        // Incrementar los likes en el arreglo
        likes[id]++;
        
        // Actualizar el contador de likes en el DOM
        document.querySelector(`#likes-${id}`).textContent = likes[id];
    });
});