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

module.exports = location = mongoose.model('locations', locationSchema)