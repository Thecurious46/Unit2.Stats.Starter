// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);
const num = [1,2,3,4,5]
console.log(num)

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split("0,2");{
console.log(stringArray[1])
}

// Convert the array of strings into an array of numbers.
const numbers = [number];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(4);
  console.log(i)
}

// Peform some calculations on the numbers.
console.log(numbers);
const numbers = [1,2,3,4,5]
cont length = math.length(numbers)
console.log(`You have given ${getLength(numbers: number[])} numbers.`);

const numbers = [1,2,3,4,5]
const sum = Math.sum(numbers)
console.log(`The sum of your numbers is ${getSum(numbers: number[])}.`);

const numbers = [1,2,3,4,5]
const Math.mean(numbers)
console.log(`The mean of your numbers is ${getMean(numbers: number[])}.`);

const numbers = [1,2,3,4,5]
const min = Math.min(numbers)
console.log(`The smallest of your numbers is ${getMin(numbers: number[])}.`);

const numbers = [1,2,3,4,5]
const max = Math.max(numbers)
console.log(`The largest of your numbers is ${getMax(numbers: number[])}.`);

const numbers = [1,2,3,4,5]
const range = Math.range(numbers)
console.log(`The range of your numbers is ${getRange(numbers: number[])}.`);

if (num %2 == 0){
  is odd = 'number is odd'
  console.log(isodd)
}
  else{
    is odd = 'number is even'
    cpnsole.log('iseven')
  }

console.log(`The even numbers you gave are ${getEvens(numbers: number[])}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers: number[-])}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * let numlength = num.length;
 * console.log(numlength)
 * 
 * let nummean = num.mean;
 * console.log (nummean)
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
}
