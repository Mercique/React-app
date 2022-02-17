export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (chatId, message) => {
  return {
    type: ADD_MESSAGE,
    payload: { chatId, message },
  };
};

export const deleteMessage = (chatId) => {
  return {
    type: DELETE_MESSAGE,
    payload: chatId,
  };
};
