import { AudioBook } from "./AudioBook";
import { Book } from "./Book";
import { Ebook } from "./Ebook";
import { InventoryManager } from "./InventoryManager";
import { Magazine } from "./Magazine";
import { Pen } from "./Pen";

// const book = new Book(
//   "b1",
//   "Clean Code",
//   "Robert C. Martin",
//   30,
//   10,
//   "9780132350884",
//   464,
//   "Programming"
// );

// console.log(book.checkStock(5));
// console.log(book.addStock(12));
// console.log(book.stock);

const inventoryManager = new InventoryManager();

inventoryManager.addProduct(
  new Book(
    "id1",
    "First Book",
    "Test Author",
    500,
    10,
    "asdasdsad",
    100,
    "Fiction"
  )
);

inventoryManager.addProduct(
  new Magazine(
    "id2",
    "First Magazine",
    500,
    10,
    1,
    "Test Publisher",
    new Date()
  )
);

inventoryManager.addProduct(
  new Ebook(
    "id3",
    "Ebook title 1",
    "Test Author",
    500,
    "https://www.google.com"
  )
);

inventoryManager.addProduct(
  new Ebook(
    "id4",
    "Ebook title 2",
    "Test Author",
    500,
    "https://www.google.com"
  )
);

inventoryManager.addProduct(
  new Book(
    "id5",
    "First Book",
    "Test Author",
    500,
    10,
    "asdasdsad",
    100,
    "Fiction"
  )
);

inventoryManager.addProduct(new AudioBook("id6", "AudioBook title 1", 500, 10));
inventoryManager.addProduct(new AudioBook("id7", "AudioBook title 2", 500, 10));
inventoryManager.addProduct(new Pen("id8", "Pen title 1", 500, 10));

console.log("\n\n" + inventoryManager.generateInventoryReport() + "\n\n");
