import { useCallback, useEffect, useState } from "react";
import { MessageList } from "./components/message-list";
import { Form } from "./components/form";
import { ChatList } from "./components/chat-list";
import "./App.css";
import { createTheme, ThemeProvider, useTheme } from "@material-ui/core/styles";

const App = () => {
  const [list, setList] = useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#e9601e",
      },
      secondary: {
        main: "#ff5722",
      },
    },
  });

  const getId = () => {
    return Math.random();
  };

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
