// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const room= require('../../models/Room');
const location= require('../../models/Location');

//Get all rooms
router.get('/', async (req,res) => {
    const rooms = await room.find()
    res.json({data: rooms})
})

// Get a certain room 
router.get('/:id',(req,res)=>{
    const pid = req.params.id
	const X =await room.findOne({"_id":pid})
	if(!X)
        return res.status(404).send({error: 'room does not exist'})
	else
        res.json({data:X});});
        

//getting a locationRoom of a certain coworking space
router.get('/CoWorkingRoom',async  (req, res) => {
    const rooms= await Room.find();
    // const usr = await user.findOne({id})
    const result=[]
    for(let i=0;i<rooms.length;i++){
        if(((req.body.OwnerId) == (rooms[i]).OwnerId))
            result.push(rooms[i])
    }
    res.json({ data: result})
  })      
  //getting a locationRoom of a certain location
router.get('/certainLocation',async  (req, res) => {
    const rooms= await Room.find();
    // const usr = await user.findOne({id})
    const result=[]
    for(let i=0;i<rooms.length;i++){
        if(((req.body.LocationID) == (rooms[i]).LocationID))
            result.push(rooms[i])
    }
    res.json({ data: result})
  })    
// Create a room
router.post('/', async (req,res) => {
	try {
     const newroom = await room.create(req.body)
     const loc=await location.findOne({"_id":req.body.LocationID})
     const result=loc.locationRooms
     result.push(newroom._id)
     await loc.updateOne({'locationRooms':result})

	 res.json({msg:'room requested successfully, it must be accepted first before being regiestered', data: newroom})
	}
	catch(error) {
		console.log(error)
	}  
 })

 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const rooms = await room.findOne({id})
     if(!rooms) return res.status(404).send({error: 'Room does not exist'})
     const updatedRoom = await room.updateOne(req.body)
     res.json({msg: 'Room updated successfully',data: updated})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Delete a room
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedroom = await room.findByIdAndRemove(id)
     res.json({msg:'room was deleted successfully', data: deletedroom})
    }
    catch(error) {
        console.log(error)
    }
 })


module.exports = router;
