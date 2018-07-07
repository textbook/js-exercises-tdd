function safeParseToInt(string) {
    return string ? parseInt(string) : 0;
}

module.exports = function add (string) {
    let total = safeParseToInt(string);
    let nextComma = string.indexOf(',');
    while (nextComma > -1) {
        string = string.slice(nextComma + 1)
        total += safeParseToInt(string);
        nextComma = string.indexOf(',');
    }
    return total;
}
