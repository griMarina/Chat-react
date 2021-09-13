import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { addMessageAction } from "../../Store/Messages/actions";
import "./Form.css";

export const Form = ({ chatId }) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleAddMessage = useCallback(() => {
    dispatch(addMessageAction({ chatId, text }));
    setText("");

    inputRef.current?.focus();
  });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

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
