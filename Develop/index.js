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

// **THANK YOU KYLE SHAKELY

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "proDes",
      message: "Please give a description of your project",
    },
    {
      type: "input",
      name: "inst",
      message: "Please describe the installation description for your project",
    },
    {
      type: "input",
      name: "useInf",
      message: "Please enter usage information",
    },
    {
      type: "input",
      name: "contGuide",
      message: "Please enter contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Please enter test instructions",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your application:",
      choices: ["MIT", "GPLv2", "Apache", "GPLv3", "Unlicense", "Other"],
    },
    {
      type: "input",
      name: "user",
      message: "Please enter your Github username:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter contact email:",
    },
  ])

  .then((answers) => {
    let title = answers.title;
    let proDes = answers.proDes;
    let inst = answers.inst;
    let useInf = answers.useInf;
    let contGuide = answers.contGuide;
    let test = answers.test;
    let license = answers.license;
    let user = answers.user;
    let email = answers.email;
    fs.writeFile("README.md", generateMarkdown(answers), (err) =>
      err ? console.error(err) : console.log("README created!")
    );
  });
