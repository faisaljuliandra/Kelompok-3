const express = require('express')
const app = express.Router();

let counter = 1

app.get('/', (req, res) => {
    res.render('index', {
        news: [
            'nbencana',
            'nekonomi',
            'ngosip',
            'nolahraga'
        ],
        title: [
            'Erupsi Gunung Merapi',
            'Saham-saham di indonesia Merosot',
            'Nasib Hubungan Amanda Manopo dan Billy Syahputra',
            'Badminton Indonesia Kembali Meraih Kemenangan'
        ],
        image: [
            'erupsi-gunung-merapi.jpeg',
            'saham.jpg',
            'amandaBilly.jpg',
            'Badminton.jpg'
        ],
        counter: counter
    })
    counter++
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
