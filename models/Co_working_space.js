const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoWorkingSpaceSchema = new Schema({
  basicInfo: {
    type: String,
    required: false
  },
  name: {
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
  businessPlanOffer: {
    type: String,
    required: false
  },
  rooms: {
    type: Number,
    required: true
  },
  facilities: {
    type: String,
    required: true
  }
})

module.exports = CoWorkingSpace = mongoose.model('coWorkingSpaces', CoWorkingSpaceSchema)

