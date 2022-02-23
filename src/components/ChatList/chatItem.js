import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { DeleteButton } from "./deleteButton";

export const ChatItem = ({ item }) => {
  return (
    <Link to={`/chats/${item.id}`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.author} src={item.img} />
        </ListItemAvatar>
        <ListItemText primary={item.author} secondary={item.message} />
        <DeleteButton id={item.id} />
      </ListItem>
    </Link>
  );
};
