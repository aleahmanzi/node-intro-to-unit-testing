const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

  // test the normal case
  it('remainder should be 0', function() {
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 18, expected: 'fizz'},
      {num: 40, expected: 'buzz'},
      {num: 4, expected: 4},
      {num: 'a', expected: '`num` must be a number'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

    it('should raise error if args not numbers', function() {
    const badInputs = [
      ['a'],
    ];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });

});