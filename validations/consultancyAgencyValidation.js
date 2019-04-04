const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            FirstName: Joi.string().min(3).max(100).required(),
            LastName: Joi.string().min(3).max(100).required(),
            email: Joi.string().min(4).max(100).required(),
            password: Joi.string().min(3).max(100).required(),
            Basic_Info:Joi.string().min(8).max(100).required(),
            Birthdate: Joi.date().required(),
            User_Category:Joi.string().valid('Consulting_Agent').required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            FirstName: Joi.string().min(3).max(500),
            LastName: Joi.string().min(3).max(100),
            email: Joi.string().min(10).max(100),
            password: Joi.string().min(10).max(100),
            Basic_Info:Joi.string().min(8).max(100),
            Birthdate: Joi.date()

        }

        return Joi.validate(request, updateSchema)
    }, 
}
