const verify = require('./password');

describe('Password Verifier', () => {
    it('returns false for null', () => {
        expect(verify(null)).toBe(false);
    });
});
