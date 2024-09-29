import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Home'

function Layout() {
  return (
    <div>
       
        <Navbar/>
        <Home/>
    </div>
  )
}

export default Layout
