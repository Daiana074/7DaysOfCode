// Programa: Lista de compras con opción de eliminar
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

// Bucle principal
while (true) {
  let accion = prompt(
    "¿Qué querés hacer?\n" +
    "1 - Agregar alimento\n" +
    (Object.values(listaCompras).some(arr => arr.length > 0) ? "2 - Eliminar alimento\n" : "") +
    "3 - Salir"
  );

  // Opción salir
  if (accion === "3") break;

  // Opción agregar
  if (accion === "1") {
    let alimento = prompt("Escribí el nombre del alimento:");
    let categoria = prompt(
      `¿En qué categoría encaja "${alimento}"?\n` +
      "Opciones: frutas, lácteos, congelados, dulces, otros"
    ).toLowerCase();

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
    alert(`"${alimento}" fue agregado a ${categoria}. ✅`);
  }

  // Opción eliminar (solo si hay elementos en la lista)
  else if (accion === "2" && Object.values(listaCompras).some(arr => arr.length > 0)) {
    // Mostramos la lista completa para elegir
    let mensajeLista = "Lista actual:\n";
    for (let categoria in listaCompras) {
      if (listaCompras[categoria].length > 0) {
        mensajeLista += `${categoria}: ${listaCompras[categoria].join(", ")}\n`;
      }
    }
    let eliminar = prompt(`${mensajeLista}\n¿Cuál alimento querés eliminar?`);

    let encontrado = false;
    for (let categoria in listaCompras) {
      let index = listaCompras[categoria].indexOf(eliminar);
      if (index !== -1) {
        listaCompras[categoria].splice(index, 1); // eliminar
        alert(`"${eliminar}" fue eliminado de la categoría ${categoria}. ❌`);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      alert("¡No fue posible encontrar el elemento en la lista! ⚠️");
    }
  }

  else {
    alert("Opción inválida. Intentalo de nuevo.");
  }
}

// Mostrar la lista final
let resumen = "📋 Lista de compras final:\n\n";
for (let categoria in listaCompras) {
  resumen += `${categoria}: ${listaCompras[categoria].join(", ") || "—"}\n`;
}
alert(resumen);
console.log(resumen);
