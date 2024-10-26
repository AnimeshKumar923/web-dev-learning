let y = [];
console.log(y.__proto__);
console.log(y.__proto__.__proto__);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(y.__proto__=== Array.prototype);
y.length