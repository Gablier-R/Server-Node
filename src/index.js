const express = require('express');
const path = require('path');

const app = express();
const Router = express.Router();

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

Router.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(Router)

app.listen(process.env.PORT || 3333, () => {
    console.log('http://localhost:3333');
})



