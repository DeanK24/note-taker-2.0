const router = require('express').Router();
const notes = require('../../Develop/db/db.json');
const {v4:uuid} = require('uuid');
const fs = require('fs');
const path = require('path');


router.get('/notes', (req, res) => {
    res.json(notes);
});

router.get('/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            res.json(notes[i]);
        }
    }
});

router.post('/notes', (req, res) => {
    const createNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uuid()
    }
    notes.push(createNote)
    fs.writeFileSync(path.join(__dirname, './db/db.json'),
    JSON.stringify(notes, null, 2))
    res.json(notes);
});

module.exports = router;