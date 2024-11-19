


const express = require('express');
const { registerUser, getAllUsers } = require('../controller/userController');

const router = express.Router();

// Route to register a new user
router.post('/signup', registerUser);

// Route to get all users
router.get('/users', getAllUsers);

module.exports = router;
