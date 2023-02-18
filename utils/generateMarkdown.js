// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// takes data from user response and formats into a README format
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  
  ${data.description}

  ## Table of Contents
  * [installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.install}
  \`\`\`
  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license}.

  ## Contributing
  ${data.contribution}

  ## Tests
  To run test, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. you can find more of my work at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
