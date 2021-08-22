import "./MessageList.css";

export const MessageList = ({ list }) => {
  return (
    <div className="message-list">
      {list.map((message) => {
        return (
          <span className="message" key={message.id}>
            {message.text}
          </span>
        );
      })}
    </div>
  );
};
