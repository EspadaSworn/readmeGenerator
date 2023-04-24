// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us about your app: What, why and how? '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this repo have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installationMethod',
        message: 'What are the step-by-step instructions for installing this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this app to be used?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators with '
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            fs.writeFile('dist/ReadME.md', generateMarkdown(answers), err => {
                if (err) return console.error(err);

                console.log('README generated successfully...');
            });
        });
}

// Function call to initialize app
init();
