const express = require('express');
const path = require('path');

const app = express();
const routes = express.Router();
const publicPath = path.join(__dirname, 'public');

const myMiddleWare = (req, resp, next) => {
    if (req.query.age <= 18) {
        next();
    }
    else {
        resp.sendFile(`${publicPath}/error.html`);
    }
};

routes.use(myMiddleWare);

app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/login.html`);
});

routes.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`);
});

app.use('/', routes);
app.listen(2800);