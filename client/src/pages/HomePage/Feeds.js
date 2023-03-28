import React from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

function Feeds() {
  return (
    <div className="bg-blue-50 h-screen p-3">
      <div className="my-4 overflow-hidden bg-white w-full h-96  border border-solid rounded-lg border-neutral-200 shadow-md">
        {/* post headline/nav */}
        <div className="flex justify-around items-center place-content-center bg-blue-200 h-10">
          <div className="flex px-1 gap-4 bg-blue-200 w-full  items-center">
            <div className="bg-gray-100 rounded-full w-9 h-9 ">
              <img src="/mk.jpg" alt="" className="rounded-full" />
            </div>
            <div>deptname</div>
          </div>
          <div className="font-[2rem] text-center w-1/5 hover:text-sky-500 flex justify-end  ">
            <MenuFoldOutlined />
          </div>
        </div>
        <div className="bg-sky-100  flex place-content-center items-center w-full h-40 my-3 mx-2 shadow-lg shadow-black/20 overflow-x-auto">
          <img src="/mk.jpg" alt="" className="rounded-full h-32" />
        </div>
        <div className="px-4 flex h-36 overflow-auto overflow-y-auto ">
          <span>
            leurosuem desfe feikew dsesiwk beiw seiw gugul leurosuem desfe
            feikew dsesiwk beiw seiw gugul leurosuem desfe feikew dsesiwk beiw
            seiw gugul leurosuem desfe feikew dsesiwk beiw seiw gugul leurosuem
            desfe feikew dsesiwk beiw seiw gugul leurosuem desfe feikew dsesiwk
            beiw seiw gugul leurosuem desfe feikew dsesiwk beiw seiw gugul
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default Feeds;
