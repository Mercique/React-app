import "./list.sass";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export const ListComp = () => {
  const list = [
    { id: 1, img: "/static/images/avatar/1.jpg", author: "Ali Connors", message: "I'll be in your neighborhood doing errands this…" },
    { id: 2, img: "/static/images/avatar/2.jpg", author: "Conor Adams", message: "Wish I could come, but I'm out of town this…" },
    { id: 3, img: "/static/images/avatar/3.jpg", author: "Sandra Adams", message: "Do you have Paris recommendations? Have you ever…" }
  ];

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      { list.map(item => (
        <ListItem alignItems="flex-start" key={item.id}>
          <ListItemAvatar>
            <Avatar alt={item.author} src={item.img} />
          </ListItemAvatar>
          <ListItemText
            primary={item.author}
            secondary={item.message}
          />
        </ListItem>
      )) }
    </List>
  );
};