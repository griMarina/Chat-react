import { Redirect, useParams } from "react-router-dom";
import { useCallback } from "react";
import { ChatList } from "../../Components/Chats";
import { Form } from "../../Components/Form";
import { MessageList } from "../../Components/Message-list";
import { ROUTES } from "../../Routing/constants";
import { getId } from "../../utils";

export const Chats = ({ chats, setChats }) => {
  const { chatId } = useParams();

  const onSubmit = useCallback(
    ({ author, text }) => {
      const message = {
        id: getId(),
        author: author,
        text: text,
      };

      setChats((prevChats) => {
        const newChats = { ...prevChats };
        newChats[chatId].messages = [...newChats[chatId].messages, message];
        console.log(newChats);
        return newChats;
      });
    },
    [chats]
  );

  if (!chatId || !chats[chatId]) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="App-main">
      <ChatList chats={chats} chatId={chatId} setChats={setChats} />
      <div className="App-messages">
        <MessageList messages={chats[chatId].messages} />
        <Form messages={chats[chatId].messages} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
