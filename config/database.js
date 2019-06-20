module.exports = {
    username: "root",
    password: "",
    database: "localiza",
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
        connectTimeout: 1000, // mariadb connector option
        useUTC: true,
        collate: "utf8_general_ci",
        timezone: process.env.db_timezone,
    }
};