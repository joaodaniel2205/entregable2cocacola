document.querySelectorAll('.producto, .evento').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.transform = 'scale(1.05)'; // Aumenta ligeramente al pasar el cursor
        item.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)'; // Sombra más intensa
    });

    item.addEventListener('mouseout', event => {
        item.style.transform = 'scale(1)'; // Vuelve al tamaño original
        item.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'; // Sombra original
    });
});