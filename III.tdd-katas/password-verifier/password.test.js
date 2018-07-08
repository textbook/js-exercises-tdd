const verify = require('./password');

describe('Password Verifier', () => {
    it('throws an error for null', () => {
        expect(() => verify(null)).toThrow('password must be a string');
    });

    describe('length requirements', () => {
        it('returns true for length greater than 8', () => {
            expect(verify('9Charactr')).toBe(true);
        });

        it('returns false for length less than or equal to 8', () => {
            expect(verify('8Chractr')).toBe(false);
        });
    });

    describe('character requirements', () => {
        it('returns false for all lowercase', () => {
            expect(verify('alllowercase')).toBe(false);
        });

        it('returns false for all uppercase', () => {
            expect(verify('ALLUPPERCASE')).toBe(false);
        });

        it('returns false for all alphabetical', () => {
            expect(verify('AllAlphabetical')).toBe(false);
        });
    });
});
