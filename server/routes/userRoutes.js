
const express = require('express');

const router = express.Router();


const { registerUser, getAllUsers } = require('../controller/userController');


// Route to register a new user
router.post('/signup', registerUser);

// Route to get all users
router.get('/users', getAllUsers);

// //FOR PARKING SPACE 

// const {
//     getAllParkingSlots,
//     updateParkingSlot,
//     createParkingSlots,
//   } = require('../controller/userController');


//   // Routes
// router.get('/parking-slots', getAllParkingSlots);
// router.put('/parking-slots/:id', updateParkingSlot);
// router.post('/parking-slots', createParkingSlots);

module.exports = router;
