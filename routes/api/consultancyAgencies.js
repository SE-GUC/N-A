// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const consultancyAgency = require('../../models/User');
const validator = require('../../Validations/consultancyAgencyValidation')


// Get all consultancy Agencies
router.get('/', async (req,res) => {
    const consultancyAgencys = await consultancyAgency.find()
		var result = []
		for(let i=0;i<consultancyAgencys.length;i++)
		if(consultancyAgencys[i]. User_Category=='Consulting_Agent')
		result.push(consultancyAgencys[i])
    res.json({data:result})
});

// Get a consultancy Agency
router.get('/:id',(req,res)=>{
	// Primary Key of Todo Document we wish to update
	const todoID = req.params.id;
	// Document used to update
	// Find Document By ID and Update
	consultancyAgency.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
		if(err)
			console.log(err);
		else{
			res.json(result);
		}
	  })   });

// Create a new consultancy Agency
router.post('/', async (req,res) => {
	try {
		const isValidated = validator.createValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const newconsultancyAgency = await consultancyAgency.create(req.body)
		res.json({msg:'consultancyAgency was created successfully', data: newconsultancyAgency})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
	})

// Update a ConsultancyAgency
router.put('/:id',async(req,res)=>{
	const todoID = req.params.id;
	const isValidated = validator.updateValidation(req.body)
	if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	const X = await consultancyAgency.findOne({"_id":todoID})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if(req.body.FirstName)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{FirstName: req.body.FirstName}},{new :true},(err,result)=>{res.json(result)})
	if(req.body.LastName)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{LastName: req.body.LastName}},{new :true},(err,result)=>{res.json(result)})
	if(req.body.email)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{res.json(result)})
	if(req.body.password)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{res.json(result)})
	if(req.body.Basic_Info)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{Basic_Info:req.body.Basic_Info}},{new :true},(err,result)=>{res.json(result)})
	if(req.body.Birthdate)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{res.json(result)})
	});
	
// Delete a ConsultancyAgency 
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedconsultancyAgency = await consultancyAgency.findByIdAndRemove(id)
     res.json({msg:'consultancyAgency was deleted successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
 //Add new BoardMember
 router.post('/BoardMembers/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.BoardMembers)
				consultancyAgency.findOneAndUpdate({_id :todoID},{$push: {BoardMembers:req.body.BoardMembers}},{new :true},(err,result)=>{res.json(result)})
					});					
 //Add new Past_Event
router.post('/Past_Events/:id', async (req, res) => {
	const todoID = req.params.id;
			if(req.body.Past_Events)
				consultancyAgency.findOneAndUpdate({_id :todoID},{$push: {Past_Events:req.body.Past_Events}},{new :true},(err,result)=>{res.json(result)})
				});	 
				 
 //Get a Past_Event
 router.get('/Past_Events/:id',async  (req, res) => {
	const id = req.params.id
	const X = await consultancyAgency.findOne({"_id":id})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
		const consultancyAgencies= await consultancyAgency.find();
		const result=[]
		for(let i=0;i<consultancyAgencies.length;i++){
			if(id==consultancyAgencies[i]._id)
				result.push(consultancyAgencies[i].Past_Events)
			}
			res.json({ data: result})
		})

//Delete a Past_Event
router.delete('/Past_Events/:id',async (req, res) => {
		const consultancyAgencyid=req.params.id
		const X = await consultancyAgency.findOne({"_id":consultancyAgencyid})
			if(!X)
			return res.status(404).send({error: 'consultancyAgency does not exist'})
			if (req.body.Past_Events) {
			var result=[]
			
			for(var i=0;i<(X.Past_Events).length;i++){
				if((X.Past_Events)[i]!=req.body.Past_Events)
					result.push((X.Past_Events)[i])
			}
			consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{Past_Events: result}},{new :true},(err,result)=>{res.json(result)})
		}})
//Get a BoardMember				
router.get('/BoardMembers/:id',async  (req, res) => {
	const id = req.params.id
	const X = await consultancyAgency.findOne({"_id":id})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
		const consultancyAgencies= await consultancyAgency.find();
			const result=[]
				for(let i=0;i<consultancyAgencies.length;i++){
					if(id==consultancyAgencies[i]._id)
						result.push(consultancyAgencies[i].BoardMembers)
					}
					res.json({ data: result})
			})
	
	//Delete a BoardMember				
		router.delete('/BoardMembers/:id',async (req, res) => {
			const consultancyAgencyid=req.params.id
			const X = await consultancyAgency.findOne({"_id":consultancyAgencyid})
				if(!X)
				return res.status(404).send({error: 'consultancyAgency does not exist'})
				if (req.body.BoardMembers) {
				var result=[]
				
				for(var i=0;i<(X.BoardMembers).length;i++){
					if((X.BoardMembers)[i]!=req.body.BoardMembers)
						result.push((X.BoardMembers)[i])
				}
				consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{BoardMembers: result}},{new :true},(err,result)=>{res.json({data:result})})
							
			}})
		 
	//Update a BoardMember
			router.put('/BoardMembers/:id',async (req, res) => {
				const consultancyAgencyid=req.params.id
				const X = await consultancyAgency.findOne({"_id":consultancyAgencyid})
				if(!X)
				return res.status(404).send({error: 'does not exist'})
				if (req.body.oldvalue&&req.body.newvalue) {
				var result=[]
			
				for(var i=0;i<(X.BoardMembers).length;i++){
					if((X.BoardMembers)[i]==req.body.oldvalue)
						result.push(req.body.newvalue)
						else
						result.push(X.BoardMembers[i])

				}
				consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{BoardMembers: result}},{new :true},(err,result)=>{{res.json({data:result})}})
			}})
				
			//Update a Past_Event
			router.put('/Past_Events/:id',async (req, res) => {
				const consultancyAgencyid=req.params.id
				const X = await consultancyAgency.findOne({"_id":consultancyAgencyid})
				if(!X)
				return res.status(404).send({error: 'does not exist'})
				if (req.body.oldvalue&&req.body.newvalue) {
				var result=[]
			
				for(var i=0;i<(X.Past_Events).length;i++){
					if((X.Past_Events)[i]==req.body.oldvalue)
						result.push(req.body.newvalue)
						else
						result.push(X.Past_Events[i])

				}
				consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{Past_Events: result}},{new :true},(err,result)=>{res.json({data:result})})
						
			}})
module.exports = router;