const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const Messages = require('../../models/Messages');
const messages = [
	new Messages("mado",'Hi omar how r u',true),
	new Messages("wrw",'Hi wad how r u',false),
	new Messages("qtqw",'Hi sad how r u',false),
	new Messages("wre",'Hi xad how r u',false),
	new Messages("omar",'Hi wrd how r u',true)
];

router.get('/',(req,res)  => res.json({ data: messages }));
// get a certain msg

router.get('/:id',(req,res) => {
    const NotID = req.params.id
    const msg = messages.find(msg => msg.id === NotID)
    res.json(msg)
})

// Create a msg
router.post('/',(req,res) => {
    const destination = req.body.destination
    const content = req.body.content
    if (!destination) return res.status(400).send({ err: 'You need to specify a destination' });
	if (typeof destination !== 'string') return res.status(400).send({ err: 'Invalid value for destination' });
	if (!content) return res.status(400).send({ err: 'A content to this msg need to be specified' });
    const notObject = {
        destination: destination,
        content: content,
        viewed: false,
        id: uuid.v4()
    }
      messages.push(notObject)
      res.json(messages)
})
router.post('/joi', (req, res) => {
	const destination = req.body.destination
	const content = req.body.content

	const schema = {
		destination: Joi.string().min(3).required(),
		content: Joi.string().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].msg });

	const newMsg = {
		destination,
		content,
		id: uuid.v4(),
	};
	return res.json({ data: newMsg });
});
// deleting a msg


router.delete('/:id',(req,res) => {
    const notID = req.params.id
    const msgation = messages.find(msgation => msgation.id === notID)
    const index = messages.indexOf(msgation)
    messages.splice(index,1)
    res.json(messages)
})



module.exports = router;
