function safeParseToInt(string) {
    return string ? parseInt(string) : 0;
}

function sum(values) {
    return values.reduce(function (accumulator, value) {
        return accumulator + value;
    }, 0);
}

module.exports = function add (string) {
    return sum(string.split(',').map(safeParseToInt));
}
