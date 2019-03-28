const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            email: Joi.string().min(10).max(100).required(),
            password: Joi.string().min(10).max(100).required(),
            Basic_Info:Joi.string().min(8).max(100).required()
        
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            email: Joi.string().min(10).max(100),
            password: Joi.string().min(10).max(100),
            Basic_Info:Joi.string().min(8).max(100)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
