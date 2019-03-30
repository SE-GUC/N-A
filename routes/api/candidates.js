// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Candidate= require('../../models/User');
const validator = require('../../validations/candidateValidation')
//Get all Candidates
router.get('/', async (req,res) => {
    const Candidates = await Candidate.find()
    res.json({data: Candidates})
});
// Get a certain candidate 
router.get('/:id',(req,res)=>{
  // Primary Key of Todo Document we wish to update
  const todoID = req.params.id;
  // Document used to update
  // Find Document By ID and Update
  Candidate.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
	  if(err)
		  console.log(err);
	  else{
		  res.json(result);
	  }
	})   });
// Create a new Candidate
 router.post('/', async (req,res) => {
	try {
		const isValidated = validator.createValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const newCandidate = await Candidate.create(req.body)

		res.json({msg:'Candidate was created successfully', data: newCandidate})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
	})
// update a certain Candidate
router.put('/:id',(req,res)=>{
  const todoID = req.params.id;
  if(req.body.firstname)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{firstname: req.body.firstname}},{new :true},(err,result)=>{})
  if(req.body.lastname)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{lastname:req.body.lastname}},{new :true},(err,result)=>{})
  if(req.body.Birthdate)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{})
  if(req.body.email)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{})
  if(req.body.password)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{})
	res.json({msg:'candidate updated'})
});
  // delete a certain candidate
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCandidate = await Candidate.findByIdAndRemove(id)
     res.json({msg:'Candidate was deleted successfully', data: deletedCandidate})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//get interests
router.get('/interests/:id',async  (req, res) => {
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
			result.push(Candidates[i].interests)
		}
		res.json({ data: result})
	})
// add intersests 
router.post('/interests/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {interests:req.body.interest}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete interests
router.delete('/interests/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.interest) {
	var result=[]

	for(var i=0;i<(X.interests).length;i++){
		if((X.interests)[i]!=req.body.interests)
			result.push((X.interests)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{interests: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})

// update interests
router.put('/past_projects/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.interests).length;i++){
		if((X.interests)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.interests[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{interests: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//get project
router.get('/projectss/:id',async  (req, res) => {
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
			result.push(Candidates[i].past_project)
		}
		res.json({ data: result})
	})
//update project
router.put('/projects/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.past_projects).length;i++){
		if((X.past_projects)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.past_projects[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{past_projects: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//delete project
router.delete('/projects/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: ' does not exist'})
	if (req.body.project) {
	var result=[]

	for(var i=0;i<(X.past_projects).length;i++){
		if((X.past_projects)[i]!=req.body.project)
			result.push((X.project)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{past_projects: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//add project
router.post('/projects/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.project)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {past_projects:req.body.project}},{new :true},(err,result)=>{})					
						res.json({msg:'done'});
				  });
//get certificates
router.get('/certificates/:id',async  (req, res) => {
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
			result.push(Candidates[i].certificates)
		}
		res.json({ data: result})
	})
//add certificates
router.post('/certificates/:id', async(req, res) => {
	const todoID = req.params.id;
				if(req.body.certificate)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {certificates:req.body.certificates}},{new :true},(err,result)=>{})
						res.json({msg:'done'});
				  });
//delete certificates
router.delete('/certificates/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.certificate) {
	var result=[]

	for(var i=0;i<(X.certificates).length;i++){
		if((X.certificates)[i]!=req.body.certificates)
			result.push((X.certificates)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{certificates: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//update certificate
router.put('/certificates/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.certificates).length;i++){
		if((X.certificates)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.certificates[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{certificates: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//get skills
router.get('/skills/:id',async  (req, res) => {
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
			result.push(Candidates[i].skills)
		}
		res.json({ data: result})
	})
//add skills
router.post('/skills/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.skill)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {skills:req.body.skill}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete skills
router.delete('/skills/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.skill) {
	var result=[]

	for(var i=0;i<(X.skills).length;i++){
		if((X.skills)[i]!=req.body.interests)
			result.push((X.skills)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{skills: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//update skiils
router.put('/skills/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.skills).length;i++){
		if((X.skills)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.skills[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{skills: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//get reviews
router.get('/reviews/:id',async  (req, res) => {
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
			result.push(Candidates[i].review)
		}
		res.json({ data: result})
	})
//add reviewes
router.post('/reviews/:id', async(req, res) => {
	const todoID = req.params.id;
				if(req.body.review)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {review:req.body.review}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete reviewes
router.delete('/reviews/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.review) {
	var result=[]

	for(var i=0;i<(X.review).length;i++){
		if((X.review)[i]!=req.body.review)
			result.push((X.review)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{review: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//update reviewes
router.put('/reviews/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.review).length;i++){
		if((X.review)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.review[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{review: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})




module.exports = router;

