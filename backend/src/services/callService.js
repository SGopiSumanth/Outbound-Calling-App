const dbQuery = require('../database/query');

const createCall = async (values) => {
    try {
        const createQuery = `INSERT INTO calls(from_number, to_number, duration, service_id, status)
         VALUES($1, $2, $3, $4, $5) returning *`;
        const { rows } = await dbQuery.query(createQuery, values);
        return rows;
    }
    catch (err) {
        throw new Error(err);
    }
}

const getCalls = async () => {
    try {
        const searchQuery = 'SELECT * from calls';
        const { rows } = await dbQuery.query(searchQuery);
        return rows;
    }
    catch (error) {
        return new Error(error);
    }
}

const updateCall = async (values) => {
    try {
        const updateQuery = `UPDATE calls SET status=$1 WHERE service_id=$2 returning *`;
        const { rows } = await dbQuery.query(updateQuery, values);
        return rows;
    }
    catch (err) {
        throw new Error(err);
    }
}

module.exports = { createCall, updateCall, getCalls };