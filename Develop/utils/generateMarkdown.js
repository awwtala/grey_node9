// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""; // Return an empty string if no license is provided
  }

  // Define badges for different licenses
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPL 3.0":
      return "![License: GPL 3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
    // Add more cases as needed for other licenses
    default:
      return ""; // Return an empty string for unrecognized licenses
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""; // Return an empty string if no license is provided
  }

  // Define links for different licenses
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)";
    // Add more cases as needed for other licenses
    default:
      return ""; // Return an empty string for unrecognized licenses
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""; // Return an empty string if no license is provided
  }

  // Generate the license badge and link
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  // Return the complete license section
  return `
## License
${badge}
This project is licensed under the ${license} license.  
For more information, see ${link}.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
