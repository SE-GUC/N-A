const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ReservationSchema = new Schema({
    RoomID: {
        type: String,
        required: true
    },
    
    LocationID:{
        type: Number,
        required: true
    },
    status: {
        type: boolean,
        default: null
    },
  
    OwnerId:{//coworking space
        type: String,
        required: true
    },
    from:{
        type: Date,
        required:true

    },
    to:{
        type: Date,
        required:true
 
    },
    client:{
        type: String,
        required:true
    }
    
})

module.exports = mongoose.model('reservations', ReservationSchema)


