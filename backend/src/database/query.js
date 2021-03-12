const databaseConnection = require('./databaseConnection');

const query = async (queryText, params) => {
    const result = await databaseConnection.query(queryText, params);
    return result;
}

module.exports = { query };
