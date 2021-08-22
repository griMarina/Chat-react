import { List, ListItem } from "@material-ui/core";
import { useState } from "react";
import "./ChatList.css";

export const ChatList = ({ list }) => {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState({ name: list, id: "" });

  return (
    <List className="chat-list">
      {list.map((chat) => {
        return <ListItem></ListItem>;
      })}
    </List>
  );
};
