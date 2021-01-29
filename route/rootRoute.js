const express = require('express')
const app = express.Router();

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/:path', (req, res) => {
    res.render(req.params.path, {}, (err, html) => {
        if (err) {
            res.render('404');
        } else {
            res.send(html);
        }
    });
})

module.exports = app
