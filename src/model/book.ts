// Una vez completadas las funciones, convertilas en métodos estaticos de la clase Book.

import DB from "../database/books.json"
const PATH = "./src/database/books.json"

interface BookData {
  name: string
  released: string
  author: string
}

class Book {
  name
  released
  author
  id

  constructor(book: BookData) {
    const { name, released, author } = book
    this.name = name
    this.released = released
    this.author = author
    this.id = this.createUUID()
  }

  private createUUID(): string {
    return randomUUID()
  }

  getAge() {
    const date = new Date()
    const currentYear = date.getFullYear()
    const releasedDate = Number(this.released)

    return currentYear - releasedDate
  }
  static findBookByTitle(title: string) {
    return DB.find((book) => book.name.includes(title))
  }

  static uploadNewBook(book: Book): boolean {
    const isBookOnDB = this.findBookByTitle(book.name)

    isBookOnDB ? false : DB.push(book)
    const stringifiedDB = JSON.stringify(DB)
    writeFileSync(PATH, stringifiedDB)

    return true
  }
}
console.log("hola")
export { } // Exportá los métodos estaticos
