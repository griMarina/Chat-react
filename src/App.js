import { useCallback, useEffect, useState } from "react";
import { MessageList } from "./components/message-list";
import { Form } from "./components/form";
import { ChatList } from "./components/chat-list";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const getId = () => {
    return Math.random();
  };

  // правильно ли я поняла, что в useCallback оборачиваем только onSubmit, или handleButtonClick в Form.js тоже надо?
  const onSubmit = useCallback(
    ({ author = "Marina", text }) => {
      let message = {
        id: getId(),
        author: author,
        text: text,
      };

      setList([...list, message]);
    },
    [list]
  );

  useEffect(() => {
    if (list.length) {
      const lastMesAuthor = list[list.length - 1].author;
      const timer = setTimeout(
        () => alert(`${lastMesAuthor}, your message has been sent!`),
        1500
      );

      return () => {
        clearTimeout(timer); // очистка эффекта
      };
    }
  }, [list]); // для вызова функции только при изменении массива list

  return (
    <div className="App">
      <div className="App-main">
        <ChatList list={list} />
        <div className="App-right">
          <MessageList list={list} />
          <Form list={list} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;
