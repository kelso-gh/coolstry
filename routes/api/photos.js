const express = require('express');
const router = express.Router();
const photosCtrl = require('../../controllers/api/photos');
const ensureLoggedIn = ('../../config/ensureLoggedIn');

router.get('/search', photosCtrl.searchApi);

module.exports = router;