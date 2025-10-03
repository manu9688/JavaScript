console.log("Hola mundo desde JS");
var nombre; // Declaración de una variable
nombre = "Manuela"; // inicialización de un valor
let apellido = "Cardona Arias";
const nie = "123456";
console.log(nombre);
console.log(typeof (nombre));
const objeto = { name: "Manuela", apellidos: "Cardona Arias" };
console.table(objeto);
//usando alert
alert(nombre);
//usando prompt
let saludo = prompt("Hola, escribe tu nombre");
alert(saludo);

//!Ejercicio 01
//1.1 Declacion de variables segun tipo de dato
var varTipoString;
var varTipoNumber;
var varTipoBoolean;
var varTipoNull;
var varTipoUndefined;
var varTipoSymbol;
var varTipoObject;
//1.2 Inicialización de una variable
varTipoString = 'Esto es un String';
varTipoNumber = 1;
varTipoBoolean = true;
varTipoNull = null;
varTipoSymbol = Symbol('Esto es un Symbol');
varTipoObject = [1, 2, 3];
varTipoUndefined;

//2. Imprimir por consola el valor que tiene la variable
console.log(varTipoString);
console.log(varTipoNumber);
console.log(varTipoBoolean);
console.log(varTipoNull);
console.log(varTipoSymbol);
console.table(varTipoObject);
console.log(varTipoUndefined);

//3. Imprimir por consola el tipo de dato que almacena
console.log(typeof (varTipoString));
console.log(typeof (varTipoNumber));
console.log(typeof (varTipoBoolean));
console.log(typeof (varTipoNull));
console.log(typeof (varTipoSymbol));
console.log(typeof (varTipoObject));
console.log(typeof (varTipoUndefined));

//4.Declaracion de variable local y global
var vglobal = "variable global";

function ejemplo() {
  let vlocal = "variable local";
  console.log(vlocal);
}
ejemplo();
console.log(vglobal);

//!Ejercicio 2
/* 1. Crea una función arrow function que retorne tu nombre y 
tus apellidos e imprímelos por pantalla desde fuera de la función.*/

/*
function fArrow(){
    const name= 'Manuela';
    const lastname='Cardona Arias';
    return `${name} ${lastname}`;
}
    console.log(fArrow());
    */

const nombreCompleto = (nombre) => {
  return nombre;
};
console.log(nombreCompleto("Manuela Cardona A"));
//llamada a la funcion para que se ejecute
document.getElementById("print").textContent = nombreCompleto("Manuela Cardona Arias");

/* 2. Crea una función con nombre y sin return. Pásale un tipo de 
dato boolean y dentro de la función imprime el valor que hemos 
pasado por los parámetros.*/

/*
function point2(dato){
    console.log("esto es lo que recibi = " +dato);
    document.getElementById("print2").textContent = `Esto es lo que recibi = ${dato}`;
}
    point2(true);
*/
const ejBoolean = (dato) => {
  document.getElementById("print2").textContent = `Esto es lo que recibi= ${dato}`;
};

//llamada a la funcion para que se ejecute
ejBoolean(true);

/*3. Crea una función que reciba parámetros infinitos, haz la llamada
con los valores 1, 2, 3, 4, 5 y muestra dichos valores mediante un
forEach.*/

const pInfinitos = function (...datos) {
  let resultado = "Foreach = ";
  datos.forEach(element => {
    console.log(element);
    resultado += `${element} `;
  });
  document.getElementById("foreach").textContent = resultado.trim();
}
//llamada a la funcion para que se ejecute
pInfinitos('1', '2', '3', '4', '5');

//! Arrays methods /////////////////////////////////////////////////////////////
// ?EJERCICIO
/*
1. A partir de la pizza sustituías todos los elemento del array por
cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩*/
let emojis = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥩'];

// Desde el for recorro el array de emojis desde la posición 4
for (let i = 4; i < emojis.length; i++) {
  emojis[i] = '🍺'; // sustituyo por cerveza
}

console.log(emojis); //muestro por consola el array

/*
2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕*/
//creo el array de pizza
let pizza = ['🍕', '🍕', '🍍', '🍕', '🍕'];
//creo una variable usando el indexOf que me indica si la piña exista
//dando su posición en caso contrario mostrara un -1
let pineapple = pizza.indexOf('🍍');

console.log("La piña esta en la posición: " + pineapple);

/*3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕*/
//creo el array
let pizzaConP = ['🍕', '🍕', '🍍', '🍕', '🍕'];
/*creo otra variable en donde guarde el array sin piña,
el  metodo filter crea un nuevo array con los elementos que cumplan
una condición en este caso que no tenga piña*/
let sinP = pizzaConP.filter(fruta => fruta !== '🍍');

console.log(sinP); //muestro el array sin piña
/*
4. A partir del siguiente array 🍓🍋🍓🍋🍓convierte todas las fresas en 🍄*/
//array de frutas
let fruits = ['🍓', '🍋', '🍓', '🍋', '🍓'];
//uso un forEach para recorrer el array 
fruits.forEach((fruit, index, arr) => { //recibo como parametros: el parametro donde guardo la fresa, el indice(posicion) y el array de frutas
  if (fruit === '🍓') {//con el if comparo si hay una fresa
    arr[index] = '🍄';// si la condicion se cumple lo reemplazo por hongo en la posicion que esta la fresa
  }
});

console.log(fruits); //muestra el array con la fruta reemplazada

/*
5. Añade el siguiente icono 🥵 inmediatamente después del cada
🌶️ en el siguiente array: 🌶️🥛🌶️🥛🌶️🥛*/
//creación de array
const ingredientes = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];
//array vacio donde se guardara el resultado
const resultado = [];
// bucle for para recprrer el array
for (let i = 0; i < ingredientes.length; i++) {
  resultado.push(ingredientes[i]);//uso del metodo push para añadir elementos al array
  if (ingredientes[i] === '🌶️') { //condicional que verifica si esta el chile
    resultado.push('🥵');//agrego carita si se cumple la condición
  }
}
console.log(resultado);//muestro el resultado

/*
6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴 */
const cartas = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];
const result = [];

for (let i = 0; i < cartas.length; i++) {
  result.push(cartas[i]);

  // Si hay dos 🎴 seguidas, añade 🃏 entre ellas
  if (cartas[i] === '🎴' && cartas[i + 1] === '🎴') {
    result.push('🃏');
  }
}

console.log(result);

//?+++++++++++Ejercicios con Condicionales IF++++++++++++++
/* 1- A partir de la siguiente instrucción que genera un número aleatorio:
console.log(Math.round(Math.random()));
que genera un número aleatorio 0 o 1.
Haz una función con return, invócala y muestra por consola "cara" 
si el valor es 1 y "cruz" si el valor es 0.
 */


let caraOcruz = () => {
  let moneda = Math.round(Math.random());
  let resultado;
  if (moneda == 1) {
    resultado = console.log("El resultado es: " + moneda + "\nLo que es igual a Cara");
  } else {
    resultado = console.log("El resultado es: " + moneda + "\nLo que es igual a Cruz");
  }
  return resultado;
};
//llamada a la función
caraOcruz();

/*
EJERCICIOS
- 1 Crea una función, pasa 3 números por parámetros, súmalos y devuelve el resultado mediante return.
 Finalmente muéstralos por pantalla.
- 2 Crea una función y escribe tu nombre completo en 3 parámetros: nombre, apellido1, apellido2, 
concaténalos y finalmente muéstralos por pantalla.
- 3 Crea una función que acepte dos números y devuelva el número mayor.
*/

//! 1.
let sumaParm = (num1, num2, num3) => {
  let suma = num1 + num2 + num3;
  return "La suma de los números es igual a : " + suma;
};
document.getElementById("sumaP").textContent = sumaParm(1, 2, 3);
console.log(sumaParm(1, 2, 3));

//! 2.
let concatenarNom = (nom, apell1, apell2) => {
  return "Nombre: " + nom + "\nPrimer Apellido: " + apell1 + "\nSegundo Apellido: " + apell2;
};
document.getElementById("concatenarN").textContent = concatenarNom("Manuela", "Cardona", "Arias");
console.log(concatenarNom("Manuela", "Cardona", "Arias"));

//! 3.
let numMay = (num1, num2) => {
  let result = Math.max(num1, num2);
  return "El número Mayor es: " + result;
}
console.log(numMay(2, 10));

/*//? Ejercicios Switch
EJERCICIO
1. 	Realiza un switch que muestre el mes del año cuando lo introduzcamos en formato numérico (1 al 12).
2. 	Realiza un switch en el que puedas introducir un número del uno al cinco en un string y
lo transforme a un número.
*/

//! 1.
let num = 12;
switch (num) {
  case 1:
    console.log("El numero: " + num + " Corresponde a Enero");
    break;
  case 2:
    console.log("El numero: " + num + " Corresponde a Febrero");
    break;
  case 3:
    console.log("El numero: " + num + " Corresponde a Marzo");
    break;
  case 4:
    console.log("El numero: " + num + " Corresponde a Abril");
    break;
  case 5:
    console.log("El numero: " + num + " Corresponde a Mayo");
    break;
  case 6:
    console.log("El numero: " + num + " Corresponde a Junio");
    break;
  case 7:
    console.log("El numero: " + num + " Corresponde a Julio");
    break;
  case 8:
    console.log("El numero: " + num + " Corresponde a Agosto");
    break;
  case 9:
    console.log("El numero: " + num + " Corresponde a Septiembre");
    break;
  case 10:
    console.log("El numero: " + num + " Corresponde a Octubre");
    break;
  case 11:
    console.log("El numero: " + num + " Corresponde a Noviembre");
    break;
  case 12:
    console.log("El numero: " + num + " Corresponde a Diciembre");
    break;
  default:
    console.error("ERROR: El numero no esta en el rango de 1-12");
    break;
}

//! 2.

let stringNum = "cinco";

switch (stringNum) {
  case "uno": case "Uno":
    return console.log(1);
    break;
  case "dos": case "Dos":
    return console.log(2);
    break;
  case "tres": case "Tres":
    return console.log(3);
    break;
  case "cuatro": case "Cuatro":
    return console.log(4);
    break;
  case "cinco": case "Cinco":
    return console.log(5);
    break;
  default:
    console.error("ERROR: El numero no esta en el rango de 1-5");
    break;
}

//? Ejercicios con Math
/*
EJERCICIO
1. 	Investiga cómo crear un número aleatorio (0 o 1) con el método  de Math.
2. 	Investiga cómo redondear el valor de Math.PI (3,1415…) a la parte decimal 3.
*/

//! 1.
let numAleatorio = () =>{
  /*- //? Math.random() 
  genera un número decimal entre 0 (incluido) y 1 (excluido).
- Al multiplicarlo por 2, obtenemos un rango entre 0 y casi 2.
//? Math.floor() 
redondea hacia abajo, así que el resultado será 0 o 1.
  */
return console.log(Math.floor(Math.random()*2));
};
numAleatorio();

//! 2.
//- Math.floor() siempre redondea hacia el entero inferior más cercano.
// Usar Math.floor() → Redondeo hacia abajo

const redondeado1 = Math.floor(Math.PI); // Resultado: 3
console.log(redondeado1);
/*- Math.round() redondea hacia arriba si la parte decimal es ≥ 0.5.
- En el caso de Math.PI ≈ 3.1415, el resultado sigue siendo 3.
. Usar Math.round() → Redondeo al entero más cercano
*/
const redondeado2 = Math.round(Math.PI); // Resultado: 3
console.log(redondeado2);
//Usar parseInt() → Conversión directa a entero
//- Convierte el número a entero eliminando la parte decimal.
const redondeado3 = parseInt(Math.PI); // Resultado: 3
console.log(redondeado3);
//Si quieres redondear a otros niveles de precisión (por ejemplo, a 3.14 o 3.1), 
console.log(Math.PI.toFixed(3)); // "3.14" como string


//? Ejercicios con String
/*
EJERCICIO
1- Crea una función en la que, pasándole un string como parámetro, se sustituyan las letras A por las O.
2- Crea una función que compruebe si un string pasado como parámetro empieza por ‘aca’, y llama dos
veces a la función: una con "academia" y otra con "escuela".
3- Crea una función que, pasándole un "Hola", nos salude 3 veces utilizando métodos de Strings.
*/

//! 1.
/*
- replace(/a/gi, "o") usa una expresión regular: //?esto se parce a regEX
- /a/ busca la letra "a".
- g significa "global", para que reemplace todas las ocurrencias.
- i significa "insensible a mayúsculas", así que también cambia "A".

*/
let stringSust = (cadena) => {
return console.log(cadena.replace(/a/gi,'o'));
};
stringSust('calabaza');

//! 2.
let empiezaAca = (texto) => {
if(texto.startsWith('aca')==true){
  return console.log('La palabra SI empieza con aca');
} else{
  return console.log('La palabra NO empieza con aca');
}
};
empiezaAca('academia');
empiezaAca('escuela');

//! 3.
let saludar3Veces = (texto) => {
  return console.log((texto+"\n").repeat(3));
};
saludar3Veces('hola'); 

//? Ejercicios con bucles

/*
EJERCICIO
Realiza un bucle tanto con FOR como con WHILE que impriman 10 veces:
I❤code
*/
//? usando For
for (let i = 0; i < 10; i++) {
  console.log("I ❤ code");
}

//? usando While
let i = 0;
while (i < 10) {
  console.log("I ❤ code");
  i++;
}


/*
EJERCICIO
1- Define un array con las letras ‘a’, ‘b’, ‘c’, ‘d’ y ‘e’. Y, posteriormente, recorre cada uno de los
 elementos mediante un forEach.
2- Define una variable let numero = 5; que itere hasta que el valor sea 0.

*/

//! 1.
let letras = ['a','b','c','d','e'];
letras.forEach(item => {
console.log(item);
});

//! 2.
let numero = 5;
for (let numero = 5; numero > 0; numero--) {
  console.log("Numero :", numero);
}
/*
EJERCICIO
1. 	Analiza qué hace el siguiente programa, explica lo que hace:
¿Cuántas iteraciones da?
¿Cuándo entrará en el ?
¿Y en el ?

let numero = 1;
let i = 0;
do {
    if(i == 0){
        i++;
        numero--;
        console.log(numero);
    } else{
        numero++;
        console.log(numero);
    }
    i++;
} while (numero < 5);
*/

let nume = 1;
let l = 0;
do {
    if(l == 0){ // la variable l=0 entra en el condicional IF
        l++; //Incrementa su valor a 1
        nume--;// la variable nume=1 ahora decrementa y nume=0
        console.log(nume);//se imprime por consola el numero
    } else{ // entra en el else cuando l > 0
        nume++;// nume se incrementa a 1
        console.log(nume); // se imprime por consola
    }
    l++; //se incrementa l
} while (nume < 5); //esto se repite hasta que el nume sea igual a 5


