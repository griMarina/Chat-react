import { Route, Switch } from "react-router-dom";
import { Main } from "../Screens/Main";
import { Profile } from "../Screens/Profile";
import { Chats } from "../Screens/Chats";
import { NoChat } from "../Screens/NoChat";
import { ROUTES } from "./constants";

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route path={ROUTES.PROFILE}>
        <Profile />
      </Route>
      <Route exact path={ROUTES.CHATS}>
        <Chats />
      </Route>
      <Route path={ROUTES.NO_CHAT}>
        <NoChat />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <h3>Page not found</h3>
      </Route>
    </Switch>
  );
};
