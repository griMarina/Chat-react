import { useSelector, useDispatch } from "react-redux";
import { addMessageAction } from "../Store/Messages/actions";
import { ADD_MESSAGE_ACTION } from "../Store/Messages/constans";
import { userNameSelector } from "../Store/Profile/selectors";
import { chatIdSelector, chatListSelector } from "../Store/Chats/selectors";

export const messageFromBot =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    const state = getState();
    // const chatId = chatIdSelector(state);
    const userName = userNameSelector(state);
    if (action.type === ADD_MESSAGE_ACTION) {
      const botMessage = `${userName}, your message has been sent.`;
      // setTimeout(
      //   () => dispatch(addMessageAction({ chatId, botMessage })),
      //   1500
      // );
    }

    return next(action);
  };

// useEffect(() => {
//   if (list.length) {
//     const lastContact = list[list.length - 1].contact;
//     const timer = setTimeout(
//       () => alert(`Your sent a message to ${lastContact}.`),
//       1500
//     );

//     return () => {
//       clearTimeout(timer);
//     };
//   }
// }, [list]);
