// Una vez completadas las funciones, convertilas en métodos estaticos de la clase Book.
import uuid from "uuid";
import { randomUUID } from "crypto";
import { readFile, writeFile } from "./db";
import { read } from "fs";

interface BookData {
  name: string;
  released: string;
  author: string;
}

class Book {
  static PATH = "./src/database/books.json";
  name;
  released;
  author;
  id;

  constructor(book: BookData) {
    const { name, released, author } = book;
    this.name = name;
    this.released = released;
    this.author = author;
    this.id = Book.createUUID();
  }

  private static createUUID(): string {
    return uuid.v4();
  }

  getAge() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const releasedDate = Number(this.released);

    return currentYear - releasedDate;
  }
  static findBookByTitle(title: string) {
    const books = readFile();
    const foundBook = books.find((book) => book.name === title);

    if (!foundBook) {
      return "BOOK_NOT_FOUND";
    }
    return foundBook;
  }

  static uploadNewBook(book: Book): boolean {
    const isBookOnDB = Book.findBookByTitle(book.name);
    const books = readFile()
    typeof isBookOnDB != "string" ? false : books.push(book);
    writeFile(books)
    return true;
  }
}
console.log("hola");
export {}; // Exportá los métodos estaticos
