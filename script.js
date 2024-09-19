document.addEventListener("DOMContentLoaded", () => {
  const puerta = document.getElementById("puerta");
  const caja = document.getElementById("caja");
  const luz = document.getElementById("luz");

  if (puerta) {
    const puertaBox = puerta.querySelector("a-box");
    puerta.addEventListener("click", () => {
      let currentRotation = puerta.getAttribute("rotation");
      let newYRotation = currentRotation.y + 90;
      puerta.setAttribute("rotation", { x: 0, y: newYRotation % 360, z: 0 });
      puertaBox.setAttribute("color", "#FF0000");
      puerta.components.sound.playSound();
    });
  }

  if (caja) {
    caja.addEventListener("click", () => {
      let currentPosition = caja.getAttribute("position");
      let newXPosition = currentPosition.x + 1;
      caja.setAttribute("position", {
        x: newXPosition,
        y: currentPosition.y,
        z: currentPosition.z,
      });
      caja.setAttribute("material", "color", "#00FF00");
      caja.components.sound.playSound();
    });
  }

  if (luz) {
    let luzEncendida = true;
    const esferaLuz = luz.querySelector("a-sphere");

    luz.addEventListener("click", () => {
      if (luzEncendida) {
        luz.setAttribute("light", "intensity", 0);
        esferaLuz.setAttribute("material", "color: #333; opacity: 1; shader: flat");
      } else {
        luz.setAttribute("light", "intensity", 1);
        esferaLuz.setAttribute("material", "color: #FFD700; opacity: 1; shader: flat");
      }
      luzEncendida = !luzEncendida;
      console.log("Luz encendida:", luzEncendida);
      console.log(
        "Color de la esfera:",
        esferaLuz.getAttribute("material").color
      );
    });
  }
});
