const fs = require("fs");
const path = require("path");

let noteArray = [];

function parseNotes() {
    return new Promise(resolve => {
        fs.readFile(path.join(__dirname, "./db.json"), "utf-8", (err, data) => {
            try {
                resolve(JSON.parse(data));
            } catch (err) {
                resolve([]);
            }
        })
    })
}

async function readNotes(){
    return await parseNotes();
}

async function addNote(note) {
    noteArray = await readNotes();
    noteArray.push(note);
    fs.writeFile(path.join(__dirname, "./db.json"), JSON.stringify(noteArray), (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {readNotes, addNote}