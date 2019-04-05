// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Candidate= require('../../models/User');
const validator = require('../../validations/candidateValidation')

//Get all Candidates
router.get('/', async (req,res) => {
		const Candidates = await Candidate.find()
		var result = []
		for(let i=0;i<Candidates.length;i++)
		if(Candidates[i]. User_Category=='Member')
		result.push(Candidates[i])
    res.json({data:result})
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
router.put('/:id', async(req,res)=>{
	const todoID = req.params.id;
	const isValidated = validator.updateValidation(req.body)
	if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	const X = await Candidate.findOne({"_id":todoID})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
  if(req.body.FirstName)
	Candidate.findOneAndUpdate({_id :todoID},{$set :{ FirstName: req.body. FirstName}},{new :true},(err,result)=>{res.json(result)})
  if(req.body.LastName)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{LastName:req.body.LastName}},{new :true},(err,result)=>{res.json(result)})
  if(req.body.Birthdate)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{Birthdate:req.body.Birthdate}},{new :true},(err,result)=>{res.json(result)})
  if(req.body.email)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{email:req.body.email}},{new :true},(err,result)=>{res.json(result)})
  if(req.body.password)
  Candidate.findOneAndUpdate({_id :todoID},{$set :{password:req.body.password}},{new :true},(err,result)=>{res.json(result)})
});
  // delete a certain candidate
router.delete('/:id', async (req,res) => {
    try {
			const todoID = req.params.id;
			const X = await Candidate.findOne({"_id":todoID})
			if(!X)
			return res.status(404).send({error: 'does not exist'})
     const deletedCandidate = await Candidate.findByIdAndRemove(todoID)
     res.json({data:'Candidate was deleted successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//get interests
router.get('/interests/:id',async  (req, res) => {
	const id = req.params.id
	const X = await Candidate.findOne({"_id":id})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
 	if(id==Candidates[i]._id)
			result.push(Candidates[i].Intrests)
		}
		res.json({ data: result})
	})
// add intersests 
router.post('/interests/:id', async (req, res) => {
	const todoID = req.params.id;
	const X = await Candidate.findOne({"_id":todoID})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
				if(req.body.Interest)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Intrests:req.body.Interest}},{new :true},(err,result)=>{res.json({data:result})})			
				  });
//delete interests
router.delete('/interests/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.Interest) {
	var result=[]

	for(var i=0;i<(X.Intrests).length;i++){
		if((X.Intrests)[i]!=req.body.Interest)
			result.push((X.Intrests)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Intrests: result}},{new :true},(err,result)=>{res.json({data:result})})
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
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Intrests: result}},{new :true},(err,result)=>{res.json({data:result})})
}})
//get project
router.get('/projects/:id',async  (req, res) => {
	const todoID =req.params.id
	const x = await Candidate.findOne({"_id":todoID})
	if(!x)
	return res.status(404).send({error: 'does not exist'})
	const Candidates= await Candidate.find();
	const result=[]
	for(let i=0;i<Candidates.length;i++){
		if(todoID==Candidates[i]._id)
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
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Past_Projects: result}},{new :true},(err,result)=>{res.json({data:result})})
}})
//delete project
router.delete('/projects/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({"_id":Candidateid})
	if(!X)
	return res.status(404).send({error: ' does not exist'})
	if (req.body.Past_Projects) {
	var result=[]

	for(var i=0;i<(X.Past_Projects).length;i++){
		if((X.Past_Projects)[i]!=req.body.Past_Projects)
			result.push((X.Past_Projects)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Past_Projects: result}},{new :true},(err,result)=>{res.json(result)})
}})
//add project
router.post('/projects/:id',async (req, res) => {
	const todoID = req.params.id;
	const X = await Candidate.findOne({"_id":todoID})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
				if(req.body.Past_Projects)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Past_Projects:req.body.Past_Projects}},{new :true},(err,result)=>{res.json({data:result})})					
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
				if(req.body.Certificates)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Certificates:req.body.Certificates}},{new :true},(err,result)=>{res.json({data:result})})
				  });
//delete Certificates
router.delete('/Certificates/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({_id:Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.Certificates) {
	var result=[]

	for(var i=0;i<(X.Certificates).length;i++){
		if((X.Certificates)[i]!=req.body.Certificates)
			result.push((X.Certificates)[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Certificates: result}},{new :true},(err,result)=>{res.json({data:result})})
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
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Certificates: result}},{new :true},(err,result)=>{res.json({data:result})})
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
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Skills:req.body.Skills}},{new :true},(err,result)=>{res.json({data:result})})
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
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Skills: result}},{new :true},(err,result)=>{res.json({data:result})})
		
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
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Skills: result}},{new :true},(err,result)=>{res.json({data:result})})
}})
/*//Get Ratings
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
				if(req.body.Ratings)
				Candidate.findOneAndUpdate({_id :todoID},{$push: {Ratings:req.body.Ratings}},{new :true},(err,result)=>{res.json({data:result})})
				  });
// update a certain Rating
router.put('/rating/:id',async (req, res) => {
	const Candidateid=req.params.id
	const X = await Candidate.findOne({_id:Candidateid})
	if(!X)
	return res.status(404).send({error: 'does not exist'})
	if (req.body.oldvalue&&req.body.newvalue) {
	var result=[]
	for(let i=0;i<(X.Ratings).length;i++){
		if((((X.Ratings)[i].rating)==req.body.oldvalue.rating)&&
		(((X.Ratings)[i].review)==req.body.oldvalue.review)&&
		(((X.Ratings)[i].project_id)==req.body.oldvalue.project_id)&&(((X.Ratings)[i].candidate_id)==req.body.oldvalue.candidate_id))
			result.push(req.body.newvalue)
			else
			result.push(X.Ratings[i])
	}
	Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Ratings: result}},{new :true},(err,result)=>{res.json({data:result})})
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
			if(!(JSON.stringify((X.Ratings)[i])===JSON.stringify(req.body.oldvalue)))
				result.push((X.Ratings)[i])
		}
		Candidate.findOneAndUpdate({_id :Candidateid},{$set :{Ratings: result}},{new :true},(err,result)=>{res.json({data:result})})
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
		var sum=0
		for(let i=0;i<result.length;i++)
		 sum = result[i].rating+sum;
    const avg = sum / result.length;
		res.json({avg})
	})*/
module.exports = router;