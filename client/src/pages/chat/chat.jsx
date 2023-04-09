import { BsEmojiLaughing, BsSearch, BsSend} from "react-icons/bs";
import {ImAttachment} from "react-icons/im";
import {AiFillAudio} from "react-icons/ai";
import axios from "axios"
import React, { useContext, useEffect, useRef, useState } from 'react'
import "./chat.css";
import Message from "./componenets/message/message";
import FriendProfile from "./componenets/friend_profile/frient_profile";
import { AuthContext } from "../../context/authContext";
import {Friends,FriendsChatBoxTop} from "./componenets/friend/peopleInfo";
import {io} from "socket.io-client";

const Chat = () => {
    const [ chat, setChat ] = useState(null);
    const [ friend, setFriend ] = useState(null);
    const [ messages, setMessages ] = useState([]);
    const [ newMessage, setNewMessage ] = useState([]);
    const [ onlineFriends, setOnlineFriends ] = useState([]);
    const [comingMessage, setComingMessage] = useState(null);
    const [conversation,setConversation]= useState([]);
    const {userData} = useContext(AuthContext);
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(()=>{
        socket.current = io("ws://localhost:5500");
        socket.current.on("getMessage",(data)=>{
            setComingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt : Date.now(),
            });
        });
    },[])


    useEffect(()=>{
        comingMessage && chat?.members.includes(comingMessage.sender) && setMessages(prev=>[...prev,comingMessage])
    },[comingMessage,chat])

    useEffect(()=>{
        socket.current.emit("addUser",userData?._id);
        socket.current.on("getUser",user=>{
            setOnlineFriends(user);
        })
    },[userData])

    

    useEffect(()=>{
        const getCurrentUserConversation = async ()=>{
            const res = await axios.get("http://localhost:8800/conversation/"+userData._id);
            setConversation(res.data);
        }
        getCurrentUserConversation()
    },[userData._id])




    useEffect(()=>{
        const getMessage = async ()=>{
            const res = await axios.get("http://localhost:8800/message/"+chat?._id);
            setMessages(res.data);
        }
        getMessage()
    },[chat?._id]);



    const sendMessage = async (e)=>{
        e.preventDefault();
        const Newmessage = {
            sender: userData._id,
            text: newMessage,
            conversationId: chat._id,
          };
          const receiverId = chat?.members.find((member)=>member !== userData._id);
          socket.current.emit("sendMessage",{
            senderId: userData?._id,
            text: newMessage,
            receiverId
          })
          try {
            const res = await axios.post("http://localhost:8800/message", Newmessage);
            setMessages([...messages, res.data]);
            setNewMessage("");
          } catch (err) {
            console.log(err);
          }
    }


    
    useEffect(()=>{
        scrollRef.current?.scrollIntoView({ behavior: "smooth" ,block: 'nearest', inline: 'start'});
    },[messages]);

    return ( 
    <div className="chat">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <form action="" className="Search-bar">
                    <input type="text" className="search" placeholder="Search Friend"/>
                    <button className="search_btn"> <BsSearch className="search_icon"/> </button> 
                </form>
                <div className="peopleList">
                    {conversation.map((cur,index)=>(
                        <div onClick={()=> {
                            const friendId = cur.members.find((memebrId)=> memebrId!==userData?._id);
                            setChat(cur)
                            setFriend(friendId);
                            }} key={index}>
                            <Friends cur_conversation ={cur} currentUser={userData} onlineUser= {onlineFriends}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="chatBox">
           <FriendsChatBoxTop friendId={friend} onlineUser={onlineFriends}/>
           
           <div className="chatBoxCenter">
                {messages.map((curMessage,index)=>{
                    return (
                    <div ref={scrollRef} key={index}>
                        <Message own={curMessage.sender===userData?._id} curmessage={curMessage} />
                    </div>
                    )
                })}
           </div>
           <div className="chatBoxLower">
                    <div className="messageInput">
                        <label htmlFor="fileinput"> <ImAttachment className="fileAttach" /></label>
                        <input type="file" id="fileinput"/>
                        <input type="text" onChange={(e)=>setNewMessage(e.target.value)} value={newMessage} className="InputMessage" placeholder="Type a message here"/>
                        <BsEmojiLaughing className="emoji"/>
                        <AiFillAudio className="audio"/>
                        <div className="sendFile" onClick={sendMessage}>
                            <BsSend className="send"/>
                        </div>
                        
                    </div>
                </div>
        </div>
        <div className="chatInfo">
            <FriendProfile friendId={friend}/>
        </div>
       
    </div> );
}
export default Chat;