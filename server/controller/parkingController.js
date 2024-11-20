const Vehicle = require('../models/vehicleModel');
const ParkingSpace = require('../models/parkingSpaceModel');

// API to check availability of parking spaces
exports.checkAvailability = async (req, res) => {
  try {
    const availableSpace = await ParkingSpace.findOne({ isOccupied: false });
    if (!availableSpace) {
      return res.status(404).json({ message: 'No available parking spaces.' });
    }

    res.json({
      message: 'Parking space available.',
      parkingSpace: availableSpace,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error checking parking space availability', error: err });
  }
};

// API to register a vehicle
exports.registerVehicle = async (req, res) => {
  try {
    const { vehicleId, registrationNumber, vehicleType } = req.body;

    // Check if vehicle already exists
    const existingVehicle = await Vehicle.findOne({ vehicleId });
    if (existingVehicle) {
      return res.status(400).json({ message: 'Vehicle already registered!' });
    }

    // Create a new vehicle instance
    const newVehicle = new Vehicle({
      vehicleId,
      registrationNumber,
      vehicleType,
    });

    // Find an available parking space
    const availableSpace = await ParkingSpace.findOne({ isOccupied: false });
    if (availableSpace) {
      // Mark the parking space as occupied
      availableSpace.isOccupied = true;
      availableSpace.vehicleId = newVehicle._id;

      // Save the parking space
      await availableSpace.save();

      // Assign the parking space to the vehicle
      newVehicle.parkedAt = availableSpace._id;
    }

    // Save the new vehicle
    await newVehicle.save();

    res.json({
      message: 'Vehicle registered successfully!',
      vehicle: newVehicle,
      parkingSpace: availableSpace ? availableSpace : null,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error registering vehicle', error: err });
  }
};
