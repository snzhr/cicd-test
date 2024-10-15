import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.score += action.payload;
    },
    reduceScore: (state, action) => {
        state.score -= action.payload;
      },
  },
});

export const { addScore, reduceScore } = userSlice.actions;
export default userSlice.reducer;
