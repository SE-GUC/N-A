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
})
// Get a certain candidate 
router.get('/:id', async(req, res) => {
    try {
		const id = req.params.id
		const Candidates = await Candidate.findOne({id})
		if(!Candidates) return res.status(404).send({error: 'Candidate does not exist'})
		res.json(Candidates)
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }    
    });
// Create a new Candidate
router.post('/', async (req,res) => {
	try {
	 const isValidated = validator.createValidation(req.body)
	 if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
	 const newCandidate = await Candidate.create(req.body)
	 res.json({msg:'Candidate signed up successfully', data: newCandidate})
	}
	catch(error) {
		console.log(error)
	}  
 })
// update a certain Candidate
router.put('/:id', async (req,res) => {
	try {
		const id = req.params.id
		const Candidate = await Candidate.findOne({id})
		if(!Candidate) return res.status(404).send({error: 'Candidate does not exist'})
		const isValidated = validator.updateValidation(req.body)
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
		const updatedCandidate = await Candidate.updateOne(req.body)
		res.json({msg: 'Candidate updated successfully'})
	   }
	   catch(error) {
		   // We will be handling the error later
		   console.log(error)
	   }  
	})   
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
    const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    res.json(Candidates)
})
// add intersests 
router.post('/interests/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	if(req.body.interest)
	Candidates.intersts.push(req.body.interest)
	res.send(Candidates.intersts)
  });
//delete interests
router.delete('/interests/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    const m =Candidates.intersts
	if(req.body.interest)
    m.splice( m.indexOf(req.body.interest),1)
    res.send((m))
})
// update interests
router.put('/interests/:id', (req, res) => {
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
router.get('/projects/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    res.send(Candidates.past_project)
})
//update project
router.put('/projects/:id', (req, res) => {
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
router.delete('/projects/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
const m =Candidates.past_project

	if(req.body.project)

    m.splice( m.indexOf(req.body.past_project),1)
    res.send((m))
})
//add project
router.post('/projects/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})

	if(req.body.project)
	Candidates.past_project.push(req.body.project)

	res.send(Candidate.past_project)
  });
//get certificates
router.get('/certificates/:id', (req, res) => {
    const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    res.send(Candidates.certificates)
})
//add certificates
router.post('/certificates/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	if(req.body.certificate)
	Candidates.certificates.push(req.body.certificate)
	res.send(Candidate.certificates)
  });
//delete certificates
router.delete('/certificates/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    const m =Candidates.certificates
	if(req.body.certificate)
    m.splice( m.indexOf(req.body.certificate),1)
    res.send((m))
})
//update certificate

router.put('/certificates/:id', (req, res) => {

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
router.get('/skills/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    res.send(Candidates.skills)
})
//add skills
router.post('/skills/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	if(req.body.skill)
	Candidates.skills.push(req.body.skill)
	res.send(Candidate.skills)
  });
//delete skills
router.delete('/skills/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
const m =Candidates.skills
	if(req.body.skill)
    m.splice( m.indexOf(req.body.skill),1)
    res.send((m))
})
//update skiils
router.put('/skills/:id', (req, res) => {
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
router.get('/reviews/:id', (req, res) => {
    const id = req.params.id
    const Candidate = await Candidate.findOne({id})
    res.send(Candidates.review)
})
//add reviewes
router.post('/reviews/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
	if(req.body.review)
	Candidates.review.push(req.body.review)
	res.send(Candidate.review)
  });
//delete reviewes

router.delete('/reviews/:id', (req, res) => {
	const id = req.params.id
    const Candidate = await Candidate.findOne({id})
const m =Candidates.review
	if(req.body.review)

    m.splice( m.indexOf(req.body.review),1)
    res.send((m))
})
//update reviewes
router.put('/reviews/:id', (req, res) => {
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

