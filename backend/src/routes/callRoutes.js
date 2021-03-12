var callController = require('../controllers/callController');
const express = require('express');

const router = express.Router();

router
    .route('/')
    .get(callController.getCalls)
    .post(callController.connectCalls);

router
    .route('/serviceid/:serviceid')
    .put(callController.updateCalls);

module.exports = router;