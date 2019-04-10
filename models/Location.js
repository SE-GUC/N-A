const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationSchema = new Schema({
    name: {
        type: String,
        required: true
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
    ownerID: {
        type: String,
        required: true
    },
    extraInfo:{
        type: String,
        required:true
    },
    locationRooms:{
        type: [String],
        default:[]
    }
})

module.exports = location = mongoose.model('locations', locationSchema)


