const express = require('express');
const router = express.Router();
const profilesCTRL = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, profilesCTRL.create);
router.put('/:id', ensureLoggedIn, profilesCTRL.update);

module.exports = router;
