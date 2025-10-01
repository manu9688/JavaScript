/*
 CALCULANDO EL TOTAL: 🗣️
👨🏻‍🦰👱🏽‍♂️ 7 - ¡CAMARERO! Me he dejado las gafas 🥸 y no llego a ver bien la carta.
 ¿Tienen platos de comida Méxicana? ¿Y Japonesa? Ajam ¿Española también? 
 ¿Comida Noruega no habrá por casualidad?
🤵🏻‍♂️ - El camarero empieza a decir muchos síes y también muchos noes.
👨🏻‍🦰👱🏽‍♂️ - Ajam, ya veo y me podría decir los platos de la categoría…
*/

/*
**TAREA 2**

Desde otro fichero por ejemplo **`index.mjs`** importa el fichero anterior y vamos
 a intentar conseguir realizar una función que retorné todas las categorías distintas 
 pero sin repetirlas. Para ello, utilizamos el método **`map()`**:
*/
import foods from "./foodsEj7.mjs";

const getAllCategories = [...new Set(foods.map(food => food.category))];

console.log(getAllCategories);
//Expected output: [ 'Fast Food', 'Italian', 'Mexican', 'Healthy', 'Japanese' ]

/*
**TAREA 3**

Basándonos en parte en el método desarrollado en la tarea 2, esta vez,
 vamos a hacer otra función que imprima si existe o no una categoría en particular. 
 Para ello, utilizaremos el método **`includes()`**:
*/

const checkItExistsCategory = (category) => getAllCategories.includes(category);
console.log(checkItExistsCategory("Italian")); // Print true
console.log(checkItExistsCategory("Spanish")); // Print false

/*
TAREA 4
Vamos a hacer otro método que ver los distintos platos de un categoría 
si esta existe. Para ello, utilizamos el método filter():
*/


const findCategory = (category) => foods.filter((food) => (food.category === category));
console.log(findCategory('Fast Food'));

/*
**TAREA 5**

Necesitamos calcular el total que ha consumido un cliente. Para ello, usaremos **`map()`**,
 **`filter()`** y **`reduce()`**. La cuenta debe de sacar el resultado con 2 decimales.
  La cuenta para calcular el total será la siguiente:
*/

const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

// Function to calculate the total of the ticket
const calculateTotalTicket = (ticket, foods) =>
	ticket
		// Find the food corresponding to the icon
		.map((item) => foods.find((food) => food.icon === item)) 
		// Filter out items that were not found
		.filter(Boolean) 
		// Sum up the prices
		.reduce((total, food) => total + food.price, 0); 

// Calculate the total of the ticket
const totalTicket = calculateTotalTicket(ticket, foods);
console.log(
	`Total of the ticket: ${JSON.stringify(ticket)} is $${totalTicket.toFixed(2)}`
);