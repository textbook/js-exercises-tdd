function safeParseToInt (string) {
    return string ? parseInt(string) : 0;
}

function sum (values) {
    return values.reduce(function (accumulator, value) {
        return accumulator + value;
    }, 0);
}

const delimiterMarker = '//';

function getDelimiter (string) {
    const firstLine = string.split(/\n/)[0];
    return firstLine.slice(delimiterMarker.length,);
}

module.exports = function add (string) {
    let delimiter = ',';
    if (string.indexOf(delimiterMarker) === 0) {
        delimiter = getDelimiter(string);
        string = string.slice(delimiterMarker.length + delimiter.length);
    }
    const values = string.split(new RegExp(`[${delimiter}\n]`)).map(safeParseToInt);
    values.forEach(function (value) {
        if (value < 0) {
            throw new Error(`negatives not allowed: ${value}`);
        }
    });
    return sum(values);
}
