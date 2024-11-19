const User = require('../models/userModel');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, phone, password, role } = req.body;

    // Validate input
    if (!username || !email || !phone || !password || !role) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered!' });
    }

    // Create a new user
    const newUser = new User({ username, email, phone, password, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Export controller functions
module.exports = { registerUser, getAllUsers };
