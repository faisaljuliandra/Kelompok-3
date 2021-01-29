const express = require('express');
const app = express()
const port = 3000

app.use(express.static('views'));
app.set('view engine', 'ejs');

const rootRoute = require('./route/rootRoute.js');
app.use(rootRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 
