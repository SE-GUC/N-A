const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkillSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
    
})

module.exports = reservation = mongoose.model('Skills', SkillSchema)


