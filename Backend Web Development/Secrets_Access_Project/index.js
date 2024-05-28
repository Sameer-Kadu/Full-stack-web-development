import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/Public/index.html");
});

// 

app.post("/check", (req, res) =>
{
    var pass = req.body["password"];
    if(pass === "Sameer@12")
        {
            res.sendFile(__dirname+"/Public/secret.html");
        }
        else
        {
            res.redirect("/")
        }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  