// const User = require('../models/userModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')

// // Register a new user
// const registerUser = async (req, res) => {
//   try {
//     const { username, email, phone, password, role } = req.body;

//     // Validate input
//     if (!username || !email || !phone || !password || !role) {
//       return res.status(400).json({ message: 'All fields are required!' });
//     }

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email is already registered!' });
//     }

//     // Create a new user
//     const newUser = new User({ username, email, phone, password, role });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully!', user: newUser });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// // Get all users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// // Export controller functions

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   // Find user by email
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(400).json({ message: 'User  not found' });
//   }

//   // Validate password
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (isMatch) {
//     return res.status(400).json({ message: 'Invalid credentials' });
//   }

//   // Generate JWT token
//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
//   res.status(200).json({ token });
// };


// module.exports = { registerUser, getAllUsers , login };






const User = require('../models/userModel');
const Wallet = require('../models/walletModel'); // Import the Wallet model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { userName, email, password, phone ,role} = req.body;

    if ( !userName || !email || !password || !phone || !role)
        return res.status(400).json({ message: 'Please fill all the details' });

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      
        userName,
        email,
        phone,
        password: hashedPassword,
        role,
    });

    try {
        // Save the user in the database
        await newUser.save();

        // Create wallet for the new user with an initial balance
        const initialBalance = 0; // Default balance
        const newWallet = new Wallet({
            userId: newUser._id,  // Link wallet to the user
            balance: initialBalance,
            userName, // Ensure the username is associated with the wallet
        });

        // Save the wallet in the database
        await newWallet.save();

        res.status(201).json({
            message: 'User registered successfully, and wallet created.',
            user: {
                id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,
                phone: newUser.phone,
                role:newUser.role
            },
            wallet: {
                balance: newWallet.balance,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({
        message: 'Login successful.',
        token,
    });
};
