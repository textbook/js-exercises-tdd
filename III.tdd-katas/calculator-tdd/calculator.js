function safeParseToInt(string) {
    return string ? parseInt(string) : 0;
}

module.exports = function add (string) {
    return string.split(',').map(safeParseToInt).reduce((a, b) => a + b, 0);
}
