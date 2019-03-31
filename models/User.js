const mongoose = require('mongoose');

const Schema = mongoose.Schema


const UserSchema = new Schema ({
   
    email: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
      
    password: {
        type: String,
        required: true
    },
    Birthdate: {
        type: Date,
        required: true
    },

    Join_Date: { 
        type:Date,
        default: Date.now

     },
    
    Basic_Info: {
        type: String,
    },
    User_Category :{
        type :String,
        enum:['Admin','Member','Consulting_Agent','Partner','Partner_CoWorkingSpace'],
        required:true
    },
    Certificates: {
        type: [String]
    }, 
    //Required using joi in routes/api if you are partner or consulting agent ...
    BoardMembers: {
        type: [String]
        },
    //for Consulting Agents
    Studies: {
            type: String,
        },
    //For Consulting Agents
    Past_Events: {

            type: [String],

        },
    Avg_Rating: {
        type: Number
    },
    Intrests: {
        type: [String]
    },
    Past_Projects: {
        type: [String]
    },
    Skills: {
        type: [String]
    },
    //Ratings:{
    //   type: [Rating]
    //},
   //Required by Co-Working Space Patner
    Business_Plans_Offered: {
        type: [String],
    },
    
    Facilites: {
        type: [String],
    }
})
module.exports = User = mongoose.model('users', UserSchema)
