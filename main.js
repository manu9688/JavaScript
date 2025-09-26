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