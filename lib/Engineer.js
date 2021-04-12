const Employee = require("./Employee");

class Eng extends Employee {
    constructor(type, name, id, email, github ) {
        super(type, name, id, email);
        this.github = github;
        // const content = {type: "mgr", name: this.name, id: this.id, email: this.email, ofcnum: this.ofcnum};
        // employees.push(content);
    };
    
    printSomething() {
        console.log(this.name, this.id, this.email, this.ofcnum)
    }
}
    
module.exports = Eng; 