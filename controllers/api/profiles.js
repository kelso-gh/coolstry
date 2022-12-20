const { model } = require('mongoose');
const Profile = require('../../models/profile');

module.exports = {
    update,
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

