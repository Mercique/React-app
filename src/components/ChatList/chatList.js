import "./chatList.scss";
import { Outlet } from "react-router-dom";
import List from "@mui/material/List";
import { ChatItem } from "./chatItem";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { onChildAdded, onChildRemoved, set } from "firebase/database";
import {
  chatsRef,
  getChatsRefById,
  getMessagesRefByChatId,
} from "../../services/firebase";

export const ChatList = () => {
  const [chats, setChats] = useState([]);

  const handleAddChat = () => {
    const getId = chats[chats.length - 1]?.id + 1 || 1;

    const newChat = {
      id: getId,
      img: `/static/images/avatar/${getId}.jpg`,
      author: "User NEW",
      message: "Do you have Paris recommendations? Have you ever…",
    };

    set(getChatsRefById(getId), newChat);
    set(getMessagesRefByChatId(getId), { empty: true });
  };

  useEffect(() => {
    const unsubscribe = onChildAdded(chatsRef, (snapshot) => {
      setChats((prevChats) => [...prevChats, snapshot.val()]);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = onChildRemoved(chatsRef, (snapshot) => {
      setChats((prevChats) =>
        prevChats.filter(({ id }) => id !== snapshot.val()?.id)
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div className="message-content">
      <div className="message-content-box">
        <div className="message-content-list">
          <div className="message-content-header">
            <h3 className="message-content-title">Chat List</h3>
            <Button variant="outlined" onClick={handleAddChat}>
              Add new chat
            </Button>
          </div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {chats.map((item) => (
              <ChatItem item={item} key={item.id} />
            ))}
          </List>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
