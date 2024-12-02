import React from "react";
import Permissions from "./Permissions";

// todo => list all roles
const Roles = () => {
  return (
    <div>
      <div>
        <div>admin</div>
        <div className="flex items-center ">
          <div>
            <input type="checkbox" />
            <label>View</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Add</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Edit</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
