const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
<<<<<<< HEAD:Validations/CandidateValidation.js
           
            FirstName: Joi.string().min(3).max(500).required(),
            LastName: Joi.string().min(3).max(100).required(),
            email: Joi.string().max(100).required(),
            password: Joi.string().min(6).required(),
            Birthdate:Joi.date(),
            User_Category :Joi.string().required()
=======
            FirstName: Joi.string().min(3).max(500).required(),
            LastName: Joi.string().min(3).max(100).required(),
            email: Joi.string().min(10).max(100).required(),
            password:Joi.string().min(8).max(100).required(),
            Birthdate: Joi.date().required(),
            interests:Joi.string(),
            User_Category:Joi.string()
>>>>>>> 6cccc947f8adbbd0fd110877ab985bef159f0592:validations/candidateValidation.js
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            FirstName: Joi.string().min(3).max(500),
            LastName: Joi.string().min(3).max(100),
            email: Joi.string().max(100),
            password:Joi.string().min(6).max(100),
            Birthdate: Joi.date(),
            User_Category :Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}