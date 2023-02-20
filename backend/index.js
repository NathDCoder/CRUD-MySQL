import express from "express";
import mysql from "mysql";

const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root123",
    database: "test"
})

app.get("/", (req, res) => {
    res.json("You Made it Traveller to the BE")
})


app.listen(8800, () => {
    console.log("connected to backend!1")
})