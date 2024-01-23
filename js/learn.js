

// *******************************************************************


// const myInt = 5;
// const myFloat = 6.667;
// myInt;
// myFloat;
// let a = typeof myInt;
// let b = typeof myFloat;
// console.log(a)
// console.log(b)

// let myNumber = "74";
// console.log(typeof myNumber);

// myNumber = Number(myNumber) + 3;
// console.log(myNumber);
// console.log(typeof myNumber);

// let num1=9;
// console.log(num1);
// num1++;
// console.log(num1);
/********************************** */

// let a = (4+6+9)/77   ;
// console.log(a)

// let a=10;
// console.log(9*a);
// let b = 7 * a

// const MAX=57;
// let actual = MAX-13;
// let percentage=actual/MAX;
// console.log(percentage);

// const string = "The revolution will not be televised.";
// console.log(string);


// const badString = string;
// console.log(badString);

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"

// const newline = `One day you finally knew
// what you had to do, and began,`;
// console.log(newline);

// const goodQuotes2 = `She said "I'm not going in there!"`;
// console.log(goodQuotes2);

// const name = "Front ";
// const number = 242;
// console.log(name + number); // "Front 242"

// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);
// // number

// const myNum2 = 123;
// const myString2 = String(myNum2);
// console.log(typeof myString2);
// // string

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);
// let part = text.slice(7);
// let part = text.slice(-12);
// let part = text.slice(-12, -6);
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(-12); 
// let part = str.substring(7, 13);  

// let part = str.substr(7, 6); 
// console.log(part);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// let newTextRegEx = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText);
// console.log(newTextRegEx);

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");
// let newTextRegEx = text.replace('MICROSOFT', "W3Schools");
// console.log(newTextRegEx);

// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs"); 
// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2); 

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// let text3 = text1.trimStart();
// let text4 = text1.trimEnd();

// let text = "5";
// let paddedZero = text.padStart(4,"0"); 
// let paddedX = text.padStart(4,"x"); 
// let paddedZend = text.padEnd(4,"0"); 
// let paddedxEnd = text.padEnd(4,"x"); 

// let text = "HELLO WORLD!";
// let char = text.charAt(8); 
// let charUnicode = text.charCodeAt(11); 
// let charProperty = text[11];
// // Split on commas
// console.log(text.split(","))    // Split on spaces 
// console.log(text.split("|"))    // Split on spaces 
// console.log(text.split(" "))    // Split on spaces 
// console.log(text.split(""))    // Split on spaces 
// console.log(char);
// console.log(charUnicode);
// console.log(charProperty);

// let a = 0;
// console.log( Boolean(a) ); // false

// let b = "0";
// console.log( Boolean(b) ); // true

// console.log(a == b); // true!

// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
// console.log( null >= 0 ); // (3) true

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// true || console.log("not printed");
// false || console.log("printed");

// const isBirthday = true;
// const greeting = isBirthday ? "Happy birthday Mrs. Smith — we hope you have a great day!" : "Good morning Mrs. Smith.";
// console.log(greeting);

// let age =  50;

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// console.log(message);


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }

// let age = 5;
// let checkAge = (age>18) ? true: false;
// console.log(checkAge);