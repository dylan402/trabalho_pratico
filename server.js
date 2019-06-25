const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const user = require('./routes/UserRoutes');
const menu = require('./routes/MenuRoutes');

app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/'));

app.use('/users', user);
app.use('/menu', menu);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

const port = 8081;

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}.`);
});