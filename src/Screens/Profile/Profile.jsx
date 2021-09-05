import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { changeNameAction } from "../../Store/Profile/actions";
import "./Profile.css";

export const Profile = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

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
        onChange={handleChange}
        value={name}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Change Name
      </Button>
    </div>
  );
};
