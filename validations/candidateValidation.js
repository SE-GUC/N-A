const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            FirstName: Joi.string().min(3).max(500).required(),
            LastName: Joi.string().min(3).max(100).required(),
            email: Joi.string().min(10).max(100).required(),
            password:Joi.string().min(6).max(100).required(),
            Birthdate: Joi.date().required(),
            interests:Joi.string(),
            User_Category:Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            FirstName: Joi.string().min(3).max(500),
            LastName: Joi.string().min(3).max(100),
            email: Joi.string().min(10).max(100),
            password:Joi.string().min(6).max(100),
            Birthdate: Joi.date(),
            interests:Joi.string(),
            User_Category:Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}