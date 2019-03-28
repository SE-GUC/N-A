const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema

=======

const Schema = mongoose.Schema


>>>>>>> 98fdd8192b06b0d4daea57bba11540a4aadbb45a
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
<<<<<<< HEAD
    Join_Date: { 
        type:Date,
        default: Date.now
=======

    Join_Date: { 
        type:Date,
        default: Date.now

>>>>>>> 98fdd8192b06b0d4daea57bba11540a4aadbb45a
     },
    
    Basic_Info: {
        type: String,
    },
    User_Category :{
        type :String,
        enum:['Admin','Member','Consulting_Agent ','Partner','Partner_CoWorkingSpace'],
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
<<<<<<< HEAD
            type: [String],
=======

            type: [String],

>>>>>>> 98fdd8192b06b0d4daea57bba11540a4aadbb45a
        },
    Reviews: {
        type: [String]
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
    Ratings:{
        type :String,
        enum:['1','2','3','4','5'],
    },
   //Required by Co-Working Space Patner
    Business_Plans_Offered: {
        type: [String],
    },
    Rooms: {
        type: Number
    },
    Facilites: {
        type: [String],
    }
})
<<<<<<< HEAD
module.exports = User = mongoose.model('users', UserSchema)
=======
module.exports = User = mongoose.model('users', UserSchema)
>>>>>>> 98fdd8192b06b0d4daea57bba11540a4aadbb45a
