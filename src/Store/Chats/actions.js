import { firebase } from "../../Services/firebase";
import { CHANGE_CHAT_ACTION } from "./constans";
import { getCounter } from "../../utils";

export const changeChatAction = (payload) => ({
  type: CHANGE_CHAT_ACTION,
  payload,
});

const count = getCounter();

export const addChatWithFirebase = () => async () => {
  await firebase
    .database()
    .ref("chatList")
    .push({ name: `Chat ${count()}` });
};

export const deleteChatWithFirebase = (id) => async () => {
  await firebase.database().ref("chatList").child(id).remove();
};

export const initChatsTracking = () => async (dispatch) => {
  await firebase
    .database()
    .ref("chatList")
    .on("value", (snapshot) => {
      const newChats = [];

      snapshot.forEach((chat) => {
        newChats.push({
          id: chat.ref.key,
          name: chat.val().name,
        });
      });
      dispatch(changeChatAction(newChats));
    });
};

// export const addChatAction = (payload) => ({
//   type: ADD_CHAT_ACTION,
//   payload,
// });

// export const deleteChatAction = (payload) => ({
//   type: DELETE_CHAT_ACTION,
//   payload,
// });
