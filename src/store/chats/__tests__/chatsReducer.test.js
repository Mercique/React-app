import { addChat, deleteChat } from "../actions";
import { chatsReducer } from "../reducer";

describe("Chats tests", () => {
  let initialState = [
    { id: 1, img: `/static/images/avatar/1.jpg`, author: "User NEW", message: "Hello world!" },
    { id: 2, img: `/static/images/avatar/2.jpg`, author: "User NEW", message: "Hello world!" },
    { id: 3, img: `/static/images/avatar/3.jpg`, author: "User NEW", message: "Hello world!" }
  ];
  
  const getId = initialState[initialState.length - 1]?.id + 1 || 1;
  
  const newChat = {
    id: getId,
    img: `/static/images/avatar/${getId}.jpg`,
    author: "User NEW",
    message: "Do you have Paris recommendations? Have you ever…",
  };
  
  it("length of chats should be incremented", () => {
    let action = addChat(getId, newChat);
    let newState = chatsReducer(initialState, action);

    expect(newState.length).toBe(4);
    expect(newState[3].id).toBe(4);
  });

  it("length of chats should be reduced", () => {
    let action = deleteChat(1);
    let newState = chatsReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState[0].id).toBe(2);
  });
});