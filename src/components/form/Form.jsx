import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "./Form.css";

export const Form = ({
  text,
  handleChangeText,
  handleAddMessage,
  inputRef,
}) => {
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
