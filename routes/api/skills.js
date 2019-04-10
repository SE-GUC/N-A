const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Skill = require('../../models/Skill');

router.get('/',async  (req, res) => {
    const skill= await Skill.find();
    res.json({skill})
})
router.get('/:id',async (req,res)=> {
    const Sid = req.params.id
    const X =await Skill.findOne({"_id":Sid})
    if(!X)
        return res.status(404).send({error: 'Skill does not exist'})
    else
        res.json({X});
    
})
router.post('/',async  (req, res) => {
    const X= await Skill.create(req.body)
	return res.json({msg:'Skill was added successfully,', data: X});
})
router.put('/name/:id', async(req, res) => { 
    const Sid = req.params.id 
    const X = await Skill.findOne({"_id":Sid})
    if(!X)
    return res.status(404).send({error: 'Skill does not exist'})
    const updatedS = await X.updateOne(req.body)
    res.json({msg: "Skill Updated Succsefully",data:updatedS})
})
router.put('/description/:id', async(req, res) => { 
    const Sid = req.params.id 
    const X = await Skill.findOne({"_id":Sid})
    if(!X)
    return res.status(404).send({error: 'Skill does not exist'})
    const updatedS = await X.updateOne(req.body)
    res.json({msg: "Skill Updated Succsefully",data:updatedS})
})
router.delete('/:id',async (req, res) => {
    try{
    const Sid=req.params.id
	const X = await Skill.findOne({"_id":Sid})
    if(!X)
    return res.status(404).send({error: 'Skill does not exist'})
    const deletedS = await Skill.findByIdAndRemove(Sid)
    res.json({msg:'Skill was deleted successfully', data: deletedS})
    }
    catch{
        console.log(error)
    }
})





module.exports = router;