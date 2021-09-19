import { getId } from "../../utils";
import { ADD_MESSAGE_ACTION } from "./constans";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      const currentList = state.messageList[action.payload.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: [
            ...currentList,
            {
              id: `id-${getId()}`,
              ...action.payload.message,
            },
          ],
        },
      };
    default:
      return state;
  }
};
