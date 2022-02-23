export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (chatId, newMsg) => {
  return {
    type: ADD_MESSAGE,
    payload: { chatId, newMsg },
  };
};

export const deleteMessage = (chatId, idToDelete) => {
  return {
    type: DELETE_MESSAGE,
    payload: { chatId, idToDelete },
  };
};
