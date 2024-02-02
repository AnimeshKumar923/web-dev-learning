const fruits = ["Banana", "Orange", "Apple", "Mango"];
let arr = fruits instanceof Array;

// console.log(typeof fruits);
// console.log(typeof arr);
// console.log(fruits[1]);
let length = fruits.length;

// console.log(fruits[fruits.length - 1]);

// console.log(length);
// console.log(fruit);

// Create an array with three elements:
const points = new Array(40, 100, 1);
// console.log(points);

// Create an array with two elements:
const points2 = new Array(40, 100);
// console.log(points2);

const points3 = new Array(40);  
// console.log(points3);

// console.log(typeof fruits);

let print = Array.isArray(fruits);
// console.log(typeof print);

// console.log(fruits.join(" * "));

// console.log(fruits.length);

// fruits.pop();
// fruits.push("Kiwi");
// console.log(fruits.length);

// const array = [50];
const array = new Array(50);
console.log(array);
array.push(1);
array.push(2);
array.push(3);
console.log(array);
console.log(array[0]);
array[0]=100;
console.log(array[0]);
console.log(array);


const array2 = new Array(10, 11, 12);
console.log(array2);
const array3 = new Array(10, 11);
console.log(array3);
const array4 = new Array(1011);
console.log(array4);
let verify = Array.isArray(array2);
console.log(verify);

// console.log(fruits);
// fruits.shift(); // removes the first array element and "shifts" all other elements to a lower index
// console.log(fruits);

// console.log(fruits);
// fruits.unshift("Lemon") // adds a new element to an array (at the beginning), and "unshifts" older elements
// console.log(fruits);

// console.log(fruits);
// fruits[fruits.length] = "Kiwi"; // add new elements at the end of the array
// console.log(fruits);

// console.log(fruits);
// delete fruits[0];
// console.log(fruits); // leaves the index undefined
// console.log(typeof fruits[0]);

/* Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.
*/

let concatenateStr = fruits.concat(array2); // The concat() method does not change the existing arrays. It always returns a new array
console.log(concatenateStr);

const arr1 = ["hi", "hello"];
const arr2 = ["bye", "goodbye"];
concatenateStr = fruits.concat(arr1, arr2, array2) // merging 2 or more arrays
console.log(concatenateStr);
concatenateStr = fruits.concat("Kiwi"); // passing string as an argument
console.log(concatenateStr);


const cars = ["gtr", "bmw", "audi", "porsche", "koenigsegg", "nissan", "tata", "ferrari", "aston martin", "lamborghini", "911", "M5"]
console.log(cars);
// cars.copyWithin(1, 8);
// cars.copyWithin(2, 0, 2);
// overwrites the existing values
// does not add items to the array
// does not change the length of the array
console.log(cars);

const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr);
const newArr = myArr.flat();
console.log(newArr);

console.log(fruits);
// fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.splice(0,1); // removes 0th element 
// .splice() --> this method modifies the original array
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1); // .toSpliced() --> difference is that this method creates a new array and modifies the elements in that only
console.log(spliced);

const favCars = cars.slice(3,5); // .slice() --> creates a new array; does not remove any elements from the source array
favCars.push(cars[8]);
console.log(favCars);


console.log(cars);
let tostr = cars.toString();
console.log(tostr);
