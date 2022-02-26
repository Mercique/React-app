import "./router.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat/chat";
import { ChatList } from "../ChatList/chatList";
import { Profile } from "../Profile/profile";
import { Articles } from "../Articles/articles";

export const Router = () => {
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
          to="/articles"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Articles
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Profile
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<ChatList />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/chats" element={<ChatList />}>
          <Route path=":chatId" element={<Chat />} />
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
