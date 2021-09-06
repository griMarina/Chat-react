import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { toggleShowNameAction } from "../../Store/Profile/actions";
import { nameSelector } from "../../Store/Profile/selectors";
import { showNameSelector } from "../../Store/Profile/selectors";
import "./Profile.css";

export const Profile = () => {
  const name = useSelector(nameSelector);
  const showName = useSelector(showNameSelector);
  const dispatch = useDispatch();

  const handleChange = useCallback(() => {
    dispatch(toggleShowNameAction);
  }, [dispatch]);

  return (
    <div className="App-wrap">
      <h3 className="App-title">Profile page</h3>
      <Checkbox
        checked={showName}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span>Show name</span>
      {showName && <div className="showName-box">{name}</div>}
    </div>
  );
};
