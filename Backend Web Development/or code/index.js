import inquirer from "inquirer";
import  qr  from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type your Url: ",
            name: "url",
        }
    ])
    .then((answers) => {
        const URL = answers.url
        var qr_svg = qr.image(URL);
        qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
        fs.writeFile("qr.txt", URL, (err) =>
        {
            if(err) throw err;
            console.log("the file is saved");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
