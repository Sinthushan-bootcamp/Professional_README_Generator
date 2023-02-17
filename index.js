// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown.js');

// question prompts
const questions = [
    {type: 'input', message: "What is your GitHub username?", name: 'name'},
    {type: 'input', message: "What is your email address?", name: 'name'},
    {type: 'input', message: "What is your project's name?", name: 'name'},
    {type: 'input', message: "Please write a short description of your project", name: 'name'},
    {type: 'list', message: "Select the license your project should have?", name: 'name'},
    {type: 'input', message: "What command should be run to install dependencies?", name: 'name'},
    {type: 'input', message: "what command should be run to run tests?", name: 'name'},
    {type: 'input', message: "What does the user need to know about using the repo?", name: 'name'},
    {type: 'input', message: "What does the user need to know about contributing to the repo?", name: 'name'}
];

// create README file, returns success string or an error message
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ?  err : 'Success!'
    );
}


// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
