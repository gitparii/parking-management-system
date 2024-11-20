const mongoose = require('mongoose');

// Parking Space Schema
const ParkingSpaceSchema = new mongoose.Schema({
  spaceId: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  isOccupied: {
    type: Boolean, 
    default: false 
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',  // Reference to Vehicle model
    default: null,
  },
});

// Export the ParkingSpace model
module.exports = mongoose.model('ParkingSpace', ParkingSpaceSchema);
