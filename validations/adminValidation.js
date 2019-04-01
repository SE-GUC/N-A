module.exports = {
    createValidation: request => {
        const createSchema = {
            first_name: Joi.string().min(3).max(500).required(),
            last_name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(3).max(500).required(),
            Password: Joi.string().min(3).max(500).required(),
            Birthdate: Joi.string().min(3).max(500).required(),
            JoinDate: Joi.number().min(3).max(50000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            first_name: Joi.string().min(3).max(500).required(),
            last_name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(3).max(500).required(),
            Password: Joi.string().min(3).max(500).required(),
            Birthdate: Joi.string().min(3).max(500).required(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
