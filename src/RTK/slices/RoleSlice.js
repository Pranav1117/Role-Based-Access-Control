// src/slices/roleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [
    {
      id: 1,
      name: "Admin",
      permissions: [{ Read: true }, { Write: true }, { Delete: true }],
    },
    { id: 2, name: "Editor", permissions: [{ Read: true }, { Write: true }, { Delete: false }]},
    { id: 3, name: "Viewer", permissions: [{ Read: true }, { Write: false }, { Delete: false }]},
  ],
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state.roles.push(action.payload);
    },
    updateRole: (state, action) => {
      const index = state.roles.findIndex(
        (role) => role.id === action.payload.id
      );
      if (index !== -1) {
        state.roles[index] = action.payload;
      }
    },
    deleteRole: (state, action) => {
      state.roles = state.roles.filter((role) => role.id !== action.payload);
    },
  },
});

export const { addRole, updateRole, deleteRole } = roleSlice.actions;
export default roleSlice.reducer;
