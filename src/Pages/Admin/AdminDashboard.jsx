import React, { useState } from "react";
import List from "../../Components/Users/List";
import Roles from "../../Components/Roles";
import CreateUserForm from "../../Components/Users/CreateuserForm";

const AdminDashboard = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const closeForm = () => {
    setShowAddUserForm(false);
  };

  return (
    <div>
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <h2 className="font-smibold text-3xl p-4">Admin Dashboard</h2>
        <div className="px-1 rounded-full flex  bg-buttonBackground">
          <button
            className={`${
              showAddUserForm ? "bg-activeButtonBg" : ""
            } px-4 py-2 rounded-full`}
            onClick={() => setShowAddUserForm(true)}
          >
            Add Users
          </button>
          {/* <button
            className={`${
              showUserList ? "" : "bg-activeButtonBg"
            } px-4 py-2 rounded-full`}
            onClick={() => setShowUserList(false)}
          >
            Role & Permissions
          </button> */}
        </div>
      </div>
      <List />
      
      <div
        className={`${
          showAddUserForm
            ? "fixed inset-0 flex items-center justify-center"
            : "hidden"
        } bg-black bg-opacity-10 backdrop-blur-sm z-50`}
      >
        <div className="relative rounded-lg shadow-lg">
          <button
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-800"
            onClick={() => setShowAddUserForm(false)}
          >
            ✕
          </button>
          <CreateUserForm closeForm={closeForm}/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
