import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state) => {
      state.value = !state.value;
    },
    deleteTweet: (state) => {
      state.value = !state.value;
    },
  },
});

export const { addTweet, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
