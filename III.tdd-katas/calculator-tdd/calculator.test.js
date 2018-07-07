const add = require('./calculator');

test('returns 0 for empty string', function () {
    expect(add('')).toBe(0);
});
