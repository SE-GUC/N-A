const express = require('express');

const Joi = require('joi');


const router = express.Router();

const validator = require('../../validations/partnerValidations');

// Models



const partner = require('../../models/User');

// temporary data created as if it was pulled out of the database ...





//router.get('/', (req, res) => res.json({ data: partners }));
router.get('/',async  (req, res) => {


 
    const partners= await partner.find();


 
    res.json({ data: partners})


 
    })
router.get('/:partid',async(req,res)=> {

    const pid=req.params.partid;
    

    const x=await partner.findById(pid);

	if(x==null)
          
        res.send("it is not here");
        
       
	else

		res.send(x);



})

// Create a new user




router.post('/addpartner',async (req, res) => {


 
	const isValidated = validator.createValidation(req.body)


 
    if (isValidated.error) 


 
        return res.status(400).send({ error: isValidated.error.details[0].message })


 
    const X= await partner.create(req.body)


 
	return res.json({ data: X});


 
});



router.put('/FirstName/:partid',async (req, res) => {


 
    const pid = req.params.partid ;


    const x=await partner.findById(pid);
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationFirstName(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })

    x.FirstName = req.body.FirstName
      res.json({msg: 'partner is updated successfully',data:x })
})
router.put('/email/:partid',async (req, res) => {


 
    const pid = req.params.partid 

  
 
    const x=await partner.findById(pid);
    
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationemail(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
      x.email=req.body.email
      res.json({msg: 'partner is updated successfully',data:x })
})

router.put('/password/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid);
    
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationpassword(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
    x.password=req.body.password
      res.json({msg: 'partner is updated successfully',data:x })
})
router.put('/Join_Date/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid);
    
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationJoin_Date(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
    x.Join_Date=req.body.Join_Date
      res.json({msg: 'partner is updated successfully',data:x })
})

router.put('/Basic_Info/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid)
   
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationBasic_Info(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
     x.Basic_Info=req.body.Basic_Info
      res.json({msg: 'partner is updated successfully',data:x })
})
router.put('/LastName/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid)
   
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationLastName(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
     x.LastName=req.body.LastName
      res.json({msg: 'partner is updated successfully',data:x })
})

router.put('/Birthdate/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid)
   
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationBirthdate(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
     x.Birthdate=req.body.Birthdate
      res.json({msg: 'partner is updated successfully',data:x })
})

/*router.put('/partid/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    const newpartid = req.body.partid
 
    const x=await partner.findById(pid)
    x.partid = newpartid
 
    res.send(x)
})
*/
 
router.put('/pproject/:partid',async(req,res)=>{


 
	const pid=req.params.partid


 
	const pproject=req.body.pproject


 
	const x=await partner.findById(pid);
	x.Past_Projects.push(pproject);
 
	res.send(x)


 
})
router.put('/BoardMembers/:partid',async(req,res)=>{


 
	const pid=req.params.partid


 
	const BoardMembers=req.body.BoardMembers


 
	const x=await partner.findById(pid);
	x.BoardMembers.push(BoardMembers);
 
	res.send(x)


 
})



router.delete('/deletepart/:partid',async (req, res) => {

    const partnerid = req.params.partid 

    const x = await partner.findByIdAndRemove(partnerid)

    res.send(x)

})

router.delete('/deleteproject/:partid',async (req, res) => {

    const pid = req.params.partid 

    const x= await partner.findById(pid)
    if(!X)
 
    return res.status(404).send({error: 'partner does not exist'})
 
    const isValidated = validator.addpastproject(req.body)

    X.Past_Projects.delete(req.body.pproject)
 
    res.json({msg: 'past project Deleted successfully',data:X})

})

router.delete('/deleteboardmem/:partid',async (req, res) => {

    const pid = req.params.partid 

    const x=await partner.findById(pid)

    if(!X)
 
    return res.status(404).send({error: 'partner does not exist'})
 
    const isValidated = validator.addpastproject(req.body)

    X.BoardMembers.delete(req.body)
 
    res.json({msg: 'board member Deleted successfully',data:X})
})


module.exports = router;

function newFunction() {
    return 'updatedFirstName';
}
