const Photo = require('../../models/photo');

module.exports = {
    show,
}

async function show(req, res) {
    const photo = await Photo.findById(req.params.id);
    res.json(photo);
}