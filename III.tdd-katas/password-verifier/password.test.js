const verify = require('./password');

describe('Password Verifier', () => {
    it('returns false for null', () => {
        expect(verify(null)).toBe(false);
    });

    describe('length requirements', () => {
        it('returns true for length greater than 8', () => {
            expect(verify('ninechars')).toBe(true);
        });
    });
});
