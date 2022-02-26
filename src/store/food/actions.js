import { apiUrl } from "../../utils/constants";

export const GET_FOOD_REQUEST = "FOOD::GET_FOOD_REQUEST";
export const GET_FOOD_SUCCESS = "FOOD::GET_FOOD_SUCCESS";
export const GET_FOOD_FAILURE = "FOOD::GET_FOOD_FAILURE";

export const getFoodRequest = () => ({
  type: GET_FOOD_REQUEST,
});

export const getFoodSuccess = (food) => ({
  type: GET_FOOD_SUCCESS,
  payload: food,
});

export const getFoodFailure = (error) => ({
  type: GET_FOOD_FAILURE,
  payload: error,
});

export const getFood = () => async (dispatch) => {
  dispatch(getFoodRequest());
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    dispatch(getFoodSuccess(result));
  } catch (err) {
    dispatch(getFoodFailure(err));
    console.warn(err);
  }
};
