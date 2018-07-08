function uppercase (string) {
    return string.split('').filter(letter => letter == letter.toUpperCase());
}

function lowercase (string) {
    return string.split('').filter(letter => letter == letter.toLowerCase());
}

module.exports = function verify (password) {
    return !!password 
        && password.length > 8 
        && uppercase(password).length > 0
        && lowercase(password).length > 0;
}
