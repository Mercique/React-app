export const selectMessages = (state) => {
  return (state.messages = state.chats.reduce((acc, cur) => {
    acc[`chat${cur.id}`] = [];
    return acc;
  }, {}));
};
