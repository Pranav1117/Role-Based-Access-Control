import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../RTK/slices/UserSlice";

const DeleteUserModal = ({ userId, userName, closeModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(userId));
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg w-[30vw] p-6">
        <h2 className="text-xl font-semibold mb-4 text-red-600">
          Confirm Deletion
        </h2>
        <p className="mb-4">
          Are you sure you want to delete <strong>{userName}</strong>? This
          action cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
