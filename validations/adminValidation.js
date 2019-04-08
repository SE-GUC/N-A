const Joi = require('joi')
module.exports = {
    createValidation: request => {
        const createSchema = {
            FirstName: Joi.string().min(3).max(500).required(),
            LastName: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(3).max(500).required(),
            password: Joi.string().min(3).max(500).required(),
            Birthdate: Joi.date().required(),
            User_Category :  Joi.string().required()
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            FirstName: Joi.string().min(3).max(500),
            LastName: Joi.string().min(3).max(500),
            email: Joi.string().min(3).max(500),
            password: Joi.string().min(3).max(500),
            Birthdate: Joi.date(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
