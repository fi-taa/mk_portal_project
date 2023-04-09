import {
  SmileOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  VideoCameraOutlined,
  EllipsisOutlined,
  AudioOutlined,
  SendOutlined,

} from "@ant-design/icons";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import "./chat.css";
import Message from "./componenets/message/message";
import FriendProfile from "./componenets/friend_profile/frient_profile";

// Chat component
const Chat = () => {
//   const [text, setText] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleFriendSelection = (friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div className=" bg-gray-100 flex ">
      <div className=" w-1/3 h-screen border-r border-gray-300">
        <div className=" h-full p-4">
          <div className="peopleList overflow-y-auto flex-grow">
            <Friends onSelectFriend={handleFriendSelection} />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/assets/profile-2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-700">
                {selectedFriend?.name}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {selectedFriend?.status}
                </span>
                <span className="text-sm text-gray-500">
                  Last seen {selectedFriend?.lastSeen}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
              <PhoneOutlined className="text-gray-500 text-lg" />
              <VideoCameraOutlined className="text-gray-500 text-lg" />
              <EllipsisOutlined className="text-gray-500 text-lg" />
          </div>
        </div>
        <div className="flex-1 px-4 py-2 overflow-y-auto">
          <Message own={true} />
         
        </div>
        <div className="bg-gray-100 py-3 px-4">
          <div className="flex items-center space-x-3">
            <label htmlFor="fileinput">
                <span className="cursor-pointer">
                  <PaperClipOutlined className="text-gray-500 text-lg" />
                </span>
            </label>
            <input type="file" id="fileinput" className="hidden" />
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-3 rounded-full bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a message here"
              />
            </div>
              <SmileOutlined className="text-gray-500 text-lg" />
              <AudioOutlined className="text-gray-500 text-lg" />
              <SendOutlined className="text-gray-500 text-lg" />
          </div>
        </div>
      </div>
      <div className="chatInfo">
        {selectedFriend && <FriendProfile friend={selectedFriend} />}
      </div>
    </div>
  );
};

const Friends = ({ onSelectFriend }) => {
  const [searchText, setSearchText] = useState("");
  const friends = [
    {
      id: 1,
      name: "John Doe",
      status: "Online",
      lastSeen: "2 hours ago",
      imgUrl: "/assets/profile-1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Offline",
      lastSeen: "4 hours ago",
      imgUrl: "/assets/profile-2.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      status: "Online",
      lastSeen: "1 hour ago",
      imgUrl: "/assets/profile-1.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      status: "Offline",
      lastSeen: "3 hours ago",
      imgUrl: "/assets/profile-2.jpg",
    },
    {
      id: 5,
      name: "Mike Brown",
      status: "Online",
      lastSeen: "1 day ago",
      imgUrl: "/assets/profile-1.jpg",
    },
    {
      id: 6,
      name: "Jessica Davis",
      status: "Offline",
      lastSeen: "2 days ago",
      imgUrl: "/assets/profile-2.jpg",
    },
    {
      id: 7,
      name: "David Lee",
      status: "Online",
      lastSeen: "5 hours ago",
      imgUrl: "/assets/profile-1.jpg",
    },
    {
      id: 8,
      name: "Rachel Adams",
      status: "Offline",
      lastSeen: "6 hours ago",
      imgUrl: "/assets/profile-2.jpg",
    },
  ];

  const filteredFriends = friends.filter((friend) => {
    return friend.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <form className="flex items-center justify-between mb-4">
        <input
          type="text"
          className="w-full mr-3 py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          placeholder="Search Friend"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          <BsSearch className="w-6 h-6" />
        </button>
      </form>
      <ul className="divide-y divide-gray-300">
        {filteredFriends.map((friend) => (
          <li
            key={friend.id}
            className="flex items-center py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectFriend(friend)}
          >
            <img
              src={friend.imgUrl}
              alt=""
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-md">{friend.name}</span>
                <span
                  className={`inline-block px-2 py-1 rounded-lg ${
                    friend.status === "Online"
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
              <div className="text-gray-500 text-sm">{friend.lastSeen}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
