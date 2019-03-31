// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const reservation= require('../../models/Reservation');
const validator = require('../../validations/reservationValidation.js')

//Get all reservations
router.get('/', async (req,res) => {
    const reservations = await reservation.find()
    res.json({data: reservations})
})

// Get a certain reservation 
router.get('/:id',(req,res)=>{
    const todoID = req.params.id;
    reservation.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{ 
        if(err)
            console.log(err);
        else{
            res.json(result);
        }
      })   });

// Create a reservation
router.post('/', async (req,res) => {
	try {
	 const isValidated = validator.createValidation(req.body)
	 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	 const newreservation = await reservation.create(req.body)
	 res.json({msg:'reservation requested successfully, it must be accepted first before being regiestered', data: newreservation})
	}
	catch(error) {
		console.log(error)
	}  
 })

// Update a reservation's details
router.put('/:id',(req,res)=>{
    const todoID = req.params.id;
    if(req.body.name)
    reservation.findOneAndUpdate({_id :todoID},{$set :{to: req.body.to}},{new :true},(err,result)=>{})
    if(req.body.capacity)
    reservation.findOneAndUpdate({_id :todoID},{$set :{from:req.body.from}},{new :true},(err,result)=>{})
    if(req.body.fee)
    reservation.findOneAndUpdate({_id :todoID},{$set :{day:req.body.day}},{new :true},(err,result)=>{})
    if(req.body.status)
    reservation.findOneAndUpdate({_id :todoID},{$set :{ownerID:req.body.ownerID}},{new :true},(err,result)=>{})
    res.json({msg:'reservation updated'})
  });

// Delete a reservation
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedreservation = await reservation.findByIdAndRemove(id)
     res.json({msg:'reservation was deleted successfully', data: deletedreservation})
    }
    catch(error) {
        console.log(error)
    }
 })


module.exports = router;
