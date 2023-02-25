// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

function showBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `##### Click to learn more about this license: [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT "Click to view the MIT License on opensource.org")`;
    case "GPLv2":
      return `The GPL is a free software license, and therefore it permits people to use and even redistribute the software without being required to pay anyone a fee for doing so.`;
    case "Apache":
      return `##### Click to learn more about this license: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPLv3":
      return `
      1. Anyone can copy, modify and distribute this software.
      2. You have to include the license and copyright notice with each and every distribution.
      3. You can use this software privately.
      4. You can use this software for commercial purposes.
      5. If you dare build your business solely from this code, you risk open-sourcing the whole code base.
      6. If you modify it, you have to indicate changes made to the code.
      7. Any modifications of this code base MUST be distributed with the same license, GPLv3.
      8. This software is provided without warranty.
      9. The software author or license can not be held liable for any damages inflicted by the software.
      `;
    case "Unlicense":
      return `##### Click to learn more about this license: [![License](https://img.shields.io/badge/License-unlicense-blue.svg)](https://opensource.org/licenses/unlicense)`;
    case "Other":
      return `User provided license without provided information or link`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${showBadge(data.title)} 
${data.proDes}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage-information">Usage</a></li>
    <li><a href="#guidelines-for-contributing">Contributing</a></li>
    <li><a href="#test-instructions">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Installation
${data.inst}
## Usage Information
${data.useInf}
## Guidelines for Contributing
${data.contGuide}
## Test Instructions
${data.test}
## License
${renderLicenseLink(data.license)}
## Questions
https://github.com/${data.user}
${data.email}
`;
}

module.exports = generateMarkdown;
