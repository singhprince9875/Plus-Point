const express = require("express");
const router = express.Router();
const twilio = require("twilio");

// Replace with your Twilio credentials
// const accountSid = 'AC585751e5b844ba48451cc67776ffae82';
// const authToken = '5bf1aa4a1943b6ba605617c4f98f54a0';
// const accountSid = 'AC992e98d26ca82da496d6d609ffe01ba0';


const accountSid = 'AC88c55f3988c4e594b41d2eac09c31715';
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = twilio(accountSid, authToken);

router.post(`/2010-04-01/Accounts/${accountSid}/Calls`, async (req, res) => {
    console.log("Api hit");
    try {
        console.log("hello")
        // const { to } = req.body;

        const call = await twilioClient.calls.create({
            to:'+919875349484',
            from: '+14788186721',
            url: ' https://api.twilio.com/2010-04-01/Accounts/AC585751e5b844ba48451cc67776ffae82/Calls.json' // TwiML for call
        });
        // console.log(call.from)

        res.status(200).json({ message: "Call initiated", sid: call.sid });
    } catch (error) {
        console.error("Error initiating call:", error.message);
        res.status(402).json({ error: error.message,message:"error aa raha h" });
    }
});

module.exports = router;
