// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "GNU AGPLv3") {
    return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
} else if (license === "GNU GPLv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
} else if (license === "GNU LGPLv3") {
    return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
} else if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
} else if (license === "Boost Software 1.0") {
    return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
} else if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
} else if (license === "MPL 2.0") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
} else {
    return ""
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0)";
} else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0)";
} else if (license === "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0)";
} else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0)";
} else if (license === "Boost Software 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt)";
} else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT)";
} else if (license === "MPL 2.0") {
    return "https://opensource.org/licenses/MPL-2.0)";
} else {
    return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Testing](#-Testing)
  * [Contact Info](#-Contact-Information)

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

## Contributing
${data.contribution}

## Testing
${data.tests}

## Contact Information 
  * GitHub Username: ${data.userName}
  * Contact Email: ${data.userEmail}`;
}

module.exports = generateMarkdown;