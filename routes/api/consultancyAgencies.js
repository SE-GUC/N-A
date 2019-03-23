// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const consultancyAgency = require('../../models/User');
const validator = require('../../Validations/consultancyAgencyValidation')

// Models
// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all consultancy Agencies
router.get('/', async (req,res) => {
    const consultancyAgencies = await consultancyAgency.find()
    res.json({data: consultancyAgencies})
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
router.put('/:id',(req,res)=>{
	const todoID = req.params.id;
	if(req.body.name)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{name: req.body.name}},{new :true},(err,result)=>{})
	if(req.body.email)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
	if(req.body.password)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{})
	  res.json({msg:'consultancyAgency updated'})
	if(req.body.Basic_Info)
	consultancyAgency.findOneAndUpdate({_id :todoID},{$set :{Basic_Info:req.body.Basic_Info}},{new :true},(err,result)=>{})
  });
// Delete a book
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedconsultancyAgency = await consultancyAgency.findByIdAndRemove(id)
     res.json({msg:'consultancyAgency was deleted successfully', data: deletedconsultancyAgency})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 router.post('/BoardMembers/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.BoardMembers)
				consultancyAgency.findOneAndUpdate({_id :todoID},{$push: {BoardMembers:req.body.BoardMembers}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });

router.post('/Past_Events/:id', async (req, res) => {
	const todoID = req.params.id;
			if(req.body.Past_Events)
				consultancyAgency.findOneAndUpdate({_id :todoID},{$push: {Past_Events:req.body.Past_Events}},{new :true},(err,result)=>{})
									
				res.json({msg:'done'});
			  });	  

 router.get('/Past_Events/:id',async  (req, res) => {
		const consultancyAgencies= await consultancyAgency.find();
		const result=[]
		for(let i=0;i<consultancyAgencies.length;i++){
				result.push(consultancyAgencies[i].Past_Events)
			}
			res.json({ data: result})
		})
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
			consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{Past_Events: result}},{new :true},(err,result)=>{})
						res.json({msg: 'Attribute Deleted successfully'})
		}})
				
 router.get('/BoardMembers/:id',async  (req, res) => {
		const consultancyAgencies= await consultancyAgency.find();
			const result=[]
				for(let i=0;i<consultancyAgencies.length;i++){
						result.push(consultancyAgencies[i].BoardMembers)
					}
					res.json({ data: result})
			})

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
				consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{BoardMembers: result}},{new :true},(err,result)=>{})
							res.json({msg: 'Attribute Deleted successfully'})
			}})

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
				consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{BoardMembers: result}},{new :true},(err,result)=>{})
							res.json({msg: 'Attribute Updated successfully'})
			}})
	
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
				consultancyAgency.findOneAndUpdate({_id :consultancyAgencyid},{$set :{Past_Events: result}},{new :true},(err,result)=>{})
							res.json({msg: 'Attribute Updated successfully'})
			}})
module.exports = router;
