import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountApi from "../apis/accountApi";

export const signin = createAsyncThunk(
  "accounts/loginAccount",
  async (user, { rejectWithValue }) => {
    try {
      const response = await accountApi.signin(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  "accounts/registerAccount",
  async (user, { rejectWithValue }) => {
    try {
      const response = await accountApi.signup(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAccountProfile = createAsyncThunk(
  "accounts/getAccountProfile",
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const response = await accountApi.getAccountProfile();
      await dispatch(signin(user));
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const isUserLoggedIn = createAsyncThunk(
  "accounts/isUserLoggedIn",
  async (user, { rejectWithValue }) => {
    try {
      const response = await accountApi.isUserLoggedIn(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (user, { rejectWithValue, dispatch }) => {
    try {
      const response = await accountApi.updateUserInfo(user);
      await dispatch(isUserLoggedIn());
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sendOtpToEmail = createAsyncThunk(
  "accounts/sendOtpToEmail",
  async (user, { rejectWithValue }) => {
    try {
      const response = await accountApi.sendOtpToEmail(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "accounts/verifyOtp",
  async (user, { rejectWithValue }) => {
    try {
      const response = await accountApi.verifyOtp(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: {},
    loading: false,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    signout: (state, action) => {
      state.isAuthenticated = false;
      state.account = {};
      console.log(state.account);
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true;
    },
    [signin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      state.account = action.payload.data.account;
      console.log(state.account);
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.data.token);
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.account = action.payload.data.account;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.data.token);
    },
    [getAccountProfile.pending]: (state) => {
      state.loading = true;
    },
    [getAccountProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [getAccountProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.account = action.payload.data.Account;
    },
    // ,
    // [isUserLoggedIn.pending]: (state) => {
    //   state.loading = true;
    // },
    // [isUserLoggedIn.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.error;
    // },
    // [isUserLoggedIn.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload.data.user;
    //   state.isAuthenticated = true;
    // },
  },
});
export const { signout } = accountSlice.actions;
export default accountSlice.reducer;
