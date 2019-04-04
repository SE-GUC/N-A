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
     res.json({msg:'Candidate was created successfully', data: newadmin})
    }
    catch(error) {
        console.log(error)
    }
 })
 // Update a admin's details
router.put('/:id',(req,res)=>{
    const todoID = req.params.id;
    if(req.body.FirstName){
        admin.findOneAndUpdate({_id :todoID},{$set :{FirstName: req.body.FirstName}},{new :true},(err,result)=>{})
        res.json({msg:'Admin was updated successfully', data:req.body.FirstName})
    }
    if(req.body.LastName){
    admin.findOneAndUpdate({_id :todoID},{$set :{LastName:req.body.LastName}},{new :true},(err,result)=>{})
    res.json({msg:'Admin was updated successfully', data:req.body.LastName})
}
    if(req.body.email){
    admin.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
    res.json({msg:'Admin was updated successfully', data:req.body.email})
}
    if(req.body.password){
    admin.findOneAndUpdate({_id :todoID},{$set :{password: req.body.password}},{new :true},(err,result)=>{})
        res.json({msg:'Admin was updated successfully', data:req.body.password}) 
    }

    if(req.body.Birthdate){
    admin.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{})
    res.json({msg:'Admin was updated successfully', data:req.body.Birthdate})
}
});
// Delete a admin
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedadmin = await admin.findByIdAndRemove(id)
     res.json({msg:'admin was deleted successfully'})
    }
    catch(error) {
        console.log(error)
    }
 })

module.exports = router;
