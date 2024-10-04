import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthSlice {
  token: string;
}

const initialState: AuthSlice = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export default authSlice.reducer;
