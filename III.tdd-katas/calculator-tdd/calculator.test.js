const add = require('./calculator');

test('returns 0 for empty string', function () {
    expect(add('')).toBe(0);
});

test('returns the number for a single number', function () {
    expect(add('1')).toBe(1);
});

test('returns the sum of numbers for two numbers', function () {
    expect(add('1,2')).toBe(3);
});
