const userService = require('../services/userService');
const catchAsync = require('./../utils/catchAsync');

const createUser = catchAsync(async (req, res, next) => {
    const { name, phoneNumber } = req.body;
    const values = [name, phoneNumber]
    const createdUserData = await userService.createUser(values);
    res.status(200).json({
        status: 'success',
        data: createdUserData
    });
});

const getUsers = catchAsync(async (req, res, next) => {
    const users = await userService.getUsers();
    res.status(200).json({
        status: 'success',
        data: users,
    });
});

module.exports = { createUser, getUsers };