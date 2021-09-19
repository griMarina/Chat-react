import {
  GET_DOGS_PICTURES_REQUEST_ACTION,
  GET_DOGS_PICTURES_SUCCESS_ACTION,
  GET_DOGS_PICTURES_REFUSE_ACTION,
  GET_DOGS_PICTURES_COMPLETE_ACTION,
} from "./constans";

const initialState = { loading: true, error: undefined, dogs: [] };

export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS_PICTURES_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_DOGS_PICTURES_SUCCESS_ACTION:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOGS_PICTURES_REFUSE_ACTION:
      return {
        ...state,
        error: true,
      };
    case GET_DOGS_PICTURES_COMPLETE_ACTION:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
