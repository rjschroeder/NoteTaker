const fs = require("fs");
const path = require("path");

function readNotes() {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        console.log(JSON.parse(data));
    });
}
readNotes();