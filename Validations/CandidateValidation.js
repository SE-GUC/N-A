const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            firstname: Joi.string().min(3).max(500).required(),
            lastname: Joi.string().min(3).max(100).required(),
            email: Joi.string().min(10).max(100).required(),
            password:Joi.string().min(8).max(100).required(),
            Birthdate: Joi.date().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstname: Joi.string().min(3).max(500),
            lastname: Joi.string().min(3).max(100),
            email: Joi.string().min(10).max(100),
            password:Joi.string().min(8).max(100),
            Birthdate: Joi.date().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}