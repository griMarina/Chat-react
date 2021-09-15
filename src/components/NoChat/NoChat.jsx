import { Chats } from "../Chats";

export const NoChat = () => {
  return (
    <div className="App-wrap">
      <div className="App-main">
        <Chats />
        <div className="App-messages">
          <h3 className="App-title">
            Please select a chat or start a new chat!
          </h3>
        </div>
      </div>
    </div>
  );
};
