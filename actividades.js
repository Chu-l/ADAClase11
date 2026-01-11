const prompt = require('prompt-sync')();

/*Ejercicio 1: ¿Positivo, negativo o cero?*/
/*Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.*/

let num = Number(prompt("Ingrese un número:"));

if (num>0) {
    console.log("El número es positivo");
} else if (num<0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}
