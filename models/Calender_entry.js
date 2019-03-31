const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const calenderSchema = new Schema({
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
    ownerID: {
        type: String,//id of reservering owner
        required: true
    }/*,
    capacity: {
        type: Number,
        required: true
    }*/
})

module.exports = calender = mongoose.model('calenders', calenderSchema)


