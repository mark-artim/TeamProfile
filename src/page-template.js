const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);

class MakePage {
    constructor(employees) {
        this.employees = employees;
        this.content = this.makeHTML()
    }
makeHTML() {
            const content = (employees) =>
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
  <h1 class="display-4">Hi! My name is Mark</h1>
  <p class="lead">I am from Munster.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">My GitHub username is mark-artim</li>
    <li class="list-group-item">LinkedIn: mark@linkedin</li>
  </ul>
</div>
</div>
</body>
</html>`;

// fs.writeFile('index.html', content, (err) =>
// err ? console.error(err) : console.log('README.md created!'))

};
}

module.exports = MakePage;

// Bonus using writeFileAsync as a promise
// const init = () => {
// promptUser()
//   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));
// };