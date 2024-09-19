document.addEventListener('DOMContentLoaded', () => {
    const puerta = document.getElementById('puerta');
    const caja = document.getElementById('caja');

    if (puerta) {
        // Seleccionamos el primer a-box dentro de la puerta
        const puertaBox = puerta.querySelector('a-box');

        puerta.addEventListener('click', () => {
            let currentRotation = puerta.getAttribute('rotation');
            let newYRotation = currentRotation.y + 90;
            puerta.setAttribute('rotation', {x: 0, y: newYRotation % 360, z: 0});

            puertaBox.setAttribute('color', '#FF0000'); 
            puerta.components.sound.playSound();
        });
    }

    if (caja) {
        caja.addEventListener('click', () => {
            let currentPosition = caja.getAttribute('position');
            let newXPosition = currentPosition.x + 1;
            caja.setAttribute('position', {x: newXPosition, y: currentPosition.y, z: currentPosition.z});
            caja.setAttribute('material', 'color', '#00FF00'); // Cambiar el color a verde
            caja.components.sound.playSound();
        });
    }
});
