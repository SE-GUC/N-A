const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Basic_Info: Joi.string().max(256).required(),
            //Business_Plans_Offered: Joi.string().max(256).required(),
           // Rooms: Joi.number().min(0).max(100).required(),
            //Facilities: Joi.array().items(Joi.string()).required(),
            email: Joi.string().max(100).required(),
            FirstName: Joi.string().min(3).max(100).required(),
            LastName: Joi.string().min(3).max(100).required(),
            Birthdate: Joi.date().required(),
            age: Joi.number().min(1).max(100).required(),
            password: Joi.string().min(6).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
          Basic_Info: Joi.string().max(256),
          Business_Plans_Offered: Joi.string().max(256),
          Rooms: Joi.number().min(0).max(100),
          Facilites: Joi.array().items(Joi.string()),
          email: Joi.string().max(100),
          name: Joi.string().min(3).max(100),
          age: Joi.number().min(1).max(100),
          password: Joi.string().min(6)
        }

        return Joi.validate(request, updateSchema)
    },
}
