// const { readFile, writeFile } = require('fs');
// const { join } = require('path');
// const { promisify } = require('util');
// const { v4: uuid } = require('uuid/v4')

// const readFileAsync = promisify(readFile);
// const writeFileAsync = promisify(writeFile);

// const DB_FILE = './db.json'; 4
// const DB_FILE_PATH = join(__dirname, DB_FILE);

// class Store {

//     async read() {
//         return readFileAsync(join(DB_FILE_PATH, 'utf8'));
//     }

//     async append(note) {
//         const data = await this.getAllNotes();
//         data.push(note);
//         return writeFileAsync(DB_FILE_PATH, JSON.stringify(data))
//     }

//     async getAllNotes() {
//         const data = await this.read();
//         return JSON.parts(data);
//     }

//     async addNote(note) {
//         const newNote = {
//             id: uuid(),
//             ...note
//         }

//         await this.write(newNote);
//         return newNote;
//     }

//     async deleteNote(id) {
//         const data = await this.getAllNotes();
//         const filtered = data.filter(note => note.id !== id)
//         await this.writeFile(data);
//     }
// }


// module.exports = Store;