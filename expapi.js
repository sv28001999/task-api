const express = require('express');
let app = express();

app.get('', (req, resp) => {
    resp.send('This is the Home page');
});

app.get('/about', (req, resp) => {
    resp.send('This is the About page');
});

app.get('/help', (req, resp) => {
    resp.send('This is the Help page');
});

app.get('/json', (req, resp) => {
    resp.send({name:'Shivam'});
});

app.listen(2800);