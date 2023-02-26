// // function that returns the license section of README, license link, and or badge
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT "Click to view the MIT License on opensource.org")`;
    case "GPLv2":
      return `<details>
      <summary>GPLv2</summary>
      The GPL is a free software license, and therefore it permits people to use and even redistribute the software without being required to pay anyone a fee for doing so.
      </details>`;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPLv3":
      return `<details>
      <summary>GPLv3</summary>
      <ol>
      <li> Anyone can copy, modify and distribute this software.</li>
      <li> You have to include the license and copyright notice with each and every distribution.</li>
      <li> You can use this software privately.</li>
      <li> You can use this software for commercial purposes.</li>
      <li> If you dare build your business solely from this code, you risk open-sourcing the whole code base.</li>
      <li> If you modify it, you have to indicate changes made to the code.</li>
      <li> Any modifications of this code base MUST be distributed with the same license, GPLv3.</li>
      <li> This software is provided without warranty.</li>
      <li> The software author or license can not be held liable for any damages inflicted by the software.</li>
      </ol>
      </details>`;
    case "Unlicense":
      return `[![License](https://img.shields.io/badge/License-unlicense-blue.svg)](https://opensource.org/licenses/unlicense)`;
    case "Other":
      return `User provided license without information or link`;
    default:
      return "";
  }
}

// function to generate markdown for README. Using <details> puts lists or long chunks of text into a nice dropdown
function generateMarkdown(data) {
  return ` ${renderLicenseLink(data.license)}
  
  # ${data.title} 

<details>
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#project-description">Project Description</a></li>
  <li><a href="#installation">Installation</a></li>
    <li><a href="#usage-information">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#test-instructions">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Project Description
${data.proDes}
## Installation
${data.inst}
## Usage Information
${data.useInf}
## Contributing
### Guidelines
${data.contGuide}
## Test Instructions
${data.test}
## License
${renderLicenseLink(data.license)}
## Questions

### Please reach out via the links below to reach me with additional questions.

#### https://github.com/${data.user}
#### ${data.email}
`;
}
// module export to run the operation
module.exports = generateMarkdown;
