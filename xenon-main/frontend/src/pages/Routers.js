import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ContactUs from './ContactUs'
import HomeBody from './HomeBody'

export default function Routers() {
  return (
    <div>
      
      <BrowserRouter>
       
       <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/home" element={<HomeBody />} />
           <Route path="/register" element={<Register />} />
           <Route path="/contact" element={<ContactUs />} />
        </Routes>
        </BrowserRouter>
        '
    </div>
  )
}
