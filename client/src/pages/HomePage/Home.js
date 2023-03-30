import React from "react";
import { Avatar } from "antd";
import { UserOutlined  } from "@ant-design/icons";
import {Routes , Route } from "react-router-dom";
import SideBar from "./SideBar";
import Chat from "../chat/chat";
import Events from "../events/event";
import History from "../history/history";
import Post from "../post/post";
import Report from "../report/report";
import "./home.css"
import Feeds from "./Feeds";

function Home() {
  return (
    <>
    <div className="relative">
      {/* nav bar section */}
      <div className="bg-blue-400/90 shadow-sm shadow-black/30 fixed top-0 left-0 right-0  flex justify-between h-12 w-full place-content-center items-center px-2 ">
        {/* logo */}
        <div className="bg-gray-100 rounded-full w-10 h-10 ">
          <img src="/mk.jpg" alt="" className="rounded-full" />
        </div>
        {/* Name */}
        <span className=" text-white flex justify-center font-bold p-1 h-8">
          ማህበረ ቅዱሳን Portal
        </span>

        {/* user profile */}
        <Avatar size="large" icon={<UserOutlined />} />
      </div>  
      <div className="bar"> <SideBar/> </div>

      <div className="Container"> 
           
            <div className="p-16 w-full h-[110vh] ">
              <Routes>
              <Route path='/home' element={<Feeds/>}/>
              <Route path='/chat' element={<Chat/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/history' element={<History/>}/>
                <Route path='/post' element={<Post/>}/>
                <Route path='/report' element={<Report/>}/>
            </Routes>
            </div>
        </div> 
    </div>
    
    </>
  );
}

export default Home;
