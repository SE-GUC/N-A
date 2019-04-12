const mongoose = require('mongoose');
const Schema = mongoose.Schema
const RatingSchema = new Schema ({
  rating :{
    type: Number,
    enum : [1,2,3,4,5],
    default:5
  },
  review: {
   type:String,
   default:" "
  },
  project_id:{
    type:String,
    required:true
  },
  reviewer_id:{
    type:String,
    required:true
  },
  reviewed_id:{
    type:String,
    required:true
  }
})
module.exports = Rating = mongoose.model('ratings', RatingSchema)