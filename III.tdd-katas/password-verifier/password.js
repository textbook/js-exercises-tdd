function matches (string, rule) {
    return string.split('').filter(rule);
}

function uppercase (string) {
    return matches(string, letter => letter === letter.toUpperCase());
}

function lowercase (string) {
    return matches(string, letter => letter === letter.toLowerCase());
}

function numerical (string) {
    return matches(string, letter => !isNaN(parseInt(letter)));
}

module.exports = function verify (password) {
    if (!password) {
        throw new Error('password must be a string');
    }
    if (password.length <= 8) {
        throw new Error('password must contain more than 8 characters');
    }
    if (uppercase(password).length === 0) {
        throw new Error('password must contain at least one uppercase character');
    }
    if (lowercase(password).length === 0) {
        throw new Error('password must contain at least one lowercase character');
    }   
    if (numerical(password).length === 0) {
        throw new Error('password must contain at least one numerical character');
    }
}
