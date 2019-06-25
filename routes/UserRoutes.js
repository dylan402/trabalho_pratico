const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/UserController');

router.post('/login', user_controller.user_login);
router.post('/register', user_controller.user_register);
router.get('/:id', user_controller.user_details);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;