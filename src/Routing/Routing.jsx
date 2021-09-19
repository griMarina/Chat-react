import { Route, Switch } from "react-router-dom";
import { Main } from "../Containers/Main";
import { ProfileContainer } from "../Containers/Profile";
import { ChatsContainer } from "../Containers/Chats";
import { NoChat } from "../Containers/NoChat";
import { Dogs } from "../Containers/DogPictures";
import { NotFound } from "../Containers/NotFound";
import { ROUTES } from "./constants";

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route path={ROUTES.PROFILE}>
        <ProfileContainer />
      </Route>
      <Route exact path={ROUTES.CHATS}>
        <ChatsContainer />
      </Route>
      <Route path={ROUTES.NO_CHAT}>
        <NoChat />
      </Route>
      <Route path={ROUTES.DOGS}>
        <Dogs />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <NotFound />
      </Route>
    </Switch>
  );
};
