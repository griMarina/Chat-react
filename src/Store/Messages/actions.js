import { ADD_MESSAGE_ACTION } from "./constans";
import { userNameSelector } from "../Profile/selectors";
import { firebase } from "../../Services/firebase";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const addMessageWithThunk =
  ({ chatId, message }) =>
  (dispatch, getState) => {
    // firebase.database().ref("chats").child(chatId).push(message);

    dispatch(addMessageAction({ chatId, message }));

    const state = getState();
    const userName = userNameSelector(state);

    if (message.author !== "Bot") {
      const message = {
        text: `${userName}, your message has been sent.`,
      };
      setTimeout(() => dispatch(addMessageAction({ chatId, message })), 1500);
    }
  };
