
const Joi = require('joi')
module.exports = {


 
    createValidation: request => {


 
        const createSchema = {


 
        FirstName: Joi.string().min(5).max(50).required(),


 
        Basic_Info: Joi.string().min(10).max(500).required(),


 
        password: Joi.string().min(3).max(12).required(),
             
             
        Join_Date: Joi.string().required(),

             
        email: Joi.string().required()


 
        }
        return Joi.validate(request, createSchema)
    },


 



 
    updateValidationFirstName: request => {


 
        const updateSchema = {


 
            FirstName: Joi.string().min(5).max(50).required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },
    updateValidationBasic_Info: request => {


 
        const updateSchema = {


 
            Basic_Info: Joi.string().min(10).max(500).required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },
    updateValidationpassword: request => {


 
        const updateSchema = {


 
            password:Joi.string().min(3).max(12).required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },
    
    updateValidationJoin_Date: request => {


 
        const updateSchema = {


 
             Join_Date:Joi.string().required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },
    updateValidationemail: request => {


 
        const updateSchema = {


 
            email: Joi.string().required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },addattribute: request => {


 
        const updateSchema = {


 
            attribute: Joi.String().required()


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },


 
} 


 
