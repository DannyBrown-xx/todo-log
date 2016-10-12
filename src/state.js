const log = require('./log');

function calculateFinalState(transactions) {
    const todos = new Map();
    transactions.forEach(transaction => {
        switch(transaction.method) {
            case 'ADD':
                const newTodo = transaction.todo;
                todos.set(newTodo.id, newTodo);
                break;
            case 'REMOVE':
                const id = transaction.id;
                todos.delete(id);
                break;
            default:
                console.error('Invalid transaction method' + JSON.stringify(transaction));
                process.exit();
        }
    });

    return Array.from(todos.values());
}

exports.getCurrentState = function getCurrentState() {
    const transactions = log.loadTransactions();
    return calculateFinalState(transactions);
}

exports.getPastState = function(numberStepsBack) {
    const transactions = log.loadTransactions();
    const pastTransactions = transactions.slice(0, transactions.length - numberStepsBack);
    return calculateFinalState(pastTransactions);
}
