import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { useSelector } from "react-redux";
// import { botMiddleware } from "../../src/Middlewares/botMiddleware";
import { profileReducer } from "./Profile/reducer";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { userNameSelector } from "./Profile/selectors";
import { ADD_MESSAGE_ACTION } from "./Messages/constans";
import { addMessageAction } from "../Store/Messages/actions";
import { messageFromBot } from "../Middlewares/messageFromBot";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const botMiddleware = (store) => (next) => (action) => {
//   if (action.type === ADD_MESSAGE_ACTION) {
//     const botMessage = `Your message has been sent.`;

//     setTimeout(() => store.dispatch(addMessageAction(botMessage)), 1500);
//   }
//   return next(action);
// };

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
  }),
  composeEnhancers(applyMiddleware(messageFromBot))
);
