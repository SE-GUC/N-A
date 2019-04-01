const Joi = require('joi')
module.exports = {


 
    createValidation: request => {


 
        const createSchema = {


 
        FirstName: Joi.string().min(5).max(50).required(),

        LastName : Joi.string().min(5).max(50).required(),
 
        Basic_Info: Joi.string().min(10).max(500).required(),


 
        password: Joi.string().min(3).max(12).required(),
             
        
        Birthdate: Joi.string().required(),

        pproject: Joi.string(),    
        email: Joi.string().required(),

        User_Category : Joi.string().required().allow(['partner'])
 
        }
        return Joi.validate(request, createSchema)
    },


 



 
    updateValidationFirstName: request => {


 
        const updateSchema = {


 
            FirstName: Joi.string().min(5).max(50).required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },updateValidationLastName: request => {


 
        const updateSchema = {


 
            LastName: Joi.string().min(5).max(50).required(),


 
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
    
    updateValidationBirthdate: request => {


 
        const updateSchema = {


 
             Birthdate:Joi.date().required()
             
            
       
 
        }


 
        return Joi.validate(request, updateSchema)


 
    },
    updateValidationemail: request => {


 
        const updateSchema = {


 
            email: Joi.string().required(),


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },addpastproject: request => {


 
        const updateSchema = {


 
            pproject: Joi.string().required()


 
        }


 
        return Joi.validate(request, updateSchema)


 
    },


 
} 
