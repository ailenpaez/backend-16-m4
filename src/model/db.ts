import { writeFileSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { parse } from "node:path";


interface BookData {
  name: string
  released: string
  author: string
}


class Db {
  private static PATH: string = "./src/database/books.json"; // anotación de tipo

  private static testConnection() {}

  static readFile (): BookData[] {
    const dataTs = readFileSync(Db.PATH, { encoding: "utf8" }); // leer la data buffer en utf
    return JSON.parse(dataTs)
  }

  static writeFile(data: BookData[]) {
    const transformData = JSON.stringify(data);
    writeFileSync(Db.PATH, transformData);
  }
}

const {readFile, writeFile} = Db;


export {readFile, writeFile} 
