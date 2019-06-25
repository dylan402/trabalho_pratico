const express = require('express');
const router = express.Router();

const menu_controller = require('../controllers/MenuController');

router.get('/', menu_controller.vehicle_list);
router.get('/new', menu_controller.vehicle_new);
router.post('/register', menu_controller.vehicle_register);
router.post('/update', menu_controller.vehicle_update);
router.post('/delete', menu_controller.vehicle_delete);

module.exports = router;