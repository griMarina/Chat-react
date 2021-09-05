import { useSelector } from "react-redux";
import { userNameSelector } from "../../Store/Profile/selectors";
import "./MessageList.css";

export const MessageList = ({ messages }) => {
  const userName = useSelector(userNameSelector);

  return (
    <div className="message-list">
      {messages.map((message) => {
        return (
          <div className="message" key={message.id}>
            <span>
              {userName}: {message.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
