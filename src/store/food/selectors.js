import { FETCH_STATUSES } from "../../utils/constants";

export const selectFood = (state) => state.food.data;
export const selectFoodLoading = (state) =>
  state.food.status === FETCH_STATUSES.REQUEST;
export const selectFoodError = (state) => state.food.error;
