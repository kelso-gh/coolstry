const express = require('express');
const router = express.Router();
const profilesCTRL = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.put('/update', profilesCTRL.update);

module.exports = router;
