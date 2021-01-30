const express = require('express')
const app = express.Router();

app.get('/', (req, res) => {
    res.render('index', {
        news: ['nbencana', 'nekonomi', 'ngosip', 'nolahraga']
    })
})

app.get('/nbencana', (req, res) => {
    res.render('nbencana')
})

app.get('/nekonomi', (req, res) => {
    res.render('nekonomi')
})

app.get('/ngosip', (req, res) => {
    res.render('ngosip')
})

app.get('/nolahraga', (req, res) => {
    res.render('nolahraga')
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
