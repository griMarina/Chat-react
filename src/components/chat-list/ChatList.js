import { List, ListItem, useTheme } from "@material-ui/core";
import { useState } from "react";
import "./ChatList.css";

export const ChatList = () => {
  const [chat, setChat] = useState({ name: "Marina ", id: "001" });

  const theme = useTheme();

  return (
    <List className="chat-list">
      <ListItem style={{ color: theme.palette.secondary.main }}>
        {chat.id}: {chat.name}
      </ListItem>
    </List>
  );
};
