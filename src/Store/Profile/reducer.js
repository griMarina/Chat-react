import { CHANGE_NAME_ACTION } from "./constans";

const initialState = { userName: "" };

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME_ACTION:
      return {
        ...state,
        userName: action.payload.name,
      };
    default:
      return state;
  }
};
