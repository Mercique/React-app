import { ADD_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload.message,
        ],
      };
    }
    case ADD_CHAT: {
      return {
        ...state,
        [`chat${action.payload.id}`]: [],
      };
    }
    case DELETE_MESSAGE: {
      const newState = { ...state };

      delete newState[action.payload];

      return newState;
    }
    default:
      return state;
  }
};
