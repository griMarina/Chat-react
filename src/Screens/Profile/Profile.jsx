import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { toggleShowNameAction } from "../../Store/Profile/actions";
import { nameSelector } from "../../Store/Profile/selectors";
import { showNameSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const name = useSelector(nameSelector);
  const showName = useSelector(showNameSelector);
  const dispatch = useDispatch();

  const handleChange = useCallback(() => {
    dispatch(toggleShowNameAction);
  }, [dispatch]);

  return (
    <div>
      <h3>Profile</h3>
      <Checkbox
        checked={showName}
        onChange={handleChange}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span>Show name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};
