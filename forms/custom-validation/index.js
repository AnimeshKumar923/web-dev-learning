const password = document.querySelector('#pass');
const cnfPass = document.querySelector('#cnf_pass');

password.addEventListener('blur',() => {
  if(password.value !== cnfPass.value){
    password.setCustomValidity("not matching passwords!");
  }
})

let promise = new Promise(function(resolve, reject) => {
  
});