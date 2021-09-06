import { TOGGLE_SHOW_NAME_ACTION } from "./constans";

const initialState = {
  showName: false,
  name: "Marina",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NAME_ACTION:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
