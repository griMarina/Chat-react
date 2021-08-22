import { List, ListItem, useTheme } from "@material-ui/core";
import { useState } from "react";
import "./ChatList.css";

export const ChatList = () => {
  const [chat, setChat] = useState({ name: "Marina ", id: "001" });

  const theme = useTheme();

  return (
    <List className="chat-list" style={{ padding: 20 }}>
      <ListItem
        className="chat"
        style={{
          backgroundColor: theme.palette.primary.light,
          color: "white",
          width: "100px",
        }}
      >
        {chat.name}
      </ListItem>
    </List>
  );
};
