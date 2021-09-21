import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import { chatListSelector } from "../../Store/Chats/selectors";
import { addChatAction, deleteChatAction } from "../../Store/Chats/actions";
import "./Chats.css";
import { firebase } from "../../Services/firebase";

import { getId } from "../../utils";

export const Chats = ({ chatId }) => {
  // const chats = useSelector(chatListSelector);

  const [chats, setChats] = useState([]);

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    let chat = {
      id: `id${getId()}`,
      name: `Chat`,
    };
    firebase.database().ref("chatList").child(chatId).push(chat);
    // dispatch(addChatAction());
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref("chatList")
      .on("value", (snapshot) => {
        const newChats = [];
        snapshot.forEach((snap) => {
          newChats.push(snap.val());
        });
        setChats(newChats);
      });
  }, []);

  console.log(chats);

  const deleteChat = useCallback((id) => {
    // firebase.database().ref("chatList").child(chat.id).remove;
    // dispatch(deleteChatAction({ id }));
  }, []);

  return (
    <List className="chat-list">
      <IconButton className="add-chat-btn" aria-label="add" onClick={addChat}>
        <AddBoxIcon />
      </IconButton>
      {chats.map((chat) => {
        console.log(chat.id);
        return (
          <React.Fragment key={chat.id}>
            <Link className="chat-link" to={`/chats/${chat.id}`}>
              <ListItem
                className="chat"
                style={{
                  backgroundColor: chat.id === chatId ? "#a6d1f3" : "inherit",
                }}
              >
                <ListItemText
                  style={{ color: chat.id === chatId ? "white" : "#555556" }}
                  primary={chat.name}
                />

                <IconButton
                  aria-label="delete"
                  onClick={() => deleteChat(chat.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </Link>
          </React.Fragment>
        );
      })}
    </List>
  );
};
