// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.proDes}
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Installation">Installation</a></li>
    <li><a href="#Usage-Information">Usage</a></li>
    <li><a href="#Guidelines-for-Contributing">Contributing</a></li>
    <li><a href="#Test-Instructions">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
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
`;
}

module.exports = generateMarkdown;
