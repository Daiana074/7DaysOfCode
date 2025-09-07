// Programa: Lista de compras con categorías
// Autor: Dai ✨

// Creamos un objeto con arrays para cada categoría
let listaCompras = {
  frutas: [],
  lacteos: [],
  congelados: [],
  dulces: [],
  otros: []
};

alert("¡Bienvenido a tu lista de compras organizada! 🛒");

// Bucle para ir agregando alimentos
while (true) {
  let agregar = prompt("¿Querés agregar un alimento a la lista? (sí / no)").toLowerCase();

  if (agregar === "no") {
    break; // salimos del bucle
  } else if (agregar === "sí" || agregar === "si") {
    let alimento = prompt("Escribí el nombre del alimento:");
    let categoria = prompt(
      `¿En qué categoría encaja "${alimento}"?\n` +
      "Opciones: frutas, lácteos, congelados, dulces, otros"
    ).toLowerCase();

    // Clasificamos según la categoría elegida
    if (categoria === "frutas") {
      listaCompras.frutas.push(alimento);
    } else if (categoria === "lácteos" || categoria === "lacteos") {
      listaCompras.lacteos.push(alimento);
    } else if (categoria === "congelados") {
      listaCompras.congelados.push(alimento);
    } else if (categoria === "dulces") {
      listaCompras.dulces.push(alimento);
    } else {
      listaCompras.otros.push(alimento);
    }

  } else {
    alert("Respuesta inválida. Escribí 'sí' o 'no'.");
  }
}

// Mostramos la lista final agrupada
let mensaje = "📋 Lista de compras:\n\n";
mensaje += `Frutas: ${listaCompras.frutas.join(", ") || "—"}\n`;
mensaje += `Lácteos: ${listaCompras.lacteos.join(", ") || "—"}\n`;
mensaje += `Congelados: ${listaCompras.congelados.join(", ") || "—"}\n`;
mensaje += `Dulces: ${listaCompras.dulces.join(", ") || "—"}\n`;
mensaje += `Otros: ${listaCompras.otros.join(", ") || "—"}\n`;

alert(mensaje);
console.log(mensaje);
