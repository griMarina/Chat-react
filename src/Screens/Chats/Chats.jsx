import { Redirect, useParams } from "react-router-dom";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChatList } from "../../Components/Chats";
import { Form } from "../../Components/Form";
import { MessageList } from "../../Components/Message-list";
import { ROUTES } from "../../Routing/constants";
import { getId } from "../../utils";
import { addMessageAction } from "../../Store/Messages/actions";
import { chatListSelector } from "../../Store/Chats/selectors";
import { messageListSelector } from "../../Store/Messages/selectors";

export const Chats = ({ chats, setChats }) => {
  const { chatId } = useParams();

  // const chats = useSelector(chatListSelector);
  // const messages = useSelector(messageListSelector);

  // console.log(chats);
  // console.log(messages);

  // const dispatch = useDispatch();

  // const onSubmit = (message) => {
  //   dispatch(addMessageAction(chatId, message));
  //   console.log(chats);
  //   console.log(messages);
  // };

  // const onSubmit = useCallback(
  //   ({ text }) => {
  //     const message = {
  //       id: getId(),
  //       author: "author",
  //       text: text,
  //     };

  //     setChats((prevChats) => {
  //       const newChats = { ...prevChats };
  //       newChats[chatId].messages = [...newChats[chatId].messages, message];
  //       console.log(newChats);
  //       return newChats;
  //     });
  //   },
  //   [chats]
  // );

  if (!chatId || !chats[chatId]) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div className="App-main">
      <ChatList chats={chats} chatId={chatId} />
      <div className="App-messages">
        <MessageList chatId={chatId} />
        <Form chatId={chatId} />
      </div>
    </div>
  );
};
