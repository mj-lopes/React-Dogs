import { combineReducers, configureStore } from "@reduxjs/toolkit";

import photo from "./photo";
import token from "./token";
import user from "./user";

const reducer = combineReducers({ photo, token, user });
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;