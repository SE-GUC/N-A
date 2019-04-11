// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const reservation= require('../../models/Reservation');
const user  = require('../../models/User');
const location  = require('../../models/Location');

//Get all reservations
router.get('/', async (req,res) => {
    const reservations = await reservation.find()
    res.json({data: reservations})
})

// Get a certain reservation 
router.get('/:id',async(req,res)=>{
    const pid = req.params.id
	const X =await reservation.findOne({"_id":pid})
	if(!X)
        return res.status(404).send({error: 'Reservation does not exist'})
	else
        res.json({data:X});});
        
// Create a reservation
router.post('/', async (req,res) => {
	try {
     const X=await location.findById(req.body.LocationID)
    for(let i=0;i<X.locationRooms.length;i++){
        if(X.locationRooms[i] == req.body.RoomID ){
         await reservation.create(req.body)
         return res.json({msg:'reservation requested successfully, it must be accepted first before being regiestered'})}
 
    }
    return res.json({msg:'There are no rooms with this name in the chosen Location'})

	}
	catch(error) {
        console.log(error)
        return res.status(404).send({error: 'Insert a valid timing '})

	}  
 })

// Update a reservation's details
router.put('/confirmed/:id',async(req,res)=>{//Hay confirm w yeb3at notifications 
    const pid = req.params.id 
    const X = await reservation.findOne({'_id':pid})
    if(!X)
    return res.status(404).send({error: 'Reservation does not exist'})
    // if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
    //     return res.status(400).send({error: 'The Project cannot be edited anymore'})
    // }
    await X.updateOne({status:true})
    res.json({msg: 'Reservation Accepted '})
})
router.put('/declined/:id',async(req,res)=>{//Hay confirm w yeb3at notifications 
    const pid = req.params.id 
    const X = await reservation.findOne({'_id':pid})
    if(!X)
    return res.status(404).send({error: 'Reservation does not exist'})
    // if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
    //     return res.status(400).send({error: 'The Project cannot be edited anymore'})
    // }
    await X.updateOne({status:false})
    res.json({msg: 'Reservation Declined '})
})
router.get('/confirmed/Yes',async  (req, res) => {
    const reservations= await reservation.find();
    const result=[]
    for(let i=0;i<reservations.length;i++){
        if((reservations[i]).status==true)
            result.push(reservations[i])
    }
    res.json({ data: result})
})
router.get('/confirmed/No',async  (req, res) => {
    const reservations= await reservation.find();
    const result=[]
    for(let i=0;i<reservations.length;i++){
        if((reservations[i]).status==false)
            result.push(reservations[i])
    }
    res.json({ data: result})
})
router.get('/confirmed/notYet',async  (req, res) => {
    const reservations= await reservation.find();
    const result=[]
    for(let i=0;i<reservations.length;i++){
        if((reservations[i]).status==null)
            result.push(reservations[i])
    }
    res.json({ data: result})
})
//getting a reservation of a certain coworking space
router.get('/CoWorking/notYet/:id',async  (req, res) => {
    const pid = req.params.id 
    const reservations= await reservation.find();
    const result=[]
    for(let i=0;i<reservations.length;i++){
        if((reservations[i]).status==null&&(pid == (reservations[i]).OwnerId))
            result.push(reservations[i])
    }
    res.json({ data: result})
})
// Delete a reservation
router.delete('/cancelReservation/:id', async (req,res) => {
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
