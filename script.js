document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active'); // Agrega/quita la clase 'active'
        });
    }

    // Opcional: Cerrar el menú si se hace clic fuera de él o en un enlace
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});

// Selecciona todos los bloques que tengan el texto y el botón
document.querySelectorAll('.bloque-expandible').forEach(bloque => {
  const texto = bloque.querySelector('.contenido-corto');
  const boton = bloque.querySelector('.ver-mas-btn');

  boton.addEventListener('click', () => {
    texto.classList.toggle('contenido-completo');
    boton.innerText = texto.classList.contains('contenido-completo') ? 'Ver menos' : 'Ver más';
  });
});