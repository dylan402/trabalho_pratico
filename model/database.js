const mongoose = require("mongoose");

const database = require('../config/database.json');

mongoose.connect(`mongodb://${database.host}:${database.port}/${database.database}`, { useNewUrlParser: true, useFindAndModify: false });

let db = mongoose.connection;

db.on('error', err => console.log(err));
db.once('open', () => console.log("Conectado com sucesso ao MongoDB."));

module.exports = mongoose;