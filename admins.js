// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Admin = require('../../models/Admin');

// temporary data created as if it was pulled out of the database ...
const admins = [
	new Admin('Barney','Saeed', 'barney.saed@gmail.com','3afasfa0','October 2,1998'),
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// // Get all admins
// router.get('/', (req, res) => res.json({ data: admins }));

// Get all admin
router.get('/', (req, res) => res.json({ data: admins }));

// Create a new admin
router.post('/', (req, res) => {
	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const email = req.body.email;
	const password = req.body.password;
	const birth_date = req.body.birth_date;

	if (!first_name) return res.status(400).send({ err: 'First name field is required' });
	if (typeof first_name !== 'string') return res.status(400).send({ err: 'Invalid value for first name.' });
	if (!last_name) return res.status(400).send({ err: 'Last name field is required' });
	if (typeof last_name !== 'string') return res.status(400).send({ err: 'Invalid value for last name.' });
	// if (!email) return res.status(400).send({ err: 'email field is required' });
    // if (typeof email !== 'string') return res.status(400).send({ err: 'Invalid value for email' });
	// if (!password) return res.status(400).send({ err: 'password field is required' });
	// if (!Birthdate) return res.status(400).send({ err: 'birthdate field is required' });

	// const newAdmin = {
	// 	first_name,
	// 	last_name,
	// 	email,
	// 	password,
	// 	birth_date,
	// };

	const newAdmin = new Admin(first_name, last_name, email, password ,birth_date)
	admins.push(newAdmin)
	return res.json({ data: newAdmin });
});

// router.post('/joi', (req, res) => {
// 	const name = req.body.name
// 	const age = req.body.age

// 	const schema = {
// 		name: Joi.string().min(3).required(),
// 		age: Joi.number().required(),
// 	}

// 	const result = Joi.validate(req.body, schema);

// 	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

// 	const newUser = {
// 		name,
// 		age,
// 		id: uuid.v4(),
// 	};
// 	return res.json({ data: newUser });
// });

// update a certain Admin

router.put('/:id', (req, res) => {

	const AdminId = req.params.id; 

	const Admin = admins.find(Admin => Admin.id === AdminId)

	if(req.body.first_name)

	Admin.first_name = req.body.first_name;

	if(req.body.last_name)

	Admin.last_name=req.body.last_name;

	if(req.body.password)

	Admin.password=req.body.password;

	if(req.body.Birthdate)

	Admin.birth_date=req.body.birth_date;

	if(req.body.email)

	Admin.email=req.body.email;

    res.send(Admin)

})

// delete a certain admin

router.delete('/:id', (req, res) => {

    const AdminId = req.params.id 

    const Admin = admins.find(Admin => Admin.id === 	AdminId)

    const index = admins.indexOf(Admin)

    admins.splice(index,1)

    res.send(admins)

})

module.exports = router;
