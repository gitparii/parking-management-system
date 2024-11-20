const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['user', 'admin'] },
});




// Export the User model
module.exports = mongoose.model('User', UserSchema);

// // for parking space
// const ParkingSlotSchema = new mongoose.Schema({
//   type: { type: String, required: true }, // 2-Wheeler, 3-Wheeler, 4-Wheeler
//   slots: [
//     {
//       status: { type: String, enum: ['Available', 'Reserved'], required: true },
//     },
//   ],
// });

// const ParkingSlot = mongoose.model('ParkingSlot', ParkingSlotSchema);

// module.exports = ParkingSlot;
