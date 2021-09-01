import { List, ListItem, ListItemText, useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import React from "react";
import "./ChatList.css";

export const ChatList = ({ chats, chatId, setChats }) => {
  const theme = useTheme();

  const deleteChat = (id) => {
    setChats((prevChats) => {
      const newChats = { ...prevChats };
      delete newChats[id];
      return newChats;
    });
  };

  return (
    <List className="chat-list" style={{ padding: 20 }}>
      {Object.keys(chats).map((id) => {
        return (
          <React.Fragment key={id}>
            <ListItem
              className="chat"
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                width: "fit-content",
                marginBottom: "10px",
              }}
            >
              <Link to={`/chats/${id}`}>
                <ListItemText
                  style={{ color: id === chatId ? "#000000" : "grey" }}
                  primary={chats[id].name}
                />
              </Link>
              <IconButton aria-label="delete" onClick={() => deleteChat(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
};
