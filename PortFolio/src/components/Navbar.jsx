import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' flex items-center justify-center '>
      <div className=' flex flex-col p-2 items-center justify-center gap-2 bg-gray-700 rounded-lg mt-8 mb-16' >
        <nav >
            <ul className=' flex gap-4 text-white p-2 font-myFont font-medium uppercase ' >
               <NavLink className={(isActive) => isActive ? "text-blue-400" : ""}>Home</NavLink>

               <NavLink to='/projects'
                className={(isActive) => isActive ? "text-blue-400" : ""}

                >Projects</NavLink>

               <NavLink className={(isActive) => isActive ? "text-blue-400" : ""}>About</NavLink>

               <NavLink className={(isActive) => isActive ? "text-blue-400" : ""}>Contacts</NavLink>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
