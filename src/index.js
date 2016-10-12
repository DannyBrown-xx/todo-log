const colours = require('colors');
const moment = require('moment');

const log = require('./log');
const state = require('./state');
const transactions = require('./transactions');

const args = process.argv.slice(2);

function formatTodoForConsole(todo) {
    return `${colours.bold.underline.white(todo.title)} [${colours.red(todo.id)}]\n${colours.italic.gray(moment(todo.dateAdded).fromNow())}\n${todo.description}\n\n`;
}

function displayCurrentToDos() {
    const currentState = state.getCurrentState();
    currentState.forEach(todo => {
        console.log(formatTodoForConsole(todo));
    });
}

function displayPast(numberTransactionsInPast) {
    const pastState = state.getPastState(numberTransactionsInPast);
    pastState.forEach(todo => {
        console.log(formatTodoForConsole(todo));
    })
}

const method = (args[0] || '').toLowerCase();
switch(method) {
    case 'add':
        const title = args[1];
        const description = args[2];
        log.appendObject(transactions.createAdd(title, description));
        break;
    case 'rm':
    case 'remove':
        const id = args[1];
        log.appendObject(transactions.createRemove(id));
        break;
    case 'ls':
    case 'list':
        const turnsInPast = args[1];

        if(!turnsInPast) {
            displayCurrentToDos();
        } else if (turnsInPast > 0) {
            displayPast(turnsInPast);
        } else {
            console.error('Turns to go back in time must be a positive integer');
        }
        break;
    case 'log':
        log.display();
        break;
    default:
        console.log('No such method (try "add", "rm", "ls" or "log")');
}
