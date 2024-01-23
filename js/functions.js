let str = prompt("Enter word");
console.log(`Input = ${str}`);
console.log(`\nInput string length = ${str.length}`)
capitalize(str);
lastLetter(str);

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let aInt = parseInt(a);
let bInt = parseInt(b);
console.log(`type = ${typeof aInt}`);
const sevenRes = add7(aInt);
console.log(`adding 7 to ${a} = ${sevenRes}`);
const multiplyRes = multiply(aInt,bInt);
console.log(`muliplying ${aInt} with ${bInt} gives = ${multiplyRes}`);



function add7(num){
    let res = num + 7;
    return res;
}

function multiply(num1, num2){
    return res = num1 *num2;
}


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh

function capitalize(str){
    let firstChar = str.slice(0,1);
    let firstCapital = firstChar.toUpperCase();
    let strLength = str.length;
    let remainChars = str.slice(1, strLength);
    remainChars = remainChars.toLowerCase();
    let concatString = firstCapital.concat(remainChars)
    console.log(`Resultant string = ${concatString}\nResultant string length = ${concatString.length}`); 
}


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(str){
    let strLength = str.length;
    let lastChar = str.charAt(strLength-1);
    console.log(`str length = ${strLength}`);
    console.log(`Last string char = ${lastChar}`);
    
}