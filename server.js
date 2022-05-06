const express = require('express');
const notes = require('./Develop/db/db.json');
const {v4:uuid} = require('uuid');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            res.json(notes[i]);
        }
    }
});

app.post('/api/notes', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});