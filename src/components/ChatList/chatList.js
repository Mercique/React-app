import "./chatList.scss";
import { Outlet } from "react-router-dom";
import List from "@mui/material/List";
import { ChatItem } from "./chatItem";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { addChat } from "../../store/chats/actions";
import { Button } from "@mui/material";

export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleAddChat = () => {
    const getId = chats[chats.length - 1]?.id + 1 || 1;

    const newChat = {
      img: `/static/images/avatar/${getId}.jpg`,
      author: "User NEW",
      message: "Do you have Paris recommendations? Have you ever…",
    };

    dispatch(addChat(getId, newChat));
  };

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
