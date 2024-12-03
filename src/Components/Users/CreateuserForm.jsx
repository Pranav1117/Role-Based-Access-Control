import React, { useState } from "react";
import { addUser } from "../../RTK/slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateUserForm = ({ closeForm }) => {
  const role = useSelector((state) => state.roles.roles);
console.log(role)
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    role: role[0].name,
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formData.name,
      role,
      status: formData.status,
    };

    dispatch(addUser(newUser));

    setFormData({
      name: "",
      role: role[0]?.name,
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

        {/* Role Field */}
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
            {role.map((roles, index) => {
             return <option value={roles.name}>{roles.name}</option>
            })}
          </select>
        </div>

        {/* Status Field */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
