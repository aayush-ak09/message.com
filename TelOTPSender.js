const twilio = require('twilio');

// Twilio configuration
const accountSid = 'ACef15cd7b95029da88c7d868cd09e0ab2';
const authToken = '03544df178f655cf1c170545b1eed7b4';
const client = twilio(accountSid, authToken);

// Function to send OTP
module.exports = {
    sendOTP: function(mobileNumber, otp) {
        const message = ` ${otp}`;

        client.messages.create({
            body: message,
            from: '+13346410903',
            to: mobileNumber
        })
        .then(message => console.log('OTP sent:', message.sid))
        .catch(error => console.error('Error sending OTP:', error));
    }
};
