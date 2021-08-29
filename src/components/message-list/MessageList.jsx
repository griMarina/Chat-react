import { Divider } from "@material-ui/core";
import "./MessageList.css";

export const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => {
        return (
          <div className="message" key={message.contact}>
            <span>
              {message.contact}: {message.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
