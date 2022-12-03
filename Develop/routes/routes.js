const router = require("express").Router();

router.get("/notes", (req, res) => {
    res.sendFile("./notes.html")
    .catch((err) => {
        res.status(500).json(err)
    });
})

router.get("/", (req, res) => {
    res.sendFile("./index.html")
    .catch((err) => {
        res.status(500).json(err)
    });
})

module.exports = router;