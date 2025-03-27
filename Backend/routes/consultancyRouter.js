const express = require('express');
const consultancyRouter = express.Router();
const ConsultancyData = require('../models/ConultancyModel');

// POST endpoint to save consultancy data
// router
consultancyRouter.get('/', async (req, res) => {
    try {
      const consultancyEntries = await ConsultancyData.find(); // Get all entries from consultancyData collection
    //   console.log("Consultancy Data Fetched:", consultancyEntries);

    //   res.json(consultancyEntries);  // Respond with the fetched data
      res.status(200).send(JSON.stringify(consultancyEntries))
    } catch (err) {
      res.status(500).json({ message: 'Error fetching consultancy data', error: err.message });
    }
  });




consultancyRouter.post('/', async (req, res) => {
  const { name, age, address, gender, disease, doctor, dateOfAppointment, timing, mobile, email, fee } = req.body;
  console.log("Incoming Consultancy Data:", req.body);

  try {
    const consultancyData = new ConsultancyData({
      name,
      age,
      address,
      gender,
      disease,
      doctor,
      dateOfAppointment,
      timing,
      mobile,
      email,
      fee
    });

    // Save the consultancy data in the database
    await consultancyData.save();
    res.status(201).json({ message: 'Consultation booked successfully', token: generateToken() });
  } catch (err) {
    res.status(400).json({ error: 'Error booking consultation', message: err.message });
  }
});

// Function to generate a unique token (for example purposes)
function generateToken() {
  return Math.floor(1000 + Math.random() * 9000);
}

module.exports = consultancyRouter;
