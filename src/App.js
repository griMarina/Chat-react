import { useCallback, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { MessageList } from "./components/message-list";
import { Form } from "./components/form";
import { ChatList } from "./components/chat-list";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e68431",
      },
      secondary: {
        main: "#a6d1f3",
      },
    },
  });

  const getId = () => {
    return Math.random();
  };

  const onSubmit = useCallback(
    ({ contact, text }) => {
      let message = {
        id: getId(),
        contact: contact,
        text: text,
      };

      setList([...list, message]);
    },
    [list]
  );

  useEffect(() => {
    if (list.length) {
      const lastContact = list[list.length - 1].contact;
      const timer = setTimeout(
        () => alert(`Your sent a message to ${lastContact}.`),
        1500
      );

      return () => {
        clearTimeout(timer);
      };
    }
  }, [list]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-main">
          <ChatList list={list} />
          <div className="App-right">
            <MessageList list={list} />
            <Form list={list} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
