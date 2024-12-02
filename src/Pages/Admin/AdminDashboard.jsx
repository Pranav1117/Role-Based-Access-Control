import React, { useState } from 'react'
import List from '../../Components/Users/List'
import Roles from '../../Components/Roles'

const AdminDashboard = () => {
  const [showUserList, setShowUserList] = useState(true)

  return (
  <div>
    <div className='w-[90%] mx-auto flex items-center justify-between'>
      <h2 className='font-smibold text-3xl p-4'>Admin Dashboard</h2>
      <div className='px-1 rounded-full flex  bg-buttonBackground'>
        <button className={`${showUserList ? "bg-activeButtonBg" : ""  } px-4 py-2 rounded-full`} onClick={() => setShowUserList(true)}>Manage Users</button>
        <button className={`${showUserList ? "" : "bg-activeButtonBg"  } px-4 py-2 rounded-full`} onClick={() => setShowUserList(false)}>Role & Permissions</button>
      </div>
    </div>
    { showUserList ? <List/> : <Roles/> }
  </div>
  )
}

export default AdminDashboard