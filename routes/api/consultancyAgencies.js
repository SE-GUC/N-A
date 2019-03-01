// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const consultancyAgency = require('../../models/consultancyAgency');

// temporary data created as if it was pulled out of the database ...
const consultancyAgencies = [
	new consultancyAgency('educational consultancy'),
	new consultancyAgency('business consultancy'),
	new consultancyAgency('agriculture consultancy'),
	new consultancyAgency('sports consultancy'),
	new consultancyAgency('investment consultancy')
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all consultancy Agencies
router.get('/', (req, res) => res.json({ data: consultancyAgencies }));

// Get a consultancy Agency
router.get('/:id', (req, res) => {
    const consultancyAgencyId = req.params.id
	const consultancyAgency = consultancyAgencies.find(consultancyAgency => consultancyAgency.id === consultancyAgencyId);
	if(!consultancyAgency) return res.status(404).send('The Consultancy Agency with the given id was not found');
    res.send(consultancyAgency);
})

// Create a new consultancy Agency
router.post('/', (req, res) => {
	const information = req.body.information;

	if (!information) return res.status(400).send({ err: 'Information field is required' });
	if (typeof information !== 'string') return res.status(400).send({ err: 'Invalid value for information' });

	const consultancyAgency = {
		information,
		id: uuid.v4(),
	};
	consultancyAgencies.push(consultancyAgency);
	return res.json({ data: consultancyAgency });
});

// Update a book's title
router.put('/:id', (req, res) => {
    const consultancyAgencyId = req.params.id 
	const updatedInformation = req.body.information
	if (!updatedInformation) return res.status(400).send({ err: 'Information field is required' });
	if (typeof updatedInformation !== 'string') return res.status(400).send({ err: 'Invalid value for information' });
	const consultancyAgency = consultancyAgencies.find(consultancyAgency => consultancyAgency.id === consultancyAgencyId);
	if(!consultancyAgency) return res.status(404).send('The Consultancy Agency with the given id was not found');
    consultancyAgency.information = updatedInformation
    res.send(consultancyAgencies)
})

// Delete a book
router.delete('/:id', (req, res) => {
	const consultancyAgencyId = req.params.id
	const consultancyAgency = consultancyAgencies.find(consultancyAgency => consultancyAgency.id === consultancyAgencyId);
	if(!consultancyAgency) return res.status(404).send('The Consultancy Agency with the given id was not found');
    const index = consultancyAgencies.indexOf(consultancyAgency)
    consultancyAgencies.splice(index,1);
    res.send(consultancyAgency);
})



module.exports = router;
