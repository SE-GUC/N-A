// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const location = require('../../models/location');

// temporary data created as if it was pulled out of the database ...
const locations = [
	new location('locname2','country2', 'city2','str2','200','2500','true','15/5/2019', 'false','29/5/2019','www.photo2.com','2'),
	new location('locname3','country3', 'city3','str3','300','3500','true','15/5/3019', 'false','39/5/3019','www.photo3.com','3'),
	new location('locname1','country1', 'city1','str1','100','1500','true','15/5/1019', 'false','19/5/1019','www.photo1.com','1')
];

// Instead of router use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all locations
router.get('/', (req, res) => {
    res.send(locations)
})

// Get a certain location
router.get('/:id', (req, res) => {
    const locID = req.params.id
    const loc = locations.find(loc => loc.id === locID)
    res.send(loc)
})

// Update a location's details
router.put('/', (req, res) => {
    const locid = req.body.id
    const n_name =  req.body.name
    const n_capacity = req.body.capacity
    const n_fee = req.body.fee
    const n_status = req.body.status
    const n_available_from = req.body.available_from
    const n_available = req.body.available
    const n_till = req.body.till
    const n_photo_link = req.body.photo_link
    const n_city = req.body.city
    const n_country = req.body.country
    const n_street = req.body.street

    if(n_city||n_country||n_street){
        return res.status(400).send({ err: 'city,country and street variables cannot be altered' })
    }

    if (!locid) return res.status(400).send({ err: 'id field is required' });
    const loc = locations.find(loc => loc.id === locid)

    if(n_name){
        if(typeof n_name !== 'string'){
            return res.status(400).send({ err: 'Invalid value for name' })
        }else{
            loc.name=n_name
        }
    }
    if(n_capacity){
        if(typeof n_capacity !== 'string'){
            return res.status(400).send({ err: 'Invalid value for capacity' })
        }else{
            loc.capacity=n_capacity
        }
    }
    if(n_fee){
        if(typeof n_fee !== 'string'){
            return res.status(400).send({ err: 'Invalid value for fee' })
        }else{
            loc.fee=n_fee
        }
    }
    if(n_status){
        if(typeof n_status !== 'string'){
            return res.status(400).send({ err: 'Invalid value for status' })
        }else{
            loc.status=n_status
        }
    }
    if(n_available_from){
        if(typeof n_available_from !== 'string'){
            return res.status(400).send({ err: 'Invalid value for available_from' })
        }else{
            loc.available_from=n_available_from
        }
    }
    if(n_available){
        if(typeof n_available !== 'string'){
            return res.status(400).send({ err: 'Invalid value for available' })
        }else{
            loc.available=n_available
        }
    }
    if(n_till){
        if(typeof n_till !== 'string'){
            return res.status(400).send({ err: 'Invalid value for till' })
        }else{
            loc.till=n_till
        }
    }
    if(n_photo_link){
        if(typeof n_photo_link !== 'string'){
            return res.status(400).send({ err: 'Invalid value for photo_link' })
        }else{
            loc.photo_link=n_photo_link
        }
    }
    res.send(locations)
})

// Create a location
router.post('/', (req, res) => {
    const name =  req.body.name
    const country = req.body.country
    const city = req.body.city
    const street = req.body.street
    const capacity = req.body.capacity
    const fee = req.body.fee
    const status = req.body.status
    const available_from = req.body.available_from
    const available = req.body.available
    const till = req.body.till
    const photo_link = req.body.photo_link
    
    if (!country) return res.status(400).send({ err: 'country field is required' });
    if (!city) return res.status(400).send({ err: 'city field is required' });
    if (!street) return res.status(400).send({ err: 'street field is required' });
    if (!capacity) return res.status(400).send({ err: 'capacity field is required' });
    if (!name) return res.status(400).send({ err: 'Name field is required' });
    
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    if (typeof country !== 'string') return res.status(400).send({ err: 'Invalid value for country' });
    if (typeof city !== 'string') return res.status(400).send({ err: 'Invalid value for city' });
    if (typeof street !== 'string') return res.status(400).send({ err: 'Invalid value for street' });
    if (typeof capacity !== 'string') return res.status(400).send({ err: 'Invalid value for capacity' });

    const loc = {
        name: name,
        country: country,
        city: city,
        street: street,
        capacity: capacity,
        fee: fee,
        status: status,
        available_from: available_from,
        available: available,
        till: till,
        photo_link: photo_link,
        id:locations.length + 1
    }
    locations.push(loc)
    res.send(locations)
});

// Delete a location
router.delete('/:id', (req, res) => {
    const locid = req.params.id 
    const loc = locations.find(loc => loc.id === locid)
    const index = locations.indexOf(loc)
    locations.splice(index,1)
    res.send(locations)
})

module.exports = router;
