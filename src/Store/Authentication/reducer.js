import { CHANGE_AUTHENTICATION_STATE_ACTION } from "./constans";

const initialState = { isAuthenticated: false };

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTHENTICATION_STATE_ACTION:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
