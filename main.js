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