import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      // value fungsi bawaan redux
      name: "",
      age: 0,
      email: "",
    },
  },
  reducers: {
    login: (state, action) => {
      // state fungsi bawaan redux untuk memanggil value

      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
