const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


const Notifications = require('../../models/Notifications');
const notifications = [
	new Notifications('Invitation','Nom',false),
	new Notifications('Invitation','mado',false),
	new Notifications('Invitation','mon',false),
	new Notifications('Invitation','omar',true)
];

router.get('/',(req,res)  => res.json({ data: notifications }));
// get a certain notification

router.get('/:id',(req,res) => {
    const NotID = req.params.id
    const notific = notifications.find(notific => notific.id === NotID)
    res.json(notific)
})

// Create a Notification
router.post('/',(req,res) => {
    const type = req.body.type
    const from = req.body.from
    var seen = req.body.seen

    const notObject = {
        type: type,
        from: from,
        seen: seen,
        id: uuid.v4()
    }
      notifications.push(notObject)
      res.json(notifications)
})
// updating a notification

router.put('/:id',(req,res) => {
    const notID = req.params.id
    const Updatedtype = req.body.type
    const from = req.body.from
    var Updatedseen = req.body.seen
    const upNot = notifications.find(upNot => upNot.id === notID)
    upNot.type = Updatedtype
    upNot.seen = Updatedseen
    upNot.from = from
    res.json(notifications)
})

// deleting a notification


router.delete('/:id',(req,res) => {
    const notID = req.params.id
    const notification = notifications.find(notification => notification.id === notID)
    const index = notifications.indexOf(notification)
    notifications.splice(index,1)
    res.json(notifications)
})



module.exports = router;
