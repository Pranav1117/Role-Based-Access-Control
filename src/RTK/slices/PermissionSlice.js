import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  permissions: ['Read', 'Write', 'Delete'],
};

const permissionSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    addPermission: (state, action) => {
      state.permissions.push(action.payload);
    },
    removePermission: (state, action) => {
      state.permissions = state.permissions.filter(permission => permission !== action.payload);
    },
  },
});

export const { addPermission, removePermission } = permissionSlice.actions;
export default permissionSlice.reducer;
