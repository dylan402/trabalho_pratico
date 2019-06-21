const express = require("express");

const Vehicle = require("../model/Vehicle");

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        await Vehicle.create(req.body);

        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = app => app.use('/vehicle', router);