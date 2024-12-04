import React, { useState } from "react";
import { updateUser } from "../../RTK/slices/UserSlice";
import { useDispatch } from "react-redux";

const EditUserForm = ({ closeForm, name, role, status, id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id,
    name,
    role,
    status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: formData.id,  
      name: formData.name,
      role: formData.role,
      status: formData.status,
    };

    dispatch(updateUser(newUser));

    setFormData({
      name: "",
      role: "Admin",
      status: "Active",
    });
    closeForm();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md w-[40vw]">
      <h2 className="text-2xl font-semibold mb-4">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter user name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Update        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
