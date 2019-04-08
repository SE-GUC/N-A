const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const Task = require('../../models/Task');
const Skill=require('../../models/Skill');
const validator = require('../../validations/taskValidations')
//cruds
router.get('/',async  (req, res) => {
    const Tasks= await task.find();
    res.json({ data: Tasks})
    })

router.get('/:id',async (req,res)=> {
    const tid = req.params.id
	const X =await task.findOne({"_id":tid})
	if(!X)
        return res.status(404).send({error: 'Task does not exist'})
	else
		res.json({data:X});

})

router.post('/',async (req, res) => {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) 
        return res.status(400).send({ error: isValidated.error.details[0].message })
    const Y=await Skill.findOne({'Name':req.body.main_skill})
    if(!Y)
        return res.status(400).send({error: 'We dont support that skill in LirtenHub'})
    const X= await Task.create(req.body)

    const z=Project.findOne({'_id':X.project_id})
    const result=z.tasks
    result.push(X.id)
    await z.updateOne({'tasks':result})

	return res.json({msg:'Task was Posted successfully,Now wait until an admin approves it', data: X});
});
router.delete('/:id',async(req,res)=>{
    try {
        const tid = req.params.id
        const X = await Task.findOne({'_id':id})
        if(!X){
            return res.status(404).send({error: 'Task does not exist'})}
        if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
            return res.status(400).send({error: 'The Task cannot be Deleted anymore'})
        }
        const deletedT = await Task.findByIdAndRemove(tid)

        const P=Project.findOne({'_id':X.project_id})
        const result=[]
        for(let i=0;i<P.tasks.length;i++){
            if(P.tasks[i]!=tid)
                result.push(P.tasks[i])
        }
        await P.updateOne({"tasks":result})
        res.json({msg:'Task was deleted successfully', data: deletedT})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
})
router.put('/:id', async(req, res) => { 
    const tid = req.params.id 
    const X = await Task.findOne({"_id":tid})
    if(!X)
        return res.status(404).send({error: 'Task does not exist'})
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Task cannot be edited anymore'})
    }
    const isValidated = validator.UpdateValidation(req.body)
    if (isValidated.error) 
        return res.status(400).send({ error: isValidated.error.details[0].message })
    const Y=await Skill.findOne({'Name':req.body.main_skill})
    
    if(req.body.main_skill!=null&&!Y)
        return res.status(400).send({error: 'We dont support that skill in lirten'})
    
    const updatedT = await X.updateOne(req.body)
    res.json({msg: "Task Updated Succsefully",data:updatedT})
})
router.put('/addSkill/:id',async(req,res)=>{
	const tid=req.params.id
	const X = await Task.findOne({'_id':tid})
    if(!X)
    return res.status(404).send({error: 'Task does not exist'})
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Task cannot be edited anymore'})
    }
    const isValidated = validator.addskill(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const Y=await Skill.findOne({'Name':req.body.Skill})
    if(!Y)
        return res.status(400).send({error: 'We dont support that skill in lirten'})
    X.extra_skills.push(req.body.Skill)
    const updatedP=await X.updateOne({"extra_skills":X.extra_skills})
    res.json({msg: 'Skill Added successfully'})
})

router.put('/addattrib/:id',async(req,res)=>{
	 const tid=req.params.id
     const X = await Task.findOne({'_id':tid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Task cannot be edited anymore'})
    }
    const isValidated = validator.addattribute(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    X.extra_attributes.push(req.body.attribute)
    await X.updateOne({"extra_attributes":X.extra_attributes})
    res.json({msg: 'Attribute Added successfully'})
})

router.delete('/delskill/:id',async (req, res) => {
    const tid=req.params.id
	const X = await Task.findOne({"_id":tid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Task cannot be edited anymore'})
    }
    const isValidated = validator.addskill(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    var result=[]
    
    for(var i=0;i<(X.extra_skills).length;i++){
        if((X.extra_skills)[i]!=req.body.Skill)
            result.push((X.extra_skills)[i])
    }
    
    const updatedP=await X.updateOne({"extra_skills":result})
    res.json({msg: 'Skill Deleted successfully'})
})
router.delete('/delattrib/:id',async (req, res) => {
    const pid=req.params.id
	const X = await Project.findOne({"_id":pid})
    if(!X)
    return res.status(404).send({error: 'Project does not exist'})
    if(X.status=='Allocation'||X.status=='Implementation'||X.status=='Completed'){
        return res.status(400).send({error: 'The Project cannot be edited anymore'})
    }
    const isValidated = validator.addattribute(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    var result=[]
    
    for(var i=0;i<(X.extra_attributes).length;i++){
        if((X.extra_attributes)[i]!=req.body.attribute)
            result.push((X.extra_attributes)[i])
    }
    const updatedP=await X.updateOne({"extra_attributes":result})
    res.json({msg: 'Attribute Deleted successfully'})
})
router.put('/status/:id',async (req, res) => {
    const tid = req.params.id 
    const X = await Task.findOne({'_id':tid})
     if(!X)
     return res.status(404).send({error: 'Project does not exist'})
     if(X.status=='Completed'){
         return res.status(400).send({error: 'The Project Has Been Completed Already'})
     }
     const isValidated = validator.updateValidationstatus(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     await X.updateOne(req.body)
     if(req.body.status=='Implementation'){
         await X.updateOne({"Start_Date":new Date()})}
     else if(req.body.status=='Completed'){
         await X.updateOne({"End_Date":new Date()})          
             const Y=await User.findOne({"_id":X.member_id})        
             const result=Y.Past_Projects           
             result.push(X._id);
             await Y.updateOne({"Past_Projects":result})
         
     }
     res.json({msg: 'Task updated successfully'})
 })
// cruds done
router.get('/approved/notyet',async  (req, res) => {
    const Tasks= await Task.find();
    const result=[]
    for(let i=0;i<Tasks.length;i++){
        if(Tasks[i].approved==null)
            result.push(Tasks[i])
    }
    res.json({ data: result})
    })
router.get('/approved/Yes',async  (req, res) => {
    const Tasks= await Task.find();
    const result=[]
    for(let i=0;i<Tasks.length;i++){
        if((Tasks[i]).approved==true)
            result.push(Tasks[i])
    }
    res.json({ data: result})
})
router.get('/approved/No',async  (req, res) => {
    const Tasks= await Task.find();
    const result=[]
    for(let i=0;i<Tasks.length;i++){
        if((Tasks[i]).approved==false)
            result.push(Tasks[i])
    }
    res.json({ data: result})
})
router.put('/assign/:id',async (req,res)=>{
    const tid=req.params.id
    const memberid=req.body.memberid
    const X= await Task.findOne({"_id":tid})
    if(X.member_id!=null)
        return res.status(404).send({error: 'There is Already a Member Assigned to the Task'})
    await X.updateOne({'member_id':memberid })
    res.json({msg: 'Member is now Assigned to the Task'})

})
router.put('/apply/:id',async(req,res)=>{
    const tid=req.params.tid
    const memberid=req.body.memberid
    const X= await Task.findOne({"_id":tid})
    if(X.member_id!=null)
        return res.status(404).send({error: 'Someone else is Already working on the Task'})
    const result=X.current_members_applied_ids
    result.push(memberid)
    
    await X.updateOne({"current_members_applied_ids":result})
    res.json({msg:'Your requesnt to work on the Task has been submitted'})
})
router.get('/Pending/Tasks',async(req,res)=>{ //Tasks that members applied to but still not approved
    const X=await Task.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].member_id!=null&&X[i].current_members_applied_ids.length!=0&&X[i].status=='Allocation')
            result.push(X[i])
    }
    res.json({data:result})
})
router.get('/Pending/member',async(req,res)=>{ // returns for each Task the members who applied to it
    const X=await Task.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].current_members_applied_ids.length!=0 && X[i].status=='Allocation')
            result.push({Project:X[i]._id,candidates:X[i].current_members_applied_ids})
    }
    res.json({data:result})
})
router.get('/Pendingmember/:id',async(req,res)=>{ // returns for each project the members who applied to it
    const tid=req.params.id
    const X=await Task.findOne({"_id":tid})
    if(!X)
        return res.status(404).send({error: 'Project not found'})
    res.json({data:X.current_members_applied_ids})
})
router.get('/View/avalible',async(req,res)=>{
    const X=await Task.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].approved==true&&X[i].status=='Allocation'&&X[i].member_id!=null)
            result.push(X[i])
    }
    res.json({data:result})
})
router.get('/View/mytasks',async(req,res)=>{
    const id=req.body.id
    const X=await Task.find()
    result=[]
    for(let i=0;i<X.length;i++){
        if(X[i].consultancy_agency_id==id||X[i].member_id==id)
            result.push(X[i])
    }
    res.json({data:result})
})
router.put('/declinemember/:id',async(req,res)=>{
    const tid=req.params.id
    const memberid=req.body.memberid
    const X=await Task.findOne({'_id':pid})
    result=[]
    for(let i=0;i<X.current_members_applied_ids.length;i++){
        if(X.current_members_applied_ids[i]!=memberid)
            result.push(X.current_members_applied_ids[i])
    }
    await X.updateOne({"current_members_applied_ids":result})
    res.json({msg:'membere was declined sucessfully'})
})

router.post('/certified/:id',async(req,res)=>{ // check 3aleh tany
    const pid=req.params.id
    const mem_id=req.body.id
    //console.log(mem_id)
    const X=await Task.findOne({"_id":pid})
    const Y=await User.findOne({"_id":mem_id})
    
    if(Y.Skills.length==0)
        res.json({data:false})
    else if(!(Y.Skills.includes(X.main_skill)))
        res.json({data:false})
    else{
    for(let i=0;i<X.extra_skills.length;i++){
        if(!(Y.Skills.includes(X.extra_skills[i]))){
            res.json({data:false})
        }
    }
    res.json({data:true})
    }
})

module.exports=router
