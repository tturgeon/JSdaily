var set2 = require('./set2');
const chai = require('chai');
var expect = chai.expect;

describe('Set #2', function(){
  describe('Exercise 1: Zero String', function(){
    it('This function should find all the spaces in a string and replace them with zeros',function(){
      expect(set2.zeroString("Now is the winter of our discontent made glorious summer by this sun of york")).to.eql("Now0is0the0winter0of0our0discontent0made0glorious0summer0by0this0sun0of0york");
    })
  });

  describe('Exercise 2: Flatten Array', function(){
    it('This function takes in a multidimensional array, and must return a flattened, one-dimensional array from it.', function(){
      expect(set2.flatten([1,2,[3,4,[5,6]],7,8,[9,10]])).to.eql([1,2,3,4,5,6,7,8,9,10]);
    });
  });

  describe('Exercise 3: Get Number of Digits', function(){
    it('This function takes in a number, and it must return how many digits that number has', function(){
      expect(set2.getDigits(23892392359)).to.eql(11);
    });
  });
});
