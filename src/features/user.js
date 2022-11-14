import { createSlice } from "@reduxjs/toolkit";

const initialValueState = {
  name: "",
  age: 0,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // value fungsi bawaan redux
    value: initialValueState,
  },
  reducers: {
    login: (state, action) => {
      // state fungsi bawaan redux untuk memanggil value
      state.value = action.payload;
    },

    logout: (state, action) => {
      state.value = initialValueState;
    },
  },
});

export const { login, logout } = userSlice.actions; // harus menggunakan huruf s action's'

export default userSlice.reducer;
