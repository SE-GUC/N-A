const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const locationSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    fee: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    available_from: {
        type: Date,
        default: Date.now,
        required: false
    },
    available: {
        type: String,
        required: false
    },
    till: {
        type: Date,
        default: Date.now,
        required: false
    },
    photo_link: {
        type: String,
        required: false
    }
})

<<<<<<< HEAD:models/location.js
<<<<<<< HEAD
module.exports = location = mongoose.model('locations', locationSchema)
=======
module.exports = location = mongoose.model('locations', locationSchema)
>>>>>>> 98fdd8192b06b0d4daea57bba11540a4aadbb45a
=======
module.exports = location = mongoose.model('locations', locationSchema)
>>>>>>> 395f8c8a9b12f68229fd82f0f09d15009980cb00:models/Location.js
