console.log("Hola mundo desde JS");
var nombre; // Declaración de una variable
nombre = "Manuela"; // inicialización de un valor
let apellido = "Cardona Arias";
const nie = "123456";
console.log(nombre);
console.log(typeof(nombre));
const objeto = {name: "Manuela", apellidos: "Cardona Arias"};
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
varTipoSymbol= Symbol('Esto es un Symbol');
varTipoObject = [1,2,3];
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
console.log(typeof(varTipoString));
console.log(typeof(varTipoNumber));
console.log(typeof(varTipoBoolean));
console.log(typeof(varTipoNull));
console.log(typeof(varTipoSymbol));
console.log(typeof(varTipoObject));
console.log(typeof(varTipoUndefined));

//4.Declaracion de variable local y global
var vglobal= "variable global";

function ejemplo(){
    let vlocal="variable local";
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

const nombreCompleto = (nombre) =>{
return nombre;
};
console.log(nombreCompleto("Manuela Cardona A"));
//llamada a la funcion para que se ejecute
document.getElementById("print").textContent =nombreCompleto("Manuela Cardona Arias");

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

const pInfinitos = function (...datos){
    let resultado = "Foreach = ";
    datos.forEach(element => {
   console.log(element);
   resultado += `${element} `;
    });
     document.getElementById("foreach").textContent = resultado.trim();
}
//llamada a la funcion para que se ejecute
pInfinitos('1','2','3','4','5');

// ?EJERCICIO
/*
1. A partir de la pizza sustituías todos los elemento del array por
cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩*/
let emojis = ['🍔','🌯','🍣','🍕','🍜','🍱','🍙','🍘','🥩'];

// Desde el for recorro el array de emojis desde la posición 4
for (let i = 4; i < emojis.length; i++) {
  emojis[i] ='🍺'; // sustituyo por cerveza
}

console.log(emojis); //muestro por consola el array

/*
2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕*/
//creo el array de pizza
let pizza = ['🍕', '🍕', '🍍', '🍕', '🍕'];
//creo una variable usando el indexOf que me indica si la piña exista
//dando su posición en caso contrario mostrara un -1
let pineapple = pizza.indexOf('🍍');

console.log("La piña esta en la posición: "+pineapple); 

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


function caraOcruz(){
  let moneda = Math.round(Math.random());
  let resultado;
  if( moneda == 1){
   resultado = console.log("El resultado es: "+moneda+" Lo que es igual a Cara");
  } else {
   resultado = console.log("El resultado es: "+moneda+" Lo que es igual a Cruz");
  }

  return resultado;
}
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



/*//? Ejercicios Switch
EJERCICIO
1. 	Realiza un  que muestre el mes del año cuando lo introduzcamos en formato numérico (1 al 12).
2. 	Realiza un  en el que puedas introducir un número del uno al cinco en un string y 
lo transforme a un número.

*/

//? Ejercicios con Math
 /*
 EJERCICIO
1. 	Investiga cómo crear un número aleatorio (0 o 1) con el método  de .
2. 	Investiga cómo redondear el valor de  (3,1415…) a la parte decimal 3.
 */

//? Ejercicios con String
/*
EJERCICIO
- Crea una función en la que, pasándole un string como parámetro, se sustituyan las letras A por las O.
- Crea una función que compruebe si un string pasado como parámetro empieza por ‘aca’, y llama dos 
veces a la función: una con "academia" y otra con "escuela".
- Crea una función que, pasándole un "Hola", nos salude 3 veces utilizando métodos de Strings.
*/

//? Ejercicios con bucles

/*
EJERCICIO
Realiza un bucle tanto con FOR como con WHILE que impriman 10 veces:
I❤code
*/


/*
EJERCICIO
- Define un array con las letras ‘a’, ‘b’, ‘c’, ‘d’ y ‘e’. Y, posteriormente, recorre cada uno de los
 elementos mediante un forEach.
- Define una variable let numero = 5; que itere hasta que el valor sea 0.

*/

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


//? Arrays methods
/*
EJERCICIO
- A partir de la pizza, sustituye todos los elementos del array por cervezas.
- Encuentra si existe un elemento en el array que sea una piña.
- Quita la piña del siguiente array.
- A partir del siguiente array, convierte todas las fresas en... 
(parece que falta el final de esta instrucción)
- Añade el siguiente icono inmediatamente después del "cada" en el siguiente array. 
(el icono no está especificado aquí)
- Añade una carta comodín entre medio de dos cartas. Por ejemplo: en el siguiente array...
*/