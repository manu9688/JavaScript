/*1. **🗣️ LA COMANDA: 🗣️**
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