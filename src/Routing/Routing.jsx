import { Route, Switch } from "react-router-dom";
import { Main } from "../Components/Main";
import { ProfileContainer } from "../Containers/Profile";
import { ChatsContainer } from "../Containers/Chats";
import { NoChat } from "../Components/NoChat";
import { Dogs } from "../Containers/DogPictures";
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
        <h3>Page not found</h3>
      </Route>
    </Switch>
  );
};
