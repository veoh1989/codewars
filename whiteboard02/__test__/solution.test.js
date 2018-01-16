'use strict';

const solution = require('../lib/soultion');

describe('Solution Module', function() {
  describe('#Solution', function() {
    it('expects the greet module to return null when supplied non-string values', function() {
      expect(greet(123)).toBe(null);
    });

    it('expects the greet module to return hello world', function() {
      expect(greet('world')).toBe('hello world');
    });

    it('expects the greet module to return null when supplied non-string values', function() {
      expect(greet(123)).toBe(null);
    });

    it('expects the greet module to return hello world', function() {
      expect(greet('world')).toBe('hello world');
    });
  });
});