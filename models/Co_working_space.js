const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoWorkingSpaceSchema = new Schema({
  basicInfo: {
    type: String,
    required: true
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
    required: true
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

