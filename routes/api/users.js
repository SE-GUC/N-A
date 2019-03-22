const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();


const User = require('../../models/User')

router.get('/',async(req,res)=>{
const users = await User.find()
res.json({data: users})
})


router.get('/:id',async(req,res)=>{
    const users = await User.findById(req.params.id)
    if(!users)  return res.status(404).send({error: 'User does not exist'})
    res.json(users);
})

router.post('/register',async (req,res)=> {
    const {email,name,age,password,Category,Skills} = req.body 
    const user =   await User.findOne([email])
    if(user) return res.status(400).json({error:'Email already exists'})
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password,salt)
     const newUser = new User({
        email,
        name,
        age,
        password: hashPassword,
        Category,
        Skills

    })
    newUser
        .save()
        .then(user => res.json({data: user}))
        .catch(err => res.json({error: 'Cannot Create user'}))
    })
    router.put('/:id', async (req,res) => {
        try {
         const id = req.params.id
         const users = await User.findOne({id})
         if(!users) return res.status(404).send({error: 'User does not exist'})
         const user =   await User.findOne([email])
    if(user) return res.status(400).json({error:'Email already exists'})
         const isValidated = validator.updateValidation(req.body)
         if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
         const updatedUser = await User.updateOne(req.body)
         res.json({msg: 'User updated successfully',updatedUser})
        }
        catch(error) {
            console.log(error)
        }  
     })
     router.delete('/:id', async (req,res) => {
        try {
         const id = req.params.id
         const deletedUser = await User.findByIdAndRemove(id)
         res.json({msg:'User was deleted successfully', data: deletedUser})
        }
        catch(error) {
            console.log(error)
        }  
     })

module.exports = router