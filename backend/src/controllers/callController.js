const callService = require('../services/callService');
const twilioCallService = require('../services/twilio/service');
const catchAsync = require('../utils/catchAsync');

const connectCalls = catchAsync(async (req, res, next) => {
    const { fromPhoneNumber, toPhoneNumber, duration } = req.body;
    const twilioCall = await twilioCallService.connectCall(fromPhoneNumber, toPhoneNumber);
    
    const values = [fromPhoneNumber, toPhoneNumber, duration, twilioCall.sid, twilioCall.status];
    const createdCallData = await callService.createCall(values);
    res.status(200).json({
        status: 'success',
        data: createdCallData
    });
});

const getCalls = catchAsync(async (req, res, next) => {
    const data = await callService.getCalls();
    res.status(200).json({
        status: 'success',
        data: data
    });
});

const updateCalls = catchAsync(async (req, res, next) => {
    const serviceId = req.params.serviceid;
    const callDetails = await twilioCallService.updateCallStatus(serviceId);

    const values = [callDetails.status, serviceId];
    const updatedCallData = await callService.updateCall(values);
    res.status(200).json({
        status: 'success',
        data: updatedCallData
    });
});


module.exports = {
    connectCalls, getCalls, updateCalls
}