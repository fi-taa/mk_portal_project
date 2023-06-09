import { AiOutlineGif, AiOutlineLink, AiTwotoneFileText } from "react-icons/ai";
import { BsCameraVideo, BsCardImage } from "react-icons/bs";
import { MdOutlineSettingsVoice } from "react-icons/md";
import "./friend_profile.css"
import { useEffect, useState } from "react";
import axios from "axios";
const FriendProfile = ({friendId}) => {
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
    return ( 
        <div className="friendProfile">
            <div className="friendProfileWrapper">
                <div className="friendProfileUpper">
                    <img className="personImg" src={`/assets/${user?.username}.avif`} alt="" />
                    <span className="personName"> {user?.username}</span>
                    <span className="PersonLocation"> Addis Abeba </span>
                </div>
                <div className="centerProfile">
                    <div className="friendProfileCenter">
                        <div className="information">
                            <span className="Label"> Bio </span>
                            <span className="Info"> Coming together is a beginning; keeping together is progress; working together is success.</span>
                        </div>
                        <div className="information">
                            <span className="Label"> Contact </span>
                            <span className="Info"> +251935660741</span>
                        </div>
                        <div className="information">
                            <span className="Label"> Username </span>
                            <span className="Info"> @dan2015 </span>
                        </div>
                    </div>

                    <div className="friendProfileLower">
                        <span> Media </span>
                        <div className="media"> 
                            <BsCardImage/>
                            <span> Images </span>
                        </div>
                        <div className="media">
                            <BsCameraVideo/>
                            <span> Videos </span>
                        </div>
                        <div className="media">
                            <AiOutlineLink/>
                            <span> Shared Links</span>
                        </div>
                        <div className="media">
                            <AiTwotoneFileText/>
                            <span> Files </span>
                        </div>
                        <div className="media">
                            <MdOutlineSettingsVoice/>
                            <span> Voice </span>
                        </div>
                        <div className="media">
                            <AiOutlineGif/>
                            <span> Gifs </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default FriendProfile;