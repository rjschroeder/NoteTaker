const fs = require("fs");
const path = require("path");

let noteArray = [];

function parseNotes() {
    return new Promise(resolve => {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            resolve(JSON.parse(data));
        })
    })
}

async function addNote(note) {
    noteArray = await parseNotes();
    noteArray.push(note);
    fs.writeFile("./db.json", JSON.stringify(noteArray), (err) => {
        if (err) {
            console.log(err);
        }
    })
}

note = {
    name: "Test2",
    text: "testText2"
}
addNote(note);