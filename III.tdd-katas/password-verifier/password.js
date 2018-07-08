module.exports = function verify (password) {
    return !!password && password.length > 8;
}
