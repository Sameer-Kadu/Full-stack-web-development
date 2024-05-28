import express from "express";

const app = express();
const port = 3000;

const day = new Date();
const today = day.getDay();
console.log(today);

let type = "a Weekday";
let ad = "It's time to work hard";

if( today === 0 || today === 6)
    {
        type = "a Weekend";
        ad = "It's time to have some fun";
    }

app.get("/", (req, res) =>{
    res.render("index.ejs", {dayType: type , advice: ad});
});

app.listen(port, (req, res) =>{
    console.log(`Server is running on port ${port}`);
});