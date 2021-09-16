import {
  GET_DOGS_PICTURES_REQUEST_ACTION,
  GET_DOGS_PICTURES_SUCCESS_ACTION,
  GET_DOGS_PICTURES_REFUSE_ACTION,
  GET_DOGS_PICTURES_COMPLETE_ACTION,
} from "./constans";

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

const GET_DOGS_URL = "https://random.dog/woof.json";

export const getDogsPicturesAction =
  (payload) => async (dispatch, getState) => {
    try {
      dispatch(getDogsPicturesRequestAction());
      const response = await fetch(GET_DOGS_URL);
      console.log(response);

      if (!response.ok) {
        throw new Error(`Error occured ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      dispatch(getDogsPicturesSuccessAction(result));
    } catch (error) {
      dispatch(getDogsPicturesRefuseAction());
    } finally {
      dispatch(getDogsPicturesCompleteAction());
    }
  };
