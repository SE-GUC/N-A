const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            rating: Joi.number.required(),
            review: Joi.string().min(3).max(100).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            rating: Joi.number.required(),
            review: Joi.string().min(3).max(100).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}