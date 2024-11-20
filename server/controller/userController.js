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

//FOR PARKING SPACE 

// // // Get all parking slots
// const getAllParkingSlots = async (req, res) => {
//   try {
//     const parkingSlots = await ParkingSlot.find();
//     res.status(200).json(parkingSlots);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching parking slots' });
//   }
// };

// // Update a parking slot status
// const updateParkingSlot = async (req, res) => {
//   const { id } = req.params; // Slot ID
//   const { status } = req.body;

//   try {
//     const parkingSlot = await ParkingSlot.findOneAndUpdate(
//       { 'slots._id': id },
//       { $set: { 'slots.$.status': status } },
//       { new: true }
//     );

//     if (!parkingSlot) {
//       return res.status(404).json({ error: 'Slot not found' });
//     }

//     res.status(200).json(parkingSlot);
//   } catch (err) {
//     res.status(500).json({ error: 'Error updating parking slot' });
//   }
// };

// // Create parking slots (initial setup)
// const createParkingSlots = async (req, res) => {
//   const { type, slots } = req.body;

//   try {
//     const newParkingSlot = new ParkingSlot({ type, slots });
//     await newParkingSlot.save();
//     res.status(201).json(newParkingSlot);
//   } catch (err) {
//     res.status(500).json({ error: 'Error creating parking slots' });
//   }
// };

// module.exports = {
//   getAllParkingSlots,
//   updateParkingSlot,
//   createParkingSlots,
// };
