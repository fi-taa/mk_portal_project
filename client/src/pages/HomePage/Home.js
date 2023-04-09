import React, { useContext } from "react";
import { Avatar } from "antd";
import { UserOutlined  } from "@ant-design/icons";
import {Routes , Route , NavLink, Navigate} from "react-router-dom";
import SideBar from "./SideBar";
import Chat from "../chat/chat";
import Events from "../events/event";
import History from "../history/history";
import Post from "../post/post";
import Report from "../report/report";
import "./home.css"
import Feeds from "./Feeds";
import { AuthContext } from "../../context/authContext";


function Home() {
  const {userData} = useContext(AuthContext);
  return (
    <>
    <div className="relative">
      {/* nav bar section */}
      <div className="bg-blue-400/90 shadow-sm shadow-black/30 fixed  top-0 left-0 right-0  flex justify-between h-12 w-full place-content-center items-center px-2 z-0">
        {/* logo */}
        <div className="bg-gray-100 rounded-full w-10 h-10 ">
          <img src="/mk.jpg" alt="" className="rounded-full" />
        </div>
        {/* Name */}
        <span className=" text-white flex justify-center font-bold p-1 h-8">
          ማህበረ ቅዱሳን Portal
        </span>

        {/* user profile */}
        <NavLink to={`/pages/profile`} className="rounded-full">
        <Avatar   size="large" icon={<UserOutlined />} />
        </NavLink>
      </div>
      
      <div className="bar"> <SideBar/> </div>
    
      <div className="Container flex justify-center"> 
           
            <div className="p-16 w-full md:2/3 h-[110vh] ">
              <Routes>
                <Route path="/" element={userData? <Feeds/>: <Navigate to="/login" replace={true} />}/>
                <Route path="/chat" element={userData? <Chat/> : <Navigate to="/login" replace={true} /> }/>
                <Route path="/events" element={userData? <Events/> : <Navigate to="/login" replace={true} />}/>
                <Route path="/history" element={userData? <History/>: <Navigate to="/login" replace={true} />}/>
                <Route path="/post" element={userData? <Post/> : <Navigate to="/login" replace={true} />}/>
                <Route path="/report" element={userData? <Report/> : <Navigate to="/login" replace={true} />}/>
              </Routes>
            </div>
        </div> 
    </div>
    
    </>
  );
}

export default Home;
