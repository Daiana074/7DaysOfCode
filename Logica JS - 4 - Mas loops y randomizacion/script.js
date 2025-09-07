(function juegoAleatorio() {
  const min = 0;
  const max = 10;
  const numeroSecreto = Math.floor(Math.random() * (max - min + 1) + min);
  let intentos = 3;
  let adivino = false;

  while (intentos > 0) {
    const respuesta = prompt(`Adiviná el número entre ${min} y ${max}. Te quedan ${intentos} intento(s):`);
    if (respuesta === null) { alert("Juego cancelado."); return; }

    const intento = parseInt(respuesta.trim(), 10);
    if (Number.isNaN(intento) || intento < min || intento > max) { alert(`Ingresá un número válido entre ${min} y ${max}.`); continue; }

    if (intento === numeroSecreto) {
      alert(`¡Bien! Adivinaste: era ${numeroSecreto}.`);
      adivino = true;
      break;
    } else {
      alert(intento < numeroSecreto ? "Más alto." : "Más bajo.");
    }
    intentos--;
  }

  if (!adivino) {
    alert(`No adivinaste. El número era ${numeroSecreto}.`);
    console.log(`Número secreto: ${numeroSecreto}`);
  }
})();
