import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { addMessageAction } from "../../Store/Messages/actions";
import { messageListSelector } from "../../Store/Messages/selectors";
import "./Form.css";

export const Form = ({ chatId }) => {
  const [text, setText] = useState("");

  const messages = useSelector(messageListSelector);

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [messages]);

  const handleAddMessage = () => {
    onSubmit({ text });

    setText("");
  };

  const onSubmit = (message) => {
    dispatch(addMessageAction({ chatId, message }));
  };

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
