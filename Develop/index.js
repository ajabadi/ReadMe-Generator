const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array for users 
const questions = [{ 
    type: 'input', 
    name: 'title', 
    message: 'What is the title of the project?' },

    { type: 'input', 
    name: 'description', 
    message: 'Provide a description of the project:' }, 
    
    { type: 'input', 
    name: 'Table of Contents', 
    message: 'Table of Contents' },

    { type: 'input', 
    name: 'installation', 
    message: 'What are the installation instructions?' },
    
    { type: 'input', 
    name: 'usage', 
    message: 'How to use the application?' },
    
    { type: 'list', 
    name: 'license', 
    message: 'Choose a license for your project:', 
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'] },
    
    { type: 'input', 
    name: 'contributing', 
    message: 'Please list any contributors. (Use GitHub username)' },
    
    { type: 'input', 
    name: 'tests', 
    message: 'What are the test instructions?' },
    
    { type: 'input', 
    name: 'github', 
    message: 'Enter your GitHub username:' },
    
    { type: 'input', 
    name: 'email', 
    message: 'Enter your email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
