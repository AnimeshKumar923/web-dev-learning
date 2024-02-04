const reverseString = function(str) {
    
    let strArray=str.split("");
    
    let outArray="";
    for(let i=strArray.length-1; i>=0; i--){
        outArray+=strArray[i];
    }
    return outArray;
    // console.log(strArray);
    // console.log(outArray);
};

// reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
