import { ADD_MESSAGE_ACTION } from "./constans";

export const addMessageAction = (chatId, message) => ({
  type: ADD_MESSAGE_ACTION,
  chatId,
  message,
});
