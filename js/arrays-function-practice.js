// https://javascript.info/array-methods#tasks

// function camelize(str){
//   let split = str.split('-');
//   console.log(split);
//   split.map((word, index) => {

//   })
//  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
// }

// console.log(camelize("background-color"));
// camelize("list-style-image");
// camelize("-webkit-transition");

// let arr = [5, 3, 8, 1];
// let res = [];
// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, a, b){
//   return arr.filter((item) => item >= a && item <=b)
// };
// // console.log( filtered ); // 3,1 (matching values)

// // console.log( arr ); // 5,3,8,1 (not modified)

// // console.log(filterRangeInPlace(arr, 1, 4));

// function filterRangeInPlace(arr, a, b){
//   return arr.filter((item) => item >= a && item <=b);
// }


// let arr = [5, 2, 1, -10, 8];
// let resArr = arr.slice();

// ... your code to sort it in decreasing order
// descending bubble sort
// for (let i = 0; i < resArr.length; i++) {
//   let flag = 0;
//   for (let j = 1; j < resArr.length; j++) {
//     if(resArr[j] > resArr[j-1]){
//       let temp = resArr[j];
//       resArr[j] = resArr[j-1];
//       resArr[j-1] = temp;
//       flag = 1;
//     }
//   }
//   if(flag == 0){
//     break;
//   } 
// }


//alternative using in-built functions
// resArr.sort((a,b) => b-a);
// console.log( resArr ); // 8, 5, 2, 1, -10
// console.log(arr.sort().reverse())


// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr)

// function copySorted(arr){
//   return arr.slice().sort();
// }

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];
// // console.log(users[1])

// let names = users.map((item) => item.name);


// // console.log( names ); // John, Pete, Mary

// let usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// function sortByAge(arr){
//   arr.sort((a,b) => a.age-b.age)
  
// }
// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete


// let arr = [1, 2, 3];

// shuffle(arr);
// console.log(arr)
// // arr = [3, 2, 1]

// shuffle(arr);
// console.log(arr)
// // arr = [2, 1, 3]

// shuffle(arr);
// console.log(arr)
// // arr = [3, 1, 2]
// // ...

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

//     // swap elements array[i] and array[j]
//     // we use "destructuring assignment" syntax to achieve that
//     // you'll find more details about that syntax in later chapters
//     // same can be written as:
//     // let t = array[i]; array[i] = array[j]; array[j] = t
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//   let ages = arr.map(user =>{
//     return user.age;
//   });
//   console.log(ages);
//   let total = 0;
//   ages.forEach(element => {
//     total += element;
//   });
//   return total/ages.length;
// }

// optimized using reduce;

// function getAverageAge(users){
//   return users.reduce((total, user) => total + user.age, 0)/ users.length;
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// function unique(arr) {
//   let result = [];
//   // console.log(arr)
//   arr.forEach(element => {
//     if(!result.includes(element)){
//       result.push(element);
//   }});

//   return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O





let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}


console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
