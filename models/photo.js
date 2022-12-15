const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const photoSchema = new Schema({
    photo: {type: String, required: true },
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
}, { 
    timestamps: true
});

module.exports = mongoose.model('Photo', photoSchema);