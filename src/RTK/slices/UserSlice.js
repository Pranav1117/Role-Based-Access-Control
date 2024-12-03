import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: Date.now(),
      name: "harry",
      role: "admin",
      permission: ["read", "edit", "add"],
      status: "active",
    },
    {
      id: Date.now() + 1,
      name: "john",
      role: "manager",
      permission: ["read", "edit"],
      status: "active",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
