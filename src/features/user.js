import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      // value fungsi bawaan redux
      name: "allbert",
      age: 12,
      email: "albert@gmail.com",
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
