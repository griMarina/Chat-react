import { firebase } from "../../Services/firebase";
import { CHANGE_AUTHENTICATION_STATE_ACTION } from "./constans";

export const changeAthenticationStateAction = (payload) => ({
  type: CHANGE_AUTHENTICATION_STATE_ACTION,
  payload,
});

export const initAuthTrackAction = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(changeAthenticationStateAction(true));
    } else {
      dispatch(changeAthenticationStateAction(false));
    }
  });
};
