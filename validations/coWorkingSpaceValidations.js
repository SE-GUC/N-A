const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Basic_Info: Joi.string().max(256).required(),
            Business_Plans_Offered: Joi.string().max(256).required(),
            Rooms: Joi.number().min(0).max(100).required(),
            Facilites: Joi.array().items(Joi.string()).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
          Basic_Info: Joi.string().max(256),
          Business_Plans_Offered: Joi.string().max(256),
          Rooms: Joi.number().min(0).max(100),
          Facilites: Joi.array().items(Joi.string())
        }

        return Joi.validate(request, updateSchema)
    },
}