// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const location= require('../../models/Location');
const validator = require('../../validations/locationValidation.js')
 



const fetch = require('node-fetch');


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
	 res.json({msg:'location regiesterd successfully', data: newlocation})
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
    if(req.body.calender_entry)
    location.findOneAndUpdate({_id :todoID},{$set :{calender_entry:req.body.calender_entry}},{new :true},(err,result)=>{})/*
    if(req.body.available_from)
    location.findOneAndUpdate({_id :todoID},{$set :{available_from:req.body.available_from}},{new :true},(err,result)=>{})
    if(req.body.available)
    location.findOneAndUpdate({_id :todoID},{$set :{available:req.body.available}},{new :true},(err,result)=>{})
    if(req.body.till)
    location.findOneAndUpdate({_id :todoID},{$set :{till:req.body.till}},{new :true},(err,result)=>{})*/
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

 //get all calender entries
 router.get('/calenders/:id',async (req, res) => {
    const locations= await location.find();
    const result=[]
    for(let i=0;i<locations.length;i++){
        result.push(locations[i].calender_entries)
      }
      res.json({ data: result})
    })

  //get all reserved entires by specified ownerID
  router.get('/calenders/comp/:id',async (req, res) => {
    const todoID=req.params.id
    const X = await location.findOne({"_id":todoID})
    if(!X)
    return res.status(404).send({error: 'Placed location id does not exist'})
    if (req.body.ownerID) {
    var result=[]
  
    for(var i=0;i<(X.calender_entries).length;i++){
      if(JSON.stringify((X.calender_entries)[i].ownerID)===JSON.stringify(req.body.ownerID))
        result.push((X.calender_entries)[i])
    }
    res.json({ data: result})
  }})

 //add a calender entry
  router.post('/calenders/:id', async (req, res) => {
    const todoID = req.params.id;
          if(req.body){
          location.findOneAndUpdate({_id :todoID},{$push: {calender_entries:req.body}},{new :true},(err,result)=>{})
          res.json({msg:'New calender entry inserted'});
        }
            
    });

  //delete a calender entry
  router.delete('/calenders/:id',async (req, res) => {
    const todoID=req.params.id
    const X = await location.findOne({"_id":todoID})
    if(!X)
    return res.status(404).send({error: 'Placed location id does not exist'})
    if (req.body.entry) {
    var result=[]
  
    for(var i=0;i<(X.calender_entries).length;i++){
      //console.log((X.calender_entries)[i]);
      //console.log(req.body.reser);
      if(JSON.stringify((X.calender_entries)[i])!==JSON.stringify(req.body.entry)){
        result.push((X.calender_entries)[i])
      }
    }
    //console.log(result);
    location.findOneAndUpdate({_id :todoID},{$set :{calender_entries: result}},{new :true},(err,result)=>{})
    res.json({msg: 'Entry deleted successfully'})
  }})
  
  //update a calender entry
  router.put('/calenders/:id',async (req, res) => {
    const todoID=req.params.id
    const X = await location.findOne({"_id":todoID})
    if(!X)
    return res.status(404).send({error: 'Placed location id does not exist'})
    if (req.body.oldvalue&&req.body.newvalue) {
    var result=[]
  
    for(var i=0;i<(X.calender_entries).length;i++){
      if(JSON.stringify((X.calender_entries)[i])===JSON.stringify(req.body.oldvalue))
        result.push(req.body.newvalue)
        else
        result.push(X.calender_entries[i])
    }
    location.findOneAndUpdate({_id :todoID},{$set :{calender_entries: result}},{new :true},(err,result)=>{})
        res.json({msg: 'Entry Updated successfully'})
  }})

  
 //get all reservations
 router.get('/reservations/:id',async (req, res) => {
    const locations= await location.find();
    const result=[]
    for(let i=0;i<locations.length;i++){
        result.push(locations[i].reservations)
      }
      res.json({ data: result})
    })

 //add a reservation entry
  router.post('/reservations/:id', async (req, res) => {
    const todoID = req.params.id;
          if(req.body){
          location.findOneAndUpdate({_id :todoID},{$push: {reservations:req.body}},{new :true},(err,result)=>{})
          res.json({msg:'New reservation requested'});
        }
            
    });

  //delete a reservation entry
  router.delete('/reservations/:id',async (req, res) => {
    const todoID=req.params.id
    const X = await location.findOne({"_id":todoID})
    if(!X)
    return res.status(404).send({error: 'Placed location id does not exist'})
    if (req.body.entry) {
    var result=[]
  
    for(var i=0;i<(X.reservations).length;i++){
      if(JSON.stringify((X.reservations)[i])!==JSON.stringify(req.body.entry))
        result.push((X.reservations)[i])
    }
    location.findOneAndUpdate({_id :todoID},{$set :{reservations: result}},{new :true},(err,result)=>{})
    res.json({msg: 'Reservation request deleted successfully'})
  }})
  
  // update a reservation entry
  router.put('/reservations/:id',async (req, res) => {
    const todoID=req.params.id
    const X = await location.findOne({"_id":todoID})
    if(!X)
    return res.status(404).send({error: 'Placed location id does not exist'})
    if (req.body.oldvalue&&req.body.newvalue) {
    var result=[]
  
    for(var i=0;i<(X.reservations).length;i++){
      if(JSON.stringify((X.reservations)[i])===JSON.stringify(req.body.oldvalue))
        result.push(req.body.newvalue)
        else
        result.push(X.reservations[i])
    }
    location.findOneAndUpdate({_id :todoID},{$set :{reservations: result}},{new :true},(err,result)=>{})
        res.json({msg: 'Reservation request Updated successfully'})
  }})


  //review resevation entry
  router.put('/review/:id',async (req, res) => {
    const todoID=req.params.id
    const X = await location.findOne({"_id":todoID})
    if(!X)
    return res.status(404).send({error: 'Placed location id does not exist'})
    if (req.body.entry) {
    var result=[]
  
    var index = 0;
    for(var i=0;i<(X.reservations).length;i++){
      if(JSON.stringify((X.reservations)[i])===JSON.stringify(req.body.entry)){
        (X.reservations)[i].status = req.body.status
        index = i;
        result.push((X.reservations)[i])
      }else{
        result.push((X.reservations)[i])
      }
    }
    location.findOneAndUpdate({_id :todoID},{$set :{reservations: result}},{new :true},(err,result)=>{})

    //if true then post as a calender entry
    if(JSON.stringify(req.body.status)==="1"){
      const body = {"to":(X.reservations)[index].to,"from":(X.reservations)[index].from,"day":(X.reservations)[index].day,"ownerID":(X.reservations)[index].ownerID};
      //const parm = {"to":(X.reservations)[index].to};
      fetch('http://localhost:3000/api/locations/calenders/'+todoID, {
        method: 'post',
        body:    JSON.stringify(body),
        //params:  JSON.stringify(parm),
        headers: { 'Content-Type': 'application/json' },
    })
    } 
    res.json({msg: 'Reservation reviewed successfully'})
  }})

module.exports = router;
