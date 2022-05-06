const express = require('express');
const PORT = process.env.PORT || 3001
const routeNotes = require('./routes/routesNotes/notesRoutes');
const routesHtml = require('./routes/htmlRoutes/htmlRoutes');
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// parse incoming JSON data
app.use(express.json());

app.use('/api', routeNotes);
// app.use('/', routesHtml);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});