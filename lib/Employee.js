class Employee {
    constructor(type, name, id, email ) {
      this.type = type;
      this.name = name;
      this.id = id;
      this.email = email;
    }
    get getRole() {
        return this.type;
    };
    get getName() {
        return this.name;
    };
    get getId() {
        return this.id;
    };
    get getEmail() {
        return this.email;
    };
}

module.exports = Employee;