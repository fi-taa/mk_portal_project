import React from "react";
import { Avatar } from "antd";
import { UserOutlined , MenuFoldOutlined } from "@ant-design/icons";
import {Routes , Route } from "react-router-dom";
import SideBar from "./SideBar";
import Chat from "../chats/chat";
import Events from "../events/event";
import History from "../history/history";
import Post from "../post/post";
import Report from "../report/report";
import "./home.css"

function Home() {
  return (
    <>
    <div className="">
      {/* nav bar section */}
      <div className="bg-sky-500 flex justify-between h-16 w-full place-content-center items-center px-2 pl-20">
        {/* logo */}
        <div className="bg-gray-100 rounded-full w-10 h-10 ">
          <img src="/mk.jpg" alt="" className="rounded-full" />
        </div>
        {/* Name */}
        <span className="bg-white text-blue-500 flex justify-center font-bold p-1 h-8">
          ማህበረ ቅዱሳን Portal
        </span>

        {/* user profile */}
        <Avatar size="large" icon={<UserOutlined />} />
      </div>  


      <div className="Container"> 
            <div className="bar"> <SideBar/> </div>
            <div className="content">
              <Routes>
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
