import { ADD_CHAT_ACTION } from "./constans";

export const addChatAction = (name) => ({
  type: ADD_CHAT_ACTION,
  name,
});
