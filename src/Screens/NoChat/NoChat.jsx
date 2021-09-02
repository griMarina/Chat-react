import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { ChatList } from "../../Components/Chats";
import { getId } from "../../utils.js";
import { getCounter } from "../../utils.js";

const counter = getCounter();

export const NoChat = ({ chats, setChats }) => {
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

  return (
    <>
      <ChatList chats={chats} setChats={setChats} />
      <h3>Please select a chat or start a new chat!</h3>
      <IconButton aria-label="add" onClick={addChat}>
        <AddIcon />
      </IconButton>
    </>
  );
};
