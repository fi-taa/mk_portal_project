import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import SideBar from "./SideBar";
function Home() {
  return (
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
        {/* side bar */}
        <SideBar />

        {/* add a routing functionalities */}
      
    </div>
  );
}

export default Home;
