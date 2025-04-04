const express = require('express');
const authorizeRole = require('../middlewares/authorize');

const router = express.Router();

router.get("/admin-only", authorizeRole("admin"), (req, res) => {
    res.status(200).json({ message: "Welcome to the admin area!" });
});

 module.exports = router;