const getTheTitles = function(books) {
  let title = [];

  books.map((book) => title.push(book.title));

  return title;
};

// Do not edit below this line
module.exports = getTheTitles;
