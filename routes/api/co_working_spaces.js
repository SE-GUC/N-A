const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Co_working_space= require('../../models/User');
const validator = require('../../validations/coWorkingSpaceValidations')
//Get all Co_Working_spaces
router.get('/', async (req,res) => {
  const Co_working_spaces = await Co_Working_space.find()
  res.json({data: Co_working_spaces})
});
// Get a certain Co_Working_space 
router.get('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  // Document used to update
  // Find Document By ID and Update
  Co_Working_space.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
	  if(err)
		  console.log(err);
	  else{
		  res.json(result);
	  }
	})   });
// Create a new Co_Working_space
 router.post('/', async (req,res) => {
	try {
		const isValidated = validator.createValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const newCo_Working_space = await Co_Working_space.create(req.body)

		res.json({msg:'Co_Working_space was created successfully', data: newCo_Working_space})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
  })
  // update a certain Co_Working_space
router.put('/:id',(req,res)=>{
  const todoID = req.params.id;
  if(req.body.BasicInfo)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{firstname: req.body.firstname}},{new :true},(err,result)=>{})
  if(req.body.FirstName)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{lastname:req.body.lastname}},{new :true},(err,result)=>{})
  if(req.body.LastName)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{})
  if(req.body.email)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
  if(req.body.password)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{})
	res.json({msg:'Co_Working_space updated'})
});
  // delete a certain Co_Working_space
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCo_Working_space = await Co_Working_space.findByIdAndRemove(id)
     res.json({msg:'Co_Working_space was deleted successfully', data: deletedCo_Working_space})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
 module.exports = router
