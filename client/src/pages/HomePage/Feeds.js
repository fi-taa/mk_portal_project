import React,{useState} from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import {data} from "../data/FeedsData/FeedData"

function Feeds() {
  const [posts,setPosts] = useState(data);
  
  return (
    <div className="bg-blue-50 max-h-max p-3">
      {posts.map((item,index,{PostImg})=>(
      <div key={index} className="my-4 overflow-hidden bg-white w-full h-96  border border-solid rounded-lg border-neutral-200 shadow-md">
        {/* post headline/nav */}
          <div >
          <div  className="flex justify-around items-center place-content-center bg-blue-200 h-10">
          <div className="flex px-1 gap-4 bg-blue-200 w-full  items-center">
            <div className="bg-gray-100 rounded-full w-9 h-9 ">
              <img src={item.deptImg} alt="" className="rounded-full w-9 h-9" />
            </div>
            <div>
              {item.deptName}
            </div>
          </div>
          <div className="font-[2rem] text-center w-1/5 hover:text-sky-500 flex justify-end  ">
            <MenuFoldOutlined />
          </div>
        </div>
        <div className="bg-sky-100  flex place-content-center items-center w-full h-40 my-3 mx-2 shadow-lg shadow-black/20 overflow-x-auto">
        <img src={item.PostImg} alt="" className="w-48 h-40 object-cover p-2" />
        </div>
        <div className="px-4 flex h-36 overflow-auto overflow-y-auto ">
          <span>
           {item.description}
          </span>
        </div>
          </div>

        

      </div>
      ))}
      
    </div>
  );
}

export default Feeds;
