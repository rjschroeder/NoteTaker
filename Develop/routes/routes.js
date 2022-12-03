const router = require("express").Router();
const path = require('path');

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"))
    .catch((err) => {
        res.status(500).json(err)
    });
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"))
    .catch((err) => {
        res.status(500).json(err)
    });
})

module.exports = router;