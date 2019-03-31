const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')
const Reservation= require('./Reservation');
const Calender_entry= require('./Calender_entry');

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
    },/*
    status: {
        type: String,
        required: false
    },*/
    photo_link: {
        type: String,
        required: false
    },
    reservations: {
        type: [Schema.Types.Reservation],
        required: false
    },
    calender_entries: {
        type: [Schema.Types.Calender_entry],
        required: false
    }
})

module.exports = location = mongoose.model('locations', locationSchema)


