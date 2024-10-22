// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  Title,
  Description,
  Installation,
  Usage,
  Credits,
  License,
  Badges,
  Features,
  Tests,
}) => {
  return `
# ${Title}
## Description
${Description}
## Installation
${Installation}
## Usage
${Usage}
## License
${License}
## Badges
${Badges}
## Features
${Features}
## Tests
${Tests}
## Credits
${Credits}
 
`;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Why was this project built?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Installation",
      message: "Why installation did you use?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Usage",
      message: "What is the purpose of this project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "License",
      message: "Do you have the proper license?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "Badges",
      message: "Do you have the proper badges?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Features",
      message: "Do you have the proper features?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Tests",
      message: "Have you conducted the proper tests?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Credits",
      message: "Did you recieve any help while building this project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please give a descirption.");
          return false;
        }
      },
    },
  ])
  .then(function (response) {
    console.log(response);
    const generated = generateMarkdown(response);

    // TODO: Create a function to write README file
    fs.writeFile("README.md", generated, (err) => { //overwrites the readme
      err ? console.log(`Error: ${err}`) : console.log("Success!");
    });
  });

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
