import { TOGGLE_SHOW_NAME_ACTION } from "./constans";
import { CHANGE_NAME_ACTION } from "./constans";

export const changeNameAction = (payload) => ({
  type: CHANGE_NAME_ACTION,
  payload,
});

export const toggleShowNameAction = (payload) => ({
  type: TOGGLE_SHOW_NAME_ACTION,
  payload,
});
