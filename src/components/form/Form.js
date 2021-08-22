import { useState, useRef, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./Form.css";

export const Form = ({ list, onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    inputRef.current?.focus();
  }, [list]);

  const handleButtonClick = () => {
    onSubmit({ author, text });

    setAuthor("");
    setText("");
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Form">
      <TextField
        className="Form-author"
        id="standard"
        style={{ padding: 10 }}
        value={author}
        placeholder="Enter your name"
        onChange={handleChangeAuthor}
        inputRef={inputRef}
      />
      <TextField
        className="Form-text"
        id="standard-full"
        style={{ padding: 10 }}
        placeholder="Write your message"
        value={text}
        onChange={handleChangeText}
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
          borderColor: theme.palette.secondary.main,
          color: "white",
        }}
      >
        Send
      </Button>
    </div>
  );
  // <div className="Form">
  //   <input
  //     className="Form-author"
  //     type="text"
  //     value={author}
  //     placeholder="Enter your name"
  //     onChange={handleChangeAuthor}
  //   />
  //   <input
  //     className="Form-text"
  //     type="text"
  //     value={text}
  //     placeholder="Write your message"
  //     onChange={handleChangeText}
  //   />
  //   <button className="Form-btn" onClick={handleButtonClick}>
  //     Send message
  //   </button>
  // </div>
};
