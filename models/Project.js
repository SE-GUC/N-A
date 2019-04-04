
// The Project Model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')
const ProjectSchema=new Schema({
        id:{
            type:String,
            default: function genid(){
                uuid.v4();
            }
        },
        name :{
            type:String,
            required:true   
        },
        status :{
            type :String,
            enum:['Initiation','Analysis','Negotiation ','Review','Allocation','Implementation','Completed'],
            default:'Initiation'
        },
        approved:{
            type: Boolean,
            default:null
        },
        descreption:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:false
        },
        Payment_Type:{
            type:String,
            enum:['Online','FaceToFace','Other'],
            required:true
        },
        partner_id:{
            type:String,
            required:true
        },
        need_Consultancy:{
            type :Boolean,
            required:true
        },
        consultancy_agency_id:{
            type:String,
            required:false
        },
        members_needed:{
            type:Number,
            default:1
        },
        current_members_count:{
            type:Number,
            default:0
        },
        current_members_applied_ids:{
            type: [String]
        },
        accepted_members_ids:{
            type:[String]
        },
        main_skill:{
            type:String,
            required:true
        },
        extra_skills:{
            type:[String]
        },
        extra_attributes:{
            type:[String]
        },
        Expected_Duration:{
            type:String,
            required:false
        },
        Start_Date:{
            type:Date,
            required:false
        },
        End_Date:{
            type:Date,
            required:false
        },
        
        least_exp_level_needed:{  //Senior-Associate-Executive...
            type:String,
            required:false
        },
        comitment_level_needed:{
            Type: String,
            required:false
        }  
        
    })   


module.exports = Project=mongoose.model('Projects', ProjectSchema)

