import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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
  composeEnhancers(applyMiddleware(thunk))
);
