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
ejBoolean(true);

/*3. Crea una función que reciba parámetros infinitos, haz la llamada
con los valores 1, 2, 3, 4, 5 y muestra dichos valores mediante un
forEach.*/ 

function usandoForEach(){

}