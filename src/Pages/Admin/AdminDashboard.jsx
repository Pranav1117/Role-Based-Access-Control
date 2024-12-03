import React, { useState } from "react";
import List from "../../Components/Users/List";
import Roles from "../../Components/Roles";
import CreateUserForm from "../../Components/Users/CreateuserForm";

const AdminDashboard = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [activeSection, setActiveSection] = useState("users"); // State to manage active section

  

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white flex flex-col fixed top-0 left-0 h-[100vh] w-[20vw] mt-16">
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
          Admin Dashboard
        </h2>
        <nav className="flex flex-col flex-grow">
          <button
            className={`p-4 text-left ${
              activeSection === "users" ? "bg-gray-700" : ""
            } hover:bg-gray-700`}
            onClick={() => setActiveSection("users")}
          >
            Users
          </button>
          <button
            className={`p-4 text-left ${
              activeSection === "roles" ? "bg-gray-700" : ""
            } hover:bg-gray-700`}
            onClick={() => setActiveSection("roles")}
          >
            Roles
          </button>
          <button
            className={`p-4 text-left ${
              activeSection === "permissions" ? "bg-gray-700" : ""
            } hover:bg-gray-700`}
            onClick={() => setActiveSection("permissions")}
          >
            Permissions
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">  
        <div className="  ml-[20vw]">
          {activeSection === "users" && <List />}
          {activeSection === "roles" && <Roles />}
          {activeSection === "permissions" && <div>Permissions Section</div>}
        </div>

        {/* Add User Form Modal */}
       
      </div>
    </div>
  );
};

export default AdminDashboard;
