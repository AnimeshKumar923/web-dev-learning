let str = 'hello';

let originalStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
console.log(originalStr)
let revStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse();
console.log(revStr)
// console.log(originalStr)
console.log(isPal(str))
function isPal(){
  let start = 0, end = revStr.length - 1;
// console.log(revStr.length);
  while(start<=end){
    if(originalStr[start]!==revStr[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}