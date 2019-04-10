// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const reservation= require('../../models/Reservation');
const user  = require('../../models/User');

//Get all reservations
router.get('/', async (req,res) => {
    const reservations = await reservation.find()
    res.json({data: reservations})
})

// Get a certain reservation 
router.get('/:id',(req,res)=>{
    const pid = req.params.id
	const X =await reservation.findOne({"_id":pid})
	if(!X)
        return res.status(404).send({error: 'Reservation does not exist'})
	else
        res.json({data:X});});
        
// Create a reservation
router.post('/', async (req,res) => {
	try {
	 const newreservation = await reservation.create(req.body)
	 res.json({msg:'reservation requested successfully, it must be accepted first before being regiestered', data: newreservation})
	}
	catch(error) {
		console.log(error)
	}  
 })

// Update a reservation's details
router.put('/confirmed/:id',(req,res)=>{//Hay confirm w yeb3at notifications 
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
router.put('/declined/:id',(req,res)=>{//Hay confirm w yeb3at notifications 
    const pid = req.params.id 
    const X = await reservation.findOne({'_id':pid})
    if(!X)
    return res.status(404).send({error: 'Reservation does not exist'})
    // if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
    //     return res.status(400).send({error: 'The Project cannot be edited anymore'})
    // }
    await X.updateOne({status:false})
    res.json({msg: 'Reservation Accepted '})
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
router.get('/CoWorking/notYet',async  (req, res) => {
    const reservations= await reservation.find();
    // const usr = await user.findOne({id})
    const result=[]
    for(let i=0;i<reservations.length;i++){
        if((reservations[i]).status==null&&((req.body.OwnerId) == (reservations[i]).OwnerId))
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
