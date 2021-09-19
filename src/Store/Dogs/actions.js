import {
  GET_DOGS_PICTURES_REQUEST_ACTION,
  GET_DOGS_PICTURES_SUCCESS_ACTION,
  GET_DOGS_PICTURES_REFUSE_ACTION,
  GET_DOGS_PICTURES_COMPLETE_ACTION,
} from "./constans";

const GET_DOGS_URL = "https://random.dog/woof.json";

export const getDogsPicturesRequestAction = (payload) => ({
  type: GET_DOGS_PICTURES_REQUEST_ACTION,
  payload,
});

export const getDogsPicturesSuccessAction = (payload) => ({
  type: GET_DOGS_PICTURES_SUCCESS_ACTION,
  payload,
});

export const getDogsPicturesRefuseAction = (payload) => ({
  type: GET_DOGS_PICTURES_REFUSE_ACTION,
  payload,
});

export const getDogsPicturesCompleteAction = (payload) => ({
  type: GET_DOGS_PICTURES_COMPLETE_ACTION,
  payload,
});

export const getDogsPicturesAction =
  (payload) => async (dispatch, getState) => {
    try {
      dispatch(getDogsPicturesRequestAction());
      const response = await fetch(GET_DOGS_URL);

      if (!response.ok) {
        throw new Error(`Error occured ${response.status}`);
      }

      const result = await response.json();

      dispatch(getDogsPicturesSuccessAction(result));
    } catch (error) {
      const errorStatus = error;

      dispatch(getDogsPicturesRefuseAction(errorStatus));
    } finally {
      dispatch(getDogsPicturesCompleteAction());
    }
  };
