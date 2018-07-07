function safeParseToInt(string) {
    return string ? parseInt(string) : 0;
}

module.exports = function add (string) {
    let total = 0;
    while (true) {
        const nextComma = string.indexOf(',');
        total += safeParseToInt(string);
        if (nextComma === -1) {
            break;
        }
        string = string.slice(nextComma + 1);
    }
    return total;
}
