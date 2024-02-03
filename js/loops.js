const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
//   console.log(cat);
}

function toUpper(string) {
    return string.toUpperCase();
}
  
const upperCats = cats.map(toUpper);
  
// console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

function lCat(cat) {
    return cat.startsWith("L");
}

const filtered = cats.filter(lCat);
const filteredUpperCase = upperCats.filter(lCat);

// console.log(filtered);
// console.log(filteredUpperCase);
// [ "Leopard", "Lion" ]

const compactFiltered = cats.filter((cat) => cat.startsWith("L"));
// console.log(compactFiltered);



const favCats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < favCats.length; i++) {
    if (i === favCats.length - 1) {
      // We are at the end of the array
      myFavoriteCats += `and ${favCats[i]}.`;
    } else {
      myFavoriteCats += `${favCats[i]}, `;
    }
}
  

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
