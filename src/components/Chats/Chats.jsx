import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCallback, useEffect } from "react";
import React from "react";
import { chatListSelector } from "../../Store/Chats/selectors";
import {
  addChatWithFirebase,
  deleteChatWithFirebase,
  initChatsTracking,
} from "../../Store/Chats/actions";
import "./Chats.css";

export const Chats = ({ chatId }) => {
  const chats = useSelector(chatListSelector);

  const dispatch = useDispatch();

  const addChat = useCallback(() => {
    dispatch(addChatWithFirebase());
  }, [dispatch]);

  const deleteChat = useCallback(
    (id) => {
      dispatch(deleteChatWithFirebase(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(initChatsTracking());
  }, [dispatch]);

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
