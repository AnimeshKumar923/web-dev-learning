const removeFromArray = function(arr, ...targetArr) {
    for(let j=0; j<targetArr.length; j++){
        for(let i=arr.length; i>=0; i--){
            if(arr[i]===targetArr[j]){
                let index=i;
                arr.splice(index, 1);
            }
        }
    }
    return arr;
};

console.log(removeFromArray([3,2,2,1,1], 2,1))
// Do not edit below this line
module.exports = removeFromArray;
