const shortid = require('shortid');

exports.createAdd = function createAdd(title, description) {
    const todo = {
        id: shortid.generate(),
        dateAdded: new Date(),
        title: title,
        description: description
    }

    const transaction = 
    {
        method: 'ADD',
        when: new Date(),
        todo: todo
    }

    return transaction;
}

exports.createRemove = function createRemove(id) {
    const transaction = {
        method: 'REMOVE',
        when: new Date(),
        id: id
    }

    return transaction;
}
