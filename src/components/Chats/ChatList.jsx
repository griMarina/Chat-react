import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";
import React from "react";
import { getId } from "../../utils";
import { getCounter } from "../../utils.js";
import "./ChatList.css";

const counter = getCounter();

export const ChatList = ({ chats, chatId, setChats }) => {
  const addChat = () => {
    const id = getId();
    setChats({
      ...chats,
      [id]: {
        name: `Chat ${counter()}`,
        messages: [],
      },
    });
  };

  const deleteChat = (id) => {
    setChats((prevChats) => {
      const newChats = { ...prevChats };
      delete newChats[id];
      return newChats;
    });
  };

  return (
    <List className="chat-list">
      <IconButton className="add-chat-btn" aria-label="add" onClick={addChat}>
        <AddBoxIcon />
      </IconButton>
      {Object.keys(chats).map((id) => {
        return (
          <React.Fragment key={id}>
            <ListItem
              className="chat"
              style={{ backgroundColor: id === chatId ? "#a6d1f3" : "inherit" }}
            >
              <Link to={`/chats/${id}`}>
                <ListItemText
                  style={{ color: id === chatId ? "white" : "#555556" }}
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
