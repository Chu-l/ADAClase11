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
/*
let numero = Number(prompt("Ingrese un número positivo: "));

for (let i = 1; i <= numero; i++) {
    console.log(i);
}
*/

/*Ejercicio 4: ¿Es par o impar?*/
/*Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.*/
/*
let numero = Number(prompt("Ingrese un número: "));

if (numero % 2 === 0) {
    console.log("El número es par. Cualquier número entero que es divisible por 2 sin dejar residuo.");
} else {
    console.log("El número es impar.  Números enteros que no son divisibles por 2, dejando un resto de 1.");
}
*/

/*Ejercicio 5: Encuentra los números pares entre dos valores*/
/*Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.*/
/*
let inicio = Number(prompt("Ingrese el número inicial: "));
let fin = Number(prompt("Ingrese el número final: "));

if (inicio>fin) {
    console.log("Valores inválidos, el número inicial es mayor que el final.");
} else { //valores validos
    for (let i = inicio; i <= fin; i++) { //recorro los num desde inicio a fin
        if (i % 2 === 0) { //si es par muestro el num
            console.log(i);
        }
    }
}
*/

/*Ejercicio 6: La tabla de multiplicar*/
/*Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.*/

let numero = Number(prompt("Ingrese un número: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero*i));
}
