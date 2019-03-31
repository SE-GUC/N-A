const express = require('express');

const Joi = require('joi');


const router = express.Router();

const validator = require('../../validations/partnervalidations');
// Models


const mongoose = require('mongoose');
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
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
      res.json({data: y })
})
router.put('/email/:partid',async (req, res) => {


 
    const pid = req.params.partid 

  
 
    const x=await partner.findById(pid);
    
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationemail(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
    res.json({msg: 'partner is updated successfully',data:y })
})

router.put('/password/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid);
    
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationpassword(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
      res.json({msg: 'partner is updated successfully',data:y })
})
router.put('/Join_Date/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid);
    
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationJoin_Date(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
      res.json({msg: 'partner is updated successfully',data:y })
})

router.put('/Basic_Info/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid)
   
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationBasic_Info(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
      res.json({msg: 'partner is updated successfully',data:y })
})
router.put('/LastName/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid)
   
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationLastName(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
    res.json({msg: 'partner is updated successfully',data:y })
})

router.put('/Birthdate/:partid', async(req, res) => {


 
    const pid = req.params.partid 

    

 
    const x=await partner.findById(pid)
   
    if(x==null)
    return res.status(404).send({error: 'partner is not in the list'})
   
    const isValidated = validator.updateValidationBirthdate(req.body)

    if (isValidated.error) 
    return res.status(400).send({ error: isValidated.error.details[0].message })
    
    const updatedpartner = await x.updateOne(req.body)
    const y = await partner.findById(pid);
    res.json({msg: 'partner is updated successfully',data:y })
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
    x.Past_Projects.push(pproject)
    const updatedP=await x.updateOne({"Past_Projects":x.Past_Projects})
    const y = await partner.findById(pid);
    res.json({data:y})
	


 
})
router.put('/BoardMembers/:partid',async(req,res)=>{


 
	const pid=req.params.partid


 
	const BoardMembers=req.body.BoardMembers


 
    const X=await partner.findById(pid);
    X.BoardMembers.push(BoardMembers)
    const updatedP=await X.updateOne({"BoardMembers":X.BoardMembers})
    const y = await partner.findById(pid);
    res.json({data:y})
    

 
})



router.delete('/deletepart/:partid',async (req, res) => {

    const partnerid = req.params.partid 

    const x = await partner.findByIdAndRemove(partnerid)

    res.send(x)

})

router.delete('/deleteproject/:partid',async (req, res) => {

    const pid = req.params.partid 

    const X= await partner.findById(pid)
    if(!X)
    
    return res.status(404).send({error: 'partner does not exist'})
 
    const isValidated = validator.addpastproject(req.body)

    var result=[]

    

    for(var i=0;i<(X.Past_Projects).length;i++){

        if((X.Past_Projects)[i]!=req.body.pproject)

            result.push((X.Past_Projects)[i])

    }

    

    const updatedP=await X.updateOne({"Past_Projects":result})

    const y = await partner.findById(pid);
    
    res.json({msg: 'past project Deleted successfully',data:y})

})

router.delete('/deleteboardmem/:partid',async (req, res) => {

    const pid = req.params.partid 

    const X=await partner.findById(pid)

    if(!X)
 
    return res.status(404).send({error: 'partner does not exist'})
 
    const isValidated = validator.addpastproject(req.body)

    var result=[]

    

    for(var i=0;i<(X.BoardMembers).length;i++){

        if((X.BoardMembers)[i]!=req.body.BoardMembers)

            result.push((X.BoardMembers)[i])

    }

    

    const updatedP=await X.updateOne({"BoardMembers":result})

    const y = await partner.findById(pid);
    
    res.json({msg: 'past project Deleted successfully',data:y})

})


module.exports = router;

function newFunction() {
    return 'updatedFirstName';
}
