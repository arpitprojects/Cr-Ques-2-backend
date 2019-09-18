const express = require('express');

const router = express.Router();

const {getController} = require('../controllers/mainController');

router.get('/bug/list' , getController);

module.exports = router;