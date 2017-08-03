/*
This test is just to understand the basic structure and syntax for the mocha style written test.
We will be using assert as assertion tool( however these test are so modular that we can easiliy migrate them to other tools like chai)
Other test in the project will cover UI and behavior tests using mocha framework
*/

var assert = require('assert');

describe('Fake test', function() {
  
  it('mk fake test should run successfully', function() {
	  
    assert.equal('Manu', 'Manu');
  });
});