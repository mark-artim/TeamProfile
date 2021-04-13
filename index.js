// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Mgr = require('./lib/Manager');
const Eng = require('./lib/Engineer');
const Int = require('./lib/Intern');
const MakePage = require('./src/page-template');
const { makeEmptyAggregatedTestResult } = require('@jest/test-result');

// const { report } = require('process');

// TODO: Create an array of questions for user input
const employees = [];
const prompts = [
    {
        type: 'input',
        message: 'What is the Manager\'s name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the Manager\'s ID#?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the Manager\'s email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the Manager\'s office number?',
        name: 'ofcnum'
    },
    {
        type: 'list',
        message: 'Would you like to add more employees?',
        choices: ['Yes', 'No'],
        name: 'addemp'
    }
]

// TODO: Create a function to prompt to enter the team manager’s name, employee ID, email address, and office number

function init() {
    inquirer.prompt(prompts)
    .then((response) => {
        var ae = '';
        ae = response.addemp;
        const emp = new Mgr("mgr",response.name,response.id,response.email,response.ofcnum);
        employees.push(JSON.stringify(emp));

        if (ae === "Yes") {
            addEmp();
        } else {
            console.log("There are no employees.");
            makeHeader(employees);
        }
    });
}

//WHEN I select the engineer option THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//WHEN I select the intern option THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team funtion addEmp()

const addEmpPrompts = [
    {
        type: 'list',
        message: 'Would you like to add an Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
        name: 'engorint'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'name',
        when: (answers) => answers.engorint === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s ID#?',
        name: 'id',
        when: (answers) => answers.engorint === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email address?',
        name: 'email',
        when: (answers) => answers.engorint === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s Github name?',
        name: 'gitorschool',
        when: (answers) => answers.engorint === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
        when: (answers) => answers.engorint === 'Intern'
    },
    {
        type: 'input',
        message: 'What is the Intern\'s ID#?',
        name: 'id',
        when: (answers) => answers.engorint === 'Intern'
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email address?',
        name: 'email',
        when: (answers) => answers.engorint === 'Intern'
    },
    {
        type: 'input',
        message: 'What is the Intern\'s School name?',
        name: 'gitorschool',
        when: (answers) => answers.engorint === 'Intern'
    },
    {
        type: 'list',
        message: 'Would you like to add more employees?',
        choices: ['Yes', 'No'],
        name: 'addemp'
    }
]

function addEmp() {
    inquirer.prompt(addEmpPrompts)
    .then((response) => {
        var ae = ''; //add employee
        var ei = ''; // engineer or intern
        ae = response.addemp;
        ei = response.engorint;
        if (ei==="Engineer") {
            const emp = new Eng("eng",response.name,response.id,response.email,response.gitorschool);
            employees.push(JSON.stringify(emp));
        } else {
            const emp = new Int("int",response.name,response.id,response.email,response.gitorschool);
            employees.push(JSON.stringify(emp));
        }
        if (ae === "Yes") {
            addEmp();
        } else {
            console.log("End of data entry.");
            makeHeader(employees);
        }
        // fs.writeFile('Index.html', content, (err) =>
        // err ? console.error(err) : console.log('README.md created!'))
    });
}

function makeHeader(employees) {
    // console.log("in makeHeader");
    const content =
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">The Team</h1>
            <p class="lead">Contact Cards</p>
        </div>
    </div>
    `;
    var path = '';
    // const directory = path.join(__dirname, '/dist');
    try {
        if (fs.existsSync("./dist")) {
          console.log("Directory exists.")
        } else {
            fs.mkdir("./dist", (err) => {
                if (err) {
                throw err;
                } 
            console.log("Directory did not exist.");
            })
        };
      } catch(e) {
        console.log("An error occurred when checking for /dist.");
      };
    
    // if (!fs.existsSync(directory)) {
    //     fs.mkdir(directory, (err) => {
    //         if (err) {
    //             throw err;
    //         }
    //     })
    // }

    fs.writeFile('./dist/index.html', content, (err) =>
    err ? console.error(err) : console.log('Index.html header created'))
    makeEmps(employees);
};

function makeEmps(employees) {
// Add Employye cards
    // console.log("Entering makeEmps");
    var html = 
`<div class="card-deck">
`;
    for(i=0; i < employees.length; i++) {
        // console.log("In the loop! "+i);
        var title = JSON.parse(employees[i]).type;
        var name = JSON.parse(employees[i]).name;
        var id = JSON.parse(employees[i]).id;
        var email = JSON.parse(employees[i]).email;
        var ofcnum = JSON.parse(employees[i]).ofcnum;
        var github = JSON.parse(employees[i]).github;
        var school = JSON.parse(employees[i]).school;
        switch(title) {
            case 'mgr':
                var role = "Manager";
                var content =
`
   <div class="card">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <h2 class="card-header">${name}</h2>
            <div class="card-body">
                <h3 class="card-title"><span style="color: white;"><i class="fas fa-mug-hot"></i></span> ${role}</h3>
                <p>Employee ID: ${id}</p>
                <a href="mailto:${email}" class="text-white"> Email: ${email}</a><br>
                <p>Office Number: ${ofcnum}</p>
            </div>
        </div>
    </div>
    `;
                break;
            case 'eng':
                var role = "Engineer";
                var content =
`
   <div class="card">
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <h2 class="card-header">${name}</h2>
            <div class="card-body">
                <h3 class="card-title"><span style="color: white;"><i class="fas fa-code"></i></span> ${role}</h3>
                <p>Employee ID: ${id}</p>
                <a href="mailto:${email}" class="text-white"> Email: ${email}</a><br>
                <a href="https://github.com/"${github} class="text-white"> Github: ${github}</a>
            </div>
        </div>
    </div>
    `;
                break;
            case 'int':
                var role = "Intern";
                var content =
`
   <div class="card">
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <h2 class="card-header">${name}</h2>
            <div class="card-body">
                <h3 class="card-title"><span style="color: white;"><i class="fas fa-user-graduate"></i></span> ${role}</h3>
                <p>Employee ID: ${id}</p>
                <a href="mailto:${email}" class="text-white"> Email: ${email}</a><br>
                <p>School: ${school}</p>
            </div>
        </div>
    </div>
    `;
                break;
            default:
                console.log("Empty Case Statement.")
        }
        html = html + content;      
    };
    html = html + `
    </div>`;

//Add ending HTML
    const contentEnd =
`   
    <script src="https://kit.fontawesome.com/d10a34311c.js" crossorigin="anonymous"></script>
    <script src="./index.js"></script>
</body>
</html>`;

    html = html + contentEnd;

    fs.appendFile('./dist/index.html', html, (err) =>
    err ? console.error(err) : console.log('HTML text has been appended'))
};



//WHEN I decide to finish building my team
//THEN I exit the application, and the HTML is generated
//funtion writeHtml() {};

// Function call to initialize app
init();

//Deprecated Functions
// function makeMgr(employees) {
//     // Add Manager card
//         console.log("About to add manager card...");
//         var name = JSON.parse(employees[0]).name;
//         var title = JSON.parse(employees[0]).type;
//         var id = JSON.parse(employees[0]).id;
//         var email = JSON.parse(employees[0]).email;
//         var ofcnum = JSON.parse(employees[0]).ofcnum;
//         const contentMgr =
//     `   <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//             <div class="card-header">${name}</div>
//             <div class="card-body">
//                 <h5 class="card-title">${title}</h5>
//                 <p>Employee ID: ${id}</p>
//                 <p>Email: ${email}</p>
//                 <p>Office Number: ${ofcnum}</p>
//             </div>
//         </div>`;
//         fs.appendFile('index.html', contentMgr, (err) =>
//         err ? console.error(err) : console.log('Commit logged!'));
//         makeEmps(employees);
//     }