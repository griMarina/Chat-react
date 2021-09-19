import { useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userNameSelector } from "../../Store/Profile/selectors";
import { addMessageWithThunk } from "../../Store/Messages/actions";
import { Form } from "../../Components/Form/Form";

export const FormContainer = ({ chatId }) => {
  const [text, setText] = useState("");

  const author = useSelector(userNameSelector);

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleAddMessage = useCallback(() => {
    let message = {
      author: author,
      text: text,
    };

    dispatch(addMessageWithThunk({ chatId, message }));

    setText("");

    inputRef.current?.focus();
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
