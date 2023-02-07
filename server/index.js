const express = require('express')
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud-db'
});

app.get("/", (req, res) => {

    const sqlInsert = 
    "INSERT INTO movie-reviews (movieName, movieReview) VALUES ('Wakanda Forever', 'good movie');";
    db.query(sqlInsert, (err, result) => {
        res.send("Not Today");
    });
});

app.listen(3011, () => {
    console.log("running on port 3011");
});

