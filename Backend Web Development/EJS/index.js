import express from "express";

const app = express();
const port = 3000;


let item = ["apple", "banana", "cherry"];






app.get("/", (req, res) =>{
    let time = new Date().getSeconds();
    res.render("index.ejs", {second: time, fruit: item});
});

app.listen(port, (req, res) =>{
    console.log(`Server is running on port ${port}`);
});