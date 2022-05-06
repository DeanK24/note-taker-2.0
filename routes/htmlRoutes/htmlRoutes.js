const router = require('express').Router();
const path = require('path');


router.get('/notes', (req, res) => {
    res.sendfile(path.join(__dirname, '../../public/notes.html'))
});

router.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, '../../public/index.html'))
});

module.export = router;
