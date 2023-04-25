// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=='None'){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ``;
  }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}

  ## Description
  
  ${data.description}

  ## Installation

  ${data.installationMethod}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}

  ## Contributing

  ${data.credits}

  ## Test

  ${data.tests}

  ## Questions

  View my work at my <a href="github.com/${data.questions}">Github</a> or contact me at ${data.email}






`;
}

module.exports = generateMarkdown;
