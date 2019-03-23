// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Candidate= require('../../models/Candidate');
const validator = require('../../Validations/CandidateValidation')
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
router.get('/interests/:id', async (req, res) => {
		// Primary Key of Todo Document we wish to update
		const todoID = req.params.id;
		const candidates =Candidate.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
			if(err)
				console.log(err);
			else{
				res.json(Candidate.aggregate([
					interests
				]));
			}
		  })   });
// add intersests 
router.post('/interests/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {interests:req.body.interest}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete interests
router.delete('/interests/:id',async (req, res) => {
	const todoID = req.params.id;
	if(req.body.interests)
	Candidate.update(
		{ _id: todoID },
		{ $pull: { 'interests':  req.body.interest } }
	  );
})
// update interests
router.put('/interests/:id',async (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	const m =Candidates.intersts
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//get project
router.get('/projects/:id',async (req, res) => {
	const todoID = req.params.id;
		const candidates =Candidate.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
			if(err)
				console.log(err);
			else{
				res.json(candidates.past_project);
			}
		  })   });
//update project
router.put('/projects/:id',async (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	const m =Candidates.past_project
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//delete project
router.delete('/projects/:id',async (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
const m =Candidates.past_project

	if(req.body.project)

    m.splice( m.indexOf(req.body.past_project),1)
    res.send((m))
})
//add project
router.post('/projects/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {past_projects:req.body.project}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//get certificates
router.get('/certificates/:id',async (req, res) => {
    const todoID = req.params.id;
		const candidates =Candidate.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
			if(err)
				console.log(err);
			else{
				res.json(result.certificates);
			}
		  })   });
//add certificates
router.post('/certificates/:id', async(req, res) => {
	const todoID = req.params.id;
				if(req.body.interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {certificates:req.body.certificates}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete certificates
router.delete('/certificates/:id',async (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    const m =Candidates.certificates
	if(req.body.certificate)
    m.splice( m.indexOf(req.body.certificate),1)
    res.send((m))
})
//update certificate
router.put('/certificates/:id',async (req, res) => {

	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	const m =Candidates.certificates
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//get skills
router.get('/skills/:id', async (req, res) => {
	const todoID = req.params.id;
		const candidates =Candidate.findOneAndUpdate({_id :todoID},{},{returnOriginal :true},(err,result)=>{
			if(err)
				console.log(err);
			else{
				res.json(candidates.skills);
			}
		  })   });
//add skills
router.post('/skills/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {skills:req.body.skill}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete skills
router.delete('/skills/:id',async (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
const m =Candidates.skills
	if(req.body.skill)
    m.splice( m.indexOf(req.body.skill),1)
    res.send((m))
})
//update skiils
router.put('/skills/:id',async (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	const m =Candidates.skills
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//get reviews
router.get('/reviews/:id', async(req, res) => {
    const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    res.send(Candidates.review)
})
//add reviewes
router.post('/reviews/:id', async(req, res) => {
	const todoID = req.params.id;
				if(req.body.interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {review:req.body.review}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete reviewes

router.delete('/reviews/:id', async(req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
const m =Candidates.review
	if(req.body.review)

    m.splice( m.indexOf(req.body.review),1)
    res.send((m))
})
//update reviewes
router.put('/reviews/:id', async(req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	const m =Candidates.review
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})




module.exports = router;

