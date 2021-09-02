import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowNameAction } from "../../Store/Profile/actions";
import { nameSelector } from "../../Store/Profile/selectors";
import { showNameSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const name = useSelector(nameSelector);
  const showName = useSelector(showNameSelector);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(toggleShowNameAction);
  }, [dispatch]);

  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};
