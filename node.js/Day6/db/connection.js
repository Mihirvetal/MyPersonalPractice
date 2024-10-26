const mysql2= require("mysql2");

const connection = mysql2.createConnection({
    host:"localhost",//optional
    port: 3306,//optional
    user:"root",
    password: "Mihirvetal@203",
    database: "imdb"
});

module.exports = connection;

