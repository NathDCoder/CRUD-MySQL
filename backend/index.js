import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root123",
    database: "test"
})

//If there is an Auth error
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Root123';

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("You Made it Traveller to the BE")
})


app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})




app.post("/books", (req, res) =>{
    const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
    const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
    
];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book successfully created")
    })
})


app.delete("/books:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been successfully deleted");
    })
})


app.listen(8800, () => {
    console.log("connected to backend!1")
})