import "./peopleinfo.css"
const Friends = () => {
    return ( 
    <div className="friendsList">
        <div className="FriendBoxUpper">
            <div className="FriendBoxUpperLeft">
                <div className="FriendBoxUpperTop">
                    <img src="/assets/profile-1.jpg" alt="" className="FriendPhoto"/>
                    <div className="FriendOnlineStatus online"></div>
                </div>
                
                <div className="FriendBoxUpperBottom">
                    <span className="FriendName"> Daniel Tilahun</span> 
                    <span className="FriendOnlineInfo"> offline </span>
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
 
export default Friends;