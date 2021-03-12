const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

//To Make a call
const connectCall = async (fromPhoneNumber, toPhoneNumber) => {
    try {
        const response = await client.calls.create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            from: fromPhoneNumber,
            to: toPhoneNumber
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}

// To Terminate a call
const updateCallStatus = async (serviceId) => {
    try {
        const response = await client.calls(serviceId).update({ status: 'completed' });
        return response;
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = { connectCall, updateCallStatus };