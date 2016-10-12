const fs = require('fs');

const LOG_FILE_LOCATION = 'todo.jsonl';

const loadRaw = function loadRaw() {
    try {
        return fs.readFileSync(LOG_FILE_LOCATION, encoding='utf8');
    } catch(error) {
        console.error('Log file doesn\'t exist');
        process.exit();
    }
}

const loadTransactions = function loadTransactions() {
    return loadRaw().split('\n').filter(line => line != '').map(JSON.parse);
}

const appendObject = function appendObject(data) {
    fs.appendFileSync(LOG_FILE_LOCATION, JSON.stringify(data) + '\n', encoding='utf8');
}

const display = function display() {
    console.log(exports.loadRaw());
}

exports.loadRaw = loadRaw;
exports.loadTransactions = loadTransactions;
exports.appendObject = appendObject;
exports.display = display;
