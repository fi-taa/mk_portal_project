const  mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
    conversationId:{
        type : String,
    },
    text : {
        type:String,
        default:""
    },
    sender: {
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model("Message",MessageSchema);
