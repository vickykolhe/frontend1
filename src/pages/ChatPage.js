import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Menu,
  X,
  CircleFadingPlus,
  MessagesSquare,
  House,
} from "lucide-react";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/footer/Footer";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("");
  const [chatStarted, setChatStarted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rows, setRows] = useState(3);

  const handleSend = () => {
    if (!input.trim()) return;

    setChatStarted(true);
    setChats((prev) => [...prev, { role: "user", message: input }]);
    setInput("");
    setRows(2);
  };

  const handleNewChat = () => {
    setChats([]);
    setInput("");
    setChatStarted(false);
    setRows(3);
  };
  return (
    <div className="flex flex-col h-screen">
      {/* <Navbar /> */}
      <div className="flex flex-1">
        {/* Sidebar Toggle (Small screens or collapse button) */}
        {sidebarOpen && (
          <div className="w-[280px] bg-black text-white p-4 border-r border-logocolor relative">
            <button
              className="absolute top-4 right-4 text-white hover:text-logocolor"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
            <h1 className="text-logocolor font-jersey text-[36px] ml-1">
              KHELIO
            </h1>
            <div className="mt-8">
              <Link to="/">
                <button className="w-full flex items-center gap-2 pr-20 text-white py-2 rounded mb-1 hover:bg-gray-500 hover:bg-opacity-20 transition">
                  <span className="ml-2 text-logocolor">
                    <House size={20} />
                  </span>
                  <span className="font-normaltext text-[20px]">Home</span>
                </button>
              </Link>
              <button
                onClick={handleNewChat}
                className="w-full flex items-center gap-2 pr-20 text-white py-2 rounded mb-1 hover:bg-gray-500 hover:bg-opacity-20 transition"
              >
                <span className="ml-2 text-logocolor">
                  <CircleFadingPlus size={20} />
                </span>
                <span className="font-normaltext text-[20px]">New Chat</span>
              </button>
              <button className="w-full flex items-center gap-2 pr-24 text-white py-2 rounded mb-6 hover:bg-gray-500 hover:bg-opacity-20 transition">
                <span className="ml-2 text-logocolor">
                  <MessagesSquare size={20} />
                </span>
                <span className="font-normaltext text-[20px]">
                  Chat History
                </span>
              </button>
            </div>
            <div>
              <h3 className="text-[18px] font-normaltext mb-2 text-gray-400">
                Recent Chats
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-logocolor cursor-pointer">
                  snake game
                </li>
                <li className="hover:text-logocolor cursor-pointer">
                  car game
                </li>
                <li className="hover:text-logocolor cursor-pointer">
                  bike game
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Toggle Button (when sidebar is hidden) */}
        {!sidebarOpen && (
          <div className="w-12 bg-black  text-white flex items-start justify-center pt-4">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 bg-black text-white flex justify-center relative">
          {/* Chat messages */}
          <div className="flex flex-col w-full max-w-4xl">
            {chatStarted ? (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chats.map((chat, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-lg inline-block max-w-[75%] ${
                      chat.role === "user"
                        ? "bg-logocolor self-end text-white"
                        : "bg-gray-800 self-start"
                    }`}
                  >
                    {chat.message}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex justify-center items-center p-4">
                {/* Centered input on new chat */}
                <div className="w-full max-w-2xl px-4">
                  <div className="flex items-end gap-2 bg-gray-500 bg-opacity-20 p-4 rounded-lg">
                    <textarea
                      value={input}
                      onChange={(e) => {
                        const lines = e.target.value.split("\n").length;
                        setInput(e.target.value);
                        setRows(lines > 5 ? 5 : 3);
                      }}
                      rows={rows}
                      className="flex-1 resize-none overflow-y-auto no-scrollbar bg-transparent rounded-lg text-white p-2 w-full focus:outline-none"
                      placeholder="Start a new chat..."
                    />
                    <button
                      onClick={handleSend}
                      className="bg-logocolor text-white p-3  rounded-lg hover:opacity-90 "
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom input after chat has started */}
            {chatStarted && (
              <div className="p-5 border-gray-700 max-w-4xl px-2  ">
                <div className="flex items-end gap-2  ">
                  <textarea
                    value={input}
                    onChange={(e) => {
                      const lines = e.target.value.split("\n").length;
                      setInput(e.target.value);
                      setRows(lines > 5 ? 5 : 2);
                    }}
                    rows={rows}
                    className="flex-1 resize-none rounded-lg overflow-y-auto no-scrollbar bg-gray-500 bg-opacity-20 text-white p-3 w-full focus:outline-none "
                    placeholder="Enter your message..."
                  />
                  <button
                    onClick={handleSend}
                    className="bg-logocolor text-white p-3 rounded-lg hover:opacity-90 mb-3"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
