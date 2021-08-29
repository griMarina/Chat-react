import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Main } from "../Screens/Main";
import { Profile } from "../Screens/Profile";
import { Chats } from "../Screens/Chats";
import { NoChat } from "../Screens/NoChat";
import { ROUTES } from "./constants";

const initialChats = {
  id1: {
    name: "Chat1",
    messages: [{ contact: "Anna", text: "Hello!" }],
  },
  id2: {
    name: "Chat2",
    messages: [
      { contact: "Mary", text: "Hi?" },
      { contact: "Alex", text: "How are you?" },
    ],
  },
};

export const Routing = () => {
  const [chats, setChats] = useState(initialChats);

  return (
    <Switch>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route path={ROUTES.PROFILE}>
        <Profile />
      </Route>
      <Route exact path={ROUTES.CHATS}>
        <Chats chats={chats} setChats={setChats} />
      </Route>
      <Route path={ROUTES.NO_CHAT}>
        <NoChat chats={chats} setChats={setChats} />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <h3>Page not found</h3>
      </Route>
    </Switch>
  );
};
