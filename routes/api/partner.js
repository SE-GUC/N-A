const express = require('express');

const Joi = require('joi');


const router = express.Router();



// Models

const partner = require('../../models/partner');



// temporary data created as if it was pulled out of the database ...

const partners = [

	new partner(1,'Barney', '1234','1/11/2010','configuration of website','barney@gmail.com'),

    new partner(2,'Lilly', 'ahmed123','10/12/2009','remodling','lilly@gmail.com'),

    new partner(3,'Ted', '7890','01/02/2002','modding','ted@gmail.com'),

	new partner(4,'Marshal', "marshallyw",'13/02/2000','renewal','marshal@gmail.com'),

	new partner(5,'Robin','robin23','13/02/2000','innovation and preformance','robin@gmail.com')

];



router.get('/', (req, res) => res.json({ data: partners }));

router.get('/:partid',(req,res)=> {

    const pid=req.params.partid;
    

    const x=partners.find(partner => partner.partid==pid);

	if(x==null)
          
        res.send("pok");
        
       
	else

		res.send(x);



})

// Create a new user




router.post('/joi', (req, res) => {
    const partid=req.body.partid
	const name = req.body.name
    const password=req.body.password;
    const joindate=req.body.joindate;
    const basicinf=req.body.basicinf;
    const email = req.body.email;
    const pproject= req.body.pproject;
    const boardmember=req.body.boardmember;

	const schema = {

		name: Joi.string().min(3).required(),



	}

    const partnerid = req.params.partid

    const partner = partners.find(partner => partner.partid === partnerid)
    temp.pprojects.push(pproject)
    temp.boardmembers.push(boardmember)


	const result = Joi.validate(req.body, schema);



	if (result.error) return res.status(400).send({ error: result.error.details[0].message });



	const newpartner = {

		partid,name,

		password,joindate,basicinf,email,

		

	};

	partners.push(newpartner)

    return res.json({ data: P });

});



router.put('/name/:partid', (req, res) => {


 
    const pid = req.params.partid ;

    const updatedname = req.body.name;


    const x=partners.find(partner => partner.partid==pid);
    x.name =updatedname
 
    res.send(partners)
})
router.put('/email/:partid', (req, res) => {


 
    const pid = req.params.partid 

    const newemail = req.body.email

 
    const x=partners.find(partner => partner.partid==pid);
    x.email = newemail
 
    res.send(partners)
})

router.put('/password/:partid', (req, res) => {


 
    const pid = req.params.partid 

    const newpassword = req.body.password

 
    const x=partners.find(partner => partner.partid==pid);
    x.password = newpassword
 
    res.send(partners)
})
router.put('/joindate/:partid', (req, res) => {


 
    const pid = req.params.partid 

    const newjoindate = req.body.joindate

 
    const x=partners.find(partner => partner.partid==pid);
    x.joindate = newjoindate
 
    res.send(partners)
})

router.put('/basicinf/:partid', (req, res) => {


 
    const pid = req.params.partid 

    const newinfo = req.body.basicinf

 
    const x=partners.find(partner => partner.partid==pid);
    x.basicinf = newinfo
 
    res.send(partners)
})


router.put('/partid/:partid', (req, res) => {


 
    const pid = req.params.partid 

    const newpartid = req.body.partid
 
    const x=partners.find(partner => partner.partid==pid);
    x.partid = newpartid
 
    res.send(partners)
})

 
router.put('/pproject/:partid',(req,res)=>{


 
	const pid=req.params.partid


 
	const pproject=req.body.pproject


 
	const x=partners.find(partner => partner.partid==pid);
	x.pprojects.push(pproject);
 
	res.send(partners)


 
})
router.put('/boardmembers/:partid',(req,res)=>{


 
	const pid=req.params.partid


 
	const boardmember=req.body.boardmember


 
	const x=partners.find(partner => partner.partid==pid);
	x.pprojects.push(boardmember);
 
	res.send(partners)


 
})



router.delete('/deletepart/:partid', (req, res) => {

    const partnerid = req.params.partid 

    const x=partners.find(partner => partner.partid==pid);

    const index = partners.indexOf(x)

    partners.splice(index,1)

    res.send(partners)

})

router.delete('/deleteproject/:partid', (req, res) => {

    const pid = req.params.partid 

    const x=partners.find(partner => partner.partid==pid);

    x.pprojects=[];

    res.send(partners)

})

router.delete('/deleteboardmem/:partid', (req, res) => {

    const pid = req.params.partid 

    const x=partners.find(partner => partner.partid==pid);

    x.boardmembers=[];

    res.send(partners)
})


module.exports = router;

function newFunction() {
    return 'updatedname';
}
