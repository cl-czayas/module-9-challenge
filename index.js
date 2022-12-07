// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const renderLicenseBadge = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [   
    
{   //Title
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    
},
    
{   //Description
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",

},

{   //Installation
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions.",
    
},

{   //Usage
    type: "input",
    name: "usage",
    message: "How is this project used?",
    
},

{   //License
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Apache 2.0",
        "Boost Software 1.0",
        "MIT",
        "Mozilla",
    ],
    
},

{   //GH Username
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    
},

{   //email
    type: "input",
    name: "userEmail",
    message: "What is your email address?",
}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.renderLicenseBadge = renderLicenseBadge(data.license);
        writeToFile("./generated/README.md", data);
    })
}

// Function call to initialize app
init();
