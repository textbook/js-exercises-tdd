const verify = require('./password');

describe('Password Verifier', () => {
    it('returns false for null', () => {
        expect(verify(null)).toBe(false);
    });

    describe('length requirements', () => {
        it('returns true for length greater than 8', () => {
            expect(verify('nineChars')).toBe(true);
        });

        it('returns false for length less than or equal to 8', () => {
            expect(verify('eightChr')).toBe(false);
        });
    });

    describe('case requirements', () => {
        it('returns false for all lowercase', () => {
            expect(verify('alllowercase')).toBe(false);
        });

        it('returns false for all uppercase', () => {
            expect(verify('ALLUPPERCASE')).toBe(false);
        });
    });
});
