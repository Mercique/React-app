import { useDispatch, useSelector } from "react-redux";
import { changeShowName } from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selectors";

export const Profile = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const showName = () => {
    dispatch(changeShowName);
  };

  return (
    <>
      <input type="checkbox" onChange={showName}/>
      {profile.showName && <span>{profile.name}</span>}
    </>
  );
};
