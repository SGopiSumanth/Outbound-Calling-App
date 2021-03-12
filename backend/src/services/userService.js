const dbQuery = require('../database/query');

const createUser = async (values) => {
    try {
        const createQuery = `INSERT INTO users(name, phone_number) VALUES($1, $2) returning *`;
        const { rows } = await dbQuery.query(createQuery, values);
        return rows;
    }
    catch (err) {
        throw new Error(err);
    }
}

const getUsers = async () => {
    try {
        const searchQuery = 'SELECT * from users';
        const { rows } = await dbQuery.query(searchQuery);
        return rows;
    }
    catch (error) {
        return new Error(error);
    }
}

module.exports = { createUser, getUsers };