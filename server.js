const express = require("express");
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/'));

require('./controller/UserController')(app);
require('./controller/MenuController')(app);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

app.get("/menu", (req, res) => {
    res.sendFile(__dirname + '/view/menu.html');
});

app.get("/menu/add", (req, res) => {
    res.sendFile(__dirname + '/view/add_vehicle.html');
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081.");
});