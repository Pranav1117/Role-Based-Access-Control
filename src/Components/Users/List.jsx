import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser, addUser } from "../../RTK/slices/UserSlice";
import CreateUserForm from "./CreateuserForm";
import EditUserForm from "./EditUserForm";
import DeleteUserModal from "../DeleteUserModal";

const List = () => {
  const users = useSelector((state) => state.users.users);
  const role = useSelector((state) => state.roles.roles);

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const closeAddForm = () => {
    setShowAddUserForm(false);
  };

  const closeEditForm = () => {
    setShowEditUserForm(false);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedUser(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="relative overflow-x-auto mx-auto rounded-lg backdrop-blur-lg bg-white/30 border border-white/20 mt-12 p-6 min-h-[90vh]">
      {/* Create New user Pop up Modal */}

      {showAddUserForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm h-[100vh] z-50">
          <div className="relative bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-800"
              onClick={closeAddForm}
            >
              ✕
            </button>
            <CreateUserForm closeForm={closeEditForm} />
          </div>
        </div>
      )}

      {!showAddUserForm && showEditUserForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm h-[100vh] z-50">
          <div className="relative bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-800"
              onClick={closeEditForm}
            >
              ✕
            </button>
            <EditUserForm
              closeForm={closeEditForm}
              name={selectedUser?.name}
              role={selectedUser?.role}
              status={selectedUser?.status}
              id={selectedUser?.id}
            />
          </div>
        </div>
      )}

      {showDeleteModal && (
        <DeleteUserModal
          userId={selectedUser.id}
          userName={selectedUser.name}
          closeModal={closeDeleteModal}
        />
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-3xl font-semibold`}>User List</h2>
        <div className="px-1 rounded text-white flex bg-gray-700 hover:bg-gray-800">
          <button
            className={` px-4 py-2 rounded-full`}
            onClick={() => setShowAddUserForm(true)}
          >
            Add Users
          </button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md mx-auto">
        <table className="w-full text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 border-b border-black">
                Name
              </th>
              <th scope="col" className="px-6 py-3 border-b border-black">
                Role
              </th>
              <th scope="col" className="px-6 py-3 border-b border-black">
                Status
              </th>
              <th scope="col" className="px-2 py-3 border-b border-black">
                Actions
              </th>
              <th
                scope="col"
                className="px-2 py-3 border-b text-right border-black"
              ></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {(() => {
                    const a = role.filter((roles, index) => user.role === roles.id);
                    return a[0]?.name;
                  })()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {user.status}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-gray-600">
                  <button
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => {
                      setSelectedUser(user);
                      setShowAddUserForm(false);
                      setShowEditUserForm(true);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-gray-600 ">
                  <button
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => openDeleteModal(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
