import "./router.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat/chat";
import { ChatList } from "../ChatList/chatList";
import { Profile } from "../Profile/profile";
import { useState } from "react";

const listChats = [
  {
    id: 1,
    img: "/static/images/avatar/1.jpg",
    author: "Ali Connors",
    message: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 2,
    img: "/static/images/avatar/2.jpg",
    author: "Conor Adams",
    message: "Wish I could come, but I'm out of town this…",
  },
  {
    id: 3,
    img: "/static/images/avatar/3.jpg",
    author: "Sandra Adams",
    message: "Do you have Paris recommendations? Have you ever…",
  },
  {
    id: 4,
    img: "/static/images/avatar/4.jpg",
    author: "Ilya Mand",
    message: "Do you have Paris recommendations? Have you ever…",
  },
  {
    id: 5,
    img: "/static/images/avatar/5.jpg",
    author: "Ilya Mand",
    message: "Do you have Paris recommendations? Have you ever…",
  },
];

const listMessages = listChats.reduce((acc, cur) => {
  acc[`chat${cur.id}`] = [];
  return acc;
}, {});

export const Router = () => {
  const [chats, setChats] = useState(listChats);
  const [messages, setMessages] = useState(listMessages);

  const handleAddMessage = (chatId, newMsg) => {
    setMessages((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  const handleAddChat = () => {
    const newId = chats[chats.length - 1]?.id + 1 || 1;

    const newChat = {
      id: newId,
      img: `/static/images/avatar/${newId}.jpg`,
      author: "User NEW",
      message: "Do you have Paris recommendations? Have you ever…",
    };

    setChats((prevChats) => [...prevChats, newChat]);
    setMessages((prevMessages) => ({
      ...prevMessages,
      [`chat${newId}`]: [],
    }));
  };

  const handleDeleteChat = (id) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
    setMessages((prevMessages) => {
      const newMsgs = { ...prevMessages };

      delete newMsgs[`chat${id}`];

      return newMsgs;
    });
  };

  return (
    <BrowserRouter>
      <header className="header">
        <NavLink
          to="/chats"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Profile
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<ChatList chats={chats} />}></Route>
        <Route
          path="/chats"
          element={
            <ChatList
              chats={chats}
              onAddChat={handleAddChat}
              onDeleteChat={handleDeleteChat}
            />
          }
        >
          <Route
            path=":chatId"
            element={<Chat messages={messages} addMessage={handleAddMessage} />}
          />
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
