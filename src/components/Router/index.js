import "./router.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat/chat";
import { ChatList } from "../ChatList/chatList";
import { Profile } from "../Profile/profile";
import { Food } from "../Food/food";

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
          to="/food"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Food
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Profile
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<h1>Выберите страницу в панели навигации</h1>}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/chats" element={<ChatList />}>
          <Route path=":chatId" element={<Chat />} />
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
