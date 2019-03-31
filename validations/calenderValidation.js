const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            to: Joi.string().min(3).max(500).required(),
            from: Joi.string().min(3).max(500).required(),
            day: Joi.string().min(3).max(500).required(),
            ownerID: Joi.string().min(3).max(5000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            to: Joi.string().min(3).max(500),
            from: Joi.string().min(3).max(500),
            day: Joi.string().min(3).max(500),
            ownerID: Joi.string().min(3).max(5000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
