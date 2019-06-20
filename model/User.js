const Sequelize = require("sequelize");
const database = require('../config/database.js');

const sequelize = new Sequelize(database);

let validate = sequelize.authenticate()
    .then(() => {
        console.log("Conectado com sucesso ao banco de dados.");
    })
    .catch(err => {
        console.log(err);
    });