// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };
  
//   for (let code in codes) {
//     console.log(+code); // 49, 41, 44, 1
// }

let sumOfEvens=0;
// let arr=[1,2,3,4,5,6,7,8];
// console.log(sumTripleEvens(arr))
function sumTripleEvens(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2===0){
            array[i]*=3;
            sumOfEvens+=array[i];
        }
    }

    return sumOfEvens;
}
const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr) // Outputs [1, 2, 3, 4, 5]
