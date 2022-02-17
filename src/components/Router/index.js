import "./router.scss";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat/chat";
import { ChatList } from "../ChatList/chatList";
import { Profile } from "../Profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { addMessage, deleteMessage } from "../../store/messages/actions";

export const Router = () => {
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleAddMessage = (chatId, newMsg) => {
    dispatch(addMessage(chatId, newMsg));
  };

  const handleAddChat = () => {
    const getId = chats[chats.length - 1]?.id + 1 || 1;

    const newChat = {
      id: getId,
      img: `/static/images/avatar/${getId}.jpg`,
      author: "User NEW",
      message: "Do you have Paris recommendations? Have you ever…",
    };

    const { id, img, author, message } = newChat;

    dispatch(addChat(id, img, author, message));
  };

  const handleDeleteChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(deleteMessage(id));
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
        <Route
          path="/"
          element={
            <ChatList
              chats={chats}
              onAddChat={handleAddChat}
              onDeleteChat={handleDeleteChat}
            />
          }
        ></Route>
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
