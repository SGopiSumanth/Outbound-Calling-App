const databaseConnection = require('./databaseConnection');

databaseConnection.on('connect', () => {
    console.log('connected to the db');
});

/**
 * Drop User Table
 */
const dropUserTable = () => {
    const usersDropQuery = 'DROP TABLE IF EXISTS users';
    databaseConnection.query(usersDropQuery)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

/**
 * Drop Calls Table
 */
const dropCallsTable = () => {
    const callsDropQuery = 'DROP TABLE IF EXISTS calls';
    databaseConnection.query(callsDropQuery)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

/**
 * Drop All Tables
 */
const dropAllTables = () => {
    dropUserTable();
    dropCallsTable();
};

databaseConnection.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});


module.exports = dropAllTables;

require('make-runnable');
