const express = require("express");
const router = express.Router();
const twilio = require("twilio");

// Replace with your Twilio credentials
const accountSid = 'AC8a594c76bb61e42272036698b61ae558';
const authToken = '18fe939dd8d5bbcc4f8edd219c794bb5';
const twilioClient = twilio(accountSid, authToken);

router.post("/call", async (req, res) => {
    try {
        const { to } = req.body;

        const call = await twilioClient.calls.create({
            to:to, // ambulance number
            from: '+19204770840',
            url: 'http://demo.twilio.com/docs/voice.xml' // TwiML for call
        });

        res.status(200).json({ message: "Call initiated", sid: call.sid });
    } catch (error) {
        console.error("Error initiating call:", error.message);
        res.status(500).json({ error: "Failed to initiate call" });
    }
});

module.exports = router;
