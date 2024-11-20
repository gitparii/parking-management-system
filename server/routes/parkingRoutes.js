const express = require('express');
const router = express.Router();
const parkingController = require('../controller/parkingController');

// Route to check parking space availability
router.get('/check-availability', parkingController.checkAvailability);

// Route to register a vehicle
router.post('/register', parkingController.registerVehicle);

module.exports = router;
