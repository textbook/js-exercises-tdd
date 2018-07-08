module.exports = function verify (password) {
    return !!password 
        && password.length > 8 
        && password.split('').filter(letter => letter == letter.toUpperCase()).length > 0;
}
