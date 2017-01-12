const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

  // test the normal case
  it('should get fizz on divisible by 3', function() {
    const normalCases = [12, 24, 33];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

  it('should get buzz on divisible by 5', function() {
    const normalCases = [25, 70, 155];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    });
  });

  it('should get fizzbuzz on divisible by 15', function () {
    const normalCases = [30, 60, 120];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

 it('should return the number not divisible by 15, 5 or 3', function () {
    const normalCases = [4, 16, 89];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal(input);
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