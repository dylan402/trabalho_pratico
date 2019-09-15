const express = require('express');
const router = express.Router();

const menuController = require('../controllers/MenuController');

router.get('/', menuController.renderMenuPageWithVehicleList);

router.post('/save-vehicle', menuController.saveVehicle);

router.post('/form-vehicle/', menuController.renderVehicleForm);

router.post('/form-vehicle/:id', menuController.renderVehicleForm);

router.post('/:id/delete', menuController.deleteVehicle);

module.exports = router;
