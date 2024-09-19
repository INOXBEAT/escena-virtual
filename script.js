document.addEventListener('DOMContentLoaded', () => {
    const puerta = document.getElementById('puerta');
    const caja = document.getElementById('caja');
  
    if (puerta) {
      puerta.addEventListener('click', () => {
        let currentRotation = puerta.getAttribute('rotation');
        let newYRotation = currentRotation.y + 90;
        puerta.setAttribute('rotation', {x: 0, y: newYRotation % 360, z: 0});
        puerta.components.sound.playSound(); 
      });
    }
  
    if (caja) {
        caja.addEventListener('click', () => {
          let currentPosition = caja.getAttribute('position');
          let newXPosition = currentPosition.x + 1;
          caja.setAttribute('position', {x: newXPosition, y: currentPosition.y, z: currentPosition.z});
          console.log('Caja movida a:', newXPosition);
          caja.components.sound.playSound();
        });
      }
  });
  