const removeFromArray = function(arr, ...targetArr) {
    for(let j=0; j<targetArr.length; j++){
        for(let i=0; i<arr.length; i++){
            if(arr[i]===targetArr[j]){
                let index=i;
                arr.splice(index, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
