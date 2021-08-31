import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import { ChatList } from "../../Components/Chats";

export const NoChat = ({ chats, setChats }) => {
  const [id, setId] = useState(1);

  const addChat = () => {
    let newChat = {
      name: `Chat ${id}`,
      messages: [],
    };

    setChats((prevChats) => {
      const newChats = { ...prevChats };
      newChats[`id${id}`] = newChat;
      return newChats;
    });

    setId(id + 1);
  };

  return (
    <>
      <ChatList chats={chats} setChats={setChats} />
      <h3>Please select a chat or start a new chat!</h3>
      <IconButton
        aria-label="add"
        onClick={() => {
          addChat();
        }}
      >
        <AddIcon />
      </IconButton>
    </>
  );
};
