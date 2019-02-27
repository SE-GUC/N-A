const express = require('express');
const Joi = require('joi');
const router = express.Router();


const Project = require('../../models/Project');
const Projects = [
	new Project('1',"LirtenHub","Implementation",true,"45 days","atleast 2 years","high","A FreeLancing website",10000,2,3,4,"web Development"),
	new Project('2',"DataBase","Initiation",false,"7 days","atleast 1 years","low","A database simulation",500,2,null,null,"Developer"),
	new Project('3',"OS","Allocation",true,"23 days","atleast 5 years","high","An operating system simulation",6000,3,3,null,"Developer"),
	new Project('4',"CA","Completed",true,"15 days","atleast 3 years","medium","A computer simulation",3000,4,4,6,"Developer")
];


router.get('/', (req, res) => res.json({ data: Projects}));

router.get('/:id',(req,res)=> {
	const pid=req.params.id;
	const X=Projects.find(Project => Project.id==pid);
	if(X==null)
		res.send("Project not found");
	else
		res.send(X);

})




router.post('/joi', (req, res) => {
	const name = req.body.name
	const time_needed = req.body.time_needed
	const exp_level =req.body.exp_level
    const comitment_level=req.body.comitment_level
	const descreption=req.body.descreption
	const price=req.body.price
	const partner_id=req.body.partner_id
	const id = req.body.id
	const main_skill=req.body.main_skill
	const status = "Initiation"
	const approved=false
	const Contributer_id=null
	const consultancy_agency_id=null

	const schema = {
		name: Joi.string().min(3).required(),
		descreption: Joi.string().required(),
		id: Joi.number().required()

	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const P=new Project(id,name,status,approved,time_needed,exp_level,comitment_level,descreption,price,partner_id,consultancy_agency_id,Contributer_id,main_skill);
	Projects.push(P);
	return res.json({ data: P });
});

router.put('/name/:id', (req, res) => {
    const pid = req.params.id 
    const updatedname = req.body.name
    const Project = Projects.find(Project => Project.id === pid)
    Project.name = updatedname
    res.send(Projects)
})
router.put('/status/:id', (req, res) => {
    const pid = req.params.id 
    const updatedstatus = req.body.status
    const Project = Projects.find(Project => Project.id === pid)
    Project.status = updatedstatus
    res.send(Projects)
})
router.put('/approved/:id', (req, res) => {
    const pid = req.params.id 
    const updatedapproved = req.body.approved
    const Project = Projects.find(Project => Project.id === pid)
    Project.approved = updatedapproved
    res.send(Projects)
})
router.put('/time_needed/:id', (req, res) => {
    const pid = req.params.id 
    const updatedtime_needed= req.body.time_needed
    const Project = Projects.find(Project => Project.id === pid)
    Project.time_needed = updatedtime_needed
    res.send(Projects)
})
router.put('/exp_level/:id', (req, res) => {
    const pid = req.params.id 
    const updatedexp_level = req.body.exp_level
    const Project = Projects.find(Project => Project.id === pid)
    Project.exp_level = updatedexp_level
    res.send(Projects)
})
router.put('/comitment_level/:id', (req, res) => {
    const pid = req.params.id 
    const updatedcomitment_level = req.body.comitment_level
    const Project = Projects.find(Project => Project.id === pid)
    Project.comitment_level = updatedcomitment_level
    res.send(Projects)
})
router.put('/descreption/:id', (req, res) => {
    const pid = req.params.id 
    const updateddescreption = req.body.descreption
    const Project = Projects.find(Project => Project.id === pid)
    Project.descreption = updateddescreption
    res.send(Projects)
})
router.put('/price/:id', (req, res) => {
    const pid = req.params.id 
    const updatedprice = req.body.price
    const Project = Projects.find(Project => Project.id === pid)
    Project.price = updatedprice
    res.send(Projects)
})
router.put('/partner_id/:id', (req, res) => {
    const pid = req.params.id 
    const updatedpartner_id = req.body.partner_id
    const Project = Projects.find(Project => Project.id === pid)
    Project.partner_id = updatedpartner_id
    res.send(Projects)
})
router.put('/consultancy_agency_id/:id', (req, res) => {
    const pid = req.params.id 
    const updatedconsultancy_agency_id = req.body.consultancy_agency_id
    const Project = Projects.find(Project => Project.id === pid)
    Project.consultancy_agency_id = updatedconsultancy_agency_id
    res.send(Projects)
})
router.put('/Contributer_id/:id', (req, res) => {
    const pid = req.params.id 
    const updatedContributer_id = req.body.Contributer_id
    const Project = Projects.find(Project => Project.id === pid)
    Project.Contributer_id = updatedContributer_id
    res.send(Projects)
})
router.put('/main_skill/:id', (req, res) => {
    const pid = req.params.id 
    const updatedmain_skill = req.body.main_skill
    const Project = Projects.find(Project => Project.id === pid)
    Project.main_skill= updatedmain_skill
    res.send(Projects)
})
router.put('/id/:id', (req, res) => {
    const pid = req.params.id 
    const updatedid = req.body.id
    const Project = Projects.find(Project => Project.id === pid)
    Project.id = updatedid
    res.send(Projects)
})

router.delete('/:id', (req, res) => {
    const pid = req.params.id 
    const P = Projects.find(Project => Project.id === pid)
    const index = Projects.indexOf(P)
    Projects.splice(index,1)
    res.send(Projects)
})

router.put('/addSkill/:id',(req,res)=>{
	const pid=req.params.id
	const skill=req.body.skill
	const P=Projects.find(Project => Project.id==pid)
	P.extra_skills.push(skill);
	res.send(Projects)
})

router.put('/addattrib/:id',(req,res)=>{
	const pid=req.params.id
	const attribute=req.body.attribute
	const P=Projects.find(Project => Project.id==pid)
	P.extra_attribute.push(attribute);
	res.send(Projects)
})

router.delete('/delskill/:id', (req, res) => {
    const pid = req.params.id 
    const P = Projects.find(Project => Project.id === pid)
    P.extra_skills=[];
    res.send(Projects)
})
router.delete('/delattrib/:id', (req, res) => {
    const pid = req.params.id 
    const P = Projects.find(Project => Project.id === pid)
    P.extra_attribute=[];
    res.send(Projects)
})

module.exports = router;
