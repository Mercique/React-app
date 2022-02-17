import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [
  {
    id: 1,
    img: "/static/images/avatar/1.jpg",
    author: "Ali Connors",
    message: "I'll be in your neighborhood doing errands this…",
  },
  {
    id: 2,
    img: "/static/images/avatar/2.jpg",
    author: "Conor Adams",
    message: "Wish I could come, but I'm out of town this…",
  },
  {
    id: 3,
    img: "/static/images/avatar/3.jpg",
    author: "Sandra Adams",
    message: "Do you have Paris recommendations? Have you ever…",
  },
  {
    id: 4,
    img: "/static/images/avatar/4.jpg",
    author: "Ilya Mand",
    message: "Do you have Paris recommendations? Have you ever…",
  },
  {
    id: 5,
    img: "/static/images/avatar/5.jpg",
    author: "Ilya Mand",
    message: "Do you have Paris recommendations? Have you ever…",
  },
];

export const chatsReducer = (storeState = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return [
        ...storeState,
        {
          id: action.payload.id,
          img: action.payload.img,
          author: action.payload.author,
          message: action.payload.message,
        },
      ];
    }
    case DELETE_CHAT: {
      return storeState.filter(({ id }) => id !== action.payload);
    }
    default:
      return storeState;
  }
};
