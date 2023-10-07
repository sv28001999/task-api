const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');
// console.log(`${publicPath}\\help.html`);

app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`);
});

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/login', (req, resp) => {
    resp.sendFile(`${publicPath}/login.html`);
});

app.get('/home', (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`);
});

app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/error.html`);
});

app.listen(2800);