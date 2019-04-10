// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const location= require('../../models/Location');
const user  = require('../../models/User');


//Get all locations
router.get('/', async (req,res) => {
    const locations = await location.find()
    res.json({data: locations})
})

// Get a certain location 
router.get('/:id',(req,res)=>{
  const pid = req.params.id
	const X =await location.findOne({"_id":pid})
	if(!X)
        return res.status(404).send({error: 'Location does not exist'})
	else
		res.json({data:X});

})
//getting a location of a certain coworking space
router.get('/CoWorkingLocation',async  (req, res) => {
  const locations= await location.find();
  // const usr = await user.findOne({id})
  const result=[]
  for(let i=0;i<locations.length;i++){
      if(((req.body.ownerID) == (locations[i]).ownerID))
          result.push(locations[i])
  }
  res.json({ data: result})
})
// Create a location
router.post('/', async (req,res) => {
  try {
    const newLocation = await location.create(req.body)
    const usr=await user.findOne({"_id":req.body.ownerID})
    const result=usr.Locations
    .push(newLocation._id)
    await loc.updateOne({'Locations':result})

  res.json({msg:'Location created successfully', data: newLocation})
 }
 catch(error) {
   console.log(error)
 }  
})

// Update a location's details
router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const locations = await location.findOne({id})
   if(!locations) return res.status(404).send({error: 'Location does not exist'})
   const updatedLocation = await location.updateOne(req.body)
   res.json({msg: 'Location updated successfully',data: updatedLocation})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

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
