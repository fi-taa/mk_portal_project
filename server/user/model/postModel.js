const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId : {
        type : String,
        unique : true,
        required : true,
    },
    postDescription : {
        type : String,
        required : true,
    },
    media : {
        type : String,
        
    },
  

},{timestamps: true})

module.exports = mongoose.model("mkpost",postSchema);