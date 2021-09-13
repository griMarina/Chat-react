import { useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { userNameSelector } from "../../Store/Profile/selectors";
import { addMessageWithThunk } from "../../Store/Messages/actions";
import "./Form.css";

export const Form = ({ chatId }) => {
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
    <div className="Form">
      <TextField
        className="Form-text"
        id="standard-full"
        placeholder="Type your text"
        value={text}
        onChange={handleChangeText}
        inputRef={inputRef}
      />
      <Button
        className="Form-btn"
        variant="contained"
        endIcon={<Icon>send</Icon>}
        onClick={handleAddMessage}
      >
        Send
      </Button>
    </div>
  );
};
