import { FETCH_STATUSES } from "../../utils/constants";
import {
  GET_FOOD_FAILURE,
  GET_FOOD_REQUEST,
  GET_FOOD_SUCCESS,
} from "./actions";

const initialState = {
  data: [],
  error: null,
  status: FETCH_STATUSES.IDLE,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD_REQUEST: {
      return {
        ...state,
        error: null,
        status: FETCH_STATUSES.REQUEST,
      };
    }
    case GET_FOOD_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: FETCH_STATUSES.SUCCESS,
      };
    }
    case GET_FOOD_FAILURE: {
      return {
        ...state,
        status: FETCH_STATUSES.FAILURE,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
