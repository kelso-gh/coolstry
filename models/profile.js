const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;


const profileSchema = new Schema({
    profilePictureURL: String,
    name: {
        type: String, 
        required: true},
    location: String,
    interests: String,
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Profile', profileSchema);