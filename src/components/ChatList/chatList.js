import "./chatList.scss";
import { Outlet } from "react-router-dom";
import List from "@mui/material/List";
import { ChatItem } from "./chatItem";
import { AddButton } from "./addButton";

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => {
  return (
    <div className="message-content">
      <div className="message-content-box">
        <div className="message-content-list">
          <div className="message-content-header">
            <h3 className="message-content-title">Chat List</h3>
            <AddButton onAdd={onAddChat} />
          </div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {chats.map((item) => <ChatItem item={item} onDeleteChat={onDeleteChat} key={item.id}/>)}
          </List>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
