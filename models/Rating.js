const mongoose = require('mongoose');
const Schema = mongoose.Schema
const RatingSchema = new Schema ({
  rating :{
      type: Number,
      enum : [1,2,3,4,5],
      default:5
    },
  review: {
   type:String
  },
  project_id: String,
  candidate_id : String
})
module.exports = Rating = mongoose.model('ratings', RatingSchema)