import "./MessageList.css";

export const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => {
        return (
          <div className="message" key={message.id}>
            <span>{message.text}</span>
          </div>
        );
      })}
    </div>
  );
};
