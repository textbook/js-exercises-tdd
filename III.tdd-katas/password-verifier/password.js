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
    return !!password 
        && password.length > 8 
        && uppercase(password).length > 0
        && lowercase(password).length > 0
        && numerical(password).length > 0;
}
