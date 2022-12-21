const { model } = require('mongoose');
const Profile = require('../../models/profile');

module.exports = {
    update,
    getProfile
}



async function update(req, res) {
    try{
        console.log(req.user)
       const profile = await Profile.findOneAndUpdate({_id: req.user.profile}, req.body, {new: true})
       console.log(profile);
       res.json(profile)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

async function getProfile(req, res) {
    const profile = await Profile.findOne({_id: req.user.profile});
    res.json(profile);
}
