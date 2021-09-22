import { CHANGE_MESSAGES_ACTION } from "./constans";
import { userNameSelector } from "../Profile/selectors";
import { firebase } from "../../Services/firebase";

export const changeMessagesAction = (payload) => ({
  type: CHANGE_MESSAGES_ACTION,
  payload,
});

export const addBotMessage = (chatId) => (dispatch, getState) => {
  const state = getState();
  const userName = userNameSelector(state);

  const { author, text } = {
    author: "Bot",
    text: `${userName}, your message has been sent.`,
  };
  setTimeout(
    () => dispatch(addMessageWithFarebase(chatId, author, text)),
    1500
  );
};

export const addMessageWithFarebase = (chatId, author, text) => async () => {
  await firebase
    .database()
    .ref("messageList")
    .child(chatId)
    .push({
      message: {
        author: author,
        text: text,
      },
    });
};

export const initMessagesTracking = (chatId) => async (dispatch) => {
  await firebase
    .database()
    .ref("messageList")
    .child(chatId)
    .on("value", (snapshot) => {
      const newMessages = [];

      snapshot.forEach((snap) => {
        newMessages.push({
          id: snap.ref.key,
          message: snap.val().message,
        });
      });
      dispatch(changeMessagesAction(newMessages));
    });
};

// export const addMessageAction = (payload) => ({
//   type: ADD_MESSAGE_ACTION,
//   payload,
// });
