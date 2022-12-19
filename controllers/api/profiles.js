const { model } = require('mongoose');
const Profile = require('../../models/profile');

module.exports = {
    create,
    update,
}

async function create(req, res) {
    req.body.profile = req.profile._id;
    const profile = await Profile.create(req.body);
    res.json(profile);
}

async function update(req, res) {
    req.body.profile = req.profile._id;
    const profiles = await Profile.update(req.body);
    res.json(profiles)
}