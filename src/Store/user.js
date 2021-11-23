import createAsyncSlice from "./helper/createAsyncSlice";
import { USER_GET } from "../api";
import { fetchToken, resetTokenState } from "./token";

const slice = createAsyncSlice({
  name: "user",
  fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = slice.asyncAction;
const { resetState: resetUserState, fetchError } = slice.actions;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload.token) {
    await dispatch(fetchUser(payload.token));
    window.localStorage.setItem("token", payload.token);
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  window.localStorage.removeItem("token");
};

export const autoLogin = () => async (dispatch, getState) => {
  const { token } = getState((state) => state);
  if (token?.data?.token) {
    const { type } = await dispatch(fetchUser(token.data.token));
    if (type === fetchError.type) dispatch(userLogout());
  }
};
export default slice.reducer;
