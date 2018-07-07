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

describe('Step 3', function () {
    test('handles newlines between numbers', function () {
        expect(add('1\n2,3')).toBe(6);
    });
});

describe('Step 4', function () {
    test('handles changing the delimiter', function () {
        expect(add('//;\n1;2')).toBe(3);
    });
});
