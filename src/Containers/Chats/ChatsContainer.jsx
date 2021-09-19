import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { Chats } from "../../Components/Chats";
import { FormContainer } from "../../Containers/Form";
import { Messages } from "../../Components/Messages";
import { ROUTES } from "../../Routing/constants";

export const ChatsContainer = () => {
  const { chatId } = useParams();

  const chats = useSelector(chatListSelector);

  const chat = chats.find((chat) => chat.id === chatId);

  if (!chatId || !chat) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="App-main">
      <Chats chatId={chatId} />
      <div className="App-messages">
        <Messages chatId={chatId} />
        <FormContainer chatId={chatId} />
      </div>
    </div>
  );
};
