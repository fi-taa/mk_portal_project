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
        minLength: 4,
    },
    email : {
        type: String,
        default:""
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
},{timestamps: true})

module.exports = mongoose.model("User",UserSchema);