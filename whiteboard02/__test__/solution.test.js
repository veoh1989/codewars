'use strict';

const solution = require('../lib/solutions'); //not null, all nums, duplicates, min 2

describe('Solution Module', function() {
  describe('#Solution', function() {
    it('expects the solution module to return null when supplied string values ', function() {
      expect(solution.final([23, 23, 4, 4, 4, 4, 4, 55, 97, 87, 65, 'hi'])).toBe(null);
    });

    it('expects the solution module to be an array', function() {
      expect(solution.final('puppies')).toBe(null);
    });

    it('expects the solution module to have max and runnerUp', function() {
      expect(solution.final([1, 2, 3, 4, 5, 5])).toEqual({max: 5, runnerUp: 4});
    });

    it('expects the solution module to not contain only two numbers', function() {
      expect(solution.final([])).toBe(null);
      expect(solution.final([1])).toBe(null);
    });
  });
});