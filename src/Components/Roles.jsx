import React from "react";
import Permissions from "./Permissions";

// todo => list all roles
const Roles = () => {
  return (
    <div className="mt-6 w-[90%] mx-auto flex justify-between">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg w-[40%] text-center border border-white/20 shadow-lg">
        <div className="text-3xl text-black bg-gray-200 p-4">Roles</div>
        <div className="mt-3 py-4">
          <div className="text-2xl text-black cursor-pointer">Admin</div>
          <div className="text-2xl text-black cursor-pointer mt-2">Manager</div>
          <div className="text-2xl text-black cursor-pointer mt-2">
            Employee
          </div>
        </div>
      </div>

      <Permissions />
    </div>
  );
};

export default Roles;
