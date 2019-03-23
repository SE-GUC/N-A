const uuid = require('uuid')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID;
const Schema = mongoose.Schema

// Candidate schema
const CandidateSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    Birthdate:{
        type:Date,
        required:true 
       },
    interests: {
        type: [String],
        default:[]
    },
    past_project: {
        type: [String],
        default:[]
    },
    certificates: {
        type: [String],
        default:[]
    },
    review: {
        type: [String],
        default:[]
    },
    skills: {
        type: [String],
        default:[]
    },
    joindate:{
       type:Date,
       default: Date.now
    },
    rate:{
        type :Number,
        default:0
    },
    age:{
    default :(new Date().getFullYear())-((new Date(this.Birthdate)).getFullYear()) },
    id :{
        type:Number,
        unique:true,
        index:true
    }
})




module.exports = Candidate = mongoose.model('Candidates', CandidateSchema)