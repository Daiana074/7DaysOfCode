// Funciones de la calculadora
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir entre 0";
  }
  return a / b;
}

// Calculadora principal
function calculadora() {
  let opcion;

  do {
    opcion = prompt(
      "Elige una operación:\n" +
      "1 - Suma\n" +
      "2 - Resta\n" +
      "3 - Multiplicación\n" +
      "4 - División\n" +
      "5 - Salir"
    );

    switch (opcion) {
      case "1":
        let s1 = Number(prompt("Ingresa el primer número:"));
        let s2 = Number(prompt("Ingresa el segundo número:"));
        alert("Resultado: " + sumar(s1, s2));
        break;

      case "2":
        let r1 = Number(prompt("Ingresa el primer número:"));
        let r2 = Number(prompt("Ingresa el segundo número:"));
        alert("Resultado: " + restar(r1, r2));
        break;

      case "3":
        let m1 = Number(prompt("Ingresa el primer número:"));
        let m2 = Number(prompt("Ingresa el segundo número:"));
        alert("Resultado: " + multiplicar(m1, m2));
        break;

      case "4":
        let d1 = Number(prompt("Ingresa el primer número:"));
        let d2 = Number(prompt("Ingresa el segundo número:"));
        alert("Resultado: " + dividir(d1, d2));
        break;

      case "5":
        alert("Hasta la próxima 👋");
        break;

      default:
        alert("Opción inválida. Intentá de nuevo.");
    }

  } while (opcion !== "5");
}

// Ejecutar la calculadora
calculadora();
