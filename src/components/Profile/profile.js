import { useDispatch, useSelector } from "react-redux";
import { changeShowName } from "../../store/profile/actions";

export const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const showName = () => {
    dispatch(changeShowName);
  };

  return (
    <>
      <input type="checkbox" onChange={showName}/>
      {data.showName && <span>{data.name}</span>}
    </>
  );
};
