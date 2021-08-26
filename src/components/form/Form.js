import { useState, useRef, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./Form.css";

export const Form = ({ list, onSubmit }) => {
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    inputRef.current?.focus();
  }, [list]);

  const handleButtonClick = () => {
    onSubmit({ contact, text });

    setContact("");
    setText("");
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Form">
      <TextField
        className="Form-text"
        id="standard-full"
        style={{ padding: 10 }}
        placeholder="Type your text"
        value={text}
        onChange={handleChangeText}
        inputRef={inputRef}
      />
      <TextField
        className="Form-author"
        id="standard"
        style={{ padding: 10 }}
        value={contact}
        placeholder="To: "
        onChange={handleChangeContact}
      />
      <Button
        className="Form-btn"
        variant="contained"
        endIcon={<Icon>send</Icon>}
        onClick={handleButtonClick}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        Send
      </Button>
    </div>
  );
};
