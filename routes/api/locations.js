// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const location= require('../../models/Location');
const validator = require('../../validations/locationValidation.js')

//Get all locations
router.get('/', async (req,res) => {
    const locations = await location.find()
    res.json({data: locations})
})

// Get a certain location 
router.get('/:id',(req,res)=>{
    const todoID = req.params.id;
    location.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
        if(err)
            console.log(err);
        else{
            res.json(result);
        }
      })   });

// Create a location
router.post('/', async (req,res) => {
	try {
	 const isValidated = validator.createValidation(req.body)
	 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	 const newlocation = await location.create(req.body)
	 res.json({msg:'location signed up successfully', data: newlocation})
	}
	catch(error) {
		console.log(error)
	}  
 })

// Update a location's details
router.put('/:id',(req,res)=>{
    const todoID = req.params.id;
    if(req.body.name)
    location.findOneAndUpdate({_id :todoID},{$set :{name: req.body.name}},{new :true},(err,result)=>{})
    if(req.body.capacity)
    location.findOneAndUpdate({_id :todoID},{$set :{capacity:req.body.capacity}},{new :true},(err,result)=>{})
    if(req.body.fee)
    location.findOneAndUpdate({_id :todoID},{$set :{fee:req.body.fee}},{new :true},(err,result)=>{})
    if(req.body.status)
    location.findOneAndUpdate({_id :todoID},{$set :{status:req.body.status}},{new :true},(err,result)=>{})
    if(req.body.available_from)
    location.findOneAndUpdate({_id :todoID},{$set :{available_from:req.body.available_from}},{new :true},(err,result)=>{})
    if(req.body.available)
    location.findOneAndUpdate({_id :todoID},{$set :{available:req.body.available}},{new :true},(err,result)=>{})
    if(req.body.till)
    location.findOneAndUpdate({_id :todoID},{$set :{till:req.body.till}},{new :true},(err,result)=>{})
    if(req.body.photo_link)
    location.findOneAndUpdate({_id :todoID},{$set :{photo_link:req.body.photo_link}},{new :true},(err,result)=>{})
      res.json({msg:'location updated'})
  });

// Delete a location
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedlocation = await location.findByIdAndRemove(id)
     res.json({msg:'location was deleted successfully', data: deletedlocation})
    }
    catch(error) {
        console.log(error)
    }
 })

module.exports = router;
