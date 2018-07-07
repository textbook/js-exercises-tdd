function safeParseToInt(string) {
    return string ? parseInt(string) : 0;
}

function sum(values) {
    return values.reduce(function (accumulator, value) {
        return accumulator + value;
    }, 0);
}

module.exports = function add (string) {
    let delimiter = ',';
    if (string.indexOf('//') === 0) {
        delimiter = string.split(/\n/)[0].slice(2,);
        // remove slashes, delimiter and newline
        string = string.slice(2 + delimiter.length + 1);
    }
    const splitter = new RegExp(`[${delimiter}\n]`);
    return sum(string.split(splitter).map(safeParseToInt));
}
