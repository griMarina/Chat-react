import { Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Main } from "../Containers/Main";
import { ProfileContainer } from "../Containers/Profile";
import { ChatsContainer } from "../Containers/Chats";
import { NoChat } from "../Containers/NoChat";
import { Dogs } from "../Containers/DogPictures";
import { NotFound } from "../Containers/NotFound";
import { ROUTES } from "./constants";
import { Signin } from "../Containers/Signin";
import { Signup } from "../Containers/Signup/Signup";
import { initAuthTrackAction } from "../Store/Authentication/actions";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Routing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthTrackAction());
  }, [dispatch]);

  return (
    <Switch>
      <PublicRoute exact path={ROUTES.MAIN}>
        <Main />
      </PublicRoute>
      <PublicRoute path={ROUTES.SIGNIN}>
        <Signin />
      </PublicRoute>
      <PublicRoute path={ROUTES.SIGNUP}>
        <Signup />
      </PublicRoute>
      <PublicRoute path={ROUTES.NOT_FOUND}>
        <NotFound />
      </PublicRoute>
      <PrivateRoute path={ROUTES.PROFILE}>
        <ProfileContainer />
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.CHATS}>
        <ChatsContainer />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.NO_CHAT}>
        <NoChat />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.DOGS}>
        <Dogs />
      </PrivateRoute>
    </Switch>
  );
};
