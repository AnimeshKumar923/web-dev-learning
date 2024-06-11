const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
let date = new Date();
let currentYear = date.getFullYear();

const findTheOldest = function(people) {
  let info = [];
  people.map((person) => {
    let calcAge = currentYear - person.yearOfBirth;
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
      return info[i].name;
    }
  } 
};

console.log(findTheOldest(people))
// console.log(people[1].yearOfDeath)

console.log(currentYear);