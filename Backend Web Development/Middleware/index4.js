import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/index.html");
});



function band (req, res, next) {
    bandName = req.body["street"] + req.body["pet"];
    next();
}
app.use(band);

app.post("/submit", (req, res) =>{
    res.send (`<h1>Your band name is:</h1><h2>${bandName}<h2>`);
   
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
