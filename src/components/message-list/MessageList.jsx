import { useSelector } from "react-redux";
import { messageListSelector } from "../../Store/Messages/selectors";
import "./MessageList.css";

export const MessageList = ({ chatId }) => {
  const messages = useSelector(messageListSelector);

  if (!messages[chatId]) {
    return <div className="message-list"></div>;
  }

  return (
    <div className="message-list">
      {messages[chatId].map((message) => {
        return (
          <div
            className={message.author ? "message" : " message botMessage"}
            key={message.id}
          >
            <span>{message.text}</span>
          </div>
        );
      })}
    </div>
  );
};
