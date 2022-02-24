export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, newMsg) => {
  return {
    type: ADD_MESSAGE,
    payload: { chatId, newMsg },
  };
};

let timeout;

export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
  dispatch(addMessage(chatId, newMsg));

  if (newMsg.author !== "BOT") {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const msgFromBOT = {
        id: `msg-${Date.now()}`,
        text: "I'm BOT you know??",
        author: "User",
      };
      dispatch(addMessage(chatId, msgFromBOT));
    }, 1000);
  }
};
