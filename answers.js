const assert = require("assert");
const Mathematics = require("./providing.js");
// Create a test suite (group) called Math
describe("Math", () => {
  // Test One: A string explanation of what we're testing
  // also an older function! How do we convert it to ES6 fat arrow notation?
  it("should test if 3*3 = 9", function () {
    // Our actual test: 3*3 SHOULD EQUAL 9
    assert.equal(9, Mathematics.multiply(3, 3));
  });

  it("should test that other numbers are also returned", () => {
    assert.equal(10, Mathematics.multiply(2, 5));
  });

  it("raises an error if the parameter passed in is not a string", () => {
    // Setup
    
    // Exercise
    const test = () => {
     Mathematics.multiply("string", "string")
    };
    // Verification
    assert.throws(test, /only use numbers/);
  });
});


//----

const Mathematics = {
    // for Phase 2: insert code here that has key multiply and value of a function that simply returns 9
    //it should take in two arguments, a and b, but not do anything with them

    //for Phase 4: utilise your two arguments to make the test pass!
    multiply: function(a, b){
        if (isNaN(a) || isNaN(b)) {
            throw new Error("only use numbers");
          }
        return a*b
    }
};
