import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNameAction,
  toggleShowNameAction,
} from "../../Store/Profile/actions";
import {
  showNameSelector,
  userNameSelector,
} from "../../Store/Profile/selectors";
import { Profile } from "../../Components/Profile/Profile";

export const ProfileContainer = () => {
  const [name, setName] = useState("");

  const userName = useSelector(userNameSelector);
  const showName = useSelector(showNameSelector);

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCheckbox = useCallback(() => {
    dispatch(toggleShowNameAction());
  }, [dispatch]);

  const handleClick = useCallback(() => {
    dispatch(changeNameAction({ name }));
    setName("");
  }, [dispatch, name]);

  return (
    <Profile
      name={name}
      showName={showName}
      userName={userName}
      handleChangeName={handleChangeName}
      handleChangeCheckbox={handleChangeCheckbox}
      handleClick={handleClick}
    />
  );
};
