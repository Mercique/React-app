import "./chatList.scss";
import { Link, Outlet } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useState } from "react";

const list = [
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

export const ChatList = () => {
  const [listChats, setList] = useState(list);

  const delChat = (id) => {
    const index = listChats.findIndex((el) => el.id === id);
    listChats.splice(index, 1);
    setList([...listChats]);
  };

  const addChat = (listChats) => {
    setList([
      ...listChats,
      {
        id: +`${listChats[listChats.length - 1].id + 1}`,
        img: `/static/images/avatar/${listChats[listChats.length - 1].id + 1}.jpg`,
        author: "User NEW",
        message: "Do you have Paris recommendations? Have you ever…",
      },
    ]);
  };

  return (
    <div className="message-content">
      <div className="message-content-box">
        <div className="message-content-list">
          <div className="message-content-header">
            <h3 className="message-content-title">Chat List</h3>
            <Button variant="outlined" onClick={() => addChat(listChats)}>
              Add new chat
            </Button>
          </div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {listChats.map((item) => (
              <Link to={`/chats/chat${item.id}`} key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.author} src={item.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.author}
                    secondary={item.message}
                  />
                  <button
                    type="button"
                    className="del-btn"
                    onClick={() => delChat(item.id)}
                  >
                    -
                  </button>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
        <Outlet context={listChats} />
      </div>
    </div>
  );
};
