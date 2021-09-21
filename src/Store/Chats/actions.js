import { firebase } from "../../Services/firebase";
import {
  ADD_CHAT_ACTION,
  CHANGE_CHAT_ACTION,
  DELETE_CHAT_ACTION,
} from "./constans";

export const changeChatAction = (payload) => ({
  type: CHANGE_CHAT_ACTION,
  payload,
});

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const deleteChatAction = (payload) => ({
  type: DELETE_CHAT_ACTION,
  payload,
});

const getPayloadFromSnapshot = (snapshot) => {
  const chats = [];

  snapshot.forEach((chat) => {
    chats.push(chat.val());
  });

  console.log(snapshot.key);
  return { chatId: snapshot.key, chats };
};

export const addChatWithFirebase = () => async (dispatch) => {
  //   firebase
  //     .database()
  //     .ref("chatList")
  //     .on("child_changed", (snapshot) => {
  //       const payload = getPayloadFromSnapshot(snapshot);
  //       dispatch(changeChatAction());
  //     });
};

export const initChatsTracking = () => (dispatch) => {
  firebase
    .database()
    .ref("chatList")
    .on("child_changed", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch(changeChatAction());
    });

  firebase
    .database()
    .ref("chats")
    .on("child_added", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch(addChatAction());
    });

  firebase
    .database()
    .ref("chats")
    .on("child_removed", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch(deleteChatAction(snapshot));
    });
};
