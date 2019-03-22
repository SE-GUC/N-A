const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../../models/Project');
const validator = require('../../validations/ProjectValidations')


router.get('/',async  (req, res) => {
    const Projects= await Project.find();
    res.json({ data: Projects})
    })

router.get('/:id',async (req,res)=> {
	const pid=req.params.id;
	const X=await Project.findOne({pid});
	if(!X)
        return res.status(404).send({error: 'Project does not exist'})
	else
		res.json({data:X});

})

router.post('/',async (req, res) => {
	const isValidated = validator.createValidation(req.body)
    if (isValidated.error) 
        return res.status(400).send({ error: isValidated.error.details[0].message })
    const X= await Project.create(req.body)
	return res.json({msg:'Project was Posted successfully,Now wait until an admin approves it', data: X});
});

router.put('/name/:id', async(req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationname(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/status/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationstatus(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    if(req.body.status=='Implementation')
        const updatedP = await X.updateOne('Start_Date':'$currentDate')
    if(req.body.status=='Completed')
        const updatedP = await X.updateOne('End_Date':'$currentDate')
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/approved/:id', async(req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationapproved(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/Expected_Duration/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationduration(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/exp_level/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationexplevel(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/comitment_level/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationcomitment(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/descreption/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationdescreption(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/price/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationprice(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/PaymentType/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationpaymenttype(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/consultancy_agency_id/:id', async(req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationconsid(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/need_Consultancy/:id', async(req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationneedcon(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    if(req.body.need_Consultancy==false)
        const updatedP = await X.updateOne("consultancy_agency_id":"null")
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/MembersNeeded/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationmembersneeded(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})
router.put('/main_skill/:id',async (req, res) => {
    const pid = req.params.id 
    const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.updateValidationmainskill(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedP = await X.updateOne(req.body)
    res.json({msg: 'Project updated successfully',data:UpdatedP})
})


router.delete('/:id',async (req, res) => {
    try {
        const id = req.params.id
        const deletedP = await Project.findByIdAndRemove(id)
        res.json({msg:'Project was deleted successfully', data: deletedP})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
})

router.put('/addSkill/:id',async(req,res)=>{
	const pid=req.params.id
	const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.addskill(req.body)
    X.extra_skills.push(req.body.Skill)
    res.json({msg: 'Skill Added successfully',data:X})
})

router.put('/addattrib/:id',async(req,res)=>{
	const pid=req.params.id
	const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.addattribute(req.body)
    X.extra_attribute.push(req.body.attribute)
    res.json({msg: 'Skill Added successfully',data:X})
})

router.delete('/delskill/:id',async (req, res) => {
    const pid=req.params.id
	const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.addSkill(req.body)
    X.extra_skills.delete(req.body.Skill)
    res.json({msg: 'Skill Deleted successfully',data:X})
})
router.delete('/delattrib/:id',async (req, res) => {
    const pid=req.params.id
	const X = await Project.findOne({pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    const isValidated = validator.addattribute(req.body)
    X.extra_attribute.delete(req.body.attribute)
    res.json({msg: 'Attribute Deleted successfully',data:X})
})

module.exports = router;
