const Employee = require("./Employee");
const Intern = require("./Intern");

class Int extends Employee {
    constructor(type, name, id, email, school ) {
        super(type, name, id, email);
        this.school = school;
        // const content = {type: "mgr", name: this.name, id: this.id, email: this.email, ofcnum: this.ofcnum};
        // employees.push(content);
    };
    
    printSomething() {
        console.log(this.name, this.id, this.email, this.ofcnum)
    }
}
    
module.exports = Int; 