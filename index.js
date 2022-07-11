// Include packages needed for this application
const inquirer=require('inquirer')
const generateMarkdown= require("./utils/generateMarkdown")
const fs=require('fs') 


// An array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your project title?"
    },
    {
        type:"input",
        name:"description",
        message:"What is your project description?"
    },
    {
        type:"input",
        name:"installation",
        message:"How do you install this application?"
    },
    {
        type:"input",
        name:"usage",
        message:"How do you use this application?"
    },
    {
        type:"list",
        name:"license",
        message:"Choose the following license:",
        choices:["MIT","IBM","Apache", "ISC"]
    },
    {
        type:"input",
        name:"contribution",
        message: "Who contributed to the project (press enter for none)?"
    },
    {
        type:"input",
        name:"testing",
        message:"What are proper tests to run for this application?"
    },
    {
        type:"input",
        name:"question1",
        message:"What is your github username?"
    },
    {
        type:"input",
        name:"question2",
        message:"What is your email?"
    },
    {
        type:"input",
        name:"question3",
        message:"How can others reach out to you with more questions?"
    }
];

// Initializer function for inquirer (using the questions array as the parameter)
function init() {

    inquirer.prompt(questions)
    // after data is collected from user input, the data is then used to write a readme file with the generateMarkdown function
    .then(data=>{
        console.log(data)
       fs.writeFileSync("./output/README.md",generateMarkdown(data) )
    })

}

// Function call to initialize app
init();
