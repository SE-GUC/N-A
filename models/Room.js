const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RoomSchema = new Schema({
    Roomname: {
        type: String,
        required: true
    },
    
    capacity:{
        type: Number,
        required: true
    },
    fee: {
        type: Number,
        required: false
    },
    LocationID: {
        type: String,
        required: true
    },
    OwnerId:{//coworking space
        type: String,
        required: true
    },
    roomReservation:{
        type:[String]
    }
})

module.exports = mongoose.model('rooms', RoomSchema)


