import { List, ListItem, ListItemText, useTheme } from "@material-ui/core";
import "./ChatList.css";

export const ChatList = ({ list }) => {
  const theme = useTheme();

  return (
    <List className="chat-list" style={{ padding: 20 }}>
      {list.map((chat) => {
        return (
          <ListItem
            key={chat.contact}
            className="chat"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              width: "100px",
              marginBottom: "10px",
            }}
          >
            <ListItemText primary={chat.contact} />
          </ListItem>
        );
      })}
    </List>
  );
};
