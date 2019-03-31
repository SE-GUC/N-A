const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const reservationSchema = new Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    day: {
        type: String,
        enum: ["Monday","Tuseday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        required: true
    },
    status: {
        type: Number,
        enum: [-1,0,1],//-1 -> rejected, 0 -> not yet reviewed, 1 -> accepted, when <1> then place in calender_entry
        default: 0,
        required: false
    },
    ownerID: {
        type: String,//id of reservering owner
        required: true
    }/*,
    capacity: {
        type: Number,
        required: true
    }*/
})

module.exports = reservation = mongoose.model('reservations', reservationSchema)


