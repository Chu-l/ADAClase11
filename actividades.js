const prompt = require('prompt-sync')();

/*Ejercicio 1: ¿Positivo, negativo o cero?*/
/*Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.*/
/*
let num = Number(prompt("Ingrese un número:"));

if (num>0) {
    console.log("El número es positivo");
} else if (num<0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
*/ 

/*Ejercicio 2: Semáforo inteligente*/
/*Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
● Rojo: "Alto, no puedes avanzar."
● Amarillo: "Precaución, prepárate para avanzar."
● Verde: "Avanza con seguridad." Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde." Utiliza un switch para resolver este ejercicio.*/
/*
let color = prompt("Ingrese un color del semáforo (rojo, amarillo o verde): ");

color = color.toLowerCase(); //por si el usuario escribe con mayúsculas

switch (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");
        break;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
    case "verde":
        console.log("Avanza con seguridad.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}
*/

/*Ejercicio 3: ¿Sabes contar?*/
/*Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.*/

let numero = Number(prompt("Ingrese un número positivo: "));

for (let i = 1; i <= numero; i++) {
    console.log(i);
}



