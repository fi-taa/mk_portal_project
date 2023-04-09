import { useState } from "react";
import "./message.css";
import {CiEdit} from "react-icons/ci";
import {MdDeleteOutline} from "react-icons/md";
import { format } from "timeago.js";
const Message = ({own ,curmessage}) => {
    const [openMenu,setOpenMenu] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setOpenMenu(!openMenu)
      };
    return ( 
        <div className={ own? "message own":"message"}>
            <div className=  { own? "bubble own":"bubble"} onClick={handleClick}>
                {curmessage.text}
                <div className="messageDate"> {format(curmessage.createdAt)} </div>
                <div className="operation" style={{ display: openMenu? "block": "none"}}>
                    <button> <CiEdit/> Edit</button>
                    <button> <MdDeleteOutline/> Delete</button>
                </div>
            </div>
        </div>         
     );
}

export default Message;