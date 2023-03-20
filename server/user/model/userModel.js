const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username: {
        type:String,
        unique:true,
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