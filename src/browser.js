const parser = require('./parser');

module.exports = async function convert(inputData) {
    if (!inputData) {
        throw Error(`'inputData' is empty`);
    }
    return parser.parse(inputData);
}