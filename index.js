// array of questions for user

var inquirer = require("inquirer");
var fs = reqiure('fs');
var generateMarkdown = require("./generateMarkdown.js")


inquirer.prompt = ([
    {
        // input
        type: "input",
        name: "name",
        message: "What is your GitHub Username?"
    },
    {
        // input
        type: "input",
        name: "email",
        message: "What is your email address"
    },
    {
        // input
        type: "input",
        name: "project",
        message: "What is your your project's name?"
    },
    {
        // input
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        // checkboxes
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "BSD",
        "None"

        ]

    },
    {
        type: "input",
        name:"dependencies",
        message:"What command should be run to install dependencies?"
        // npm i
    },
    {
        // input?
        type: "input",
        name:"test",
        message:"What command should be run to run tests?"
        // npm test
    },
    {
        // input
        type: "input",
        name:"repo",
        message:"What does the user need to know about using the repo?"
    },
    {
        // input
        type: "input",
        name:"contribution",
        message:"What does the user need to know about contributing to the repo?"
    },

function writeToFile(fileName, data,){

}

function init(){

}
init();

]).then(answers => {
    console.log(answers);
    var readMe = data.name.toLowerCase().split(' ').join('') + ".json"
    fs.writeFile(answe + "json", jsonString, function (err){
        if (err){
            return console.log(err);
        }
    })
});

// function to write README file
// function writeToFile(fileName, data) {

// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
