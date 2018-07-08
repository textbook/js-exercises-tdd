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
        it('throws an error for all lowercase', () => {
            expect(() => verify('alllowercase'))
                .toThrow('password must contain at least one uppercase character');
        });

        it('throws an error for all uppercase', () => {
            expect(() => verify('ALLUPPERCASE'))
                .toThrow('password must contain at least one lowercase character');
        });

        it('throws an error for all alphabetical', () => {
            expect(() => verify('AllAlphabetical'))
                .toThrow('password must contain at least one numerical character');
        });
    });
});
