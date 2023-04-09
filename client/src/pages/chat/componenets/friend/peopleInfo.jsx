import { useEffect,useState } from "react";
import "./peopleinfo.css"
import axios from "axios";
import {BsTelephone, BsThreeDots } from "react-icons/bs";
import { HiOutlineVideoCamera} from "react-icons/hi";

const getUser = (friendId,onlineUser)=>{
    return onlineUser.find((user)=> user.userId === friendId);
}

export const Friends = ({cur_conversation,currentUser,onlineUser}) => {
    console.log(cur_conversation,currentUser,onlineUser)
    const friendId = cur_conversation?.members.find((memebrId)=> memebrId!==currentUser?.id);
    const [user, setUser] = useState()
    useEffect(()=>{
        const getUser = async ()=>{
            if (friendId){

                try{
                    const res = await axios.get("http://localhost:8800/auth/"+friendId);
                    setUser(res.data);
                }
                catch(err){
                    console.log(err);
                }
            }
        }
        getUser();
    },[cur_conversation,currentUser]);

    return ( 

    <div className="friendsList">
        <div className="FriendBoxUpper">
            <div className="FriendBoxUpperLeft">
                <div className="FriendBoxUpperTop">
                    <img src={`/assets/${user?.username}.avif`} alt="" className="FriendPhoto"/>
                    <div className={getUser(friendId,onlineUser)? "FriendOnlineStatus online" :"FriendOnlineStatus"}></div>
                </div>
                
                <div className="FriendBoxUpperBottom">
                    <span className="FriendName"> {user?.username}</span> 
                    <span className="FriendOnlineInfo"> {getUser(friendId,onlineUser)? "online" :"offline"} </span>
                </div>
            </div> 
            <div className="FriendBoxUpperRight"> 
                <span className="LastMessage"> 1 hour ago</span>
            </div>
        </div>

        <div className="leatestMessage"> 
            <span> Lorem ipsum dolor sit </span>
            <div className="messageCount"> 1 </div>
        </div>
    </div>
     );
}
 

export const FriendsChatBoxTop = ({friendId,onlineUser,currentUser}) => {

    const [user, setUser] = useState()
    useEffect(()=>{
        const getUser = async ()=>{
            if (friendId){

                try{
                    const res = await axios.get("http://localhost:8800/auth/"+friendId);
                    setUser(res.data);
                }
                catch(err){
                    console.log(err);
                }
            }
        }
        getUser();
    },[friendId]);
    console.log(user)
    console.log("now",currentUser)
    return ( 
        <div className="chatBoxUpper">
                <div className="chatBoxUpperLeft">
                        <div className="chatBoxUpperLeftLeft">
                            <img src={`/assets/${user?.username}.avif`} alt="" className="friendPhoto"/>
                            <div className="onlineStatus online"></div>
                        </div>
                       
                        
                        <div className="chatBoxUpperLeftRight">
                            <div className="upperPart"> 
                                <span className="Name"> {user ? user?.username : currentUser.username } </span> 
                            </div>
                            <div className="friendInfo">
                                <span className="OnlineInfo"> {getUser(friendId,onlineUser)? "online" :"offline"} </span>
                                <span className="Lastseen" style={{display:getUser(friendId,onlineUser)?"none":"block"}}> Last seen 1 hour ago</span>
                            </div>
                        </div>  
                    </div> 
                    <div className="chatBoxUpperRight"> 
                        <BsTelephone className="UpperIcons"/>
                        <HiOutlineVideoCamera className="UpperIcons"/>
                        <BsThreeDots className="UpperIcons"/>
                    </div>
                </div>
     );
}
 