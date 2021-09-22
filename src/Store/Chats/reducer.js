import { CHANGE_CHAT_ACTION } from "./constans";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHAT_ACTION:
      return {
        ...state,
        chatList: action.payload,
      };
    default:
      return state;
  }
};

// case ADD_CHAT_ACTION:
//   return {
//     ...state,
//     chatList: [
//       ...state.chatList,
//       {
//         id: `id${getId()}`,
//         name: `Chat ${state.chatList.length + 1}`,
//       },
//     ],
//   };
// case DELETE_CHAT_ACTION:
//   const newChatList = state.chatList.filter(
//     (chat) => action.payload.id !== chat.id
//   );
//   return {
//     ...state,
//     chatList: [...newChatList],
//   };
