const mongoose = require('mongoose');

// Vehicle Schema
const VehicleSchema = new mongoose.Schema({
  vehicleId: { 
    type: String,
    required: true, 
    unique: true 
  },
  registrationNumber: { 
    type: String, 
    required: true 
  },
  vehicleType: { 
    type: String, 
    required: true, 
    enum: ['car', 'bike', 'truck','Car','Bike','Truck'] 
  },
  parkedAt: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'ParkingSpace', 
    default: null 
  },
});


// Export the Vehicle model
module.exports = mongoose.model('Vehicle', VehicleSchema);
