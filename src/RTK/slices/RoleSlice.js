import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [
    {
      id: 1,
      name: "Admin",
      permissions: [{ Read: true }, { Write: true }, { Delete: true }],
    },
    {
      id: 2,
      name: "Editor",
      permissions: [{ Read: true }, { Write: true }, { Delete: false }],
    },
    {
      id: 3,
      name: "Viewer",
      permissions: [{ Read: true }, { Write: false }, { Delete: false }],
    },
  ],
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    updateRole: (state, action) => {
      const { id, permissionKey } = action.payload;
      const role = state.roles.find((role) => role.id === id);

      if (role) {
        // Find the permission object and toggle its value
        role.permissions = role.permissions.map((permission) => {
          if (Object.keys(permission)[0] === permissionKey) {
            return { [permissionKey]: !permission[permissionKey] };
          }
          return permission;
        });
      }
    },
  },
});

export const { updateRole } = roleSlice.actions;
export default roleSlice.reducer;
