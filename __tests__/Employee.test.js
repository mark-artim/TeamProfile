// const { getMaxListeners } = require('node:process');
const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("should return the type it was called with", () => {
        const [type,name,id,email] = ['','','',''];
        const obj = new Employee('eng','Frank','12345','frank@gmail.com');
        expect(obj.type).toEqual("eng");
    });
    it("should return the name it was called with", () => {
        const [type,name,id,email] = ['','','',''];
        const obj = new Employee('eng','Frank','12345','frank@gmail.com');
        expect(obj.name).toEqual("Frank");
    });
    it("should return the id it was called with", () => {
        const [type,name,id,email] = ['','','',''];
        const obj = new Employee('eng','Frank','12345','frank@gmail.com');
        expect(obj.id).toEqual("12345");
    });
    it("should return the email it was called with", () => {
        const [type,name,id,email] = ['','','',''];
        const obj = new Employee('eng','Frank','12345','frank@gmail.com');
        expect(obj.email).toEqual("frank@gmail.com");
    });




    //should return Frank when passed Frank

//     // Exception test
//     it("should throw an error if not provided a 'text' value", () => {
//       const cb = () => new Employee();
//       const err = new Error(
//         "Expected parameter 'text' to be a non empty string"
//       );
//       expect(cb).toThrowError(err);
//     });
  });
});
