const express = require('express');
const router = express.Router();
const profilesCTRL = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', profilesCTRL.create);
router.put('/:id', profilesCTRL.update);

module.exports = router;
