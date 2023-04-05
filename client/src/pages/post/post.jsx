import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { data } from "../data/FeedsData/FeedData";
import { Image } from "antd";

function Post() {
  const [posts, setPosts] = useState(data);
  return (
    <>
      {posts.map((item, index) => (
        <div
          key={index}
          className="my-4  bg-white w-full h-[500px] border border-solid rounded-lg border-neutral-200 shadow-md overflow-hidden "
        >
          {/* post headline/nav */}
         
            <div className="flex justify-around items-center place-content-center bg-blue-200 h-10">
              <div className="flex px-1 gap-4 bg-blue-200 w-full  items-center">
                  <img
                    src={item.deptImg}
                    alt=""
                    className="rounded-full w-9 h-9"
                  />
                <div>{item.deptName}</div>
              </div>
              <div className="font-[2rem] text-center w-1/5 hover:text-sky-500 flex justify-end  ">
                <MenuFoldOutlined />
              </div>
            </div>
              <div
                className="flex gap-2 justify-center z-0 w-full h-40  object-cover px-2 tansition-transform duration-1000"
              >
              <Image
              src={item.PostImg}
              className="!w-full !object-cover !h-40 z-5 "
        
            />
           
            </div>
                <hr className="font-bold my-2"/>
              
            <div className=" flex h-96 w-full p-3 overflow-y-scroll">
              <span>{item.description}</span>
            </div>
          </div>
        
      ))}
    </>
  );
}

export default Post;
