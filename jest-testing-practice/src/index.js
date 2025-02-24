import "./style.css";

function capitalize(str) {
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function calculator(a, b) {
  return {
    add: (a, b) => {
      return a + b;
    },
    subtract: (a, b) => {
      return a - b;
    },
    multiply: (a, b) => {
      return a * b;
    },
    divide: (a, b) => {
      return parseFloat((a / b).toFixed(3));
    },
  };
}

function caesarCipher(str, shift) {
  let result = "";
  let charcode = 0;
  let specials = /[^a-zA-Z]/;

  for (let i = 0; i < str.length; i++) {
    if (specials.test(str[i])) {
      result += str[i];
      continue;
    }
    charcode = str[i].charCodeAt() + shift;
    result += String.fromCharCode(charcode);
  }
  return result;
}

function analyzeArray(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
module.exports = {
  capitalize,
  reverseStr,
  calculator,
  caesarCipher,
  analyzeArray,
};
