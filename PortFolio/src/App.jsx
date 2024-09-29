import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Card from './components/Card';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
  // {
  //   path:"/projects",
  //   element:<Home/>
  // }
]);

function App() {


  return (
   
    <div
     className='h-screen' style={{backgroundColor:"#141416"}}>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
