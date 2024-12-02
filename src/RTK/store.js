// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; 
import roleReducer from './slices/roleSlice'; 
import permissionReducer from './slices/permissionSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleReducer,
    permissions: permissionReducer,
  },
});
