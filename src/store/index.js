import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   combineReducers({
//     profile: profileReducer,
//     chats: chatsReducer,
//     messages: messagesReducer,
//   }),
//   composeEnchancers(applyMiddleware(thunk))
// );

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['chats', 'messages'],
  //blacklist: ['profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnchancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
