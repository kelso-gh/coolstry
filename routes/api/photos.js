const express = require('express');
const router = express.Router();
const photosCtrl = require('../../controllers/api/photos');
const ensureLoggedIn = ('../../config/ensureLoggedIn');

router.get('/search', photosCtrl.searchApi);
// POST /api/photos/feeds/:apiId
router.post('/feeds/:apiId', photosCtrl.addToFeed);
// GET /api/photos/feeds
router.get('/feeds', photosCtrl.getFeed);

module.exports = router;