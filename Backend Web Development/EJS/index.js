import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) =>{
    
    res.render("index.ejs");
});

app.post("/submit", (req, res) =>{
    const namecount = req.body["fname"].length + req.body["lname"].length;
    console.log(namecount);
    res.render("index.ejs", {count : namecount});
})
app.listen(port, (req, res) =>{
    console.log(`Server is running on port ${port}`);
});