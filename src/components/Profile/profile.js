import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/firebase";
import { changeShowName } from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selectors";

export const Profile = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const showName = () => {
    dispatch(changeShowName);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <>
      <h3>Profile</h3>
      <button onClick={handleLogout}>Logout</button>
      <input type="checkbox" onChange={showName} />
      {profile.showName && <span>{profile.name}</span>}
    </>
  );
};
