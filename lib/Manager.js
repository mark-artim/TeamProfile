const Employee = require("./Employee");

class Mgr extends Employee {
    constructor(type, name, id, email, ofcnum ) {
        super(type, name, id, email);
        this.ofcnum = ofcnum;
        // const content = {type: "mgr", name: this.name, id: this.id, email: this.email, ofcnum: this.ofcnum};
        // employees.push(content);
    };
    
    printSomething() {
        console.log(this.name, this.id, this.email, this.ofcnum)
    }
}
    
module.exports = Mgr; 

