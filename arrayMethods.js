/* 1. **🗣️ LA COMANDA: 🗣️**
🧑🏽‍🧑🏻‍🧒**-** **¡Camarero! ¡Camarero! Nos pone por favor una 🍔, un 🌭 con dos** 🍟 **y dos 🧋 por favor.
🤵🏻‍♂️ - ¡Por supuesto, lo tengo todo anotado!**
    
    ---
    
    👩🏻‍💻**Coder**👨🏻‍💻 - Prepara la comanda utilizando:
    El método **push()** añadiendo una **🍔**, un **🌭** a partir del siguiente array:*/

    let comida = []; 
function prepararComida(){
    comida.push('🍔');
    comida.push('🌭');
    console.log(comida);
}

/*🗣️ 1ª RECLAMACIÓN: 🗣️
🧑🏽‍🧑🏻‍🧒 2- ¡CAMARERO! ¡Camarero! Nos faltan las bebidas (2x🧋) y las patatas (2x🍟).
¡El camarero se ha dejado cosas! 
🤵🏻‍♂️ - Disculpe el error, Ahora mismo señor 🕺🏻¡Voy bailando!🕺🏻
👩🏻‍💻Coder👨🏻‍💻 - Añade dos de 🍟 al siguiente array. Esta vez, 
lo deberás de hacer realizando una sola llamada al método push(): */

const dinner = ['🍔','🌭'];
dinner.push('🍟','🍟');
console.log(dinner);


/*🗣️ 2ª RECLAMACIÓN: 🗣️
🧑🏽‍🧑🏻‍🧒 3- ¡CAMARERO! ¡CAMARERO! Nos faltan dos bebidas 🧋
🤵🏻‍♂️ - ¡Voyyyyyy…!🏃🏻‍♂️💨
¡Vamos a echarle otra manita 👋🏻! 
👩🏻‍💻Coder👨🏻‍💻 - Añade dos bebidas al final de todo del array (en la parte derecha) de forma que dicho
 array quede de la siguiente manera: 
const dinner = ['🍔', '🌭', '🍟', '🍟']; 
Output: ['🍔', '🌭', '🍟', '🍟']
Expected output ['🍔', '🌭', '🍟', '🍟', '🧋', '🧋'] 
 Para ello, esta vez no podrás utilizar métodos de los arrays. Es decir, que lo tendrás que hacer a partir
de la posición N donde N será el número de la posición dentro del array en la que queremos introducir el elemento. 
*/

const dinner1 = ['🍔','🌭','🍟','🍟'];
dinner1[dinner1.length]='🧋';
dinner1[dinner1.length]='🧋';
console.log(dinner1);

/*🗣️ (Ruido de pasos… )🚶🏻‍♂️EL JEFE SE ACERCA! 🗣️
🙍🏻‍♂️ 4 - A ver! Te voy a explicar como se preparan las comandas. Suponiendo que tenemos la comanda anterior, 
primero las bebidas, luego las patatas y finalmente las hamburguesas. 
🤵🏻‍♂️ - ¡Gracias jefe! Me pongo con ello
🙍🏻‍♂️ - Además de esto, este cliente es amigo mío. Por lo cual siempre le pondremos un coctel de bienvenida
 AL PRINCIPIO DE TODO:
¡Vamos a echarle otra manita 👋🏻!
👩🏻‍💻Coder👨🏻‍💻 - Necesito que inviertas el array de tal forma que le expliquemos al camarero el orden que 
tienen que tener las comandas quedando este de la siguiente manera:
const dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 
//Output: ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋', ]
//Expected output ['🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔']

En este caso, quiero que lo hagas de 4 maneras:

1. Utilizando el método **`reverse()`**
2. Sin utilizar ningún método de los arrays (**`bucle for`**) y con array auxiliar.
3. Sin utilizar ningún método de los arrays (**`bucle for`**) y sin array auxiliar.
4. Utilizando **`forEach` y sin array auxiliar!**
*/
//? 1.Usando rever()
 let comanda = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
 console.log(comanda.reverse());

 //? 2.usando bucle for y con array auxiliar
  let comanda2 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
  const salidaComanda = [];
  for (let i = comanda2.length -1; i >= 0; i--){
salidaComanda.push(comanda2[i]);
  }
  console.log(salidaComanda);

  //? 3.usando bucle for y sin array auxiliar
  let comanda3 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
  for(let i = 0; i< Math.floor(comanda3.length / 2); i++){
    const temporal =  comanda3[i];
    comanda3[i]= comanda3[comanda3.length -1 -i];
    comanda3[comanda3.length -1 -i] = temporal;
  }
  console.log(comanda3);

  //? 4. usando bucle forEach y sin auxiliar

  let comanda4 =  ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];

  comanda4.forEach((element,index,array)=> {
const reversaIndex = array.length -1 - index;
if (index < reversaIndex){
// Intercambia los elementos desde los extremos hacia el centro
// Swap elements from both ends towards the center
 [array[index], array[reversaIndex]] = [array[reversaIndex], array[index]];
}
  });
  console.log(comanda4);

/*Además el jefe nos ha comentado que a sus conocidos los recibe con un 
🍸coctel🍸 de cortesía nada más llegar. Para ello, utilizaremos el método unshift() */

const dinner4 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 
//Output ['🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔']
//Expected output ['🍸', '🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔']

//? Usando unshift()

const dinner5 = ['🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔'];
//Insert '🍸' at the beginning of the array
dinner5.unshift('🍸');

console.log(dinner5);
//Output: ['🍸', '🧋', '🧋', '🍕', '🍟', '🍟', '🌭', '🍔']

/*🗣️ UNA NUEVA COMANDA: 🗣️
👱🏽‍♂️5 - ¡CAMARERO! ¡Camarero! Un cervecita 🍺  y un 🥪 por favor
🤵🏻‍♂️ - ¡Marchando señor!
👨🏻‍🦰 - ¡CAMARERO! ¡Camarero! Un cervecita 🍺 y unos cacahuetes 🥜 por favor
🤵🏻‍♂️ - ¡Marchando señor!
Justo en ese momento el cliente se encuentra con un amigo que también tenía otra cuenta junta
👨🏻‍🦰👱🏽‍♂️ - ¡CAMARERO! ¡Camarero! ¿Nos podrías juntar las cuentas por favor?
🤵🏻‍♂️ - ¡Por supuesto caballeros!

¡Coders ayudarle! 
👩🏻‍💻Coder👨🏻‍💻 - Necesito que unas los dos arrays de las cuentas en uno solo llamado combinedTicket:
*/
const ticket01 = ['🍺', '🍺', '🥜']; 
//👨🏻‍🦰 Output: ['🍺', '🍺', '🥜']
const ticket02 = ['🍺', '🥪', '🥙']; 
//👱🏽‍♂️ Output: ['🍺', '🥪', '🥙']

const combinedTicket = []; 
//Output: []
//Expected output ['🍺', '🍺', '🍺', '🥜', '🍺', '🥪', '🥙']

/*
En este caso, quiero que lo hagas de 5 maneras:

1. Utilizando el método **`concat()`**
2. Utilizando spread operator (los `…`)
3. Utilizando el método push
4. Con bucles **`bucle for`** y sin métodos de array
5. Con forEach y sin métodos de array
*/

//? usando concat()
const ticket1 = ['🍺', '🍺', '🥜'];
const ticket2 = ['🍺', '🥪', '🥙'];

const combinandoTicket = ticket1.concat(ticket2);
console.log(combinandoTicket);

//? usando spread 

const cuenta1 = ["🍺", "🍺", "🥜"];
const cuenta2 = ["🍺", "🥪", "🥙"];

const combinandoCuentas = [...cuenta1, ...cuenta2];
console.log(combinandoCuentas);

//? usando push
const cuenta01 = ['🍺', '🍺', '🥜'];
const cuenta02 = ['🍺', '🥪', '🥙'];

const combinedTicket1 = [];
combinedTicket1.push.apply(combinedTicket1, cuenta01);
combinedTicket1.push.apply(combinedTicket1, cuenta02);

console.log(combinedTicket1); 

//? usando bucles for
const ticketOne = ['🍺', '🍺', '🥜'];
const ticketTwo = ['🍺', '🥪', '🥙'];

const combinandoTickets = [];

for (let i = 0; i < ticketOne.length; i++) {
	combinandoTickets.push(ticketOne[i]);
}

for (let i = 0; i < ticketTwo.length; i++) {
	combinandoTickets.push(ticketTwo[i]);
}

console.log(combinandoTickets);

//? usando Foreach

const ticket11 = ["🍺", "🍺", "🥜"];
const ticket22 = ["🍺", "🥪", "🥙"];

const combinedTickets1 = [];

ticket11.forEach((element) => combinedTickets1.push(element));
ticket22.forEach((element) => combinedTickets1.push(element));

console.log(combinedTickets1);

/*
🗣️ PAGÁN EL TICKET: 🗣️
👨🏻‍🦰👱🏽‍♂️ 6 - ¡CAMARERO! Nos hace la cuenta por favor
🤵🏻‍♂️ - ¡Ahora mismo!
👨🏻‍🦰👱🏽‍♂️ - Disculpe, creo que hay un par de errores, nosotros no hemos pedido ni 🥙 y también sobra una cerveza

🤵🏻‍♂️ - Tienen razón, disculpen la equivocación. Lo arreglo ahora mismo
¡Coders ayudarle! 
---------------------------------------------------------------------------
👩🏻‍💻Coder👨🏻‍💻 - Necesito que arregléis la cuenta. Del siguiente array:
*/
const combinedTicket11 = ['🍺', '🍺', '🍺', '🥜', '🍺', '🥪', '🥙']; 
//Expected output ['🍺', '🍺', '🥜', '🍺', '🥪']

/*
Para ello, necesito que elimines la primera 🍺 elemento con shift() y el último con pop()
*/

const combinedTicket111 = ["🍺", "🍺", "🍺", "🥜", "🍺", "🥪", "🥙"];

combinedTicket111.pop(); // Removes the last item in this case '🥙'
combinedTicket111.shift(); // Removes the first item in this case '🍺'

console.log(combinedTicket111);

////////////////////////////////////// 
/* 8. 🗣️ COMANDA RARUNA: 🗣️
👨🏻‍🦰👱🏽‍♂️ - ¡CAMARERO! Quiero un batido de 🥛, 🍓, 🍌 …
🤵🏻‍♂️ - ¿Cómo un batido? No hacemos batidos pero como hoy es mi primer día haré una excepción con usted.
👨🏻‍🍳 - ¡CAMAREROOOOO! ¡BAMBINO! ¿Qué es esto? ¡Per la gloria de la mama!🤌🏻

¡Coders 🆘AYUDA🆘! 
👩🏻‍💻Coder👨🏻‍💻 - El cliente nos ha pedido un batido, algo raro ya que no los solemos hacer en el restaurante. 
Para ello, tendremos que concatenar los ingredientes solicitados por el cliente utilizando el método join(). 
Vamos a ello:
*/ 

const shake= ['🥛', '🍓', '🍌'];
console.log(shake.join('+'));

/*🗣️ ORDENANDO LOS TICKETS: 🗣️
👨🏻‍🦰👱🏽‍♂️ 9- ¡CAMARERO! Quiero un batido de 🥛, 🍓, 🍌 …
🤵🏻‍♂️ - ¿Cómo un batido? No hacemos batidos pero como hoy es mi primer día haré una excepción con usted.
👨🏻‍🍳 - ¡CAMAREROOOOO! ¡BAMBINO! ¿Qué es esto? ¡Per la gloria de la mama!🤌🏻

¡Coders 🆘AYUDA🆘!  
👩🏻‍💻Coder👨🏻‍💻 - Estamos cerrando la tienda y necesitamos realizar un sort de los siguientes tickets:
const tickets = [1, 100000, 21, 30, 4]

Tenemos que ordenarlos de mayor a menor de las siguientes maneras:

1. Utilizando el método **`sort()`**
2. Con un **`bucle for`** sin utilizar métodos de programación funcional.
3. Utilizando spread operator (los `…`)
*/

//? Utilizando For

const numbers = [1, 100000, 21, 30, 4];

// Function to perform Bubble Sort
function bubbleSort(arr) {
	const n = arr.length;

	// Iterate through each element
	for (let i = 0; i < n - 1; i++) {
		// Iterate through remaining elements
		for (let j = 0; j < n - i - 1; j++) {
			// Compare adjacent elements and swap if necessary
			if (arr[j] > arr[j + 1]) {
				// Swap values using destructuring
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}

console.log(bubbleSort(numbers));


//? Utilizando Sort 
const numbers1 = [1, 100000, 21, 30, 4];
console.log(numbers1.sort()); // ❌ Wrong orderned ❌
const sortedNumbers = numbers1.sort((a, b) => a - b); // Ascending numerical sorting
console.log(sortedNumbers);

/* 10 🗣️ ORDENANDO LOS TICKETS: 🗣️
👨🏻‍🦰👱🏽‍♂️ - Camarero la cuenta!
🤵🏻‍♂️ - ¿De qué mesas  sois? 
👨🏻‍🦰👱🏽‍♂️ - Esa de allí! Hemos pedido cafés…
🤵🏻‍♂️ - Un segundo que os busco los tickets!

👩🏻‍💻**Coder**👨🏻‍💻 

**TAREA 1**

Comprueba si en los dos tickets que tenemos tenemos 
solo cafés con leche. Para ello utilizaremos el método **`every()`**. 
Aquí tienes los dos arrays a comprobar:

*/ 
const ticket011 = ['☕', '☕', '☕'];
const ticket022 = ['☕', '🥖', '☕', '🥯', '🍵', '🥐', '🥪'];
// Check if every element in the array is equal to '☕'
const ticket011Result = ticket011.every((element) => element === '☕'); //condicional que verifica si solo hay cafes
console.log('Este ticket solo tiene cafes: '+ticket011Result);
// Output: true (because every element is '☕')
const ticket022Result = ticket022.every((element) => element === '☕');
console.log('Este ticket solo tiene cafes: '+ticket022Result);
// Output: false (because not every element is '☕')