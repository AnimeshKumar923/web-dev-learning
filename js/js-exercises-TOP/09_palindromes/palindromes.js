const palindromes = function (str) {
  let processedString = removePunctuation(str);
  let originalStr = processedString.toLowerCase().split('');
  
  let revStr = processedString.toLowerCase().split('').reverse();
  

  let start = 0, end = revStr.length;
  while(start<end){
    if(originalStr[start]!==revStr[start]){
      return false;
    }
    start++;
    end--;
  }
  return true;

};


function removePunctuation(text) {
  let punctuation = /[\.,?!" "]/g;
  let newText = text.replace(punctuation, '');
  return newText;
}


// Do not edit below this line
module.exports = palindromes;