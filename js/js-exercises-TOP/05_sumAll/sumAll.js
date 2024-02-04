const sumAll = function(num1, num2) {
    let sum=0;
    function isNumber(num1, num2){
        if(typeof num1!="number" || typeof num2!="number"){
            return false;
        } else{
            return true;
        }
    }


    if (num1<0 || num2<0 || isNumber(num1, num2)===false) {
        return "ERROR";
    }
    if(num1<num2){
        for(let i=num1; i<=num2; i++){
            sum+=i;
        }
    } else{
        for(let i=num2; i<=num1; i++){
            sum+=i;
        }
    }

    return sum;
};
// sumAll(1, 5);
// Do not edit below this line
module.exports = sumAll;
