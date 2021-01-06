// Inside a project, run npm init to start a package.json file and answer the questions!
// You then can use npm install mocha -D to add Mocha into the dependencies in package.json to make it easier for other developers to install using simply ‘npm install’!
// We will then set Mocha in our package.json so we can use it by simply saying npm test by writing: 
// "scripts": {
//   "test": "mocha ./instructions.js" }
// }

//Phase 1: create a test that will fail
//first create a describe block for test suite called Math
//create your first it test with string explaining it 'should test if 3x3 = 9'
//require assert at the top of your document inside a const assert
//also input a function argument that checks if assert equals that checks if Mathematics.multiply(3,3) returns 9
//This should fail when we run npm test! Next we input the minimum amount of code needed for it to not do that.

//Phase 2: provide minimum code
//require Mathematics from the files providing.js
//in the providing file, insert the code needed in the object for .multiply to return 9 as well as exporting Mathematics

// Phase 3: Entering the red AGAIN
// next, create an it block that uses the script 'should test other number' that tests whether Mathematics.multiply(2,5)
//this will fail when we run npm test!

//Phase 4: Entering the green again
//Edit your Multiply function to use the arguments passed to it so both tests work

//Phase 5: Edge Cases
//create an it test that tests what happens if you input a string
//create a function called test that calls the multiply function from Mathematics with two arguments that are strings
//verify that this is an error by using assert.throw(test, /only use numbers/)
//this will fail, next we return to the green!

//Phase 6:
// in the multiply function, create an if statement that checks if a OR b is NaN (not a number!)
// if it isn't, then throw a new error with the string inside it that says "ERROR: only use numbers"