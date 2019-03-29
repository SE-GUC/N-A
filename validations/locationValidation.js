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
            available_from: Joi.date(),
            status: Joi.string().min(3).max(500),
            available: Joi.string().min(3).max(500),
            till: Joi.date(),
            photo_link: Joi.string().min(3).max(500),
            fee: Joi.number().min(3).max(500),
            capacity: Joi.number().min(3).max(50000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
