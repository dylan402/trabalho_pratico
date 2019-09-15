exports.getAllVehiclesData = async Vehicle => {
  return await Vehicle.find({});
};

exports.getVehicleData = async (Vehicle, id) => {
  return await Vehicle.findById(id);
};

exports.updateVehicleData = async (Vehicle, id, vehicleData) => {
  return await Vehicle.findByIdAndUpdate(id, vehicleData);
};

exports.deleteVehicle = async (Vehicle, id) => {
  return await Vehicle.findByIdAndDelete(id);
};
