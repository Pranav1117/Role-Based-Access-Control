import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-9 py-5 bg-white shadow-sm fixed w-[100vw] z-50'>
    {/* Logo div */}
      <div>Access Control</div>

      {/* navmenu div */}
      <div className='flex gap-4'>
        <NavLink>Home</NavLink>
        <NavLink to="/admin-dashboard">Dashboard</NavLink>
        <NavLink>About Us</NavLink>
    </div>
  </div>
  )
}

export default Navbar