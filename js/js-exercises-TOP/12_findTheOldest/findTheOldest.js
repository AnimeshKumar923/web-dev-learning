const findTheOldest = function(people) {
  let date = new Date();
  let currentYear = date.getFullYear();
  let info = [];
  people.map((person) => {
    let calcAge = 0;
    if(person.yearOfDeath == undefined){
      calcAge = currentYear - person.yearOfBirth;
    }else{
      calcAge = person.yearOfDeath - person.yearOfBirth;
    }
    info.push({name: person.name, age: calcAge});
  });

  let oldestAge = 0;
  
  info.map(person => {
    if(person.age > oldestAge){
      oldestAge = person.age;
      }
    })
    
  for (let i = 0; i < info.length; i++) {
    if(oldestAge === info[i].age){
      return info[i];
    }
  } 
};

// Do not edit below this line
module.exports = findTheOldest;
