// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const admin= require('../../models/User');
const validator = require('../../validations/adminValidation.js')

//Get all admins
router.get('/', async (req,res) => {
    const admins = await admin.find()
    res.json({data: admins})
})

// Get a certain admin 
router.get('/:id',(req,res)=>{
    const todoID = req.params.id;
    admin.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
        if(err)
            console.log(err);
        else{
            res.json(result);
        }
      })   });

// Create a admin
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newadmin = await admin.create(req.body)
     res.json({msg:'admin signed up successfully', data: newadmin})
    }
    catch(error) {
        console.log(error)
    }
 })


 // Update a admin's details
router.put('/:id',(req,res)=>{
    const todoID = req.params.id;
    if(req.body.first_name)
    admin.findOneAndUpdate({_id :todoID},{$set :{first_name: req.body.first_name}},{new :true},(err,result)=>{})
    if(req.body.last_name)
    admin.findOneAndUpdate({_id :todoID},{$set :{last_name:req.body.last_name}},{new :true},(err,result)=>{})
    if(req.body.email)
    admin.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
    if(req.body.Birthdate)
    admin.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{})
  });

// Delete a admin
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedadmin = await admin.findByIdAndRemove(id)
     res.json({msg:'admin was deleted successfully', data: deletedadmin})
    }
    catch(error) {
        console.log(error)
    }
 })

module.exports = router;
