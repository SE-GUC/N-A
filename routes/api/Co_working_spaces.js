const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router()

// We will be connecting using database
const User = require('../../models/User')
const cwsValidator = require('../../validations/coWorkingSpaceValidations')
const userValidator = require('../../validations/userValidations')

const seedCoWorkingSpaces = async () => {
  const salt = bcrypt.genSaltSync(42)
  const cws1 = new User({
    User_Category: 'Partner_CoWorkingSpace',
    Basic_Info: 'nintendo found in 1992 to produce video game consoles',
    FirstName: 'Niccolò',
    LastName:  'Machiavelli',
    Birthdate: new Date(),
    email: 'randm1@randm',
    password: bcrypt.hashSync('123456',salt),
    Business_Plans_Offered: '10% off games',
    rooms: 10,
    Facilities: 'easy payment'
  })

  await cws1.save();
};

// Get all coworking spaces
router.get('/', async (req, res) => {
  const coworkingSpaces = await User.find({User_Category: 'Partner_CoWorkingSpace'})
  res.json({ data: coworkingSpaces })
});

// Get a certain coworking space
router.get('/:id', (req, res) => {
        const id = req.params.id
        User.findById(id, (err, cws) => {
          res.send(cws)
        })
    })

 // Create a new Co_Working_space
router.post('/', (req, res) => {

  const cwsValidated = cwsValidator.createValidation(req.body)
  if (cwsValidated.error) return res.status(400).send({ error: cwsValidated.error.details[0].message })
  // const userValidated = userValidator.createValidation(req.body)
  // if (userValidated.error) return res.status(400).send({ error: userValidator.error.details[0].message })

  const { Basic_Info, FirstName, LastName, age,
   email, password, Business_Plans_Offered,
   Rooms, Facilities, Birthdate } = req.body;

  const salt = bcrypt.genSaltSync(10)
  const user = new User({
    Basic_Info: Basic_Info,
    FirstName: FirstName,
    LastName: LastName,
    Birthdate: Birthdate,
    email: email,
    password: bcrypt.hashSync(password,salt),
    Business_Plans_Offered:  Business_Plans_Offered,
    Rooms: Number.parseInt(Rooms),
    Facilities: Facilities,
    User_Category: 'Partner_CoWorkingSpace'
  })

  user.save()
  .then(() => res.json({ data: user }))
  .catch((error) => res.json({ err: error }));
});

// update a certain coworking space
router.put('/:id', (req, res) => {
	const Co_working_spaceId = req.params.id;
	const Co_working_space = Co_working_spaces.find(Co_working_space => Co_working_space.id === Co_working_spaceId)
	if(req.body.basic_Info)
	Candidate.basic_Info = req.body.basic_Info;
	if(req.body.Name)
	Candidate.Name=req.body.Name;
	if(req.body.Email)
	Candidate.Email=req.body.Email;
	if(req.body.Business_plans_offer)
	Candidate.Business_plans_offer=req.body.Business_plans_offer;
	if(req.body.Rooms)
    Candidate.email=req.body.Rooms;
    if(req.body.Facilities)
    Candidate.email=req.body.Facilities;
    res.send(Co_working_space)
})

//delete a certain Co_working_space
router.delete('/:id', (req, res) => {
    const Co_working_spaceId = req.params.id 
    const Co_working_space = Co_working_spaces.find(Co_working_space => Co_working_space.id ===Co_working_spaceId)
    const index = Co_working_spaces.indexOf(Co_working_space)
    Co_working_spaces.splice(index,1)
    res.send(Co_working_spaces)
})
router.get('/', (req, res) => res.json({ data: Co_working_spaces }))
module.exports = router
