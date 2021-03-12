const databaseConnection = require('./databaseConnection');

databaseConnection.on('connect', () => {
    console.log('connected to the db');
});

/**
 * Create User Table
 */
const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL, 
        phone_number VARCHAR(255) NOT NULL)`;

    databaseConnection.query(userCreateQuery)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

/**
 * Create Calls Table
 */
const createCallsTable = () => {
    const callsCreateQuery = `CREATE TABLE IF NOT EXISTS calls
    (id SERIAL PRIMARY KEY,
        from_number VARCHAR(255) NOT NULL,
        to_number VARCHAR(255) NOT NULL,
        duration VARCHAR(255) NOT NULL,
        service_id VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL)`;

    databaseConnection.query(callsCreateQuery)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

/**
 * Create All Tables
 */
const createAllTables = () => {
    createUserTable();
    createCallsTable();
};

databaseConnection.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});

module.exports = createAllTables;

require('make-runnable');
