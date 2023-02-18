// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// question prompts
const questions = [
    {type: 'input', message: "What is your GitHub username?", name: 'username'},
    {type: 'input', message: "What is your email address?", name: 'email'},
    {type: 'input', message: "What is your project's name?", name: 'title'},
    {type: 'input', message: "Please write a short description of your project", name: 'description'},
    {type: 'list', message: "Select the license your project should have?", choices: [
        'MIT', 'Open Software License 3.0', 
        'Microsoft Public License', 
        'Creative Commons license family'
    ], name: 'license'},
    {type: 'input', message: "What command should be run to install dependencies?", name: 'dependencies'},
    {type: 'input', message: "what command should be run to run tests?", name: 'tests'},
    {type: 'input', message: "What does the user need to know about using the repo?", name: 'usage'},
    {type: 'input', message: "What does the user need to know about contributing to the repo?", name: 'contribution'}
];

// create README file, returns success string or an error message
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ?  err : 'Success!'
    );
}


// function to start the prompt and convert data into markdown syntax and write to file
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        data = generateMarkdown(response);
        writeToFile('README.md', data);
    });
}

// Function call to initialize app
init();
