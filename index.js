// array of questions for user

// var inquirer = require("inquirer");

// inqurer

const questions = [
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
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
        // MIT

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
        name:"name",
        message:"What does the user need to know about contributing to the repo?"
    },

   

    // {
    //     type: "list",
    //     name:"animal",
    //     message:"What is your favourite animal?",
    //     choices:["lion","cheetah"]
    // }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
