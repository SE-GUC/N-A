const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router()

// We will be connecting using database
const Co_working_space = require('../../models/Co_working_space')

const seedCoWorkingSpaces = async () => {
  // empty the table on each restart of the server
  console.log('node environment: ' + process.env.NODE_ENV)
  if(process.env.NODE_ENV === 'development') {
    await Promise.all([
      Co_working_space.deleteMany({})
    ])
  }

  const salt = bcrypt.genSaltSync(10)
  const cws1 = new Co_working_space({
    basicInfo: 'nintendo found in 1992 to produce video game consoles',
    name: 'Niccolò Machiavelli',
    email: 'randm1@randm',
    password: bcrypt.hashSync('123456',salt),
    businessPlanOffer: '10% off games',
    rooms: 100,
    facilities: 'easy payment'
  })

  await cws1.save();
};

seedCoWorkingSpaces();

// temporary data created as if it was pulled out of the database ...
// const Co_working_spaces = [
//     new Co_working_space('nintendo found in 1992 to produce video game consoles', 'Niccolò Machiavelli', 'randm1@randm' , '10% off games','100','easy payment'),
//     new Co_working_space('playstation found in 1993', 'Fyodor Dostoyevsky','randm2@randm', '20% off games','101','allow installments'),
//     new Co_working_space('X-box found in 1994', 'Leo Tolstoy','randm3@randm', '30% off games','102','pay by visa'),
//     new Co_working_space('Fifa found in 1997', 'Sun Tzu', 'randm4@randm', '40% off games','103','offer multiple packages'),
//     new Co_working_space('Pes found in 2000', 'William Shakespeare', 'randm5@randm', '50% off games','104','in a good location'),
//     new Co_working_space('gta found in 1999', 'Charles Dickens','randm6@randm', '60% off games','105','discount on bulk'),
// ];

// Get all coworking spaces
router.get('/', async (req, res) => {
  const coworkingSpaces = await Co_working_space.find()
  res.json({ data: coworkingSpaces })
});

// Get a certain coworking space
router.get('/:id', (req, res) => {
        const id = req.params.id
        Co_working_space.findById(id, (err, cws) => {
          res.send(cws)
        })
    })

 // Create a new Co_Working_space
router.post('/', (req, res) => {
	const basic_Info = req.body.basic_Info;
	const Name =req.body.Name;
	const Email=req.body.Email ;
	const Business_plans_offer=req.body.Business_plans_offer;
    const Rooms =req.body.Rooms
    const Facilities =req.body.Facilities
	if (!basic_Info) return res.status(400).send({ err: 'basic_Info field is required' });
	if (typeof basic_Info !== 'string') return res.status(400).send({ err: 'Invalid value for basic_Info' });
	if (!Name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof Name !== 'string') return res.status(400).send({ err: 'Invalid value for  Name' });
	if (!Email) return res.status(400).send({ err: 'Email field is required' });
    if (typeof Email!== 'string') return res.status(400).send({ err: 'Invalid value for Email' });
    if (!Business_plans_offer) return res.status(400).send({ err: 'Business_plans_offer field is required' });
    if (typeof Business_plans_offer !== 'string') return res.status(400).send({ err: 'Invalid value for Business_plans_offer' });
    if (!Rooms) return res.status(400).send({ err: 'Rooms field is required' });
    if (typeof Rooms !== 'string') return res.status(400).send({ err: 'Invalid value for Rooms' });
    if (!Facilities) return res.status(400).send({ err: 'Facilities field is required' });
    if (typeof Facilities !== 'string') return res.status(400).send({ err: 'Invalid value for Facilities' });
    	const newCo_working_space = new Co_working_space(basic_Info,Name,Email,Business_plans_offer ,Rooms,Facilities)
	Candidates.push(newCo_working_space) 
	return res.json({ data: newCo_working_space });
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
