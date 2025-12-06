import { Book } from "./Book";

const book = new Book(
  "b1",
  "Clean Code",
  "Robert C. Martin",
  30,
  10,
  "9780132350884",
  464,
  "Programming"
);

console.log(book.checkStock(5));
console.log(book.addStock(12));
console.log(book.stock);
