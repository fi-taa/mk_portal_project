const Conversation= require("../model/conversationModel");
// create conversation

const createConversation = async (req,res)=>{
    const newConversation = new Conversation({members:[req.body.senderId, req.body.receiverId]});
    try{
        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation);
    }
    catch(err){
        res.status(404).send("Something want wrong");
    }
}


const getConversation = async (req,res)=>{

    try{
        const conversation = await Conversation.find({ members:{$in:[req.params.userId]}});
        console.log(conversation);
        res.status(200).send(conversation);
    }
    catch(err){
        res.status(404).send("user not found");
    }

}

module.exports = {createConversation,getConversation}