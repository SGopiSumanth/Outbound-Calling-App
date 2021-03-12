var userController = require('../controllers/userController');
const express = require('express');

const router = express.Router();

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

module.exports = router;