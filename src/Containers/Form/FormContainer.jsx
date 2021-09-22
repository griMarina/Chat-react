import { useState, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userNameSelector } from "../../Store/Profile/selectors";
import {
  addMessageWithFarebase,
  initMessagesTracking,
  addBotMessage,
} from "../../Store/Messages/actions";
import { Form } from "../../Components/Form/Form";

export const FormContainer = ({ chatId }) => {
  const [text, setText] = useState("");

  const author = useSelector(userNameSelector);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleAddMessage = useCallback(() => {
    dispatch(addMessageWithFarebase(chatId, author, text));
    dispatch(addBotMessage(chatId));

    setText("");

    inputRef.current?.focus();
  }, [dispatch, author, text, chatId]);

  useEffect(() => {
    dispatch(initMessagesTracking(chatId));
  });

  return (
    <Form
      text={text}
      inputRef={inputRef}
      handleChangeText={handleChangeText}
      handleAddMessage={handleAddMessage}
    />
  );
};
