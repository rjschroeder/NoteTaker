const router = require("express").Router();
const path = require('path');

//standard routes code
//next time, will name routes better.
//having /note and /notes and /noteRoutes was confusing
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;