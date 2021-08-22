import { useState, useRef, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./Form.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const Form = ({ list, onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const classes = useStyles();

  const inputRef = useRef(null);

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
    <div className="Form">
      <TextField
        className="Form-author"
        id="standard-full"
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
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        className="Form-btn"
        onClick={handleButtonClick}
      >
        Send
      </Button>
    </div>
  );
};
