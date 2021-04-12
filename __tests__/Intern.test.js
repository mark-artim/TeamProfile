const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
    // Positive test
    //constructor(type, name, id, email, github )
    
    it("should return the SCHOOL it was called with", () => {
        const [type,name,id,email,school] = ['','','',''];
        const obj = new Intern('eng','Frank','12345','frank@gmail.com','Purdue');
        expect(obj.school).toEqual("Purdue");
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