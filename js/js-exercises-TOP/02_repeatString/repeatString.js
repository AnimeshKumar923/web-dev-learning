const repeatString = function(string, count) {
    
    let collection=string;

    if(count===1){
        return collection;
    }
    
    if(count===0){
        return collection="";
    }

    if(count<0){
        return collection=`ERROR`;
    }

    if(string===""){
        return collection="";
    }
    while(count>1){
        collection+=string;
        count--;
    }
    return collection;
};

// Do not edit below this line
module.exports = repeatString;
