const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
    // Positive test
    //constructor(type, name, id, email, github )
    
    it("should return the github is was called with", () => {
        const [type,name,id,email,github] = ['','','',''];
        const obj = new Engineer('eng','Frank','12345','frank@gmail.com','frank-github');
        expect(obj.github).toEqual("frank-github");
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
