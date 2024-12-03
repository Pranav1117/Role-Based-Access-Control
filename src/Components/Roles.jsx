import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateRole } from "../RTK/slices/RoleSlice";

const Roles = () => {
  const { roles } = useSelector((state) => state.roles);
  const dispatch = useDispatch();

  // State to track the role being edited
  const [editRoleId, setEditRoleId] = useState(null);

  // Handle toggle permission
  const handlePermissionChange = (roleId, permissionKey) => {
    dispatch(
      updateRole({
        id: roleId,
        permissionKey,
      })
    );
  };

  // Enable edit mode for a role
  const enableEditMode = (roleId) => {
    setEditRoleId(roleId);
  };

  // Exit edit mode
  const disableEditMode = () => {
    setEditRoleId(null);
  };

  return (
    <div className="p-6 mt-12">
      <h2 className="text-2xl font-semibold mb-6">Roles & Permissions</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mx-auto">
        <table className="w-full text-left border-collapse">
          <thead className="text-gray-700">
            <tr>
              <th className="pb-2 font-medium border-b border-black">Role</th>
              <th className="pb-2 font-medium border-b border-black">Read</th>
              <th className="pb-2 font-medium border-b border-black">Write</th>
              <th className="pb-2 font-medium border-b border-black">Delete</th>
              <th className="pb-2 font-medium border-b border-black">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="py-4 border-b text-gray-600">{role.name}</td>
                {role.permissions.map((permission, index) => {
                  const permissionKey = Object.keys(permission)[0];
                  const isChecked = permission[permissionKey];

                  return (
                    <td key={index} className="py-4 border-b">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        disabled={editRoleId !== role.id}
                        onChange={() =>
                          handlePermissionChange(role.id, permissionKey)
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </td>
                  );
                })}
                <td className="py-4 border-b">
                  {editRoleId === role.id ? (
                    <button
                      onClick={disableEditMode}
                      className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => enableEditMode(role.id)}
                      className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
