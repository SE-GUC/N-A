const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            email: Joi.string().max(100).required(),
            name: Joi.string().min(3).max(100).required(),
            age: Joi.number().min(1).max(100).required(),
            password: Joi.string().min(6).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            email: Joi.string().max(100),
            name: Joi.string().min(3).max(100),
            age: Joi.number().min(1).max(100),
            password: Joi.string().min(6)        }

        return Joi.validate(request, updateSchema)
    }, 
}
