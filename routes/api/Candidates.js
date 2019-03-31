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
  if(req.body.FirstName)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{FirstName: req.body.FirstName}},{new :true},(err,result)=>{})
  if(req.body.LastName)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{LastName:req.body.LastName}},{new :true},(err,result)=>{})
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
     res.json({msg:'Candidate was deleted successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//get interests
router.get('/interests/:id',async  (req, res) => {
	const id =req.params.id
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(Candidates[i]._id==id)
			result.push(Candidates[i].Intrests)
		}
		res.json({ data: result})
	})
// add intersests 
router.post('/interests/:id', async (req, res) => {
	const todoID = req.params.id;
				if(req.body.interest){
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Intrests:req.body.interest}},{new :true},(err,result)=>{})
				res.json({msg:'done'});
			}
				  });
//delete interests
router.delete('/interests/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.interest) {
	var result=[]

	for(var i=0;i<(X.Intrests).length;i++){
		if((X.Intrests)[i]!=req.body.interest)
			result.push((X.Intrests)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Intrests: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
// update interests
router.put('/interests/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.Intrests).length;i++){
		if((X.Intrests)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Intrests[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Intrests: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//get project
router.get('/projects/:id',async  (req, res) => {
	const id =req.params.id
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(Candidates[i]._id==id)
			result.push(Candidates[i].Past_Projects)
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

	for(var i=0;i<(X.Past_Projects).length;i++){
		if((X.Past_Projects)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Past_Projects[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Past_Projects: result}},{new :true},(err,result)=>{})
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

	for(var i=0;i<(X.Past_Projects).length;i++){
		if((X.  Past_Projects)[i]!=req.body.project)
			result.push((X.project)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Past_Projects: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//add project
router.post('/projects/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.project){
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Past_Projects:req.body.project}},{new :true},(err,result)=>{})					
						res.json({msg:'done'});
				}
				  });
//get Certificates
router.get('/Certificates/:id',async  (req, res) => {
	const id =req.params.id
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(Candidates[i]._id==id)
			result.push(Candidates[i].Certificates)
		}
		res.json({ data: result})
	})
//add Certificates
router.post('/Certificates/:id', async(req, res) => {
	const todoID = req.params.id;
				if(req.body.certificate)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Certificates:req.body.certificate}},{new :true},(err,result)=>{})
						res.json({msg:'done'});
				  });
//delete Certificates
router.delete('/Certificates/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({_id:Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.certificate) {
	var result=[]

	for(var i=0;i<(X.Certificates).length;i++){
		if((X.Certificates)[i]!=req.body.certificate)
			result.push((X.Certificates)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Certificates: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//update certificate
router.put('/Certificates/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.Certificates).length;i++){
		if((X.Certificates)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Certificates[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Certificates: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//get Skills
router.get('/Skills/:id',async  (req, res) => {
	const id =req.params.id
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(Candidates[i]._id==id)
			result.push(Candidates[i].Skills)
		}
		res.json({ data: result})
	})
//add Skills
router.post('/Skills/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.Skills)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Skills:req.body.Skills}},{new :true},(err,result)=>{})
					
						res.json({msg:'done'});
				  });
//delete Skills
router.delete('/Skills/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({_id:Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.Skills) {
	var result=[]

	for(var i=0;i<(X.Skills).length;i++){
		if((X.Skills)[i]!=req.body.Skills)
			result.push((X.Skills)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Skills: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Deleted successfully'})
}})
//update skills
router.put('/Skills/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({_id:Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]

	for(var i=0;i<(X.Skills).length;i++){
		if((X.Skills)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Skills[i])

	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Skills: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
//Get Ratings
router.get('/rating/:id',async  (req, res) => {
	const id =req.params.id
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(Candidates[i]._id==id)
			result.push(Candidates[i].Ratings)
		}
		res.json({ data: result})
	})
// Create a new Rating
router.post('/rating/:id',async (req, res) => {
	const todoID = req.params.id;
				if(req.body.rating)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Ratings:req.body.rating}},{new :true},(err,result)=>{})
						res.json({msg:'done'});
				  });
// update a certain Rating
router.put('/rating/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({_id:Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]
	for(var i=0;i<(X.Ratings).length;i++){
		if((X.Ratings)[i]==req.body.oldvalue)
			result.push(req.body.newvalue)
			else
			result.push(X.Ratings[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Ratings: result}},{new :true},(err,result)=>{})
				res.json({msg: 'Attribute Updated successfully'})
}})
  // delete a certain Rating
	router.delete('/rating/:id',async (req, res) => {
		const Candidateid=req.params.id
		const X = await Candidate.findOne({_id:Candidateid})
		if(!X)
		return res.status(404).send({error: 'does not exist'})
		if (req.body.Ratings) {
		var result=[]
		for(var i=0;i<(X.Ratings).length;i++){
			if((X.Ratings)[i]!=req.body.Ratings)
				result.push((X.Ratings)[i])
		}
		Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Ratings: result}},{new :true},(err,result)=>{})
					res.json({msg: 'Attribute Deleted successfully'})
	}})
//get avg Ratings
router.get('/ratingsavg/:id',async  (req, res) => {
	const id =req.params.id
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(Candidates[i]._id==id)
			result.push(Candidates[i].Ratings)
		}
		let sum = result.reduce((previous, current) => current += previous);
    let avg = sum / values.length;
		res.json({ data: avg})
	})
module.exports = router;

