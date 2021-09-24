import { useSelector } from "react-redux";
import { messageListSelector } from "../../Store/Messages/selectors";
import "./Messages.css";

export const Messages = () => {
  const messages = useSelector(messageListSelector);

  // if (!messages[chatId]) {
  //   return <div className="message-list"></div>;
  // }

  return (
    <div className="message-list">
      {messages.map((item) => {
        return (
          <div
            className={item.message.author ? "message" : " message botMessage"}
            key={item.id}
          >
            <span>{item.message.text}</span>
          </div>
        );
      })}
    </div>
  );
};
