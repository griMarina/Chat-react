import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import { chatListSelector } from "../../Store/Chats/selectors";
import {
  addChatWithFirebase,
  deleteChatAction,
  initChatsTracking,
} from "../../Store/Chats/actions";
import "./Chats.css";
import { firebase } from "../../Services/firebase";

import { getId } from "../../utils";

export const Chats = ({ chatId }) => {
  const chats = useSelector(chatListSelector);

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    dispatch(addChatWithFirebase());
  }, []);

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  const deleteChat = useCallback();
  //   (id) => {
  //     dispatch(deleteChatAction({ id }));
  //   },
  //   [dispatch]

  return (
    <List className="chat-list">
      <IconButton className="add-chat-btn" aria-label="add" onClick={addChat}>
        <AddBoxIcon />
      </IconButton>
      {chats.map((chat) => {
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
