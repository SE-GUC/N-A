// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const calender= require('../../models/Calender_entry');
const validator = require('../../validations/calenderValidation.js')

//Get all calenders
router.get('/', async (req,res) => {
    const calenders = await calender.find()
    res.json({data: calenders})
})

// Get a certain calender 
router.get('/:id',(req,res)=>{
    const todoID = req.params.id;
    calender.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{ 
        if(err)
            console.log(err);
        else{
            res.json(result);
        }
      })   });

// Create a calender
router.post('/', async (req,res) => {
	try {
	 const isValidated = validator.createValidation(req.body)
	 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	 const newcalender = await calender.create(req.body)
	 res.json({msg:'calender entry added', data: newcalender})
	}
	catch(error) {
		console.log(error)
	}  
 })

// Update a calender's details
router.put('/:id',(req,res)=>{
    const todoID = req.params.id;
    if(req.body.name)
    calender.findOneAndUpdate({_id :todoID},{$set :{to: req.body.to}},{new :true},(err,result)=>{})
    if(req.body.capacity)
    calender.findOneAndUpdate({_id :todoID},{$set :{from:req.body.from}},{new :true},(err,result)=>{})
    if(req.body.fee)
    calender.findOneAndUpdate({_id :todoID},{$set :{day:req.body.day}},{new :true},(err,result)=>{})
    if(req.body.status)
    calender.findOneAndUpdate({_id :todoID},{$set :{ownerID:req.body.ownerID}},{new :true},(err,result)=>{})
    res.json({msg:'calender entry updated'})
  });

// Delete a calender
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedcalender = await calender.findByIdAndRemove(id)
     res.json({msg:'calender entry was deleted successfully', data: deletedcalender})
    }
    catch(error) {
        console.log(error)
    }
 })


module.exports = router;
