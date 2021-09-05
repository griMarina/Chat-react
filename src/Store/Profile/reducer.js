import { TOGGLE_SHOW_NAME_ACTION } from "./constans";
import { CHANGE_NAME_ACTION } from "./constans";

const initialState = { userName: "", showName: false };

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_ACTION:
      return {
        ...state,
        userName: action.payload.name,
      };
    case TOGGLE_SHOW_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
