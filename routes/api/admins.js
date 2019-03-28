// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Admin= require('../../models/User');
const validator = require('../../Validations/adminValidation.js')
 
// update a certain Admin
router.put('/:id',(req,res)=>{
  const todoID = req.params.id;
  if(req.body.FirstName)
  Admin.findOneAndUpdate({_id :todoID},{$set :{FirstName: req.body.FirstName}},{new :true},(err,result)=>{})
  if(req.body.LastName)
  Admin.findOneAndUpdate({_id :todoID},{$set :{LastName:req.body.LastName}},{new :true},(err,result)=>{})
  if(req.body.Birthdate)
  Admin.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{})
  if(req.body.email)
  Admin.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
  if(req.body.password)
  Admin.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{})
	res.json({msg:'Admin updated'})
});

  // delete a certain Admin
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 //Get all Admins
router.get('/', async (req,res) => {
  const Admins = await Admin.find()
  res.json({data: Admins})
});
// Get a certain Admin 
router.get('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  // Document used to update
  // Find Document By ID and Update
  Admin.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
	  if(err)
		  console.log(err);
	  else{
		  res.json(result);
	  }
	})   });
// Create a new Admin
 router.post('/', async (req,res) => {
	try {
		const isValidated = validator.createValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const newAdmin = await Admin.create(req.body)

		res.json({msg:'Admin was created successfully', data: newAdmin})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
  }
  )
module.exports = router;


