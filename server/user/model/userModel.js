const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId : {
        type : 'string',
        unique : true,
        required : true,
    },
    username: {
        type:String,
        unique:false,
        require: true,
    },
    password : {
        type : String,
        require:true,
        minLength: 8,
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
},{timestamps: true})

module.exports = mongoose.model("MKUser",UserSchema);