const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const photoSchema = new Schema({
    apiId: Number,
    photo: {type: String, required: true },
    description: String,
    views: String,
    likes: String,
    comments: String,
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
}, { 
    timestamps: true
});

module.exports = mongoose.model('Photo', photoSchema);