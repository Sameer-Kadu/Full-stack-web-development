const fs = require("fs");
// fs.writeFile("massage.txt","Hello from sameer", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// });

fs.readFile("./massage.txt", "utf8", (err , data) => {
    if(err) throw err;
    console.log(data);
});
