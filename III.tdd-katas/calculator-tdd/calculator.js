function safeParseToInt(string) {
    return string ? parseInt(string) : 0;
}

module.exports = function add (string) {
    let total = safeParseToInt(string);
    if (string.indexOf(',') > -1) {
        total += safeParseToInt(string.split(',')[1]);
    }
    return total;
}
