// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if(license==="MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if(license==="IBM"){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } 
  else if(license === "ISC") {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license==="Apache"){
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if(license==="MIT"){
    return 'https://opensource.org/licenses/MIT';
  }
  else if(license==="IBM"){
    return 'https://opensource.org/licenses/IPL-1.0';
  } 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  
  ${data.description} 
  
  ## Table of Contents 
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
   
  ## Usage
  
  ${data.usage}
  
      md
      ![Demo for the command line prompts and output for readme generator](../demo/readme-generator-demo.webm.mov)
     
  
  ## Credits
  
  ${data.contribution}
  
  ## License
  
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ---
  
  ## Tests
  
  ${data.testing}

  ## Questions

  GitHub: https://github.com/${data.question1}

  Email: ${data.question2}

  ${data.question3}

  `;
}


module.exports = generateMarkdown;
