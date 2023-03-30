import { BsEmojiLaughing, BsSearch, BsSend, BsTelephone, BsThreeDots } from "react-icons/bs";
import { HiOutlineVideoCamera, HiPhotograph } from "react-icons/hi";
import {ImAttachment} from "react-icons/im";
import {AiFillAudio} from "react-icons/ai";
import React, { useState } from 'react'
import "./chat.css";
import Message from "./componenets/message/message";
import Friends from "./componenets/friend/peopleInfo";
import FriendProfile from "./componenets/friend_profile/frient_profile";

const Chat = () => {
    const [ text, setText ] = useState('')
    return ( 
    <div className="chat">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <form action="" className="Search-bar">
                    <input type="text" className="search" placeholder="Search Friend"/>
                    <button className="search_btn"> <BsSearch className="search_icon"/> </button> 
                </form>
                <div className="peopleList">
                    <Friends/>
                    <Friends/>
                    <Friends/>
                </div>
            </div>
        </div>
        <div className="chatBox">
                <div className="chatBoxUpper">
                    <div className="chatBoxUpperLeft">
                        <div className="chatBoxUpperLeftLeft">
                            <img src="/assets/profile-2.jpg" alt="" className="friendPhoto"/>
                            <div className="onlineStatus online"></div>
                        </div>
                       
                        <div className="chatBoxUpperLeftRight">
                            <div className="upperPart"> 
                                <span className="Name"> Daniel Tilahun</span> 
                            </div>
                            <div className="friendInfo">
                                <span className="OnlineInfo"> offline </span>
                                <span className="Lastseen"> Last seen 1 hour ago</span>
                            </div>
                            
                        </div>
                    </div> 
                    <div className="chatBoxUpperRight"> 
                        <BsTelephone className="UpperIcons"/>
                        <HiOutlineVideoCamera className="UpperIcons"/>
                        <BsThreeDots className="UpperIcons"/>
                    </div>
                </div>
                <div className="chatBoxCenter">
                    <Message own={false}/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                </div>
                <div className="chatBoxLower">
                    <div className="messageInput">
                        <label htmlFor="fileinput"> <ImAttachment className="fileAttach" /></label>
                        <input type="file" id="fileinput"/>
                        <input type="text"  className="InputMessage" placeholder="Type a message here"/>
                        <BsEmojiLaughing className="emoji"/>
                        <AiFillAudio className="audio"/>
                        <div className="sendFile">
                            <BsSend className="send"/>
                        </div>
                        
                    </div>
                </div>
        </div>
        <div className="chatInfo">
            <FriendProfile/>
        </div>
       
    </div> );
}
export default Chat;