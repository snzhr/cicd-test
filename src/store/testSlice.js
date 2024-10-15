import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getAllUsers", async () => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/users");
  return data;
});

const initialState = {
  users: [],
};

export const testSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
    });
  }
});

export default testSlice.reducer;
