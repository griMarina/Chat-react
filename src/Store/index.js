import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { botMiddleware } from "../../src/Middlewares/botMiddleware";
import { profileReducer } from "./Profile/reducer";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
  }),
  composeEnhancers(applyMiddleware(botMiddleware))
);
