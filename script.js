document.addEventListener('DOMContentLoaded', () => {
    const puerta = document.getElementById('puerta');
  
    if (puerta) {
      console.log('Puerta encontrada:', puerta);
  
      puerta.addEventListener('click', () => {
        console.log('Puerta clickeada'); // Verifica si el evento de clic está funcionando
  
        // Obtener la rotación actual como un objeto
        let currentRotation = puerta.getAttribute('rotation');
        console.log('Rotación actual:', currentRotation);
  
        // Asegúrate de que la rotación se esté obteniendo como objeto
        if (typeof currentRotation === 'object') {
          let newYRotation = currentRotation.y + 90;
          puerta.setAttribute('rotation', {x: 0, y: newYRotation % 360, z: 0});
          console.log('Nueva rotación aplicada:', newYRotation % 360);
        } else {
          console.error('No se pudo obtener la rotación correctamente');
        }
      });
    } else {
      console.error('No se encontró la puerta.');
    }
  });
  