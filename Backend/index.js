const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

app.get('/api/chapter/:chapter/shlok/:shlok', (req, res) => {
    const file = path.join(__dirname, '../Data/bhagavad-gita-data/slok', `bhagavadgita_chapter_${req.params.chapter}_slok_${req.params.shlok}.json`);
    res.status(200).sendFile(file);
});

app.get('/api/chapter/:chapter', (req, res) => {
    const file = path.join(__dirname, '../Data/bhagavad-gita-data/chapter/', `bhagavadgita_chapter_${req.params.chapter}.json`);
    res.status(200).sendFile(file);
});