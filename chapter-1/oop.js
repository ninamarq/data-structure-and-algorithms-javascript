var obj = new Object()
var obj1 = {}
var obj2 = {
  name: "Marina",
  age: 22,
  nationality: "Brazilian"
}

// Classes como funções
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function() { console.log(this.isbn) }
}

var book = new Book("Title", "200", "Isbn");
console.log(book.title, book.pages, book.isbn)
book.printIsbn()