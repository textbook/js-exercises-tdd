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
    [
        [p => !!p, 'password must be a string'],
        [p => p.length > 8, 'password must contain more than 8 characters'],
        [p => uppercase(p).length > 0, 'password must contain at least one uppercase character'],
        [p => lowercase(p).length > 0, 'password must contain at least one lowercase character'],
        [p => numerical(p).length > 0, 'password must contain at least one numerical character'],
    ].forEach(([requirement, error]) => {
        if (!requirement(password)) {
            throw new Error(error);
        }
    });
}
