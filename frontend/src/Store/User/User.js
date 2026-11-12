
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAuthServices as userAuth } from "../../Services/UserServices";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  isError: false,
  message: "",
  authInitialized: false,
};

// SIGNUP
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (value, { rejectWithValue }) => {
    try {
      const data = await userAuth.signup(value);

      if (!data.user) {
        return rejectWithValue("User data missing from server response");
      }

      return data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (value, { rejectWithValue }) => {
    try {
      const data = await userAuth.login(value);

      if (!data.user) {
        return rejectWithValue("User data missing from server response");
      }

      return data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// CHECK AUTH
export const checkAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const data = await userAuth.getCurrentUser();

      if (!data.user) {
        return rejectWithValue("User session not found");
      }

      return data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Session expired"
      );
    }
  }
);

// LOGOUT
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await userAuth.logout();
      return true;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Logout failed"
      );
    }
  }
);

const UserReducer = createSlice({
  name: "user",
  initialState,

  reducers: {
    clearAuthMessage: (state) => {
      state.message = "";
      state.isError = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
        state.isError = false;
        state.authInitialized = true;
        state.message = "Signup successful";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Signup failed";
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
        state.isError = false;
        state.authInitialized = true;
        state.message = "Login successful";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Login failed";
      })

      // CHECK AUTH
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
        state.isError = false;
        state.authInitialized = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuth = false;
        state.authInitialized = true;
      })

      // LOGOUT
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuth = false;
        state.isLoading = false;
        state.isError = false;
        state.authInitialized = true;
        state.message = "Logout successful";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Logout failed";
      });
  },
});

export const { clearAuthMessage } = UserReducer.actions;

export default UserReducer.reducer;
