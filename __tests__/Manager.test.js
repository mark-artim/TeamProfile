const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
    // Positive test
    //constructor(type, name, id, email, github )
    
    it("should return the OFFICE NUMBER is was called with", () => {
        const [type,name,id,email,ofcnum] = ['','','',''];
        const obj = new Manager('eng','Frank','12345','frank@gmail.com','OFC123');
        expect(obj.ofcnum).toEqual("OFC123");
    });


    // Exception test
    // it("should throw an error if not provided a 'text' value", () => {
    //   const cb = () => new Engineer();
    //   const err = new Error(
    //     "Expected parameter 'text' to be a non empty string"
    //   );
    //   expect(cb).toThrowError(err);
    // });
  });
});