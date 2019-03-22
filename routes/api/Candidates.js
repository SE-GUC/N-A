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
    const CandidateID = req.params.id
	const Candidates =await Candidate.find({"id":CandidateID})
            res.json(Candidates);      
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
router.put('/:id', (req, res) => {
	const CandidateId = req.params.id; 
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
	if(req.body.firstname)
	Candidate.firstname = req.body.firstname;
	if(req.body.lastname)
	Candidate.lastname=req.body.lastname;
	if(req.body.password)
	Candidate.password=req.body.password;
	if(req.body.Birthdate)
	Candidate.Birthdate=req.body.Birthdate;
	if(req.body.email)
	Candidate.email=req.body.email;
    res.send(Candidate)
})
// delete a certain candidate
router.delete('/:id', (req, res) => {
    const CandidateId = req.params.id 
    const Candidate = Candidates.find(Candidate => Candidate.id === 	CandidateId)
    const index = Candidates.indexOf(Candidate)
    Candidates.splice(index,1)
    res.send(Candidates)
})
//get interests
router.get('/interests/:id', (req, res) => {
    const CandidateID = req.params.id
    const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
    res.send(Candidate.intersts)
})
// add intersests 
router.post('/interests/:id', (req, res) => {
	const CandidateID = req.params.id
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
	if(req.body.interest)
	Candidate.intersts.push(req.body.interest)
	res.send(Candidate.intersts)
  });
//delete interests
router.delete('/interests/:id', (req, res) => {
	const CandidateId = req.params.id 
const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
const m =Candidate.intersts
	if(req.body.interest)
    m.splice( m.indexOf(req.body.interest),1)
    res.send((m))
})
// update interests
router.put('/interests/:id', (req, res) => {
	const CandidateId = req.params.id; 
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
	const m =Candidate.intersts
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//get project
router.get('/projects/:id', (req, res) => {
    const CandidateID = req.params.id
    const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
    res.send(Candidate.past_project)
})
//update project
router.put('/projects/:id', (req, res) => {
	const CandidateId = req.params.id; 
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
	const m =Candidate.past_project
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//delete project
router.delete('/projects/:id', (req, res) => {
	const CandidateId = req.params.id 
const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
const m =Candidate.past_project

	if(req.body.project)

    m.splice( m.indexOf(req.body.past_project),1)
    res.send((m))
})
//add project
router.post('/projects/:id', (req, res) => {
	const CandidateID = req.params.id
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)

	if(req.body.project)
	Candidate.past_project.push(req.body.project)

	res.send(Candidate.past_project)
  });
//get certificates
router.get('/certificates/:id', (req, res) => {
    const CandidateID = req.params.id
    const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
    res.send(Candidate.certificates)
})
//add certificates
router.post('/certificates/:id', (req, res) => {
	const CandidateID = req.params.id
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
	if(req.body.certificate)
	Candidate.certificates.push(req.body.certificate)
	res.send(Candidate.certificates)
  });
//delete certificates
router.delete('/certificates/:id', (req, res) => {
	const CandidateId = req.params.id 
const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
const m =Candidate.certificates
	if(req.body.certificate)
    m.splice( m.indexOf(req.body.certificate),1)
    res.send((m))
})
//update certificate

router.put('/certificates/:id', (req, res) => {

	const CandidateId = req.params.id; 
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
	const m =Candidate.certificates
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//get skills
router.get('/skills/:id', (req, res) => {
    const CandidateID = req.params.id
    const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
    res.send(Candidate.skills)
})
//add skills
router.post('/skills/:id', (req, res) => {
	const CandidateID = req.params.id
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
	if(req.body.skill)
	Candidate.skills.push(req.body.skill)
	res.send(Candidate.skills)
  });
//delete skills
router.delete('/skills/:id', (req, res) => {
	const CandidateId = req.params.id 
const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
const m =Candidate.skills
	if(req.body.skill)
    m.splice( m.indexOf(req.body.skill),1)
    res.send((m))
})
//update skiils
router.put('/skills/:id', (req, res) => {
	const CandidateId = req.params.id; 
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
	const m =Candidate.skills
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})
//get reviews
router.get('/reviews/:id', (req, res) => {
    const CandidateID = req.params.id
    const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
    res.send(Candidate.review)
})
//add reviewes
router.post('/reviews/:id', (req, res) => {
	const CandidateID = req.params.id
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateID)
	if(req.body.review)
	Candidate.review.push(req.body.review)
	res.send(Candidate.review)
  });
//delete reviewes

router.delete('/reviews/:id', (req, res) => {

	const CandidateId = req.params.id 
const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
const m =Candidate.review
	if(req.body.review)

    m.splice( m.indexOf(req.body.review),1)
    res.send((m))
})
//update reviewes
router.put('/reviews/:id', (req, res) => {

	const CandidateId = req.params.id; 
	const Candidate = Candidates.find(Candidate => Candidate.id === CandidateId)
	const m =Candidate.review
	const index=m.indexOf(req.body.oldvalue)
	const newvalue=req.body.newvalue
	m[index]=newvalue
	console.log(m[index])
    res.send(m)
})




module.exports = router;

