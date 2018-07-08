function matches (string, rule) {
    return string.split('').filter(letter => letter === rule(letter));
}

function uppercase (string) {
    return matches(string, letter => letter.toUpperCase());
}

function lowercase (string) {
    return matches(string, letter => letter.toLowerCase());
}

module.exports = function verify (password) {
    return !!password 
        && password.length > 8 
        && uppercase(password).length > 0
        && lowercase(password).length > 0;
}
