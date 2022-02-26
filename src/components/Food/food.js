import "./food.scss";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../../store/food/actions";
import {
  selectFood,
  selectFoodError,
  selectFoodLoading,
} from "../../store/food/selectors";

export const Food = () => {
  const dispatch = useDispatch();
  const food = useSelector(selectFood);
  const error = useSelector(selectFoodError);
  const isLoading = useSelector(selectFoodLoading);

  const getData = async () => {
    dispatch(getFood());
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="box">
      <h3>Time to Eat!!</h3>
      <p>Indian dish made with highly seasoned rice and meat, fish, or vegetables.</p>
      {error && <h5>Error</h5>}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <img src={food.image} alt="pic" />
      )}
      <button onClick={getData}>New food or refresh</button>
    </div>
  );
};
