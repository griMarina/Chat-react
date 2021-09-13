import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { ChatList } from "../../Components/Chats";
import { Form } from "../../Components/Form";
import { MessageList } from "../../Components/Message-list";
import { ROUTES } from "../../Routing/constants";

export const Chats = () => {
  const { chatId } = useParams();

  const chats = useSelector(chatListSelector);

  const chat = chats.find((chat) => chat.id === chatId);

  if (!chatId || !chat) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="App-main">
      <ChatList chatId={chatId} />
      <div className="App-messages">
        <MessageList chatId={chatId} />
        <Form chatId={chatId} />
      </div>
    </div>
  );
};
