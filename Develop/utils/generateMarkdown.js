// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
      return `![License](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
  }
  return '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
      return `[License](#license)`;
  }
  return '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile [here](https://github.com/${data.github}).
  
`;
}

module.exports = generateMarkdown;
