import React from "react";
// import { data } from "../data/FeedsData/FeedData";
import Post from "../post/post";
import SharePost from "../post/SharePost";

function Feeds() {
  const userid = 2;
  const hidden = () => {
    if (userid-2 === 0){
      return "hidden"
    }
  }
  return (
    <>
  
    <hr className="my-2 " />
    <div className="bg-blue-50 max-h-max p-3">
      <Post/>
    </div>
    
    </>
    
  );
}

export default Feeds;
