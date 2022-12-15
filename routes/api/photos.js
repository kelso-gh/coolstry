const express = require('express');
const router = express.Router();
const photosCtrl = require('../../controllers/api/photos');
const ensureLoggedIn = ('../../config/ensureLoggedIn');

router.get('/photos', photosCtrl.index);

module.exports = router;