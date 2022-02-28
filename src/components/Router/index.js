import "./router.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat/chat";
import { ChatList } from "../ChatList/chatList";
import { Profile } from "../Profile/profile";
import { Food } from "../Food/food";
import { Home } from "../Home/home";
import { PublicRoute } from "../PublicRoute/publicRoute";
import { PrivateRoute } from "../PrivateRoute/privateRoute";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";

export const Router = () => {
  const [authed, setAuthed] = useState(false);

  const authorize = () => {
    setAuthed(true);
  };

  const unauthorize = () => {
    setAuthed(false);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unSubscribe;
  }, []);

  return (
    <BrowserRouter>
      <header className="header">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/chats"
          style={({ isActive }) => ({ color: isActive ? "#61dafb" : "#fff" })}
        >
          Chats
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
        <Route path="/" element={<PublicRoute authed={authed} />}>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<Home isSignUp />} />
        </Route>
        <Route path="/chats" element={<ChatList />}>
          <Route path=":chatId" element={<Chat />} />
        </Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/profile" element={<PrivateRoute authed={authed} />}>
          <Route path="" element={<Profile onLogout={unauthorize} />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
