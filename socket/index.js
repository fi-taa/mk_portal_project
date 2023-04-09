const io = require("socket.io")(5500,{
    cors:{
        origin:"http://localhost:3000"
    }
});

let users=[];

const addUser =(userId,socketId)=>{
    !users.some((user)=> user.userId === userId) && users.push({userId,socketId});
}

const removerUser =(socketId)=>{
    users = users.filter((user)=> user.socketId !== socketId);
}

const getUser = (userId)=>{
    return users.find((user)=> user.userId === userId);
}
io.on("connection",(socket)=>{
    console.log("user connected")
    socket.on("addUser",userId=>{
        addUser(userId,socket.id);
        io.emit("getUser",users);
    });


    socket.on("sendMessage",({senderId,receiverId,text})=>{
        receiverUser = getUser(receiverId);
        io.to(receiverUser.socketId).emit("getMessage",{
            senderId,
            text
        })
    })

    socket.on("disconnect",()=>{
        console.log("user disconnected");
        removerUser(socket.id)
        io.emit("getUser",users);
    })
})

