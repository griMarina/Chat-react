import { ChatList } from "../../Components/Chats";

export const NoChat = ({ chats, setChats }) => {
  return (
    <>
      <div className="App-wrap">
        <div className="App-main">
          <ChatList chats={chats} setChats={setChats} />
          <div className="App-messages">
            <h3 className="App-title">
              Please select a chat or start a new chat!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
