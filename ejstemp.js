const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, resp) => {
    const detail = {
        name: 'Dark',
        email: 'dark@yopmail.com',
        skill: ['java', 'python', 'JS', 'node', 'sql']
    }
    resp.render('test1', { detail });
})

app.listen(2800);