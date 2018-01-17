'use strict';

const solution = require('../lib/solution');

let trainA = {
  'foo': 3,
  'bar': 4,
};

let trainB = {
  'value': 3,
  'next': {
    'value': 2,
    'next': {
      'value': 1,
      'next': null
    }
  }
};

let trainC = {
  'value': 'foo',
  'next': {
    'value': 2,
    'next': {
      'value': 1,
      'next': null
    }
  }
};


describe('Solution Module', function() {
  describe('#Solution', function() {
    it('expects the solution module to have an initial argument must be an object', function() {
      expect(solution.traverse('liza')).toBe(null);
    });

    it('expects the solution module values cannot be a string', function() {
      expect(solution.traverse(trainC)).toBe(null);
    });

    it('expects the solution module must have value and next', function() {
      expect(solution.traverse(trainA)).toBe(null);
    });

    it('expects the solution module to actually work', function() {
      expect(solution.traverse(trainB)).toBe(6);
    });
  });
});