const express = require("express");

const routes = new express.Router();

routes.get("/", (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

routes.get("/new", (req, res) => {
    res.send("Página NEW");
});

module.exports = routes;