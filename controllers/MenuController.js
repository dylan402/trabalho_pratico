const Vehicle = require("../model/Vehicle");
const path = require('path');

exports.vehicle_new = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/view/new_vehicle.html'));
};

exports.vehicle_register = async (req, res) => {
    try {
        await Vehicle.create(req.body);

        return res.status(200).send({ success: true });
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.vehicle_list = async (req, res) => {
    try {
        const query = await Vehicle.find({});
        return res.status(200).render(path.join(__dirname, '..', '/view/menu.ejs'), { result: query });
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.vehicle_start_update = async (req, res) => {
    try {
        const query = await Vehicle.findById(req.params.id);
        return res.status(200).render(path.join(__dirname, '..', '/view/edit_vehicle.ejs'), { result: query });
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.vehicle_update = async (req, res) => {
    try {
        await Vehicle.findByIdAndUpdate(req.params.id, req.body);

        return res.status(200).send({ success: true });
    } catch (err) {
        return res.status(400).send({ error: "Não foi possivel atualizar o veículo." });
    }
};

exports.vehicle_delete = async (req, res) => {
    const query = await Vehicle.findByIdAndDelete(req.params.id);
    if (query !== null) {
        return res.status(200).send({ success: true });
    } else {
        return res.status(400).send({ error: "Não foi possivel deletar o veículo." });
    }
};