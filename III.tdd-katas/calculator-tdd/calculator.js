function safeParseToInt (string) {
    return string ? parseInt(string) : 0;
}

function sum (values) {
    return values.reduce((accumulator, value) => accumulator + value, 0);
}

const delimiterMarker = '//';

function getDelimiter (string) {
    const firstLine = string.split(/\n/)[0];
    return firstLine.slice(delimiterMarker.length,);
}

function splitString(string, delimiter) {
    return string.split(new RegExp(`[${delimiter}\n]`));
}

function extractValues(string) {
    let delimiter = ',';
    if (string.indexOf(delimiterMarker) === 0) {
        delimiter = getDelimiter(string);
        string = string.slice(delimiterMarker.length + delimiter.length);
    }
    return splitString(string, delimiter).map(safeParseToInt);
}

function validate(values) {
    const negatives = values.filter(value => value < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
}

function removeValuesLargerThan(values, limit) {
    return values.filter(value => value <= limit);
}

module.exports = function add (string) {
    const values = extractValues(string);
    validate(values);
    return sum(removeValuesLargerThan(values, 1000));
}
