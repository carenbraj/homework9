
const inquirer = require("inquirer");
const fs = require('fs');
// const generate = require('./utils/generateMarkdown');

// array of questions for user
inquirer.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
        
    },
    {
        type: "input",
        message: "Please provide your project's description",
        name: "description",
        
    },
    {
        type: "input",
        message: "Please provide the installation instructions",
        name: "installation",
        
    },
    {
        type: "input",
        message: "Please provide the project usage",
        name: "usage",
        
    },
    {
        type: "list",
        message: "What type of license would you like",
        name: "licence",
        choices:["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        message: "Please provide the contributing parties",
        name: "contributing",
        
    },
    {
        type: "input",
        message: "Please provide the project tests",
        name: "test",
        
    },
    {
      type: "input",
      message: "What is your repo link",
      name: "repo",
      
  },
    {
        type: "input",
        message: "What is your github user name?",
        name: "username",
        
    },
])

    .then((userResponse)=>{

    const data = writeHTML(userResponse)
    fs.writeFile("index.html", data, function(){
      console.log("success")
    })
  })
    
        function writeHTML(userObj){
            console.log("inside of the HTML", userObj)
            return `
            <!doctype html>
          <html lang="en">
            <head>
              <!-- Required meta tags -->
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          
              <!-- Bootstrap CSS -->
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
          
              <title>Hello, ${userObj.title}</title>
            </head>
            <body>
              <h1>${userObj.description}</h1>
              <button class="btn primary"><a>www.github.com/${userObj.installation}</a><button>
              <h2>${userObj.usage}</h2>
              <h2>${userObj.licence}</h2>
              <h2>${userObj.contributing}</h2>
              <h2>${userObj.test}</h2>
              <h2>${userObj.repo}</h2>
              <h2>${userObj.username}</h2>
          
              <!-- Optional JavaScript -->
              <!-- jQuery first, then Popper.js, then Bootstrap JS -->
              <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
            </body>
          </html>
            `
          }



function init() {

}

init();
