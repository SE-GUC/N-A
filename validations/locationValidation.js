const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            country: Joi.string().min(3).max(500).required(),
            city: Joi.string().min(3).max(500).required(),
            street: Joi.string().min(3).max(500).required(),
            capacity: Joi.number().min(3).max(50000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            //status: Joi.string().min(3).max(500),
            photo_link: Joi.string().min(3).max(500),
            fee: Joi.number().min(3).max(500),
            //calender_entries: Joi.array(),
            //reservations: Joi.array(),
            capacity: Joi.number().min(3).max(50000)
        }

        return Joi.validate(request, updateSchema)
    }, 

    reservecompanyvalidation: request => {
        const updateSchema = {
            calender_entries: Joi.array()
        }
        return Joi.validate(request, updateSchema)
    },
}
