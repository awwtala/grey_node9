// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  license,
  github,
  email,
  tests,
  contributing,
}) => {
  return `
# ${title} ![badge](https://img.shields.io/badge/license-${license}-pink)
## description
${description}

## table of Contents
- [installation](#installation)
- [usage](#usage)
- [license](#license)
- [questions](#questions)
- [tests](#tests)
- [contributing](#contributing)

## installation
${installation}
## usage
${usage}
## license
${license}
## questions
${github} \\
${email}
## tests
${tests}
## contributing
${contributing}
`;
};

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
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
    name: "description",
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
    name: "installation",
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
    name: "usage",
    message: "How will this application be used?",
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
    name: "license",
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
    name: "github",
    message: "What is your github profile?",
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
    name: "email",
    message: "What is your email address?",
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
    name: "tests",
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
    name: "contributing",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // TODO: Create a function to write README file
  fs.writeFile(fileName, data, (err) => {
    //overwrites the readme
    err ? console.log(`Error: ${err}`) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (response) {
    //load the questions, receives the response, activates readme
    console.log(response);
    const generated = generateMarkdown(response);
    writeToFile("README.md", generated);
  });
}

// Function call to initialize app
init(); // activating init
