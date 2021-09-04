import { useState, useRef, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./Form.css";

export const Form = ({ messages, onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    inputRef.current?.focus();
  }, [messages]);

  const handleButtonClick = () => {
    onSubmit({ text });

    setAuthor("");
    setText("");
  };

  const handleChangeContact = (e) => {
    setAuthor(e.target.value);
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
      <TextField
        className="Form-author"
        id="standard"
        value={author}
        placeholder="To: "
        onChange={handleChangeContact}
      />
      <Button
        className="Form-btn"
        variant="contained"
        endIcon={<Icon>send</Icon>}
        onClick={handleButtonClick}
      >
        Send
      </Button>
    </div>
  );
};
