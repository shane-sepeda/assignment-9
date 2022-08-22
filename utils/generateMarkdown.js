// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-success)`;
  }
  else {
    return;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache License 2.0") {
    let link = "https://www.apache.org/licenses/LICENSE-2.0";
    return link;
  }
  else {
    let link = "";
    return link;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, license, github};
  return `# ${data.title}

`;
};

module.exports = generateMarkdown;
