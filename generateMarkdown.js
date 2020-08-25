// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  1.[Installation][#Installation]
  2.[Usage][#usage]
  3.[License][#License]
  4.[Contributing][#Contribution]
  5.[Tests][#Test]
  6.[Questions][#Questions]

  ## Installation

  ${data.installation}

  ## Usage
  ${data.usage}

  ## License

![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Contribution
  ${data.contribution}

  ## Test

  ${data.test}

  ## Questions
  If you have any questions, please contact me on [GitHub](http://github.com/${data.name}), Or, email me at ${data.email}
`;
}

module.exports = generateMarkdown;
