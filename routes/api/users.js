const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();


const User = require('../../models/User')

router.get('/',(req,res)=> res.json({data: 'User Working..'}))



router.post('/register',async (req,res)=> {
    const {email,name,age,password,Category,Skills} = req.body 
    const user =   await User.findOne([email])
    if(user) return res.status(400).json({error:'Email already exists'})


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

module.exports = router