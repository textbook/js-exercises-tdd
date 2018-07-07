const add = require('./calculator');

describe('Step 1', () => {
    test('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
    
    test('returns the number for a single number', () => {
        expect(add('1')).toBe(1);
    });
    
    test('returns the sum of numbers for two numbers', () => {
        expect(add('1,2')).toBe(3);
    });
});

describe('Step 2', () => {
    test('handles an unknown amount of numbers', () => {
        expect(add('1,2,3,4')).toBe(10);
    });
});

describe('Step 3', () => {
    test('handles newlines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });
});

describe('Step 4', () => {
    test('handles changing the delimiter', () => {
        expect(add('//;\n1;2')).toBe(3);
    });
});

describe('Step 5', () => {
    function delayAdding (string) {
        return () => {
            return add(string);
        };
    }

    test('rejects negative numbers', () => {
        expect(delayAdding('1,4,-1')).toThrow('negatives not allowed: -1');
    });

    test('rejects multiple negative numbers', () => {
        expect(delayAdding('1,4,-1,-4')).toThrow('negatives not allowed: -1, -4');
    });
});

describe('Step 6', () => {
    test('ignores big numbers', () => {
        expect(add('999,1000,1001')).toBe(1999);
    });
});
