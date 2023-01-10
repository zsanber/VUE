const mongoose = require('mongoose');

const secretSchema= new mongoose.Schema({
    hash: {
        type: String, 
        required: true
    }, 
    secret: {
        type: String, 
        required: true
    }, 
    remainingViews: {
        type: Number
    }, 
    expiresAt: {
        type: Date
    },
    expiresAfter: {
        type: Number
    }
}, 
    { timestamps: true }
)

const Secret = mongoose.model('Secret', secretSchema);

module.exports = Secret;
