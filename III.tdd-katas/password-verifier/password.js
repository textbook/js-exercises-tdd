function uppercase (string) {
    return string.split('').filter(letter => letter == letter.toUpperCase());
}

module.exports = function verify (password) {
    return !!password 
        && password.length > 8 
        && uppercase(password).length > 0;
}
