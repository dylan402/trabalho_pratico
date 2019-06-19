const express = require("express");
const app = express();

app.use(express.static(__dirname + '/view'));

app.use(require('./routes'));

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081.");
});