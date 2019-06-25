const Vehicle = require("../model/Vehicle");
const path = require('path');

exports.vehicle_new = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/view/new_vehicle.html'));
};

exports.vehicle_register = async (req, res) => {
    try {
        await Vehicle.create(req.body);

        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.vehicle_list = async (req, res) => {
    try {
        let result = await Vehicle.find({});
        return res.status(200).render(path.join(__dirname, '..', '/view/menu.ejs'), { result: result });
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.vehicle_update = async (req, res) => {
    await Vehicle.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, vehicle) {
        if (err) return next(err);
        res.send('Vehicle udpated.');
    });
};

exports.vehicle_delete = async (req, res) => {
    await Vehicle.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};