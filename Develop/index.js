// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project
// and sections entitled Description, Table of Contents, Installation, Usage, License,
// Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information,
// contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section
// of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { writeFile } = require('fs').promises;
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

// const questions = () => {
//     return
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "project-description",
      message: "Please give a description of your project",
    },
    {
      type: "input",
      name: "installation-instructions",
      message: "Please describe the installation description for your project",
    },
    {
      type: "input",
      name: "usage-info",
      message: "Please enter usage information",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Please enter test instruction",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
  ])

  .then((answers) => {
    let title = answers.title;

    fs.writeFile("README.md", generateMarkdown(answers), (err) =>
      err ? console.error(err) : console.log("You did it!")
    );
  });

// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// function init() {
//     questions()
//       // Use writeFile method imported from fs.promises to use promises instead of
//       // a callback function
//       .then((answers) => fs.writeFile('README.md', generateMarkdown(answers)))
//     //   .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };

// Function call to initialize app
init();
