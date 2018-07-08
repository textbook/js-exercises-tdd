function matches (string, rule) {
    return string.split('').filter(rule);
}

function uppercase (letter) {
    return letter === letter.toUpperCase();
}

function lowercase (letter) {
    return letter === letter.toLowerCase();
}

function numerical (letter) {
    return !isNaN(parseInt(letter));
}

function atLeastOne (rule) {
    return password => matches(password, rule).length > 0;
}

const rules = [
    [p => !!p, 'password must be a string'],
    [p => p.length > 8, 'password must contain more than 8 characters'],
    [atLeastOne(uppercase), 'password must contain at least one uppercase character'],
    [atLeastOne(lowercase), 'password must contain at least one lowercase character'],
    [atLeastOne(numerical), 'password must contain at least one numerical character'],
];

module.exports = function verify (password) {
    rules.forEach(([requirement, error]) => {
        if (!requirement(password)) {
            throw new Error(error);
        }
    });
}
