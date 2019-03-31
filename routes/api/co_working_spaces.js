const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Co_working_space= require('../../models/User');
const validator = require('../../validations/coWorkingSpaceValidations')
//Get all co_Working_spaces
router.get('/', async (req,res) => {
  const co_Working_spaces = await Co_Working_space.find()
  res.json({data: co_Working_spaces})
});
// Get a certain Co_Working_space 
router.get('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  // Document used to update
  // Find Document By ID and Update
  Co_Working_space.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
	  if(err)
		  console.log(err);
	  else{
		  res.json(result);
	  }
	})   });
// Create a new Co_Working_space
 router.post('/', async (req,res) => {
	try {
		const isValidated = validator.createValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const newCo_Working_space = await Co_Working_space.create(req.body)

		res.json({msg:'Co_Working_space was created successfully', data: newCo_Working_space})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
  })
  // update a certain Co_Working_space
router.put('/:id',(req,res)=>{
  const todoID = req.params.id;
  if(req.body.BasicInfo)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{firstname: req.body.firstname}},{new :true},(err,result)=>{})
  if(req.body.FirstName)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{lastname:req.body.lastname}},{new :true},(err,result)=>{})
  if(req.body.LastName)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{})
  if(req.body.email)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
  if(req.body.password)
  Co_Working_space.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{})
	res.json({msg:'Co_Working_space updated'})
});
  // delete a certain Co_Working_space
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCo_Working_space = await Co_Working_space.findByIdAndRemove(id)
     res.json({msg:'Co_Working_space was deleted successfully', data: deletedCo_Working_space})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
 //get Business_Plans_Offered
router.get('/Business_Plans_Offered/:id',async  (req, res) => {
	const co_Working_spaces= await co_Working_space.find();
	const result=[]
	for(let i=0;i<co_Working_spaces.length;i++){
			result.push(co_Working_spaces[i].Facilities)
		}
		res.json({ data: result})
	})
// add Business_Plans_Offered 
router.post('/Business_Plans_Offered/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.Business_Plan_Offered){
				co_Working_space.findOneAndUpdate({_id :todoID},{$push: {Facilities:req.body.Business_Plan_Offered}},{new :true},(err,result)=>{})
				res.json({msg:'done'});
			}
					
				  });
//delete Business_Plans_Offered
router.delete('/Business_Plans_Offered/:id',async (req, res) => {
	const co_Working_spaceid=req.params.id
	const X = await co_Working_space.findOne({"_id":co_Working_spaceid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.Business_Plan_Offered) {
	var result=[]

	for(var i=0;i<(X.Business_Plans_Offered).length;i++){
		if((X.Business_Plans_Offered)[i]!=req.body.Facilities)
			result.push((X.Business_Plans_Offered)[i])
	}
	co_Working_space.findOneAndUpdate({_id :co_Working_spaceid},{$set :{Business_Plans_Offered: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
// update Business_Plans_Offered
router.put('/Business_Plans_Offered/:id',async (req, res) => {
	const co_Working_spaceid=req.params.id
	const X = await co_Working_space.findOne({"_id":co_Working_spaceid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.Business_Plans_Offered).length;i++){
		if((X.Business_Plans_Offered)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Business_Plans_Offered[i])
	}
	co_Working_space.findOneAndUpdate({_id :co_Working_spaceid},{$set :{Business_Plans_Offered: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})



//get Facilities
router.get('/Facilities/:id',async  (req, res) => {
	const co_Working_spaces= await co_Working_space.find();
	const result=[]
	for(let i=0;i<co_Working_spaces.length;i++){
			result.push(co_Working_spaces[i].Facilities)
		}
		res.json({ data: result})
	})
// add intersests 
router.post('/Facilities/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.Facilities){
				co_Working_space.findOneAndUpdate({_id :todoID},{$push: {Facilities:req.body.Facilities}},{new :true},(err,result)=>{})
				res.json({msg:'done'});
			}
					
				  });
//delete Facilities
router.delete('/Facilities/:id',async (req, res) => {
	const co_Working_spaceid=req.params.id
	const X = await co_Working_space.findOne({"_id":co_Working_spaceid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.Facilities) {
	var result=[]

	for(var i=0;i<(X.Facilities).length;i++){
		if((X.Facilities)[i]!=req.body.Facilities)
			result.push((X.Facilities)[i])
	}
	co_Working_space.findOneAndUpdate({_id :co_Working_spaceid},{$set :{Facilities: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
// update Facilities
router.put('/Facilities/:id',async (req, res) => {
	const co_Working_spaceid=req.params.id
	const X = await co_Working_space.findOne({"_id":co_Working_spaceid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.Facilities).length;i++){
		if((X.Facilities)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Facilities[i])
	}
	co_Working_space.findOneAndUpdate({_id :co_Working_spaceid},{$set :{Facilities: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
 module.exports = router