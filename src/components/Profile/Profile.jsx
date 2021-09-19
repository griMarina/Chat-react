import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import "./Profile.css";

export const Profile = ({
  name,
  showName,
  userName,
  handleChangeName,
  handleChangeCheckbox,
  handleClick,
}) => {
  return (
    <div className="App-wrap">
      <h3 className="App-title">Profile page</h3>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={handleChangeName}
        value={name}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Change and Save Name
      </Button>
      <Checkbox
        checked={showName}
        onChange={handleChangeCheckbox}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span>Show name</span>
      {showName && <div className="showName-box">{userName}</div>}
    </div>
  );
};
