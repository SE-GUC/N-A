// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const admin= require('../../models/User.js');
const validator = require('../../Validations/adminValidation.js')

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

 

module.exports = router;
