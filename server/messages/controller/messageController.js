const Message = require("../model/messageModel");

const creatMessage = async (req,res)=>{
    const newMessage = new Message(req.body);
    try{
        await newMessage.save();
        res.status(201).send(newMessage);
    }
    catch(err){
        res.status(500).send(err);
    }
}



const getMessage = async (req,res)=> {
    try{
        const messages = await Message.find({conversationId: req.params.conversationId});
        res.status(200).send(messages);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports = {creatMessage,getMessage};