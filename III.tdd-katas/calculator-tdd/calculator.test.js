const add = require('./calculator');

describe('Step 1', function () {
    test('returns 0 for empty string', function () {
        expect(add('')).toBe(0);
    });
    
    test('returns the number for a single number', function () {
        expect(add('1')).toBe(1);
    });
    
    test('returns the sum of numbers for two numbers', function () {
        expect(add('1,2')).toBe(3);
    });
});

describe('Step 2', function () {
    test('handles an unknown amount of numbers', function () {
        expect(add('1,2,3,4')).toBe(10);
    });
});
