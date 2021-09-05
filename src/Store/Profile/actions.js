import { CHANGE_NAME_ACTION } from "./constans";

export const changeNameAction = (payload) => ({
  type: CHANGE_NAME_ACTION,
  payload,
});
