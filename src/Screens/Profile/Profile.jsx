import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import {
  changeNameAction,
  toggleShowNameAction,
} from "../../Store/Profile/actions";
import {
  showNameSelector,
  userNameSelector,
} from "../../Store/Profile/selectors";
import "./Profile.css";

export const Profile = () => {
  const [name, setName] = useState("");

  const userName = useSelector(userNameSelector);
  const showName = useSelector(showNameSelector);

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCheckbox = useCallback(() => {
    dispatch(toggleShowNameAction(), [dispatch]);
  });

  const handleClick = useCallback(() => {
    dispatch(changeNameAction({ name }), [dispatch, name]);
    setName("");
  });

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
