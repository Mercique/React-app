import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload.newMsg,
        ],
      };
    }
    case ADD_CHAT: {
      return {
        ...state,
        [action.payload.newId]: [],
      };
    }
    case DELETE_CHAT: {
      const newMsgs = { ...state };
      delete newMsgs[action.payload];
      return newMsgs;
    }
    default:
      return state;
  }
};
