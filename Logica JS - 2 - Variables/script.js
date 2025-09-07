// Preguntas al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

// Mensaje final
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

// Ejercicio opcional
let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (respuesta == "1") {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == "2") {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
  alert("Respuesta no válida, por favor ingresa 1 o 2.");
}



// EXTRA
// Tanto alert() como prompt() se utilizan para crear cuadros de diálogo e interactuar con el usuario, pero son diferentes entre sí.
// El alert() se utiliza para mostrar un mensaje simple al usuario.
// Ejemplo:
alert("¡Hola, todos!");

// El prompt() requiere que el usuario ingrese algún valor, que podrás manipular.
// Ejemplo:
const ciudad = prompt("Escribe tu ciudad:");
const msg = `¡Eres de ${ciudad}!`;
alert(msg);

// Prueba los códigos anteriores e intenta adaptarlos a tu programa.