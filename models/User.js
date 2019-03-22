const mongoose = require('mongoose');
const schema = mongoos.schema
const uuid = require('uuid')

const UserSchema = new Schema ({
   
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Category: {
        type: String
    },
    Skills: {
        type: [String]
    }
})
module.exports = User = mongoose.model('users', UserSchema)
