const router = require("express").Router();
const dbHandler = require("./db/dbHandler");

router.get("/notes", (req, res) => {
    dbHandler.readNotes()
    .then((response) => {
        return res.json(response)
    })
    .catch((err) => {
        res.status(500).json(err)
    });
})

router.post("/notes", (req, res) => {
    dbHandler.addNote(req.body)
    .then((response) => {
        res.json(response)
    })
    .catch((err) => {
        res.status(500).json(err)
    });
})

module.exports = router