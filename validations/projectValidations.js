const Joi = require('joi')

module.exports = {
    createValidationwithoutcons: request => {
        const createSchema = {
            name: Joi.string().min(5).max(50).required(),
            description: Joi.string().min(50).max(500).required(),
            Payment_Type: Joi.string().valid('Online','FaceToFace','Other').required(),
            partner_id: Joi.string().required(),
            need_Consultancy:Joi.boolean().required(),
            main_skill : Joi.string().required(),
            price: Joi.number().required(),
            members_needed:Joi.number().required(),
            least_exp_level_needed: Joi.string().required(),
            comitment_level_needed:Joi.string().required(),
            Expected_Duration :Joi.string().required(),
            consultancy_agency_id:Joi.string()
           
        }

        return Joi.validate(request, createSchema)
    },
    
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(5).max(50).required(),
            description: Joi.string().min(50).max(500).required(),
            Payment_Type: Joi.string().valid('Online','FaceToFace','Other').required(),
            partner_id: Joi.string().required(),
            need_Consultancy:Joi.boolean().required(),
            main_skill : Joi.string().required(),
            price: Joi.number(),
            members_needed:Joi.number(),
            least_exp_level_needed: Joi.string(),
            comitment_level_needed:Joi.string(),
            Expected_Duration :Joi.string(),
            consultancy_agency_id:Joi.string()
           
        }

        return Joi.validate(request, createSchema)
    },
    UpdateValidation: request => {
        const createSchema = {
            name: Joi.string().min(5).max(50),
            description: Joi.string().min(50).max(500),
            Payment_Type: Joi.string().valid('Online','FaceToFace','Other'),
            status: Joi.string().valid('Initiation','Analysis','Negotiation ','Review','Allocation','Implementation','Completed'),
            need_Consultancy:Joi.boolean(),
            main_skill : Joi.string(),
            price: Joi.number(),
            members_needed:Joi.number(),
            least_exp_level_needed: Joi.string(),
            comitment_level_needed:Joi.string(),
            Expected_Duration :Joi.string(),
            consultancy_agency_id:Joi.string()
           
        }

        return Joi.validate(request, createSchema)
    },

    updateValidationname: request => {
        const updateSchema = {
            name: Joi.string().min(5).max(50).required(),
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationstatus: request => {
        const updateSchema = {
            status: Joi.string().valid('Initiation','Analysis','Negotiation ','Review','Allocation','Implementation','Completed').required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationapproved: request => {
        const updateSchema = {
            approved: Joi.boolean().required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationdescription: request => {
        const updateSchema = {
            description: Joi.string().min(50).max(500).required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationprice: request => {
        const updateSchema = {
            price: Joi.number().required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationpaymenttype: request => {
        const updateSchema = {
            Payment_Type: Joi.string().valid('Online','FaceToFace','Other').required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationneedcon: request => {
        const updateSchema = {
            need_Consultancy:Joi.boolean().required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationconsid: request => {
        const updateSchema = {
            consultancy_agency_id: Joi.string().required()
        }
        return Joi.validate(request, updateSchema)
    }, 
    updateValidationmembersneeded: request => {
        const updateSchema = {
            members_needed:Joi.number().required()
        }
        return Joi.validate(request, updateSchema)
    },
    updateValidationmainskill: request => {
        const updateSchema = {
            main_skill: Joi.string().min(3).max(20).required()
        }
        return Joi.validate(request, updateSchema)
    },
    updateValidationduration: request => {
        const updateSchema = {
            Expected_Duration: Joi.string().required()
        }
        return Joi.validate(request, updateSchema)
    },
    updateValidationexplevel: request => {
        const updateSchema = {
            least_exp_level_needed: Joi.string().min(4).max(15).required()
        }
        return Joi.validate(request, updateSchema)
    },
    updateValidationcomitment: request => {
        const updateSchema = {
            comitment_level_needed: Joi.string().required()
        }
        return Joi.validate(request, updateSchema)
    },
    addskill: request => {
        const updateSchema = {
            Skill: Joi.string().required()
        }
        return Joi.validate(request, updateSchema)
    },
    addattribute: request => {
        const updateSchema = {
            attribute: Joi.string().required()
        }
        return Joi.validate(request, updateSchema)
    },
}