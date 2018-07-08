const verify = require('./password');

describe('Password Verifier', () => {
    it('throws an error for null', () => {
        expect(() => verify(null)).toThrow('password must be a string');
    });

    describe('length requirements', () => {
        it('does not throw an error for length greater than 8', () => {
            expect(() => verify('9Charactr')).not.toThrow();
        });

        it('throws an error for length less than or equal to 8', () => {
            expect(() => verify('8Chractr'))
                .toThrow('password must contain more than 8 characters');
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
