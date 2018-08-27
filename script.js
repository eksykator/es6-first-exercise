/* Zadanie 1 */
const hello = 'Hello';
const world = 'World';

const greeting = `${hello} ${world}`;
console.log(greeting);

/* Zadanie 2 */

const multiply = (x, y = 1) => x * y;

console.log(multiply(3,0));

/* Zadanie 3 */

const average = (...numbers) => {
	let sum = 0;
	numbers.forEach(x => sum += x);
	return sum/numbers.length; 
};

console.log(average(1,6,6,8));

/* Zadanie 4 */

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

/* Zadanie 5 */

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;
console.log(firstName, lastName);