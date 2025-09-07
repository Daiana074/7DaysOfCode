// Juego de decisiones sobre el camino en programación

alert("¡Bienvenido al juego de tu destino en programación!");

// Primera elección: Front-End o Back-End
let area = prompt("¿Querés seguir hacia el área de Front-End o hacia el área de Back-End? (Escribí 'Front-End' o 'Back-End')");

if (area === "Front-End") {
    let tecnologiaFront = prompt("¡Excelente! En Front-End podés aprender React o Vue. ¿Cuál preferís?");
    if (tecnologiaFront === "React") {
        alert("¡Genial! React es muy usado para construir interfaces rápidas y modernas.");
    } else if (tecnologiaFront === "Vue") {
        alert("¡Muy bien! Vue es ligero y tiene una curva de aprendizaje amigable.");
    } else {
        alert("No elegiste una opción válida, pero sigamos adelante...");
    }
} else if (area === "Back-End") {
    let tecnologiaBack = prompt("¡Perfecto! En Back-End podés aprender C# o Java. ¿Cuál preferís?");
    if (tecnologiaBack === "C#") {
        alert("¡Excelente! C# es muy usado en entornos Microsoft y juegos con Unity.");
    } else if (tecnologiaBack === "Java") {
        alert("¡Muy bien! Java sigue siendo clave en aplicaciones empresariales.");
    } else {
        alert("No elegiste una opción válida, pero sigamos adelante...");
    }
} else {
    alert("No escribiste ni Front-End ni Back-End, pero continuemos...");
}

// Segunda elección: Especializarse o Fullstack
let camino = prompt("¿Querés seguir especializándote en el área elegida o desarrollarte como Fullstack? (Escribí 'Especializarse' o 'Fullstack')");

if (camino === "Especializarse") {
    alert("¡Gran elección! Convertirte en un experto te dará mucha profundidad.");
} else if (camino === "Fullstack") {
    alert("¡Buenísimo! Ser Fullstack te abre muchas puertas en proyectos diversos.");
} else {
    alert("No elegiste una opción válida, pero avancemos...");
}

// Parte final: tecnologías adicionales
let continuar = "ok";
while (continuar === "ok") {
    let nuevaTech = prompt("¿Qué otra tecnología te gustaría aprender?");
    alert("¡Qué interesante! Aprender " + nuevaTech + " puede darte grandes oportunidades.");
    continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribí 'ok' para continuar o cualquier otra cosa para terminar)");
}

alert("¡Gracias por jugar! ¡Tu camino en la programación recién comienza!");
