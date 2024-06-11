const fibonacci = function(n) {
  if(n===0){
    return 0;
  }
  if(n<0){
    return 'OOPS';
  }
  let res=0, a=0, b=1;
  for (let i = 0; i < n; i++) {
    res = a + b;
    b = a;
    a =res;
    // arr.push(res);
  }
  return res;
};

// Do not edit below this line
module.exports = fibonacci;
