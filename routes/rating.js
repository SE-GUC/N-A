const express = require('express');
const router = express.Router();
const Rating= require('../../models/Rating');
const validator = require('../../validations/ratingValidation')

//Get all Ratings
router.get('/', async (req,res) => {
    const Ratings = await Rating.find()
    res.json({data: Ratings})
});
// Get a certain Rating 
router.get('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  // Document used to update
  // Find Document By ID and Update
  Rating.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
	  if(err)
		  console.log(err);
	  else{
		  res.json(result);
	  }
	})   });
// Create a new Rating
 router.post('/', async (req,res) => {
     const projectid =req.params.project_id
     const candidateid=req.params.candidate_id
	try {
		const isValidated = validator.createValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const newRating = await Rating.create(req.body)
        Rating.findOneAndUpdate({_id :newRating._id},{$set :{project_id:projectid}},{new :true},(err,result)=>{})
        Rating.findOneAndUpdate({_id :todoID},{$set :{candidate_id:candidateid}},{new :true},(err,result)=>{})
		res.json({msg:'Rating was created successfully', data: newRating})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
	})
// update a certain Rating
router.put('/:id',(req,res)=>{
  const todoID = req.params.id;
  if(req.body.rating)
  Rating.findOneAndUpdate({_id :todoID},{$set :{rating: req.body.rating}},{new :true},(err,result)=>{})
  if(req.body.review)
  Rating.findOneAndUpdate({_id :todoID},{$set :{review:req.body.review}},{new :true},(err,result)=>{})
});
  // delete a certain Rating
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedRating = await Rating.findByIdAndRemove(id)
     res.json({msg:'Rating was deleted successfully', data: deletedRating})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 module.exports = router;