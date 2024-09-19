// Ejecutar el script solo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Intentar obtener el elemento con ID 'puerta'
    const puerta = document.getElementById('puerta');

    // Verifica si el elemento puerta ha sido correctamente seleccionado
    if (puerta) {
        console.log('Elemento puerta encontrado:', puerta);

        // Usar el evento 'click' que A-Frame maneja a través del cursor
        puerta.addEventListener('click', (event) => {
            console.log('Puerta clickeada'); // Verifica si el evento de clic está funcionando

            // Obtener la rotación actual como un objeto
            let currentRotation = puerta.getAttribute('rotation');
            console.log('Rotación actual:', currentRotation);

            // Verificar si la rotación es un objeto, de lo contrario es un problema
            if (typeof currentRotation === 'object') {
                // Incrementar el valor de rotación en el eje 'y' por 90 grados
                const newYRotation = currentRotation.y + 90;
                console.log('Nueva rotación en Y:', newYRotation);

                // Aplicar la nueva rotación en el eje Y
                puerta.setAttribute('rotation', {
                    x: currentRotation.x,  // Mantener el valor de rotación en el eje x
                    y: newYRotation % 360,  // Asegurarse de que la rotación esté dentro de 0-360 grados
                    z: currentRotation.z  // Mantener el valor de rotación en el eje z
                });

                console.log('Nueva rotación aplicada:', {
                    x: currentRotation.x,
                    y: newYRotation % 360,
                    z: currentRotation.z
                });
            } else {
                console.error('La rotación no es un objeto válido:', currentRotation);
            }
        });
    } else {
        console.log('Elemento puerta no encontrado. Verifica el ID en el HTML.');
    }
});
