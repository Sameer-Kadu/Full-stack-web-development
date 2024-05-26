const fs = require("fs");
fs.writeFile("massage.txt","Hello from sameer", (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});
