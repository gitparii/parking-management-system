
const express = require('express');

const router = express.Router();


const { registerUser, getAllUsers , login} = require('../controller/userController');
// const login= require('../controller/userController');


// Route to register a new user
router.post('/signup', registerUser);

// Route to get all users
router.get('/users', getAllUsers);

//route to log in 
router.get('/login',login);


module.exports = router;
