// renders license badge
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  return  renderLicenseSection(license)
}

// retrieves url to license badge
function renderLicenseLink(license) {
  return license ? `https://img.shields.io/badge/license-${license}-blue`: '';
}

// formats license bade url into README section
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(license);
  return license ? `![${license} license](${licenseLink})`: '';
}

// takes data from user response and formats into a README format
function generateMarkdown(data) {
  licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenseBadge}
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
