// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributing](#Contribution)
  * [Tests](#Test)
  * [Questions](#Questions)

  ## Installation

  ${data.dependencies}

  ## Usage
  ${data.repo}

  ## License

![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Contribution
  ${data.contribution}

  ## Test

  ${data.test}

  ## Questions
  If you have any questions, please contact me on [GitHub](http://github.com/${data.name}), Or, email me at ${data.email}
`;
}

module.exports = generateMarkdown;
