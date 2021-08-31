import { Redirect, useParams } from "react-router-dom";
import { useCallback } from "react";
import { ChatList } from "../../Components/Chats";
import { Form } from "../../Components/Form";
import { MessageList } from "../../Components/Message-list";
import getId from "../../utils";

export const Chats = ({ chats, setChats }) => {
  const { chatId } = useParams();

  const onSubmit = useCallback(
    ({ text }) => {
      const message = {
        id: getId(),
        // contact: contact,
        text: text,
      };

      setChats((prevChats) => {
        const messages = [...prevChats[chatId].messages, message];
        const newChats = { ...prevChats };
        newChats[chatId].messages = messages;
        return newChats;
      });
    },
    [chats]
  );

  if (!chatId || !chats[chatId]) {
    return <Redirect to="/nochat" />;
  }

  return (
    <div className="App-main">
      <ChatList chats={chats} chatId={chatId} setChats={setChats} />
      <div className="App-right">
        <MessageList messages={chats[chatId].messages} />
        <Form messages={chats[chatId].messages} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
